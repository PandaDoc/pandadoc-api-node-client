# .DocumentRecipientsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDocumentRecipient**](DocumentRecipientsApi.md#addDocumentRecipient) | **POST** /public/v1/documents/{id}/recipients | Add Document Recipient
[**deleteDocumentRecipient**](DocumentRecipientsApi.md#deleteDocumentRecipient) | **DELETE** /public/v1/documents/{id}/recipients/{recipient_id} | Delete Document Recipient
[**editDocumentRecipient**](DocumentRecipientsApi.md#editDocumentRecipient) | **PATCH** /public/v1/documents/{id}/recipients/{recipient_id} | Edit Document Recipient
[**reassignDocumentRecipient**](DocumentRecipientsApi.md#reassignDocumentRecipient) | **POST** /public/v1/documents/{id}/recipients/{recipient_id}/reassign | Reassign Document Recipient


# **addDocumentRecipient**
> void addDocumentRecipient(documentRecipientCreateRequest)

Adds recipient as CC to document

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRecipientsApi(configuration);

const body:pd_api.DocumentRecipientsApiAddDocumentRecipientRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // DocumentRecipientCreateRequest
  documentRecipientCreateRequest: {
    id: "2eWSKSvVqmuVCnuUK3iWwD",
    kind: "contact",
  },
};

apiInstance.addDocumentRecipient(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentRecipientCreateRequest** | **DocumentRecipientCreateRequest**|  |
 **id** | [**string**] | Document UUID | defaults to undefined


### Return type

**void**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deleteDocumentRecipient**
> void deleteDocumentRecipient()

Deleted recipient from document

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRecipientsApi(configuration);

const body:pd_api.DocumentRecipientsApiDeleteDocumentRecipientRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Recipient UUID
  recipientId: "tf5dGS3Tmu3cj228ao6fnc",
};

apiInstance.deleteDocumentRecipient(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID | defaults to undefined
 **recipientId** | [**string**] | Recipient UUID | defaults to undefined


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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **editDocumentRecipient**
> void editDocumentRecipient(documentRecipientEditRequest)

Edit document recipient's details

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRecipientsApi(configuration);

const body:pd_api.DocumentRecipientsApiEditDocumentRecipientRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Recipient UUID
  recipientId: "tf5dGS3Tmu3cj228ao6fnc",
  // DocumentRecipientEditRequest
  documentRecipientEditRequest: {
    email: "user01@pandadoc.com",
    firstName: "John",
    lastName: "Doe",
    company: "John Doe Inc.",
    jobTitle: "CTO",
    phone: "+14842634627",
    state: "Texas",
    streetAddress: "1313 Mockingbird Lane",
    city: "Austin",
    postalCode: "75001",
  },
};

apiInstance.editDocumentRecipient(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentRecipientEditRequest** | **DocumentRecipientEditRequest**|  |
 **id** | [**string**] | Document UUID | defaults to undefined
 **recipientId** | [**string**] | Recipient UUID | defaults to undefined


### Return type

**void**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **reassignDocumentRecipient**
> void reassignDocumentRecipient(documentRecipientCreateRequest)

Replace document recipient with another contact

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRecipientsApi(configuration);

const body:pd_api.DocumentRecipientsApiReassignDocumentRecipientRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Recipient UUID
  recipientId: "tf5dGS3Tmu3cj228ao6fnc",
  // DocumentRecipientCreateRequest
  documentRecipientCreateRequest: {
    id: "2eWSKSvVqmuVCnuUK3iWwD",
    kind: "contact",
  },
};

apiInstance.reassignDocumentRecipient(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentRecipientCreateRequest** | **DocumentRecipientCreateRequest**|  |
 **id** | [**string**] | Document UUID | defaults to undefined
 **recipientId** | [**string**] | Recipient UUID | defaults to undefined


### Return type

**void**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

