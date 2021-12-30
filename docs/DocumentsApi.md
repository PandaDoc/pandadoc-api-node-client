# .DocumentsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeDocumentStatus**](DocumentsApi.md#changeDocumentStatus) | **PATCH** /public/v1/documents/{id}/status | Document status change
[**createDocument**](DocumentsApi.md#createDocument) | **POST** /public/v1/documents | Create document
[**createDocumentLink**](DocumentsApi.md#createDocumentLink) | **POST** /public/v1/documents/{id}/session | Create a Document Link
[**createLinkedObject**](DocumentsApi.md#createLinkedObject) | **POST** /public/v1/documents/{id}/linked-objects | Create Linked Object
[**deleteDocument**](DocumentsApi.md#deleteDocument) | **DELETE** /public/v1/documents/{id} | Delete document by id
[**deleteLinkedObject**](DocumentsApi.md#deleteLinkedObject) | **DELETE** /public/v1/documents/{id}/linked-objects/{linked_object_id} | Delete Linked Object
[**detailsDocument**](DocumentsApi.md#detailsDocument) | **GET** /public/v1/documents/{id}/details | Document details
[**downloadDocument**](DocumentsApi.md#downloadDocument) | **GET** /public/v1/documents/{id}/download | Document download
[**downloadProtectedDocument**](DocumentsApi.md#downloadProtectedDocument) | **GET** /public/v1/documents/{id}/download-protected | Download document protected
[**listDocuments**](DocumentsApi.md#listDocuments) | **GET** /public/v1/documents | List documents
[**listLinkedObjects**](DocumentsApi.md#listLinkedObjects) | **GET** /public/v1/documents/{id}/linked-objects | List Linked Objects
[**sendDocument**](DocumentsApi.md#sendDocument) | **POST** /public/v1/documents/{id}/send | Send Document
[**statusDocument**](DocumentsApi.md#statusDocument) | **GET** /public/v1/documents/{id} | Document status
[**transferAllDocumentsOwnership**](DocumentsApi.md#transferAllDocumentsOwnership) | **PATCH** /public/v1/documents/ownership | Transfer all documents ownership
[**transferDocumentOwnership**](DocumentsApi.md#transferDocumentOwnership) | **PATCH** /public/v1/documents/{id}/ownership | Update document ownership


# **changeDocumentStatus**
> void changeDocumentStatus(documentStatusChangeRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiChangeDocumentStatusRequest = {
  // string | Specify document ID.
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // DocumentStatusChangeRequest
  documentStatusChangeRequest: {
    status: 12,
    note: "A private note",
    notifyRecipients: true,
  },
};

apiInstance.changeDocumentStatus(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentStatusChangeRequest** | **DocumentStatusChangeRequest**|  |
 **id** | [**string**] | Specify document ID. | defaults to undefined


### Return type

**void**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
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

# **createDocument**
> DocumentCreateResponse createDocument(documentCreateRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiCreateDocumentRequest = {
  // DocumentCreateRequest | Use a PandaDoc template or an existing PDF to create a document. See the creation request examples [by template](#/schemas/DocumentCreateByTemplateRequest) and [by pdf](#/schemas/DocumentCreateByPdfRequest) 
  documentCreateRequest: {
    name: "API Sample Document from PandaDoc Template",
    templateUuid: "hryJY9mqYZHjQCYQuSjRQg",
    folderUuid: "QMDSzwabfFzTgjW4kUijqQ",
    recipients: [
      {
        email: "josh@example.com",
        firstName: "Josh",
        lastName: "Ron",
        role: "user",
        signingOrder: 1,
      },
    ],
    tokens: [
      {
        name: "Favorite.Pet",
        value: "Panda",
      },
    ],
    fields: {},
    metadata: {},
    tags: ["created_via_api","test_document"],
    images: [
      {
        urls: ["https://s3.amazonaws.com/pd-static-content/public-docs/pandadoc-panda-bear.png"],
        name: "Image 1",
      },
    ],
    pricingTables: [
      {
        name: "Pricing Table 1",
        dataMerge: true,
        options: {
          currency: "USD",
          discount: {
            type: "absolute",
            name: "Global Discount",
            value: 2.26,
          },
          taxFirst: {
            type: "percent",
            name: "Tax First",
            value: 2.26,
          },
          taxSecond: {
            type: "percent",
            name: "Tax Second",
            value: 2.26,
          },
        },
        sections: [
          {
            title: "Sample Section",
            _default: true,
            multichoiceEnabled: false,
            rows: [
              {
                options: {
                  qtyEditable: true,
                  optionalSelected: true,
                  optional: true,
                },
                data: {
                  name: "Toy Panda",
                  description: "Fluffy!",
                  price: 10,
                  cost: 8.5,
                  qty: 3,
                  sku: "toy_panda",
                  discount: {
                    value: 7.5,
                    type: "percent",
                  },
                  taxFirst: {
                    value: 7.5,
                    type: "percent",
                  },
                  taxSecond: {
                    value: 7.5,
                    type: "percent",
                  },
                },
                customFields: {},
              },
            ],
          },
        ],
      },
    ],
    contentPlaceholders: [
      {
        blockId: "Content Placeholder 1",
        contentLibraryItems: [
          {
            id: "hryJY9mqYZHjQCYQuSjRQg",
            pricingTables: [
              {
                name: "Pricing Table 1",
                dataMerge: true,
                options: {
                  currency: "USD",
                  discount: {
                    type: "absolute",
                    name: "Global Discount",
                    value: 2.26,
                  },
                  taxFirst: {
                    type: "percent",
                    name: "Tax First",
                    value: 2.26,
                  },
                  taxSecond: {
                    type: "percent",
                    name: "Tax Second",
                    value: 2.26,
                  },
                },
                sections: [
                  {
                    title: "Sample Section",
                    _default: true,
                    multichoiceEnabled: false,
                    rows: [
                      {
                        options: {
                          qtyEditable: true,
                          optionalSelected: true,
                          optional: true,
                        },
                        data: {
                          name: "Toy Panda",
                          description: "Fluffy!",
                          price: 10,
                          cost: 8.5,
                          qty: 3,
                          sku: "toy_panda",
                          discount: {
                            value: 7.5,
                            type: "percent",
                          },
                          taxFirst: {
                            value: 7.5,
                            type: "percent",
                          },
                          taxSecond: {
                            value: 7.5,
                            type: "percent",
                          },
                        },
                        customFields: {},
                      },
                    ],
                  },
                ],
              },
            ],
            fields: {},
            recipients: [
              {
                email: "josh@example.com",
                firstName: "Josh",
                lastName: "Ron",
                role: "user",
                signingOrder: 1,
              },
            ],
          },
        ],
      },
    ],
    url: "https://s3.amazonaws.com/pd-static-content/public-docs/pandadoc-panda-bear.png",
    parseFormFields: true,
  },
  // string | Set this parameter as `ev1` if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace. (optional)
  editorVer: "ev2",
};

apiInstance.createDocument(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentCreateRequest** | **DocumentCreateRequest**| Use a PandaDoc template or an existing PDF to create a document. See the creation request examples [by template](#/schemas/DocumentCreateByTemplateRequest) and [by pdf](#/schemas/DocumentCreateByPdfRequest)  |
 **editorVer** | [**string**] | Set this parameter as &#x60;ev1&#x60; if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace. | (optional) defaults to undefined


### Return type

**DocumentCreateResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createDocumentLink**
> DocumentCreateLinkResponse createDocumentLink(documentCreateLinkRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiCreateDocumentLinkRequest = {
  // string | Document ID
  id: "ZPeAfcpzr9aiVs5vqUf6jg",
  // DocumentCreateLinkRequest
  documentCreateLinkRequest: {
    recipient: "josh@example.com",
    lifetime: 900,
  },
};

apiInstance.createDocumentLink(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentCreateLinkRequest** | **DocumentCreateLinkRequest**|  |
 **id** | [**string**] | Document ID | defaults to undefined


### Return type

**DocumentCreateLinkResponse**

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
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createLinkedObject**
> LinkedObjectCreateResponse createLinkedObject(linkedObjectCreateRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiCreateLinkedObjectRequest = {
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

# **deleteDocument**
> void deleteDocument()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiDeleteDocumentRequest = {
  // string | Document ID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.deleteDocument(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document ID | defaults to undefined


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
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deleteLinkedObject**
> void deleteLinkedObject()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiDeleteLinkedObjectRequest = {
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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **detailsDocument**
> DocumentDetailsResponse detailsDocument()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiDetailsDocumentRequest = {
  // string | Document ID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.detailsDocument(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document ID | defaults to undefined


### Return type

**DocumentDetailsResponse**

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

# **downloadDocument**
> HttpFile downloadDocument()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiDownloadDocumentRequest = {
  // string | Specify document ID.
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | HEX code (for example `#FF5733`). (optional)
  watermarkColor: "#FF5733",
  // number | Font size of the watermark. (optional)
  watermarkFontSize: 12,
  // number | In range 0.0-1.0 (optional)
  watermarkOpacity: 0.5,
  // string | Specify watermark text. (optional)
  watermarkText: "John Doe inc.",
};

apiInstance.downloadDocument(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specify document ID. | defaults to undefined
 **watermarkColor** | [**string**] | HEX code (for example &#x60;#FF5733&#x60;). | (optional) defaults to undefined
 **watermarkFontSize** | [**number**] | Font size of the watermark. | (optional) defaults to undefined
 **watermarkOpacity** | [**number**] | In range 0.0-1.0 | (optional) defaults to undefined
 **watermarkText** | [**string**] | Specify watermark text. | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


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

# **downloadProtectedDocument**
> HttpFile downloadProtectedDocument()

Download a signed PDF of a completed document

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiDownloadProtectedDocumentRequest = {
  // string | Specify document ID.
  id: "Mebvyy3NGsGBnY2rPLkH84",
};

apiInstance.downloadProtectedDocument(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specify document ID. | defaults to undefined


### Return type

**HttpFile**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listDocuments**
> DocumentListResponse listDocuments()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiListDocumentsRequest = {
  // string | Return results where the `date_completed` field (ISO 8601) is greater than or equal to this value. (optional)
  completedFrom: "2021-10-27T15:22:23.132757Z",
  // string | Return results where the `date_completed` field (ISO 8601) is less than or equal to this value. (optional)
  completedTo: "2021-10-27T15:22:23.132757Z",
  // string | Returns results where 'contact_id' is present in document as recipient or approver (optional)
  contactId: "9FeAY2NB3C9qDdtQRb4tTL",
  // number | Specify how many document results to return. Default is 50 documents, maximum is 100 documents. (optional)
  count: 50,
  // string | Return results where the `date_created` field (ISO 8601) is greater than or equal to this value. (optional)
  createdFrom: "2021-10-27T15:22:23.132757Z",
  // string | Return results where the `date_created` field (ISO 8601) is less than this value. (optional)
  createdTo: "2021-10-27T15:22:23.132757Z",
  // boolean | Returns only the deleted documents. (optional)
  deleted: true,
  // string (optional)
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | The UUID of the folder where the documents are stored. (optional)
  folderUuid: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Specify the form used for documents creation. This parameter can't be used with template_id. (optional)
  formId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Returns results where 'membership_id' is present in document as owner (should be member uuid) (optional)
  membershipId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Specify metadata to filter by in the format of `metadata_{metadata-key}={metadata-value}` such as `metadata_opportunity_id=2181432`. The `metadata_` prefix is always required. (optional)
  metadata: "metadata_example",
  // string | Return results where the `date_modified` field (iso-8601) is greater than or equal to this value. (optional)
  modifiedFrom: "2021-10-27T15:22:23.132757Z",
  // string | Return results where the `date_modified` field (iso-8601) is less than this value. (optional)
  modifiedTo: "2021-10-27T15:22:23.132757Z",
  // DocumentOrderingFieldsEnum | Specify the order of documents to return. Use `value` (for example, `date_created`) for ASC and `-value` (for example, `-date_created`) for DESC. (optional)
  orderBy: "name",
  // number | Specify which page of the dataset to return. (optional)
  page: 1,
  // string | Search query. Filter by document reference number (this token is stored on the template level) or name. (optional)
  q: "Sample Document",
  // DocumentStatusEnum | Specify the status of documents to return.   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined  (optional)
  status: 12,
  // DocumentStatusEnum | Specify the status of documents to return (exclude).   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined  (optional)
  statusNe: 12,
  // string | Search tag. Filter by document tag. (optional)
  tag: "tag_1",
  // string | Specify the template used for documents creation. Parameter can't be used with form_id. (optional)
  templateId: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.listDocuments(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **completedFrom** | [**string**] | Return results where the &#x60;date_completed&#x60; field (ISO 8601) is greater than or equal to this value. | (optional) defaults to undefined
 **completedTo** | [**string**] | Return results where the &#x60;date_completed&#x60; field (ISO 8601) is less than or equal to this value. | (optional) defaults to undefined
 **contactId** | [**string**] | Returns results where &#39;contact_id&#39; is present in document as recipient or approver | (optional) defaults to undefined
 **count** | [**number**] | Specify how many document results to return. Default is 50 documents, maximum is 100 documents. | (optional) defaults to undefined
 **createdFrom** | [**string**] | Return results where the &#x60;date_created&#x60; field (ISO 8601) is greater than or equal to this value. | (optional) defaults to undefined
 **createdTo** | [**string**] | Return results where the &#x60;date_created&#x60; field (ISO 8601) is less than this value. | (optional) defaults to undefined
 **deleted** | [**boolean**] | Returns only the deleted documents. | (optional) defaults to undefined
 **id** | [**string**] |  | (optional) defaults to undefined
 **folderUuid** | [**string**] | The UUID of the folder where the documents are stored. | (optional) defaults to undefined
 **formId** | [**string**] | Specify the form used for documents creation. This parameter can&#39;t be used with template_id. | (optional) defaults to undefined
 **membershipId** | [**string**] | Returns results where &#39;membership_id&#39; is present in document as owner (should be member uuid) | (optional) defaults to undefined
 **metadata** | [**string**] | Specify metadata to filter by in the format of &#x60;metadata_{metadata-key}&#x3D;{metadata-value}&#x60; such as &#x60;metadata_opportunity_id&#x3D;2181432&#x60;. The &#x60;metadata_&#x60; prefix is always required. | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Return results where the &#x60;date_modified&#x60; field (iso-8601) is greater than or equal to this value. | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Return results where the &#x60;date_modified&#x60; field (iso-8601) is less than this value. | (optional) defaults to undefined
 **orderBy** | **DocumentOrderingFieldsEnum** | Specify the order of documents to return. Use &#x60;value&#x60; (for example, &#x60;date_created&#x60;) for ASC and &#x60;-value&#x60; (for example, &#x60;-date_created&#x60;) for DESC. | (optional) defaults to undefined
 **page** | [**number**] | Specify which page of the dataset to return. | (optional) defaults to undefined
 **q** | [**string**] | Search query. Filter by document reference number (this token is stored on the template level) or name. | (optional) defaults to undefined
 **status** | **DocumentStatusEnum** | Specify the status of documents to return.   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined  | (optional) defaults to undefined
 **statusNe** | **DocumentStatusEnum** | Specify the status of documents to return (exclude).   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined  | (optional) defaults to undefined
 **tag** | [**string**] | Search tag. Filter by document tag. | (optional) defaults to undefined
 **templateId** | [**string**] | Specify the template used for documents creation. Parameter can&#39;t be used with form_id. | (optional) defaults to undefined


### Return type

**DocumentListResponse**

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
**403** | Permission error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listLinkedObjects**
> LinkedObjectListResponse listLinkedObjects()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiListLinkedObjectsRequest = {
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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **sendDocument**
> DocumentSendResponse sendDocument(documentSendRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiSendDocumentRequest = {
  // string | Document ID
  id: "ZPeAfcpzr9aiVs5vqUf6jg",
  // DocumentSendRequest
  documentSendRequest: {
    message: "Hello! This document was sent from the PandaDoc API",
    subject: "Please check this test API document from PandaDoc",
    silent: true,
  },
};

apiInstance.sendDocument(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentSendRequest** | **DocumentSendRequest**|  |
 **id** | [**string**] | Document ID | defaults to undefined


### Return type

**DocumentSendResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
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

# **statusDocument**
> DocumentStatusResponse statusDocument()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiStatusDocumentRequest = {
  // string | Specify document ID.
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.statusDocument(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specify document ID. | defaults to undefined


### Return type

**DocumentStatusResponse**

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

# **transferAllDocumentsOwnership**
> void transferAllDocumentsOwnership(documentTransferAllOwnershipRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiTransferAllDocumentsOwnershipRequest = {
  // DocumentTransferAllOwnershipRequest
  documentTransferAllOwnershipRequest: {
    fromMembershipId: "Dqsxp4jNnFcS63tJEgLJGN",
    toMembershipId: "radQBiBkU7MBk59NSgaGfd",
  },
};

apiInstance.transferAllDocumentsOwnership(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentTransferAllOwnershipRequest** | **DocumentTransferAllOwnershipRequest**|  |


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
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **transferDocumentOwnership**
> void transferDocumentOwnership(documentTransferOwnershipRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiTransferDocumentOwnershipRequest = {
  // string | Specify document ID.
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // DocumentTransferOwnershipRequest
  documentTransferOwnershipRequest: {
    membershipId: "radQBiBkU7MBk59NSgaGfd",
  },
};

apiInstance.transferDocumentOwnership(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentTransferOwnershipRequest** | **DocumentTransferOwnershipRequest**|  |
 **id** | [**string**] | Specify document ID. | defaults to undefined


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
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

