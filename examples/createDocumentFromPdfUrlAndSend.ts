import * as pd_api from "pandadoc-node-client";

// place your apiKey here
const API_KEY = "YOUR_API_KEY";
// or uncomment this if you want to setup with oauth2
// const OAUTH2_KEY = "YOUR_OAUTH_KEY";
const MAX_RETRIES_COUNT = 5;

const PDF_URL =
  "https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf";
const inlineObj: pd_api.InlineObject = {
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
  metadata: { "salesforce.opportunity_id": "123456", my_favorite_pet: "Panda" },
  parseFormFields: false,
};

async function documentCreateFromPdfUrl(
  apiInstance: pd_api.DocumentsApi,
  inlineObj: pd_api.InlineObject
): Promise<pd_api.DocumentCreateResponse> {
  try {
    let response = await apiInstance.documentCreate({
      editorVer: "ev2",
      inlineObject: inlineObj,
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
        console.log("Exception when calling DocumentsApi->documentStatus:", e);
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

  let createdDocument = await documentCreateFromPdfUrl(apiInstance, inlineObj);
  await documentSend(apiInstance, createdDocument);
}

runExample().then(() =>
  console.log("Document was successfully created and sent to the recipients!")
);
