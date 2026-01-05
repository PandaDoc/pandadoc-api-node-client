# .DocumentAuditTrailApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDocumentAuditTrail**](DocumentAuditTrailApi.md#listDocumentAuditTrail) | **GET** /public/v2/documents/{document_id}/audit-trail | List Document Audit Trail


# **listDocumentAuditTrail**
> DocumentAuditTrailResponse listDocumentAuditTrail()

Retrieves the full audit trail for a specified document. The audit trail includes detailed user actions such as sending, viewing, signing, and editing, along with metadata like timestamps, IP addresses, and user identity. This endpoint is accessible to authorized workspace administrators only. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentAuditTrailApi(configuration);

const body:pd_api.DocumentAuditTrailApiListDocumentAuditTrailRequest = {
  // string | Unique identifier of the document to retrieve the audit trail for.
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // number | Maximum number of items to return. (optional)
  limit: 20,
  // number | Number of items to skip before starting to collect the result set. (optional)
  offset: 0,
};

apiInstance.listDocumentAuditTrail(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | Unique identifier of the document to retrieve the audit trail for. | defaults to undefined
 **limit** | [**number**] | Maximum number of items to return. | (optional) defaults to 20
 **offset** | [**number**] | Number of items to skip before starting to collect the result set. | (optional) defaults to 0


### Return type

**DocumentAuditTrailResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved audit trail. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

