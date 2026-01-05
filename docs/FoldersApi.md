# .FoldersApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocumentFolder**](FoldersApi.md#createDocumentFolder) | **POST** /public/v1/documents/folders | Create Documents Folder
[**createTemplateFolder**](FoldersApi.md#createTemplateFolder) | **POST** /public/v1/templates/folders | Create Templates Folder
[**listDocumentFolders**](FoldersApi.md#listDocumentFolders) | **GET** /public/v1/documents/folders | List Documents Folders
[**listTemplateFolders**](FoldersApi.md#listTemplateFolders) | **GET** /public/v1/templates/folders | List Templates Folders
[**renameDocumentFolder**](FoldersApi.md#renameDocumentFolder) | **PUT** /public/v1/documents/folders/{id} | Rename Documents Folder
[**renameTemplateFolder**](FoldersApi.md#renameTemplateFolder) | **PUT** /public/v1/templates/folders/{id} | Rename Templates Folder


# **createDocumentFolder**
> DocumentsFolderCreateResponse createDocumentFolder(documentsFolderCreateRequest)

Create a new folder to store your documents.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersApi(configuration);

const body:pd_api.FoldersApiCreateDocumentFolderRequest = {
  // DocumentsFolderCreateRequest
  documentsFolderCreateRequest: {
    name: "A new document folder",
    parentUuid: "Nq8htXxFssmhRxAPSP4SBP",
  },
};

apiInstance.createDocumentFolder(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentsFolderCreateRequest** | **DocumentsFolderCreateRequest**|  |


### Return type

**DocumentsFolderCreateResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createTemplateFolder**
> TemplatesFolderCreateResponse createTemplateFolder(templatesFolderCreateRequest)

Create a new folder to store your templates.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersApi(configuration);

const body:pd_api.FoldersApiCreateTemplateFolderRequest = {
  // TemplatesFolderCreateRequest
  templatesFolderCreateRequest: {
    name: "A new template folder",
    parentUuid: "Nq8htXxFssmhRxAPSP4SBP",
  },
};

apiInstance.createTemplateFolder(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templatesFolderCreateRequest** | **TemplatesFolderCreateRequest**|  |


### Return type

**TemplatesFolderCreateResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listDocumentFolders**
> DocumentsFolderListResponse listDocumentFolders()

Get the list of folders which contain Documents in your account.  > 📘  >  > The root folder is not listed in the response.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersApi(configuration);

const body:pd_api.FoldersApiListDocumentFoldersRequest = {
  // string | The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request. (optional)
  parentUuid: "Nq8htXxFssmhRxAPSP4SBP",
  // number | Optionally, specify how many folders to return. (optional)
  count: 50,
  // number | Optionally, specify which page of the dataset to return. (optional)
  page: 1,
};

apiInstance.listDocumentFolders(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentUuid** | [**string**] | The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request. | (optional) defaults to undefined
 **count** | [**number**] | Optionally, specify how many folders to return. | (optional) defaults to 50
 **page** | [**number**] | Optionally, specify which page of the dataset to return. | (optional) defaults to undefined


### Return type

**DocumentsFolderListResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listTemplateFolders**
> TemplatesFolderListResponse listTemplateFolders()

Get the list of folders that contain Templates in your account.  > 📘  >  > The root folder is not listed in the response.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersApi(configuration);

const body:pd_api.FoldersApiListTemplateFoldersRequest = {
  // string | The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request. (optional)
  parentUuid: "Nq8htXxFssmhRxAPSP4SBP",
  // number | Optionally, specify how many folders to return. (optional)
  count: 50,
  // number | Optionally, specify which page of the dataset to return. (optional)
  page: 1,
};

apiInstance.listTemplateFolders(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentUuid** | [**string**] | The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request. | (optional) defaults to undefined
 **count** | [**number**] | Optionally, specify how many folders to return. | (optional) defaults to 50
 **page** | [**number**] | Optionally, specify which page of the dataset to return. | (optional) defaults to undefined


### Return type

**TemplatesFolderListResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **renameDocumentFolder**
> DocumentsFolderRenameResponse renameDocumentFolder(documentsFolderRenameRequest)

Rename Documents Folder.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersApi(configuration);

const body:pd_api.FoldersApiRenameDocumentFolderRequest = {
  // string | The UUID of the folder that you are renaming.
  id: "Nq8htXxFssmhRxAPSP4SBP",
  // DocumentsFolderRenameRequest
  documentsFolderRenameRequest: {
    name: "Another document folder'",
  },
};

apiInstance.renameDocumentFolder(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentsFolderRenameRequest** | **DocumentsFolderRenameRequest**|  |
 **id** | [**string**] | The UUID of the folder that you are renaming. | defaults to undefined


### Return type

**DocumentsFolderRenameResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **renameTemplateFolder**
> TemplatesFolderRenameResponse renameTemplateFolder(templatesFolderRenameRequest)

Rename a templates folder.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersApi(configuration);

const body:pd_api.FoldersApiRenameTemplateFolderRequest = {
  // string | The UUID of the folder which you are renaming.
  id: "Nq8htXxFssmhRxAPSP4SBP",
  // TemplatesFolderRenameRequest
  templatesFolderRenameRequest: {
    name: "Another template folder",
  },
};

apiInstance.renameTemplateFolder(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templatesFolderRenameRequest** | **TemplatesFolderRenameRequest**|  |
 **id** | [**string**] | The UUID of the folder which you are renaming. | defaults to undefined


### Return type

**TemplatesFolderRenameResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

