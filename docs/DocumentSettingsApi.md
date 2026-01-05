# .DocumentSettingsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentSettingsGet**](DocumentSettingsApi.md#documentSettingsGet) | **GET** /public/v2/documents/{document_id}/settings | Get document settings
[**documentSettingsUpdate**](DocumentSettingsApi.md#documentSettingsUpdate) | **PATCH** /public/v2/documents/{document_id}/settings | Update document settings


# **documentSettingsGet**
> DocumentSettingsResponse documentSettingsGet()

Retrieves the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentSettingsApi(configuration);

const body:pd_api.DocumentSettingsApiDocumentSettingsGetRequest = {
  // string | Unique identifier of the document to retrieve settings for.
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.documentSettingsGet(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | Unique identifier of the document to retrieve settings for. | defaults to undefined


### Return type

**DocumentSettingsResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved document settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **documentSettingsUpdate**
> DocumentSettingsResponse documentSettingsUpdate(updateDocumentSettingsRequest)

Updates the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentSettingsApi(configuration);

const body:pd_api.DocumentSettingsApiDocumentSettingsUpdateRequest = {
  // string | Unique identifier of the document to update settings for.
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // UpdateDocumentSettingsRequest
  updateDocumentSettingsRequest: {
    language: "en-US",
    qualifiedElectronicSignature: true,
    expiresIn: 1,
  },
};

apiInstance.documentSettingsUpdate(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDocumentSettingsRequest** | **UpdateDocumentSettingsRequest**|  |
 **documentId** | [**string**] | Unique identifier of the document to update settings for. | defaults to undefined


### Return type

**DocumentSettingsResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated document settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

