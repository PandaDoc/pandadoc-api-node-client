# The Official PandaDoc Node client SDK
PandaDoc SDK spans a broad range of functionality to help you build incredible documents automation experiences inside your product.

## Docs
- [Official public API documentation](https://developers.pandadoc.com/reference/about)

## Requirements
Node >= 12

## Installation
From package manager:
```sh
npm install pandadoc-node-client
```

Or directly from the repository:
```sh
npm install git+https://github.com/PandaDoc/pandadoc-api-node-client.git
```

## Getting Started

```typescript
import * as pd_api from "pandadoc-node-client";

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);

const apiInstance = new pd_api.TemplatesApi(configuration);

apiInstance.listTemplates({ deleted: false, tag: ["doe-inc-proposals"] }).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```

## Authorization
### apiKey
- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### oauth2
- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://app.pandadoc.com/oauth2/authorize
- **Scopes**:
 - **read+write**: default

## Examples
- [Create and send document from a template](https://github.com/PandaDoc/pandadoc-api-node-client/blob/main/examples/createDocumentFromPandadocTemplateAndSend.ts)
- [Create and send document from the pdf url](https://github.com/PandaDoc/pandadoc-api-node-client/blob/main/examples/createDocumentFromPdfUrlAndSend.ts)

### Documentation for API Endpoints
All URIs are relative to *https://api.pandadoc.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*APILogsApi* | [**detailsLog**](docs/APILogsApi.md#detailslog) | **GET** /public/v1/logs/{id} | Details API Log
*APILogsApi* | [**listLogs**](docs/APILogsApi.md#listlogs) | **GET** /public/v1/logs | List API Log
*ContactsApi* | [**createContact**](docs/ContactsApi.md#createcontact) | **POST** /public/v1/contacts | Create contact
*ContactsApi* | [**deleteContact**](docs/ContactsApi.md#deletecontact) | **DELETE** /public/v1/contacts/{id} | Delete contact by id
*ContactsApi* | [**detailsContact**](docs/ContactsApi.md#detailscontact) | **GET** /public/v1/contacts/{id} | Get contact details by id
*ContactsApi* | [**listContacts**](docs/ContactsApi.md#listcontacts) | **GET** /public/v1/contacts | List contacts
*ContactsApi* | [**updateContact**](docs/ContactsApi.md#updatecontact) | **PATCH** /public/v1/contacts/{id} | Update contact by id
*ContentLibraryItemsApi* | [**detailsContentLibraryItem**](docs/ContentLibraryItemsApi.md#detailscontentlibraryitem) | **GET** /public/v1/content-library-items/{id}/details | Details Content Library Item
*ContentLibraryItemsApi* | [**listContentLibraryItems**](docs/ContentLibraryItemsApi.md#listcontentlibraryitems) | **GET** /public/v1/content-library-items | List Content Library Item
*DocumentAttachmentsApi* | [**createDocumentAttachment**](docs/DocumentAttachmentsApi.md#createdocumentattachment) | **POST** /public/v1/documents/{id}/attachments | Document Attachment Create
*DocumentAttachmentsApi* | [**deleteDocumentAttachment**](docs/DocumentAttachmentsApi.md#deletedocumentattachment) | **DELETE** /public/v1/documents/{id}/attachments/{attachment_id} | Document Attachment Delete
*DocumentAttachmentsApi* | [**detailsDocumentAttachment**](docs/DocumentAttachmentsApi.md#detailsdocumentattachment) | **GET** /public/v1/documents/{id}/attachments/{attachment_id} | Document Attachment Details
*DocumentAttachmentsApi* | [**downloadDocumentAttachment**](docs/DocumentAttachmentsApi.md#downloaddocumentattachment) | **GET** /public/v1/documents/{id}/attachments/{attachment_id}/download | Document Attachment Download
*DocumentAttachmentsApi* | [**listDocumentAttachments**](docs/DocumentAttachmentsApi.md#listdocumentattachments) | **GET** /public/v1/documents/{id}/attachments | Document Attachment List
*DocumentRecipientsApi* | [**addDocumentRecipient**](docs/DocumentRecipientsApi.md#adddocumentrecipient) | **POST** /public/v1/documents/{id}/recipients | Add Document Recipient
*DocumentRecipientsApi* | [**deleteDocumentRecipient**](docs/DocumentRecipientsApi.md#deletedocumentrecipient) | **DELETE** /public/v1/documents/{id}/recipients/{recipient_id} | Delete Document Recipient
*DocumentRecipientsApi* | [**editDocumentRecipient**](docs/DocumentRecipientsApi.md#editdocumentrecipient) | **PATCH** /public/v1/documents/{id}/recipients/{recipient_id} | Edit Document Recipient
*DocumentRecipientsApi* | [**reassignDocumentRecipient**](docs/DocumentRecipientsApi.md#reassigndocumentrecipient) | **POST** /public/v1/documents/{id}/recipients/{recipient_id}/reassign | Reassign Document Recipient
*DocumentsApi* | [**changeDocumentStatus**](docs/DocumentsApi.md#changedocumentstatus) | **PATCH** /public/v1/documents/{id}/status | Document status change
*DocumentsApi* | [**createDocument**](docs/DocumentsApi.md#createdocument) | **POST** /public/v1/documents | Create document
*DocumentsApi* | [**createDocumentLink**](docs/DocumentsApi.md#createdocumentlink) | **POST** /public/v1/documents/{id}/session | Create a Document Link
*DocumentsApi* | [**createLinkedObject**](docs/DocumentsApi.md#createlinkedobject) | **POST** /public/v1/documents/{id}/linked-objects | Create Linked Object
*DocumentsApi* | [**deleteDocument**](docs/DocumentsApi.md#deletedocument) | **DELETE** /public/v1/documents/{id} | Delete document by id
*DocumentsApi* | [**deleteLinkedObject**](docs/DocumentsApi.md#deletelinkedobject) | **DELETE** /public/v1/documents/{id}/linked-objects/{linked_object_id} | Delete Linked Object
*DocumentsApi* | [**detailsDocument**](docs/DocumentsApi.md#detailsdocument) | **GET** /public/v1/documents/{id}/details | Document details
*DocumentsApi* | [**documentMoveToFolder**](docs/DocumentsApi.md#documentmovetofolder) | **POST** /public/v1/documents/{id}/move-to-folder/{folder_id} | Document move to folder
*DocumentsApi* | [**downloadDocument**](docs/DocumentsApi.md#downloaddocument) | **GET** /public/v1/documents/{id}/download | Document download
*DocumentsApi* | [**downloadProtectedDocument**](docs/DocumentsApi.md#downloadprotecteddocument) | **GET** /public/v1/documents/{id}/download-protected | Download document protected
*DocumentsApi* | [**listDocuments**](docs/DocumentsApi.md#listdocuments) | **GET** /public/v1/documents | List documents
*DocumentsApi* | [**listLinkedObjects**](docs/DocumentsApi.md#listlinkedobjects) | **GET** /public/v1/documents/{id}/linked-objects | List Linked Objects
*DocumentsApi* | [**sendDocument**](docs/DocumentsApi.md#senddocument) | **POST** /public/v1/documents/{id}/send | Send Document
*DocumentsApi* | [**statusDocument**](docs/DocumentsApi.md#statusdocument) | **GET** /public/v1/documents/{id} | Document status
*DocumentsApi* | [**transferAllDocumentsOwnership**](docs/DocumentsApi.md#transferalldocumentsownership) | **PATCH** /public/v1/documents/ownership | Transfer all documents ownership
*DocumentsApi* | [**transferDocumentOwnership**](docs/DocumentsApi.md#transferdocumentownership) | **PATCH** /public/v1/documents/{id}/ownership | Update document ownership
*DocumentsApi* | [**updateDocument**](docs/DocumentsApi.md#updatedocument) | **PATCH** /public/v1/documents/{id} | Update Document only in the draft status
*FoldersAPIApi* | [**createDocumentFolder**](docs/FoldersAPIApi.md#createdocumentfolder) | **POST** /public/v1/documents/folders | Create Documents Folder
*FoldersAPIApi* | [**createTemplateFolder**](docs/FoldersAPIApi.md#createtemplatefolder) | **POST** /public/v1/templates/folders | Create Templates Folder
*FoldersAPIApi* | [**listDocumentFolders**](docs/FoldersAPIApi.md#listdocumentfolders) | **GET** /public/v1/documents/folders | List Documents Folders
*FoldersAPIApi* | [**listTemplateFolders**](docs/FoldersAPIApi.md#listtemplatefolders) | **GET** /public/v1/templates/folders | List Templates Folders
*FoldersAPIApi* | [**renameDocumentFolder**](docs/FoldersAPIApi.md#renamedocumentfolder) | **PUT** /public/v1/documents/folders/{id} | Rename Documents Folder
*FoldersAPIApi* | [**renameTemplateFolder**](docs/FoldersAPIApi.md#renametemplatefolder) | **PUT** /public/v1/templates/folders/{id} | Rename Templates Folder
*FormsApi* | [**listForm**](docs/FormsApi.md#listform) | **GET** /public/v1/forms | Forms
*MembersApi* | [**detailsCurrentMember**](docs/MembersApi.md#detailscurrentmember) | **GET** /public/v1/members/current | Current member details
*MembersApi* | [**detailsMember**](docs/MembersApi.md#detailsmember) | **GET** /public/v1/members/{id} | Member details
*MembersApi* | [**listMembers**](docs/MembersApi.md#listmembers) | **GET** /public/v1/members | List members
*OAuth20AuthenticationApi* | [**accessToken**](docs/OAuth20AuthenticationApi.md#accesstoken) | **POST** /oauth2/access_token | Create/Refresh Access Token
*TemplatesApi* | [**deleteTemplate**](docs/TemplatesApi.md#deletetemplate) | **DELETE** /public/v1/templates/{id} | Delete Template
*TemplatesApi* | [**detailsTemplate**](docs/TemplatesApi.md#detailstemplate) | **GET** /public/v1/templates/{id}/details | Details Template
*TemplatesApi* | [**listTemplates**](docs/TemplatesApi.md#listtemplates) | **GET** /public/v1/templates | List Templates
*WebhookEventsApi* | [**detailsWebhookEvent**](docs/WebhookEventsApi.md#detailswebhookevent) | **GET** /public/v1/webhook-events/{id} | Get webhook event by uuid
*WebhookEventsApi* | [**listWebhookEvent**](docs/WebhookEventsApi.md#listwebhookevent) | **GET** /public/v1/webhook-events | Get webhook event page
*WebhookSubscriptionsApi* | [**createWebhookSubscription**](docs/WebhookSubscriptionsApi.md#createwebhooksubscription) | **POST** /public/v1/webhook-subscriptions | Create webhook subscription
*WebhookSubscriptionsApi* | [**deleteWebhookSubscription**](docs/WebhookSubscriptionsApi.md#deletewebhooksubscription) | **DELETE** /public/v1/webhook-subscriptions/{id} | Delete webhook subscription
*WebhookSubscriptionsApi* | [**detailsWebhookSubscription**](docs/WebhookSubscriptionsApi.md#detailswebhooksubscription) | **GET** /public/v1/webhook-subscriptions/{id} | Get webhook subscription by uuid
*WebhookSubscriptionsApi* | [**listWebhookSubscriptions**](docs/WebhookSubscriptionsApi.md#listwebhooksubscriptions) | **GET** /public/v1/webhook-subscriptions | Get all webhook subscriptions
*WebhookSubscriptionsApi* | [**updateWebhookSubscription**](docs/WebhookSubscriptionsApi.md#updatewebhooksubscription) | **PATCH** /public/v1/webhook-subscriptions/{id} | Update webhook subscription
*WebhookSubscriptionsApi* | [**updateWebhookSubscriptionSharedKey**](docs/WebhookSubscriptionsApi.md#updatewebhooksubscriptionsharedkey) | **PATCH** /public/v1/webhook-subscriptions/{id}/shared-key | Regenerate webhook subscription shared key


## License
SDK is licensed under the [MIT License](https://github.com/PandaDoc/pandadoc-api-node-client/blob/main/LICENSE).