# .DocumentAttachmentsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocumentAttachment**](DocumentAttachmentsApi.md#createDocumentAttachment) | **POST** /public/v1/documents/{id}/attachments | Create Document Attachment
[**createDocumentAttachmentFromFileUpload**](DocumentAttachmentsApi.md#createDocumentAttachmentFromFileUpload) | **POST** /public/v1/documents/{id}/attachments?upload | Create Document Attachment From Upload
[**deleteDocumentAttachment**](DocumentAttachmentsApi.md#deleteDocumentAttachment) | **DELETE** /public/v1/documents/{id}/attachments/{attachment_id} | Delete Document Attachment
[**detailsDocumentAttachment**](DocumentAttachmentsApi.md#detailsDocumentAttachment) | **GET** /public/v1/documents/{id}/attachments/{attachment_id} | Document Attachment Details
[**downloadDocumentAttachment**](DocumentAttachmentsApi.md#downloadDocumentAttachment) | **GET** /public/v1/documents/{id}/attachments/{attachment_id}/download | Download Document Attachment
[**listDocumentAttachments**](DocumentAttachmentsApi.md#listDocumentAttachments) | **GET** /public/v1/documents/{id}/attachments | List Document Attachments


# **createDocumentAttachment**
> DocumentAttachmentResponse createDocumentAttachment(documentAttachmentRequest)

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
  // DocumentAttachmentRequest
  documentAttachmentRequest: null,
};

apiInstance.createDocumentAttachment(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentAttachmentRequest** | **DocumentAttachmentRequest**|  |
 **id** | [**string**] | Document UUID | defaults to undefined


### Return type

**DocumentAttachmentResponse**

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

# **createDocumentAttachmentFromFileUpload**
> DocumentAttachmentResponse createDocumentAttachmentFromFileUpload()

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

const body:pd_api.DocumentAttachmentsApiCreateDocumentAttachmentFromFileUploadRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // HttpFile | Binary file to be attached to a document (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // string | Optional name to set for uploaded file (optional)
  name: "Additional agreement",
};

apiInstance.createDocumentAttachmentFromFileUpload(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID | defaults to undefined
 **file** | [**HttpFile**] | Binary file to be attached to a document | (optional) defaults to undefined
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

Deletes an attachment from the document.

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
  // string | Document UUID.
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Attachment UUID.
  attachmentId: "89ce2f49-10fb-4e9b-b5f3-e28be2a5c042",
};

apiInstance.deleteDocumentAttachment(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID. | defaults to undefined
 **attachmentId** | [**string**] | Attachment UUID. | defaults to undefined


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

Returns details of the specific document\'s attachment.

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
  // string | Document UUID.
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Attachment UUID.
  attachmentId: "89ce2f49-10fb-4e9b-b5f3-e28be2a5c042",
};

apiInstance.detailsDocumentAttachment(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID. | defaults to undefined
 **attachmentId** | [**string**] | Attachment UUID. | defaults to undefined


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
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **downloadDocumentAttachment**
> HttpFile downloadDocumentAttachment()

Download an attachment by ID.

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
  // string | Document UUID.
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Attachment UUID.
  attachmentId: "89ce2f49-10fb-4e9b-b5f3-e28be2a5c042",
};

apiInstance.downloadDocumentAttachment(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID. | defaults to undefined
 **attachmentId** | [**string**] | Attachment UUID. | defaults to undefined


### Return type

**HttpFile**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication error |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listDocumentAttachments**
> Array<DocumentAttachmentResponse> listDocumentAttachments()

Returns a list of attachments associated with a specified document.

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
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

