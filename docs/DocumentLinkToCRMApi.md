# .DocumentLinkToCRMApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLinkedObject**](DocumentLinkToCRMApi.md#createLinkedObject) | **POST** /public/v1/documents/{id}/linked-objects | Create Linked Object
[**deleteLinkedObject**](DocumentLinkToCRMApi.md#deleteLinkedObject) | **DELETE** /public/v1/documents/{id}/linked-objects/{linked_object_id} | Delete Linked Object
[**listDocumentsByLinkedObject**](DocumentLinkToCRMApi.md#listDocumentsByLinkedObject) | **GET** /public/v1/documents/linked-objects | List Documents by Linked Object
[**listLinkedObjects**](DocumentLinkToCRMApi.md#listLinkedObjects) | **GET** /public/v1/documents/{id}/linked-objects | List Linked Objects


# **createLinkedObject**
> LinkedObjectCreateResponse createLinkedObject(linkedObjectCreateRequest)

Create a linked object in the document.  > 🚧  >  > You can only link each document to each CRM once. This ensures the consistent functionality of the [two-way CRM sync](https://support.pandadoc.com/en/articles/9714877-hubspot-crm#h_3a3344e8-2a6e-4fd8-86be-0da8c121e4ac). >  > You can, however, link one document to several external systems. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentLinkToCRMApi(configuration);

const body:pd_api.DocumentLinkToCRMApiCreateLinkedObjectRequest = {
  // string | Specify document ID.
  id: "ZPeAfcpzr9aiVs5vqUf6jg",
  // LinkedObjectCreateRequest
  linkedObjectCreateRequest: {
    provider: "pipedrive",
    entityType: "deal",
    entityId: "9372",
  },
};

apiInstance.createLinkedObject(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkedObjectCreateRequest** | **LinkedObjectCreateRequest**|  |
 **id** | [**string**] | Specify document ID. | defaults to undefined


### Return type

**LinkedObjectCreateResponse**

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
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deleteLinkedObject**
> void deleteLinkedObject()

Delete a linked object associated with a document.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentLinkToCRMApi(configuration);

const body:pd_api.DocumentLinkToCRMApiDeleteLinkedObjectRequest = {
  // string | Specify document ID.
  id: "ZPeAfcpzr9aiVs5vqUf6jg",
  // string | Specify linked object ID.
  linkedObjectId: "deb0d530-d759-4189-a422-8d2265e01b2e",
};

apiInstance.deleteLinkedObject(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specify document ID. | defaults to undefined
 **linkedObjectId** | [**string**] | Specify linked object ID. | defaults to undefined


### Return type

**void**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listDocumentsByLinkedObject**
> Array<ListDocumentsByLinkedObjectsResponseInner> listDocumentsByLinkedObject()

Get a list of documents connected to a linked object - an entity from an integration.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentLinkToCRMApi(configuration);

const body:pd_api.DocumentLinkToCRMApiListDocumentsByLinkedObjectRequest = {
  // string | You can get entity id from your integration, for example, from a url of a HubSpot deal.
  entityId: "12345",
  // string | See the available entity types: https://developers.pandadoc.com/reference/link-service#examples-of-the-most-popular-crms 
  entityType: "deal",
  // string | See the available providers: https://developers.pandadoc.com/reference/link-service#examples-of-the-most-popular-crms 
  provider: "hubspot",
  // string (optional)
  orderBy: "-date_created",
  // Array<string> (optional)
  ownerIds: ["owner1","owner2"],
};

apiInstance.listDocumentsByLinkedObject(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | [**string**] | You can get entity id from your integration, for example, from a url of a HubSpot deal. | defaults to undefined
 **entityType** | [**string**] | See the available entity types: https://developers.pandadoc.com/reference/link-service#examples-of-the-most-popular-crms  | defaults to undefined
 **provider** | [**string**] | See the available providers: https://developers.pandadoc.com/reference/link-service#examples-of-the-most-popular-crms  | defaults to undefined
 **orderBy** | [**string**] |  | (optional) defaults to '-date_created'
 **ownerIds** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**Array<ListDocumentsByLinkedObjectsResponseInner>**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listLinkedObjects**
> LinkedObjectListResponse listLinkedObjects()

Get a list of linked objects for the document. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentLinkToCRMApi(configuration);

const body:pd_api.DocumentLinkToCRMApiListLinkedObjectsRequest = {
  // string | Specify document ID.
  id: "ZPeAfcpzr9aiVs5vqUf6jg",
};

apiInstance.listLinkedObjects(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specify document ID. | defaults to undefined


### Return type

**LinkedObjectListResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

