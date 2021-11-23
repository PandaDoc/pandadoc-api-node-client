# The Official PandaDoc Node client SDK
PandaDoc SDK spans a broad range of functionality to help you build incredible documents automation experiences inside your product.

## Docs
- [Official public API documentation](https://developers.pandadoc.com/reference/about)

## Requirements
Node >= 12

## Installation
#### npm install
If the package is hosted on a repository, you can install directly using:
```sh
npm install git+https://github.com/PandaDoc/pandadoc-api-node-client.git
```
(you may need to run `npm` with root permission: `sudo npm install git+https://github.com/PandaDoc/pandadoc-api-node-client.git`)

Then import the package:
```typescript
import * as pd_client from "pandadoc-node-client";
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

## Examples
- [Create and send document from a template](examples/createDocumentFromPandadocTemplateAndSend.ts)
- [Create and send document from the pdf url](examples/createDocumentFromPdfUrlAndSend.ts)

### Documentation for API Endpoints
All URIs are relative to *https://api.pandadoc.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*APILogsApi* | [**detailsApiLog**](docs/APILogsApi.md#detailsApiLog) | **GET** /public/v1/logs/{id} | Details API Log
*APILogsApi* | [**listApiLogs**](docs/APILogsApi.md#listApiLogs) | **GET** /public/v1/logs | List API Log
*ContentLibraryItemsApi* | [**detailsContentLibraryItem**](docs/ContentLibraryItemsApi.md#detailscontentlibraryitem) | **GET** /public/v1/content-library-items/{id}/details | Details Content Library Item
*ContentLibraryItemsApi* | [**listContentLibraryItems**](docs/ContentLibraryItemsApi.md#listcontentlibraryitems) | **GET** /public/v1/content-library-items | List Content Library Item
*DocumentsApi* | [**deleteDocument**](docs/DocumentsApi.md#deletedocument) | **DELETE** /public/v1/documents/{id} | Delete document by id
*DocumentsApi* | [**documentCreate**](docs/DocumentsApi.md#documentcreate) | **POST** /public/v1/documents | Create document
*DocumentsApi* | [**documentCreateLink**](docs/DocumentsApi.md#documentcreatelink) | **POST** /public/v1/documents/{id}/session | Create a Document Link
*DocumentsApi* | [**documentDetails**](docs/DocumentsApi.md#documentdetails) | **GET** /public/v1/documents/{id}/details | Document details
*DocumentsApi* | [**documentList**](docs/DocumentsApi.md#documentlist) | **GET** /public/v1/documents | List documents
*DocumentsApi* | [**documentStatus**](docs/DocumentsApi.md#documentstatus) | **GET** /public/v1/documents/{id} | Document status
*DocumentsApi* | [**downloadDocument**](docs/DocumentsApi.md#downloaddocument) | **GET** /public/v1/documents/{id}/download | Document download
*DocumentsApi* | [**downloadProtectedDocument**](docs/DocumentsApi.md#downloadprotecteddocument) | **GET** /public/v1/documents/{id}/download-protected | Download document protected
*DocumentsApi* | [**linkedObjectDelete**](docs/DocumentsApi.md#linkedobjectdelete) | **DELETE** /public/v1/documents/{id}/linked-objects/{linked_object_id} | Delete Linked Object
*DocumentsApi* | [**linkedObjectList**](docs/DocumentsApi.md#linkedobjectlist) | **GET** /public/v1/documents/{id}/linked-objects | List Linked Objects
*DocumentsApi* | [**linkedObjectsCreate**](docs/DocumentsApi.md#linkedobjectscreate) | **POST** /public/v1/documents/{id}/linked-objects | Create Linked Object
*DocumentsApi* | [**sendDocument**](docs/DocumentsApi.md#senddocument) | **POST** /public/v1/documents/{id}/send | Send Document
*FoldersAPIApi* | [**createDocumentFolder**](docs/FoldersAPIApi.md#createdocumentfolder) | **POST** /public/v1/documents/folders | Create Documents Folder
*FoldersAPIApi* | [**createTemplateFolder**](docs/FoldersAPIApi.md#createtemplatefolder) | **POST** /public/v1/templates/folders | Create Templates Folder
*FoldersAPIApi* | [**listDocumentFolders**](docs/FoldersAPIApi.md#listdocumentfolders) | **GET** /public/v1/documents/folders | List Documents Folders
*FoldersAPIApi* | [**listTemplateFolders**](docs/FoldersAPIApi.md#listtemplatefolders) | **GET** /public/v1/templates/folders | List Templates Folders
*FoldersAPIApi* | [**renameDocumentFolder**](docs/FoldersAPIApi.md#renamedocumentfolder) | **PUT** /public/v1/documents/folders/{id} | Rename Documents Folder
*FoldersAPIApi* | [**renameTemplateFolder**](docs/FoldersAPIApi.md#renametemplatefolder) | **PUT** /public/v1/templates/folders/{id} | Rename Templates Folder
*FormsApi* | [**listForm**](docs/FormsApi.md#listform) | **GET** /public/v1/forms | Forms
*OAuth20AuthenticationApi* | [**accessToken**](docs/OAuth20AuthenticationApi.md#accesstoken) | **POST** /oauth2/access_token | Create/Refresh Access Token
*TemplatesApi* | [**deleteTemplate**](docs/TemplatesApi.md#deletetemplate) | **DELETE** /public/v1/templates/{id} | Delete Template
*TemplatesApi* | [**detailsTemaplate**](docs/TemplatesApi.md#detailstemaplate) | **GET** /public/v1/templates/{id}/details | Details Template
*TemplatesApi* | [**listTemplates**](docs/TemplatesApi.md#listtemplates) | **GET** /public/v1/templates | List Templates


## License
SDK is licensed under the following [License](LICENSE).