# .DocumentFieldsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocumentFields**](DocumentFieldsApi.md#createDocumentFields) | **POST** /public/v1/documents/{id}/fields | Create Document Fields
[**listDocumentFields**](DocumentFieldsApi.md#listDocumentFields) | **GET** /public/v1/documents/{id}/fields | List Document Fields


# **createDocumentFields**
> CreateDocumentFieldsResponse createDocumentFields(createDocumentFieldsRequest)

Creates fields for a particular document. For CFR11-compliant workspaces (21 CFR Part 11),  signature fields must have a minimum size of 108×33. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentFieldsApi(configuration);

const body:pd_api.DocumentFieldsApiCreateDocumentFieldsRequest = {
  // string | Document UUID.
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // CreateDocumentFieldsRequest
  createDocumentFieldsRequest: {
    fields: [
      {
        fieldId: "fieldId_example",
        mergeField: "mergeField_example",
        type: "payment_details",
        placeholder: "placeholder_example",
        assignedTo: "assignedTo_example",
        layout: {
          page: 1,
          position: {
            offsetX: 3.14,
            offsetY: 3.14,
            anchorPoint: "topleft",
          },
          style: {
            width: 1,
            height: 1,
          },
        },
      },
    ],
  },
};

apiInstance.createDocumentFields(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDocumentFieldsRequest** | **CreateDocumentFieldsRequest**|  |
 **id** | [**string**] | Document UUID. | defaults to undefined


### Return type

**CreateDocumentFieldsResponse**

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

# **listDocumentFields**
> ListDocumentFieldsResponse listDocumentFields()

Return the list of fields for a particular document.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentFieldsApi(configuration);

const body:pd_api.DocumentFieldsApiListDocumentFieldsRequest = {
  // string | Document UUID.
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.listDocumentFields(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID. | defaults to undefined


### Return type

**ListDocumentFieldsResponse**

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
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

