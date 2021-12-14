# .DocumentAttachmentsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocumentAttachment**](DocumentAttachmentsApi.md#createDocumentAttachment) | **POST** /public/v1/documents/{id}/attachments | Document Attachment Create
[**deleteDocumentAttachment**](DocumentAttachmentsApi.md#deleteDocumentAttachment) | **DELETE** /public/v1/documents/{id}/attachments/{attachment_id} | Document Attachment Delete
[**detailsDocumentAttachment**](DocumentAttachmentsApi.md#detailsDocumentAttachment) | **GET** /public/v1/documents/{id}/attachments/{attachment_id} | Document Attachment Details
[**downloadDocumentAttachment**](DocumentAttachmentsApi.md#downloadDocumentAttachment) | **GET** /public/v1/documents/{id}/attachments/{attachment_id}/download | Document Attachment Download
[**listDocumentAttachments**](DocumentAttachmentsApi.md#listDocumentAttachments) | **GET** /public/v1/documents/{id}/attachments | Document Attachment List


# **createDocumentAttachment**
> DocumentAttachmentResponse createDocumentAttachment()

Creates an attachment for a particular document

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentAttachmentsApi(configuration);

const body:pd_api.DocumentAttachmentsApiCreateDocumentAttachmentRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // HttpFile | Binary file to be attached to a document (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // string | URL link to the file to be attached to a document (optional)
  source: "https://is3-ssl.mzstatic.com/1e7fbd74-d10c-8e3a-63c3-0beb3ea231a5/512x512bb.jpg",
  // string | Optional name to set for uploaded file (optional)
  name: "Additional agreement",
};

apiInstance.createDocumentAttachment(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID | defaults to undefined
 **file** | [**HttpFile**] | Binary file to be attached to a document | (optional) defaults to undefined
 **source** | [**string**] | URL link to the file to be attached to a document | (optional) defaults to undefined
 **name** | [**string**] | Optional name to set for uploaded file | (optional) defaults to undefined


### Return type

**DocumentAttachmentResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

# **deleteDocumentAttachment**
> void deleteDocumentAttachment()

Deletes specific document's attachment

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentAttachmentsApi(configuration);

const body:pd_api.DocumentAttachmentsApiDeleteDocumentAttachmentRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Attachment UUID
  attachmentId: "89ce2f49-10fb-4e9b-b5f3-e28be2a5c042",
};

apiInstance.deleteDocumentAttachment(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID | defaults to undefined
 **attachmentId** | [**string**] | Attachment UUID | defaults to undefined


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
**204** | No Content |  -  |
**401** | Authentication error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **detailsDocumentAttachment**
> DocumentAttachmentResponse detailsDocumentAttachment()

Returns details of the specific document's attachment

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentAttachmentsApi(configuration);

const body:pd_api.DocumentAttachmentsApiDetailsDocumentAttachmentRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Attachment UUID
  attachmentId: "89ce2f49-10fb-4e9b-b5f3-e28be2a5c042",
};

apiInstance.detailsDocumentAttachment(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID | defaults to undefined
 **attachmentId** | [**string**] | Attachment UUID | defaults to undefined


### Return type

**DocumentAttachmentResponse**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **downloadDocumentAttachment**
> HttpFile downloadDocumentAttachment()

Returns document attachment file for download

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentAttachmentsApi(configuration);

const body:pd_api.DocumentAttachmentsApiDownloadDocumentAttachmentRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Attachment UUID
  attachmentId: "89ce2f49-10fb-4e9b-b5f3-e28be2a5c042",
};

apiInstance.downloadDocumentAttachment(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID | defaults to undefined
 **attachmentId** | [**string**] | Attachment UUID | defaults to undefined


### Return type

**HttpFile**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/_*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listDocumentAttachments**
> Array<DocumentAttachmentResponse> listDocumentAttachments()

Return list of objects attached to particular document

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentAttachmentsApi(configuration);

const body:pd_api.DocumentAttachmentsApiListDocumentAttachmentsRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.listDocumentAttachments(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID | defaults to undefined


### Return type

**Array<DocumentAttachmentResponse>**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

