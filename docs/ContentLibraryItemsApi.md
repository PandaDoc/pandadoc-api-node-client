# .ContentLibraryItemsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContentLibraryItem**](ContentLibraryItemsApi.md#createContentLibraryItem) | **POST** /public/v1/content-library-items | Create Content Library Item
[**createContentLibraryItemFromUpload**](ContentLibraryItemsApi.md#createContentLibraryItemFromUpload) | **POST** /public/v1/content-library-items?upload | Create Content Library Item from File Upload
[**detailsContentLibraryItem**](ContentLibraryItemsApi.md#detailsContentLibraryItem) | **GET** /public/v1/content-library-items/{id}/details | Content Library Item Details
[**listContentLibraryItems**](ContentLibraryItemsApi.md#listContentLibraryItems) | **GET** /public/v1/content-library-items | List Content Library Item
[**statusContentLibraryItem**](ContentLibraryItemsApi.md#statusContentLibraryItem) | **GET** /public/v1/content-library-items/{id} | Content Library Item Status


# **createContentLibraryItem**
> ContentLibraryResponse createContentLibraryItem(contentLibraryItemCreateFromUrlRequest)

This API endpoint allows users to create an empty item in the content library. No actual content or data is required to be provided in the initial creation. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContentLibraryItemsApi(configuration);

const body:pd_api.ContentLibraryItemsApiCreateContentLibraryItemRequest = {
  // ContentLibraryItemCreateFromUrlRequest
  contentLibraryItemCreateFromUrlRequest: null,
};

apiInstance.createContentLibraryItem(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentLibraryItemCreateFromUrlRequest** | **ContentLibraryItemCreateFromUrlRequest**|  |


### Return type

**ContentLibraryResponse**

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
**403** | Permission error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createContentLibraryItemFromUpload**
> ContentLibraryResponse createContentLibraryItemFromUpload()

This asynchronous endpoint allows users to create a new CLI by uploading a file. The uploaded file is processed in the background to generate the CLI. The maximum allowable file size for upload is 100 MB. Field tags and form fields are not supported yet. Once the file is uploaded, the processing will happen asynchronously, and users need to check the status of the CLI creation. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContentLibraryItemsApi(configuration);

const body:pd_api.ContentLibraryItemsApiCreateContentLibraryItemFromUploadRequest = {
  // HttpFile | Binary PDF File (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // ContentLibraryItemCreateRequest | JSON as a multipart/form-data request. (optional)
  data: null,
};

apiInstance.createContentLibraryItemFromUpload(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] | Binary PDF File | (optional) defaults to undefined
 **data** | **ContentLibraryItemCreateRequest** | JSON as a multipart/form-data request. | (optional) defaults to undefined


### Return type

**ContentLibraryResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **detailsContentLibraryItem**
> ContentLibraryItemResponse detailsContentLibraryItem()

Retrieve detailed information about a specific content library item using its ID. The details include:  - **Roles** - **All fields with values** - **All tokens with values** - **Pricing information (pricing tables, products, etc)** - **Metadata** - **Tags** - **Modification Timestamps**: note that `date_modified` means any changes associated with the CLI, while `content_date_modified` logs any changes in CLI content. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContentLibraryItemsApi(configuration);

const body:pd_api.ContentLibraryItemsApiDetailsContentLibraryItemRequest = {
  // string | Content Library Item ID
  id: "UXdP7Lnbvvr4WEb2wzM2hc",
};

apiInstance.detailsContentLibraryItem(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Content Library Item ID | defaults to undefined


### Return type

**ContentLibraryItemResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listContentLibraryItems**
> ContentLibraryItemListResponse listContentLibraryItems()

The endpoint retrieves items from the content library in PandaDoc. This endpoint supports filtering options to narrow down the results, allowing users to search by query, tags, folder, and more.  > ### ⚠️ Please avoid empty values for the parameters > API returns \"400\" error when any of the parameters has an empty value. Please remove such a parameter from the request or add a value. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContentLibraryItemsApi(configuration);

const body:pd_api.ContentLibraryItemsApiListContentLibraryItemsRequest = {
  // string | Search query. Filter by content library item name. (optional)
  q: "Sample Pricing Table",
  // string | Specify content library item ID. (optional)
  id: "UXdP7Lnbvvr4WEb2wzM2hc",
  // boolean | Returns only the deleted content library items. (optional)
  deleted: false,
  // string | The UUID of the folder where the content library items are stored. (optional)
  folderUuid: "S6xX7saJfA44mtJxGWd95L",
  // number | Specify how many content library items to return. Default is 50 content library items, maximum is 100 content library items. (optional)
  count: 10,
  // number | Specify which page of the dataset to return. (optional)
  page: 1,
  // string | Search tag. Filter by content library item tag. (optional)
  tag: "pricing_tables",
};

apiInstance.listContentLibraryItems(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | Search query. Filter by content library item name. | (optional) defaults to undefined
 **id** | [**string**] | Specify content library item ID. | (optional) defaults to undefined
 **deleted** | [**boolean**] | Returns only the deleted content library items. | (optional) defaults to undefined
 **folderUuid** | [**string**] | The UUID of the folder where the content library items are stored. | (optional) defaults to undefined
 **count** | [**number**] | Specify how many content library items to return. Default is 50 content library items, maximum is 100 content library items. | (optional) defaults to undefined
 **page** | [**number**] | Specify which page of the dataset to return. | (optional) defaults to undefined
 **tag** | [**string**] | Search tag. Filter by content library item tag. | (optional) defaults to undefined


### Return type

**ContentLibraryItemListResponse**

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

# **statusContentLibraryItem**
> ContentLibraryResponse statusContentLibraryItem()

Requesting the CLI status helps verify that a CLI is in the expected state before invoking additional API methods.  ## Available CLI Statuses  The following is a complete list of all possible CLI statuses returned:  | CLI Status | Status Description | |-----------------|--------------------| | `cli.UPLOADED`  | The CLI upload process has been initiated and is currently in progress. It will soon transition to the `cli.PROCESSED` state. | | `cli.PROCESSED` | The CLI has been successfully uploaded and created. At this stage, all aspects of the CLI are editable. | | `cli.ERROR`     | The CLI upload process has failed. Please refer to the error details in the response for more information. | 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContentLibraryItemsApi(configuration);

const body:pd_api.ContentLibraryItemsApiStatusContentLibraryItemRequest = {
  // string | Content Library Item ID
  id: "EE8yUNg5HztqVAuH85He8V",
};

apiInstance.statusContentLibraryItem(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Content Library Item ID | defaults to undefined


### Return type

**ContentLibraryResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

