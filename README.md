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
*APILogsApi* | [**detailsApiLog**](docs/APILogsApi.md#detailsapilog) | **GET** /public/v1/logs/{id} | Details API Log
*APILogsApi* | [**listApiLogs**](docs/APILogsApi.md#listapilogs) | **GET** /public/v1/logs | List API Log
*ContactsApi* | [**contactCreate**](docs/ContactsApi.md#contactcreate) | **POST** /public/v1/contacts | Create contact
*ContactsApi* | [**contactDelete**](docs/ContactsApi.md#contactdelete) | **DELETE** /public/v1/contacts/{id} | Delete contact by id
*ContactsApi* | [**contactDetails**](docs/ContactsApi.md#contactdetails) | **GET** /public/v1/contacts/{id} | Get contact details by id
*ContactsApi* | [**contactList**](docs/ContactsApi.md#contactlist) | **GET** /public/v1/contacts | List contacts
*ContactsApi* | [**contactUpdate**](docs/ContactsApi.md#contactupdate) | **PATCH** /public/v1/contacts/{id} | Update contact by id
*ContentLibraryItemsApi* | [**detailsContentLibraryItem**](docs/ContentLibraryItemsApi.md#detailscontentlibraryitem) | **GET** /public/v1/content-library-items/{id}/details | Details Content Library Item
*ContentLibraryItemsApi* | [**listContentLibraryItems**](docs/ContentLibraryItemsApi.md#listcontentlibraryitems) | **GET** /public/v1/content-library-items | List Content Library Item
*DocumentAttachmentsApi* | [**documentAttachmentCreate**](docs/DocumentAttachmentsApi.md#documentattachmentcreate) | **POST** /public/v1/documents/{id}/attachments | Document Attachment Create
*DocumentAttachmentsApi* | [**documentAttachmentDelete**](docs/DocumentAttachmentsApi.md#documentattachmentdelete) | **DELETE** /public/v1/documents/{id}/attachments/{attachment_id} | Document Attachment Delete
*DocumentAttachmentsApi* | [**documentAttachmentDetails**](docs/DocumentAttachmentsApi.md#documentattachmentdetails) | **GET** /public/v1/documents/{id}/attachments/{attachment_id} | Document Attachment Details
*DocumentAttachmentsApi* | [**documentAttachmentDownload**](docs/DocumentAttachmentsApi.md#documentattachmentdownload) | **GET** /public/v1/documents/{id}/attachments/{attachment_id}/download | Document Attachment Download
*DocumentAttachmentsApi* | [**documentAttachmentsList**](docs/DocumentAttachmentsApi.md#documentattachmentslist) | **GET** /public/v1/documents/{id}/attachments | Document Attachment List
*DocumentsApi* | [**deleteDocument**](docs/DocumentsApi.md#deletedocument) | **DELETE** /public/v1/documents/{id} | Delete document by id
*DocumentsApi* | [**documentCreate**](docs/DocumentsApi.md#documentcreate) | **POST** /public/v1/documents | Create document
*DocumentsApi* | [**documentCreateLink**](docs/DocumentsApi.md#documentcreatelink) | **POST** /public/v1/documents/{id}/session | Create a Document Link
*DocumentsApi* | [**documentDetails**](docs/DocumentsApi.md#documentdetails) | **GET** /public/v1/documents/{id}/details | Document details
*DocumentsApi* | [**documentList**](docs/DocumentsApi.md#documentlist) | **GET** /public/v1/documents | List documents
*DocumentsApi* | [**documentStatus**](docs/DocumentsApi.md#documentstatus) | **GET** /public/v1/documents/{id} | Document status
*DocumentsApi* | [**documentStatusChange**](docs/DocumentsApi.md#documentstatuschange) | **PATCH** /public/v1/documents/{id}/status | Document status change
*DocumentsApi* | [**downloadDocument**](docs/DocumentsApi.md#downloaddocument) | **GET** /public/v1/documents/{id}/download | Document download
*DocumentsApi* | [**downloadProtectedDocument**](docs/DocumentsApi.md#downloadprotecteddocument) | **GET** /public/v1/documents/{id}/download-protected | Download document protected
*DocumentsApi* | [**linkedObjectDelete**](docs/DocumentsApi.md#linkedobjectdelete) | **DELETE** /public/v1/documents/{id}/linked-objects/{linked_object_id} | Delete Linked Object
*DocumentsApi* | [**linkedObjectList**](docs/DocumentsApi.md#linkedobjectlist) | **GET** /public/v1/documents/{id}/linked-objects | List Linked Objects
*DocumentsApi* | [**linkedObjectsCreate**](docs/DocumentsApi.md#linkedobjectscreate) | **POST** /public/v1/documents/{id}/linked-objects | Create Linked Object
*DocumentsApi* | [**sendDocument**](docs/DocumentsApi.md#senddocument) | **POST** /public/v1/documents/{id}/send | Send Document
*DocumentsApi* | [**transferAllDocumentsOwnership**](docs/DocumentsApi.md#transferalldocumentsownership) | **PATCH** /public/v1/documents/ownership | Transfer all documents ownership
*DocumentsApi* | [**transferDocumentOwnership**](docs/DocumentsApi.md#transferdocumentownership) | **PATCH** /public/v1/documents/{id}/ownership | Update document ownership
*FoldersAPIApi* | [**createDocumentFolder**](docs/FoldersAPIApi.md#createdocumentfolder) | **POST** /public/v1/documents/folders | Create Documents Folder
*FoldersAPIApi* | [**createTemplateFolder**](docs/FoldersAPIApi.md#createtemplatefolder) | **POST** /public/v1/templates/folders | Create Templates Folder
*FoldersAPIApi* | [**listDocumentFolders**](docs/FoldersAPIApi.md#listdocumentfolders) | **GET** /public/v1/documents/folders | List Documents Folders
*FoldersAPIApi* | [**listTemplateFolders**](docs/FoldersAPIApi.md#listtemplatefolders) | **GET** /public/v1/templates/folders | List Templates Folders
*FoldersAPIApi* | [**renameDocumentFolder**](docs/FoldersAPIApi.md#renamedocumentfolder) | **PUT** /public/v1/documents/folders/{id} | Rename Documents Folder
*FoldersAPIApi* | [**renameTemplateFolder**](docs/FoldersAPIApi.md#renametemplatefolder) | **PUT** /public/v1/templates/folders/{id} | Rename Templates Folder
*FormsApi* | [**listForm**](docs/FormsApi.md#listform) | **GET** /public/v1/forms | Forms
*MembersApi* | [**currentMemberDetails**](docs/MembersApi.md#currentmemberdetails) | **GET** /public/v1/members/current | Current member details
*MembersApi* | [**memberDetails**](docs/MembersApi.md#memberdetails) | **GET** /public/v1/members/{id} | Member details
*MembersApi* | [**memberList**](docs/MembersApi.md#memberlist) | **GET** /public/v1/members | List members
*OAuth20AuthenticationApi* | [**accessToken**](docs/OAuth20AuthenticationApi.md#accesstoken) | **POST** /oauth2/access_token | Create/Refresh Access Token
*TemplatesApi* | [**deleteTemplate**](docs/TemplatesApi.md#deletetemplate) | **DELETE** /public/v1/templates/{id} | Delete Template
*TemplatesApi* | [**detailsTemaplate**](docs/TemplatesApi.md#detailstemaplate) | **GET** /public/v1/templates/{id}/details | Details Template
*TemplatesApi* | [**listTemplates**](docs/TemplatesApi.md#listtemplates) | **GET** /public/v1/templates | List Templates


## License
SDK is licensed under the [MIT License](https://github.com/PandaDoc/pandadoc-api-node-client/blob/main/LICENSE).