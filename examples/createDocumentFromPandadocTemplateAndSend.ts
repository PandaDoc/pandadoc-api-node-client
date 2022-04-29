import * as pd_api from "pandadoc-node-client";

// place your apiKey here
const API_KEY = "YOUR_API_KEY";
// or uncomment this if you want to setup with oauth2
// const OAUTH2_KEY = "YOUR_OAUTH_KEY";
// you should have an `Full API Sample Document from PandaDoc Template`
// onboarding template in your workspace just place its ID here
const TEMPLATE_UUID = "YOUR_TEMPLATE_UUID";
// you should have a several onboarding CLIs in your workspace
// just place an ID of any
const CONTENT_LIBRARY_ITEM_ID = "YOUR_CONTENT_LIBRARY_ITEM_ID";
const MAX_CHECK_RETRIES = 5;

async function createDocumentFromPandadocTemplate(
  apiInstance: pd_api.DocumentsApi
): Promise<pd_api.DocumentCreateResponse> {
  const pricingTables: Array<pd_api.PricingTableRequest> = [
    {
      name: "Pricing Table 1",
      dataMerge: true,
      options: {
        Discount: {
          type: "absolute",
          name: "Global Discount",
          value: 2.26,
        },
        Tax: {
          type: "percent",
          name: "Tax First",
          value: 2.26,
        },
      },
      sections: [
        {
          title: "Sample Section",
          _default: true,
          multichoiceEnabled: false,
          rows: [
            {
              options: {
                qtyEditable: true,
                optionalSelected: true,
                optional: true,
              },
              data: {
                "Name": "Toy Panda",
                "Description": "Fluffy",
                "Price": 10,
                "Cost": 8.5,
                "QTY": 3,
                "SKU": "toy_panda",
                "Discount": {
                  "value": 10,
                  "type": "percent"
                },
                "Tax": {
                  "value": 10,
                  "type": "percent"
                }
              },
              customFields: {},
            },
          ],
        },
      ],
    },
  ];

  const documentCreateRequest: pd_api.DocumentCreateRequest = {
    name: "API Sample Document from PandaDoc Template",
    templateUuid: TEMPLATE_UUID,
    // specify a folder uuid if you want to document to be created
    // in specific folder otherwise it will be created in root directory
    //
    // folderUuid: "YOUR_FOLDER_ID",
    recipients: [
      {
        email: "josh@example.com",
        firstName: "Josh",
        lastName: "Ron",
        role: "user",
        signingOrder: 1,
      },
    ],
    tokens: [
      {
        name: "Favorite.Pet",
        value: "Panda",
      },
    ],
    fields: {},
    metadata: {},
    tags: ["created_via_api", "test_document"],
    images: [
      {
        urls: [
          "https://s3.amazonaws.com/pd-static-content/public-docs/pandadoc-panda-bear.png",
        ],
        name: "Image 1",
      },
    ],
    pricingTables: pricingTables,
    contentPlaceholders: [
      {
        blockId: "Content Placeholder 1",
        contentLibraryItems: [
          {
            id: CONTENT_LIBRARY_ITEM_ID,
            pricingTables: pricingTables,
          },
        ],
      },
    ],
    url: "https://s3.amazonaws.com/pd-static-content/public-docs/pandadoc-panda-bear.png",
    parseFormFields: false,
  };

  return await apiInstance.createDocument({
    documentCreateRequest: documentCreateRequest,
  });
}

async function ensureDocumentCreated(
  apiInstance: pd_api.DocumentsApi,
  document: pd_api.DocumentCreateResponse
): Promise<void> {
  /*
    Document creation is non-blocking (asynchronous) operation.

    With a successful request, you receive a response with the created
    document's ID and status document.uploaded.
    After processing completes on our servers, usually a few seconds,
    the document moves to the document.draft status.
    Please wait for the webhook call or check this document's
    status before proceeding.

    The change of status from document.uploaded to another status signifies
    the document is ready for further processing.
    Attempting to use a newly created document before PandaDoc servers
    process it will result in a '404 document not found' response.
     */
  // let status = document.status;

  let retries = 0;

  while (retries < MAX_CHECK_RETRIES) {
    await new Promise((r) => setTimeout(r, 2000));
    retries++;

    let response = await apiInstance.statusDocument({
      id: String(document.id),
    });
    if (response.status === "document.draft") {
      return;
    }
  }

  throw Error("Document was not sent");
}

async function documentSend(
  apiInstance: pd_api.DocumentsApi,
  document: pd_api.DocumentCreateResponse
): Promise<void> {
  await apiInstance.sendDocument({
    id: String(document.id),
    documentSendRequest: {
      silent: false,
      subject: "Sent via Node SDK",
      message: "This document was sent via Node SDK example",
    },
  });
}

async function runExample(): Promise<void> {
  let cfg = pd_api.createConfiguration({
    authMethods: { apiKey: `API-Key ${API_KEY}` }, // or authMethods: {oauth2: `Bearer ${OAUTH2_KEY}`}
    baseServer: new pd_api.ServerConfiguration(
      // Defining the host is optional and defaults to https://api.pandadoc.com
      "https://api.pandadoc.com",
      {}
    ),
  });
  const apiInstance = new pd_api.DocumentsApi(cfg);

  try {
    let createdDocument = await createDocumentFromPandadocTemplate(apiInstance);
    console.log("Document was successfully uploaded: %o", createdDocument);
    await ensureDocumentCreated(apiInstance, createdDocument);
    await documentSend(apiInstance, createdDocument);
    console.log(
      "Document was successfully created and sent to the recipients!"
    );
  } catch (e) {
    if (e instanceof pd_api.ApiException) {
      console.log(e.message);
    } else {
      throw e;
    }
  }
}

runExample();
