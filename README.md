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
*APILogsApi* | [**detailsLog**](docs/APILogsApi.md#detailslog) | **GET** /public/v1/logs/{id} | API Log Details
*APILogsApi* | [**detailsLogV2**](docs/APILogsApi.md#detailslogv2) | **GET** /public/v2/logs/{id} | API Log Details
*APILogsApi* | [**listLogs**](docs/APILogsApi.md#listlogs) | **GET** /public/v1/logs | List API Log
*APILogsApi* | [**listLogsV2**](docs/APILogsApi.md#listlogsv2) | **GET** /public/v2/logs | List API Log
*CommunicationPreferencesApi* | [**listRecentSmsOptOuts**](docs/CommunicationPreferencesApi.md#listrecentsmsoptouts) | **GET** /public/v1/sms-opt-outs | Recent SMS Opt-out
*ContactsApi* | [**createContact**](docs/ContactsApi.md#createcontact) | **POST** /public/v1/contacts | Create contact
*ContactsApi* | [**deleteContact**](docs/ContactsApi.md#deletecontact) | **DELETE** /public/v1/contacts/{id} | Delete Contact
*ContactsApi* | [**detailsContact**](docs/ContactsApi.md#detailscontact) | **GET** /public/v1/contacts/{id} | Contact Details
*ContactsApi* | [**listContacts**](docs/ContactsApi.md#listcontacts) | **GET** /public/v1/contacts | List contacts
*ContactsApi* | [**updateContact**](docs/ContactsApi.md#updatecontact) | **PATCH** /public/v1/contacts/{id} | Update Contact
*ContentLibraryItemsApi* | [**createContentLibraryItem**](docs/ContentLibraryItemsApi.md#createcontentlibraryitem) | **POST** /public/v1/content-library-items | Create Content Library Item
*ContentLibraryItemsApi* | [**createContentLibraryItemFromUpload**](docs/ContentLibraryItemsApi.md#createcontentlibraryitemfromupload) | **POST** /public/v1/content-library-items?upload | Create Content Library Item from File Upload
*ContentLibraryItemsApi* | [**detailsContentLibraryItem**](docs/ContentLibraryItemsApi.md#detailscontentlibraryitem) | **GET** /public/v1/content-library-items/{id}/details | Content Library Item Details
*ContentLibraryItemsApi* | [**listContentLibraryItems**](docs/ContentLibraryItemsApi.md#listcontentlibraryitems) | **GET** /public/v1/content-library-items | List Content Library Item
*ContentLibraryItemsApi* | [**statusContentLibraryItem**](docs/ContentLibraryItemsApi.md#statuscontentlibraryitem) | **GET** /public/v1/content-library-items/{id} | Content Library Item Status
*DocumentAttachmentsApi* | [**createDocumentAttachment**](docs/DocumentAttachmentsApi.md#createdocumentattachment) | **POST** /public/v1/documents/{id}/attachments | Create Document Attachment
*DocumentAttachmentsApi* | [**createDocumentAttachmentFromFileUpload**](docs/DocumentAttachmentsApi.md#createdocumentattachmentfromfileupload) | **POST** /public/v1/documents/{id}/attachments?upload | Create Document Attachment From Upload
*DocumentAttachmentsApi* | [**deleteDocumentAttachment**](docs/DocumentAttachmentsApi.md#deletedocumentattachment) | **DELETE** /public/v1/documents/{id}/attachments/{attachment_id} | Delete Document Attachment
*DocumentAttachmentsApi* | [**detailsDocumentAttachment**](docs/DocumentAttachmentsApi.md#detailsdocumentattachment) | **GET** /public/v1/documents/{id}/attachments/{attachment_id} | Document Attachment Details
*DocumentAttachmentsApi* | [**downloadDocumentAttachment**](docs/DocumentAttachmentsApi.md#downloaddocumentattachment) | **GET** /public/v1/documents/{id}/attachments/{attachment_id}/download | Download Document Attachment
*DocumentAttachmentsApi* | [**listDocumentAttachments**](docs/DocumentAttachmentsApi.md#listdocumentattachments) | **GET** /public/v1/documents/{id}/attachments | List Document Attachments
*DocumentAuditTrailApi* | [**listDocumentAuditTrail**](docs/DocumentAuditTrailApi.md#listdocumentaudittrail) | **GET** /public/v2/documents/{document_id}/audit-trail | List Document Audit Trail
*DocumentFieldsApi* | [**createDocumentFields**](docs/DocumentFieldsApi.md#createdocumentfields) | **POST** /public/v1/documents/{id}/fields | Create Document Fields
*DocumentFieldsApi* | [**listDocumentFields**](docs/DocumentFieldsApi.md#listdocumentfields) | **GET** /public/v1/documents/{id}/fields | List Document Fields
*DocumentLinkToCRMApi* | [**createLinkedObject**](docs/DocumentLinkToCRMApi.md#createlinkedobject) | **POST** /public/v1/documents/{id}/linked-objects | Create Linked Object
*DocumentLinkToCRMApi* | [**deleteLinkedObject**](docs/DocumentLinkToCRMApi.md#deletelinkedobject) | **DELETE** /public/v1/documents/{id}/linked-objects/{linked_object_id} | Delete Linked Object
*DocumentLinkToCRMApi* | [**listDocumentsByLinkedObject**](docs/DocumentLinkToCRMApi.md#listdocumentsbylinkedobject) | **GET** /public/v1/documents/linked-objects | List Documents by Linked Object
*DocumentLinkToCRMApi* | [**listLinkedObjects**](docs/DocumentLinkToCRMApi.md#listlinkedobjects) | **GET** /public/v1/documents/{id}/linked-objects | List Linked Objects
*DocumentRecipientsApi* | [**addDocumentRecipient**](docs/DocumentRecipientsApi.md#adddocumentrecipient) | **POST** /public/v1/documents/{id}/recipients | Add Document Recipient
*DocumentRecipientsApi* | [**deleteDocumentRecipient**](docs/DocumentRecipientsApi.md#deletedocumentrecipient) | **DELETE** /public/v1/documents/{id}/recipients/{recipient_id} | Delete Document Recipient
*DocumentRecipientsApi* | [**editDocumentRecipient**](docs/DocumentRecipientsApi.md#editdocumentrecipient) | **PATCH** /public/v1/documents/{id}/recipients/recipient/{recipient_id} | Update Document Recipient
*DocumentRecipientsApi* | [**reassignDocumentRecipient**](docs/DocumentRecipientsApi.md#reassigndocumentrecipient) | **POST** /public/v1/documents/{id}/recipients/{recipient_id}/reassign | Change Signer (Reassign Document Recipient)
*DocumentRemindersApi* | [**createManualReminder**](docs/DocumentRemindersApi.md#createmanualreminder) | **POST** /public/v1/documents/{document_id}/send-reminder | Send Manual Reminder
*DocumentRemindersApi* | [**getDocumentAutoReminderSettings**](docs/DocumentRemindersApi.md#getdocumentautoremindersettings) | **GET** /public/v1/documents/{document_id}/auto-reminders | Document Auto Reminder Settings
*DocumentRemindersApi* | [**statusDocumentAutoReminder**](docs/DocumentRemindersApi.md#statusdocumentautoreminder) | **GET** /public/v1/documents/{document_id}/auto-reminders/status | Document Auto Reminder Status
*DocumentRemindersApi* | [**updateDocumentAutoReminderSettings**](docs/DocumentRemindersApi.md#updatedocumentautoremindersettings) | **PATCH** /public/v1/documents/{document_id}/auto-reminders | Update Document Auto Reminder Settings
*DocumentSectionsBundlesApi* | [**deleteSection**](docs/DocumentSectionsBundlesApi.md#deletesection) | **DELETE** /public/v1/documents/{document_id}/sections/{section_id} | Delete Document Section
*DocumentSectionsBundlesApi* | [**listSections**](docs/DocumentSectionsBundlesApi.md#listsections) | **GET** /public/v1/documents/{document_id}/sections | List Document Sections
*DocumentSectionsBundlesApi* | [**sectionDetails**](docs/DocumentSectionsBundlesApi.md#sectiondetails) | **GET** /public/v1/documents/{document_id}/sections/uploads/{upload_id} | Document Section Upload Status
*DocumentSectionsBundlesApi* | [**sectionInfo**](docs/DocumentSectionsBundlesApi.md#sectioninfo) | **GET** /public/v1/documents/{document_id}/sections/{section_id} | Document Section Details
*DocumentSectionsBundlesApi* | [**uploadSection**](docs/DocumentSectionsBundlesApi.md#uploadsection) | **POST** /public/v1/documents/{document_id}/sections/uploads | Create Document Section
*DocumentSectionsBundlesApi* | [**uploadSectionWithUpload**](docs/DocumentSectionsBundlesApi.md#uploadsectionwithupload) | **POST** /public/v1/documents/{document_id}/sections/uploads?upload | Create Document Section from File Upload
*DocumentSettingsApi* | [**documentSettingsGet**](docs/DocumentSettingsApi.md#documentsettingsget) | **GET** /public/v2/documents/{document_id}/settings | Get document settings
*DocumentSettingsApi* | [**documentSettingsUpdate**](docs/DocumentSettingsApi.md#documentsettingsupdate) | **PATCH** /public/v2/documents/{document_id}/settings | Update document settings
*DocumentsApi* | [**appendContentLibraryItemToDocument**](docs/DocumentsApi.md#appendcontentlibraryitemtodocument) | **POST** /public/v1/documents/{id}/append-content-library-item | Append Content Library Item to a document
*DocumentsApi* | [**changeDocumentStatus**](docs/DocumentsApi.md#changedocumentstatus) | **PATCH** /public/v1/documents/{id}/status | Document Status Change
*DocumentsApi* | [**changeDocumentStatusWithUpload**](docs/DocumentsApi.md#changedocumentstatuswithupload) | **PATCH** /public/v1/documents/{id}/status?upload | Document Status Change with Upload
*DocumentsApi* | [**createDocument**](docs/DocumentsApi.md#createdocument) | **POST** /public/v1/documents | Create Document
*DocumentsApi* | [**createDocumentEditingSession**](docs/DocumentsApi.md#createdocumenteditingsession) | **POST** /public/v1/documents/{id}/editing-sessions | Create Document Editing Session 
*DocumentsApi* | [**createDocumentFromUpload**](docs/DocumentsApi.md#createdocumentfromupload) | **POST** /public/v1/documents?upload | Create Document from File Upload
*DocumentsApi* | [**createDocumentLink**](docs/DocumentsApi.md#createdocumentlink) | **POST** /public/v1/documents/{id}/session | Create Document Session for Embedded Sign
*DocumentsApi* | [**createExportDocxTask**](docs/DocumentsApi.md#createexportdocxtask) | **POST** /public/beta/documents/{document_id}/docx-export-tasks | [Beta] Create DOCX Export Task
*DocumentsApi* | [**deleteDocument**](docs/DocumentsApi.md#deletedocument) | **DELETE** /public/v1/documents/{id} | Delete Document
*DocumentsApi* | [**detailsDocument**](docs/DocumentsApi.md#detailsdocument) | **GET** /public/v1/documents/{id}/details | Document Details
*DocumentsApi* | [**documentESignDisclosure**](docs/DocumentsApi.md#documentesigndisclosure) | **GET** /public/v1/documents/{document_id}/esign-disclosure | Document eSign disclosure
*DocumentsApi* | [**documentMoveToFolder**](docs/DocumentsApi.md#documentmovetofolder) | **POST** /public/v1/documents/{id}/move-to-folder/{folder_id} | Document move to folder
*DocumentsApi* | [**documentRevertToDraft**](docs/DocumentsApi.md#documentreverttodraft) | **POST** /public/v1/documents/{id}/draft | Move Document to Draft
*DocumentsApi* | [**downloadDocument**](docs/DocumentsApi.md#downloaddocument) | **GET** /public/v1/documents/{id}/download | Document Download
*DocumentsApi* | [**downloadProtectedDocument**](docs/DocumentsApi.md#downloadprotecteddocument) | **GET** /public/v1/documents/{id}/download-protected | Download Completed Document
*DocumentsApi* | [**getDocxExportTask**](docs/DocumentsApi.md#getdocxexporttask) | **GET** /public/beta/documents/{document_id}/docx-export-tasks/{task_id} | [Beta] DOCX Export Task
*DocumentsApi* | [**listDocuments**](docs/DocumentsApi.md#listdocuments) | **GET** /public/v1/documents | List Documents
*DocumentsApi* | [**sendDocument**](docs/DocumentsApi.md#senddocument) | **POST** /public/v1/documents/{id}/send | Send Document
*DocumentsApi* | [**statusDocument**](docs/DocumentsApi.md#statusdocument) | **GET** /public/v1/documents/{id} | Document Status
*DocumentsApi* | [**transferAllDocumentsOwnership**](docs/DocumentsApi.md#transferalldocumentsownership) | **PATCH** /public/v1/documents/ownership | Transfer all documents ownership
*DocumentsApi* | [**transferDocumentOwnership**](docs/DocumentsApi.md#transferdocumentownership) | **PATCH** /public/v1/documents/{id}/ownership | Update document ownership
*DocumentsApi* | [**updateDocument**](docs/DocumentsApi.md#updatedocument) | **PATCH** /public/v1/documents/{id} | Update Document
*FoldersApi* | [**createDocumentFolder**](docs/FoldersApi.md#createdocumentfolder) | **POST** /public/v1/documents/folders | Create Documents Folder
*FoldersApi* | [**createTemplateFolder**](docs/FoldersApi.md#createtemplatefolder) | **POST** /public/v1/templates/folders | Create Templates Folder
*FoldersApi* | [**listDocumentFolders**](docs/FoldersApi.md#listdocumentfolders) | **GET** /public/v1/documents/folders | List Documents Folders
*FoldersApi* | [**listTemplateFolders**](docs/FoldersApi.md#listtemplatefolders) | **GET** /public/v1/templates/folders | List Templates Folders
*FoldersApi* | [**renameDocumentFolder**](docs/FoldersApi.md#renamedocumentfolder) | **PUT** /public/v1/documents/folders/{id} | Rename Documents Folder
*FoldersApi* | [**renameTemplateFolder**](docs/FoldersApi.md#renametemplatefolder) | **PUT** /public/v1/templates/folders/{id} | Rename Templates Folder
*FormsApi* | [**listForm**](docs/FormsApi.md#listform) | **GET** /public/v1/forms | List Forms
*MembersApi* | [**createMemberToken**](docs/MembersApi.md#createmembertoken) | **POST** /public/v1/members/{member_id}/token | Create Member Token
*MembersApi* | [**detailsCurrentMember**](docs/MembersApi.md#detailscurrentmember) | **GET** /public/v1/members/current | Current Member Details
*MembersApi* | [**detailsMember**](docs/MembersApi.md#detailsmember) | **GET** /public/v1/members/{id} | Member Details
*MembersApi* | [**listMembers**](docs/MembersApi.md#listmembers) | **GET** /public/v1/members | List Members
*NotaryApi* | [**createNotarizationRequest**](docs/NotaryApi.md#createnotarizationrequest) | **POST** /public/v2/notary/notarization-requests | Create Notarization Request
*NotaryApi* | [**deleteNotarizationRequest**](docs/NotaryApi.md#deletenotarizationrequest) | **DELETE** /public/v2/notary/notarization-requests/{session_request_id} | Delete Notarization Request
*NotaryApi* | [**listNotaries**](docs/NotaryApi.md#listnotaries) | **GET** /public/v2/notary/notaries | List Notaries
*NotaryApi* | [**notarizationRequestDetails**](docs/NotaryApi.md#notarizationrequestdetails) | **GET** /public/v2/notary/notarization-requests/{session_request_id} | Notarization Request Details
*OAuth20AuthenticationApi* | [**accessToken**](docs/OAuth20AuthenticationApi.md#accesstoken) | **POST** /oauth2/access_token | Create/Refresh Access Token
*ProductCatalogApi* | [**createCatalogItem**](docs/ProductCatalogApi.md#createcatalogitem) | **POST** /public/v2/product-catalog/items | Create Catalog Item
*ProductCatalogApi* | [**deleteCatalogItem**](docs/ProductCatalogApi.md#deletecatalogitem) | **DELETE** /public/v2/product-catalog/items/{item_uuid} | Delete Catalog Item
*ProductCatalogApi* | [**getCatalogItem**](docs/ProductCatalogApi.md#getcatalogitem) | **GET** /public/v2/product-catalog/items/{item_uuid} | Catalog Item Details
*ProductCatalogApi* | [**searchCatalogItems**](docs/ProductCatalogApi.md#searchcatalogitems) | **GET** /public/v2/product-catalog/items/search | List Catalog Items Search
*ProductCatalogApi* | [**updateCatalogItem**](docs/ProductCatalogApi.md#updatecatalogitem) | **PATCH** /public/v2/product-catalog/items/{item_uuid} | Update Catalog Item
*QuotesApi* | [**quoteUpdate**](docs/QuotesApi.md#quoteupdate) | **PUT** /public/v1/documents/{document_id}/quotes/{quote_id} | Quote update
*TemplateSettingsApi* | [**templateSettingsGet**](docs/TemplateSettingsApi.md#templatesettingsget) | **GET** /public/v2/templates/{template_id}/settings | Get template settings
*TemplateSettingsApi* | [**templateSettingsUpdate**](docs/TemplateSettingsApi.md#templatesettingsupdate) | **PATCH** /public/v2/templates/{template_id}/settings | Update template settings
*TemplatesApi* | [**createTemplate**](docs/TemplatesApi.md#createtemplate) | **POST** /public/v1/templates | Create Template
*TemplatesApi* | [**createTemplateEditingSession**](docs/TemplatesApi.md#createtemplateeditingsession) | **POST** /public/v1/templates/{id}/editing-sessions | Create Template Editing Session 
*TemplatesApi* | [**createTemplateWithUpload**](docs/TemplatesApi.md#createtemplatewithupload) | **POST** /public/v1/templates?upload | Create Template from File Upload
*TemplatesApi* | [**deleteTemplate**](docs/TemplatesApi.md#deletetemplate) | **DELETE** /public/v1/templates/{id} | Delete Template
*TemplatesApi* | [**detailsTemplate**](docs/TemplatesApi.md#detailstemplate) | **GET** /public/v1/templates/{id}/details | Template Details
*TemplatesApi* | [**listTemplates**](docs/TemplatesApi.md#listtemplates) | **GET** /public/v1/templates | List Templates
*TemplatesApi* | [**statusTemplate**](docs/TemplatesApi.md#statustemplate) | **GET** /public/v1/templates/{id} | Template Status
*TemplatesApi* | [**updateTemplate**](docs/TemplatesApi.md#updatetemplate) | **PATCH** /public/v1/templates/{id} | Template Update
*UserAndWorkspaceManagementApi* | [**addMember**](docs/UserAndWorkspaceManagementApi.md#addmember) | **POST** /public/v1/workspaces/{workspace_id}/members | Add Member to Workspace
*UserAndWorkspaceManagementApi* | [**createApiKey**](docs/UserAndWorkspaceManagementApi.md#createapikey) | **POST** /public/v1/workspaces/{workspace_id}/api-keys | Create API Key
*UserAndWorkspaceManagementApi* | [**createUser**](docs/UserAndWorkspaceManagementApi.md#createuser) | **POST** /public/v1/users | Create User
*UserAndWorkspaceManagementApi* | [**createWorkspace**](docs/UserAndWorkspaceManagementApi.md#createworkspace) | **POST** /public/v1/workspaces | Create Workspace
*UserAndWorkspaceManagementApi* | [**deactivateWorkspace**](docs/UserAndWorkspaceManagementApi.md#deactivateworkspace) | **POST** /public/v1/workspaces/{workspace_id}/deactivate | Deactivate Workspace
*UserAndWorkspaceManagementApi* | [**getWorkspacesList**](docs/UserAndWorkspaceManagementApi.md#getworkspaceslist) | **GET** /public/v1/workspaces | List Workspaces
*UserAndWorkspaceManagementApi* | [**listUsers**](docs/UserAndWorkspaceManagementApi.md#listusers) | **GET** /public/v1/users | List Users
*UserAndWorkspaceManagementApi* | [**removeMember**](docs/UserAndWorkspaceManagementApi.md#removemember) | **DELETE** /public/v1/workspaces/{workspace_id}/members/{member_id} | Remove Member from Workspace
*WebhookEventsApi* | [**detailsWebhookEvent**](docs/WebhookEventsApi.md#detailswebhookevent) | **GET** /public/v1/webhook-events/{id} | Webhook Event Details
*WebhookEventsApi* | [**listWebhookEvent**](docs/WebhookEventsApi.md#listwebhookevent) | **GET** /public/v1/webhook-events | List Webhook Events
*WebhookSubscriptionsApi* | [**createWebhookSubscription**](docs/WebhookSubscriptionsApi.md#createwebhooksubscription) | **POST** /public/v1/webhook-subscriptions | Create Webhook Subscription
*WebhookSubscriptionsApi* | [**deleteWebhookSubscription**](docs/WebhookSubscriptionsApi.md#deletewebhooksubscription) | **DELETE** /public/v1/webhook-subscriptions/{id} | Delete Webhook Subscription
*WebhookSubscriptionsApi* | [**detailsWebhookSubscription**](docs/WebhookSubscriptionsApi.md#detailswebhooksubscription) | **GET** /public/v1/webhook-subscriptions/{id} | Webhook Subscription Details
*WebhookSubscriptionsApi* | [**listWebhookSubscriptions**](docs/WebhookSubscriptionsApi.md#listwebhooksubscriptions) | **GET** /public/v1/webhook-subscriptions | List Webhook Subscriptions
*WebhookSubscriptionsApi* | [**updateWebhookSubscription**](docs/WebhookSubscriptionsApi.md#updatewebhooksubscription) | **PATCH** /public/v1/webhook-subscriptions/{id} | Update Webhook Subscription
*WebhookSubscriptionsApi* | [**updateWebhookSubscriptionSharedKey**](docs/WebhookSubscriptionsApi.md#updatewebhooksubscriptionsharedkey) | **PATCH** /public/v1/webhook-subscriptions/{id}/shared-key | Update Webhook Subscription Shared Key


## License
SDK is licensed under the [MIT License](https://github.com/PandaDoc/pandadoc-api-node-client/blob/main/LICENSE).
