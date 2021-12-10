import * as pd_api from "pandadoc-node-client";

// place your apiKey here
const API_KEY = "YOUR_API_KEY";
// or uncomment this if you want to setup with oauth2
// const OAUTH2_KEY = "YOUR_OAUTH_KEY";
const MAX_CHECK_RETRIES = 5;
const PDF_URL =
  "https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf";

async function createDocumentFromPdfUrl(
  apiInstance: pd_api.DocumentsApi
): Promise<pd_api.DocumentCreateResponse> {
  const documentCreateRequest: pd_api.DocumentCreateRequest = {
    name: "Sample Document from PDF with Field Tags",
    url: PDF_URL,
    tags: ["tag_1", "tag_2"],
    recipients: [
      {
        email: "josh@example.com",
        firstName: "Josh",
        lastName: "Ron",
        role: "user",
        signingOrder: 1,
      },
      {
        email: "john@example.com",
        firstName: "John",
        lastName: "Doe",
        signingOrder: 2,
      },
    ],
    fields: {
      name: { value: "John", role: "user" },
      like: { value: true, role: "user" },
    },
    metadata: {
      "salesforce.opportunity_id": "123456",
      my_favorite_pet: "Panda",
    },
    parseFormFields: false,
  };

  return await apiInstance.documentCreate({
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

  let retries = 0;

  while (retries < MAX_CHECK_RETRIES) {
    await new Promise((r) => setTimeout(r, 2000));
    retries++;

    let response = await apiInstance.documentStatus({
      id: String(document.id),
    });
    if (response.status === "document.draft") {
      return;
    }
  }

  throw Error("Document was not sent");
}

async function sendDocument(
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
    let createdDocument = await createDocumentFromPdfUrl(apiInstance);
    console.log("Document was successfully uploaded: %o", createdDocument);
    await ensureDocumentCreated(apiInstance, createdDocument);
    await sendDocument(apiInstance, createdDocument);
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
