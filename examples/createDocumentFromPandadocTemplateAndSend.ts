import * as pd_api from "pandadoc-node-client";

// place your apiKey here
const API_KEY = "YOUR_API_KEY";
// or uncomment this if you want to setup with oauth2
// const OAUTH2_KEY = "YOUR_OAUTH_KEY";
const MAX_RETRIES_COUNT = 5;
// you should have an `Full API Sample Document from PandaDoc Template`
// onboarding template in your workspace just place its ID here
const TEMPLATE_UUID = "YOUR_API_SAMPLE_TEMPLATE_ID";
// you should have a several onboarding CLIs in your workspace
// just place an ID of any
const CONTENT_LIBRARY_ITEM_ID = "YOUR_CLI_ID";

const pricingTables: Array<pd_api.PricingTableRequest> = [
  {
    name: "Pricing Table 1",
    options: {
      currency: "USD",
      discount: {
        isGlobal: true,
        type: "absolute",
        name: "Global Discount",
        value: 2.26,
      },
      taxFirst: {
        isGlobal: true,
        type: "percent",
        name: "Tax First",
        value: 2.26,
      },
      taxSecond: {
        isGlobal: true,
        type: "percent",
        name: "Tax Second",
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
              name: "Toy Panda",
              description: "Fluffy!",
              price: 10,
              cost: 8.5,
              qty: 3,
              sku: "toy_panda",
              discount: {
                value: 7.5,
                type: "percent",
              },
              taxFirst: {
                value: 7.5,
                type: "percent",
              },
              taxSecond: {
                value: 7.5,
                type: "percent",
              },
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

async function documentCreateFromPandadocTemplate(
  apiInstance: pd_api.DocumentsApi,
  requestObj: pd_api.DocumentCreateRequest
): Promise<pd_api.DocumentCreateResponse> {
  try {
    let response = await apiInstance.documentCreate({
      documentCreateRequest: requestObj,
    });
    console.log("Document was successfully uploaded: %o", response);
    return response;
  } catch (e) {
    if (e instanceof pd_api.ApiException) {
      console.log("Exception when calling DocumentsApi->documentCreate:");
    }
    throw e;
  }
}

async function documentSend(
  apiInstance: pd_api.DocumentsApi,
  document: pd_api.DocumentCreateResponse
): Promise<pd_api.DocumentSendResponse> {
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
  let retries = MAX_RETRIES_COUNT;
  let status = document.status;

  while (status === "document.uploaded" && retries > 0) {
    await new Promise((r) => setTimeout(r, 2000));
    try {
      let response = await apiInstance.documentStatus({
        id: String(document.id),
      });
      status = response.status;

      if (status === "document.uploaded") {
        console.log("The document is not created yet, will retry.");
      }
    } catch (e) {
      if (e instanceof pd_api.ApiException) {
        console.log(
          "Exception when calling DocumentsApi->documentStatus: %o",
          e
        );
        console.log(`${retries} retries remaining`);
      } else {
        throw e;
      }
    }
    retries--;
  }

  try {
    let response = await apiInstance.sendDocument({
      id: String(document.id),
      documentSendRequest: {
        silent: false,
        subject: "Sent via Node SDK",
        message: "This document was sent via Node SDK example",
      },
    });
    console.log("Document was successfully sent: %o", response);
    return response;
  } catch (e) {
    if (e instanceof pd_api.ApiException) {
      console.log("Exception when calling DocumentsApi->sendDocument:");
    }
    throw e;
  }
}

async function runExample() {
  let cfg = pd_api.createConfiguration({
    authMethods: { apiKey: `API-Key ${API_KEY}` }, // or authMethods: {oauth2: `Bearer ${OAUTH2_KEY}`}

    baseServer: new pd_api.ServerConfiguration(
      // Defining the host is optional and defaults to https://api.pandadoc.com
      "https://api.pandadoc.com",
      {}
    ),
  });
  const apiInstance = new pd_api.DocumentsApi(cfg);

  let createdDocument = await documentCreateFromPandadocTemplate(
    apiInstance,
    documentCreateRequest
  );
  await documentSend(apiInstance, createdDocument);
}

runExample().then(() =>
  console.log("Document was successfully created and sent to the recipients!")
);
