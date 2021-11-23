# .FoldersAPIApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocumentFolder**](FoldersAPIApi.md#createDocumentFolder) | **POST** /public/v1/documents/folders | Create Documents Folder
[**createTemplateFolder**](FoldersAPIApi.md#createTemplateFolder) | **POST** /public/v1/templates/folders | Create Templates Folder
[**listDocumentFolders**](FoldersAPIApi.md#listDocumentFolders) | **GET** /public/v1/documents/folders | List Documents Folders
[**listTemplateFolders**](FoldersAPIApi.md#listTemplateFolders) | **GET** /public/v1/templates/folders | List Templates Folders
[**renameDocumentFolder**](FoldersAPIApi.md#renameDocumentFolder) | **PUT** /public/v1/documents/folders/{id} | Rename Documents Folder
[**renameTemplateFolder**](FoldersAPIApi.md#renameTemplateFolder) | **PUT** /public/v1/templates/folders/{id} | Rename Templates Folder


# **createDocumentFolder**
> DocumentsFolderCreateResponse createDocumentFolder()

Create a new folder to store your documents.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersAPIApi(configuration);

const body:pd_api.FoldersAPIApiCreateDocumentFolderRequest = {
  // DocumentsFolderCreateRequest (optional)
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTemplateFolder**
> TemplatesFolderCreateResponse createTemplateFolder()

Create a new folder to store your templates.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersAPIApi(configuration);

const body:pd_api.FoldersAPIApiCreateTemplateFolderRequest = {
  // TemplatesFolderCreateRequest (optional)
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDocumentFolders**
> DocumentsFolderListResponse listDocumentFolders()

Get the list of folders that contain Documents in your account.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersAPIApi(configuration);

const body:pd_api.FoldersAPIApiListDocumentFoldersRequest = {
  // string | The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request. (optional)
  parentUuid: "parent_uuid_example",
  // number | Optionally, specify how many folders to return. Default is 50 folders, maximum is 100 folders. (optional)
  count: 1,
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
 **count** | [**number**] | Optionally, specify how many folders to return. Default is 50 folders, maximum is 100 folders. | (optional) defaults to undefined
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTemplateFolders**
> TemplatesFolderListResponse listTemplateFolders()

Get the list of folders that contain Templates in your account.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersAPIApi(configuration);

const body:pd_api.FoldersAPIApiListTemplateFoldersRequest = {
  // string | The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request. (optional)
  parentUuid: "parent_uuid_example",
  // number | Optionally, specify how many folders to return. Default is 50 folders, maximum is 100 folders. (optional)
  count: 1,
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
 **count** | [**number**] | Optionally, specify how many folders to return. Default is 50 folders, maximum is 100 folders. | (optional) defaults to undefined
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **renameDocumentFolder**
> DocumentsFolderRenameResponse renameDocumentFolder()

Rename Documents Folder.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersAPIApi(configuration);

const body:pd_api.FoldersAPIApiRenameDocumentFolderRequest = {
  // string | The UUID of the folder that you are renaming.
  id: "id_example",
  // DocumentsFolderRenameRequest (optional)
  documentsFolderRenameRequest: {
    name: "Another document folder",
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **renameTemplateFolder**
> TemplatesFolderRenameResponse renameTemplateFolder()

Rename a templates folder.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FoldersAPIApi(configuration);

const body:pd_api.FoldersAPIApiRenameTemplateFolderRequest = {
  // string | The UUID of the folder which you are renaming.
  id: "id_example",
  // TemplatesFolderRenameRequest (optional)
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

