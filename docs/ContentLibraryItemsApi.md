# .ContentLibraryItemsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detailsContentLibraryItem**](ContentLibraryItemsApi.md#detailsContentLibraryItem) | **GET** /public/v1/content-library-items/{id}/details | Details Content Library Item
[**listContentLibraryItems**](ContentLibraryItemsApi.md#listContentLibraryItems) | **GET** /public/v1/content-library-items | List Content Library Item


# **detailsContentLibraryItem**
> ContentLibraryItemResponse detailsContentLibraryItem()

Return detailed data about a content library item.

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
  id: "id_example",
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listContentLibraryItems**
> ContentLibraryItemListResponse listContentLibraryItems()

Optionally filter by a search query or tags.

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
  q: "name",
  // string | Specify content library item ID. (optional)
  id: "id_example",
  // boolean | Returns only the deleted content library items. (optional)
  deleted: true,
  // string | The UUID of the folder where the content library items are stored. (optional)
  folderUuid: "folder_uuid_example",
  // number | Specify how many content library items to return. Default is 50 content library items, maximum is 100 content library items. (optional)
  count: 1,
  // number | Specify which page of the dataset to return. (optional)
  page: 1,
  // string | Search tag. Filter by content library item tag. (optional)
  tag: "tag_example",
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

