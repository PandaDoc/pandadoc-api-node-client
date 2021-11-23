# .DocumentsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDocument**](DocumentsApi.md#deleteDocument) | **DELETE** /public/v1/documents/{id} | Delete document by id
[**documentCreate**](DocumentsApi.md#documentCreate) | **POST** /public/v1/documents | Create document
[**documentCreateLink**](DocumentsApi.md#documentCreateLink) | **POST** /public/v1/documents/{id}/session | Create a Document Link
[**documentDetails**](DocumentsApi.md#documentDetails) | **GET** /public/v1/documents/{id}/details | Document details
[**documentList**](DocumentsApi.md#documentList) | **GET** /public/v1/documents | List documents
[**documentStatus**](DocumentsApi.md#documentStatus) | **GET** /public/v1/documents/{id} | Document status
[**downloadDocument**](DocumentsApi.md#downloadDocument) | **GET** /public/v1/documents/{id}/download | Document download
[**downloadProtectedDocument**](DocumentsApi.md#downloadProtectedDocument) | **GET** /public/v1/documents/{id}/download-protected | Download document protected
[**linkedObjectDelete**](DocumentsApi.md#linkedObjectDelete) | **DELETE** /public/v1/documents/{id}/linked-objects/{linked_object_id} | Delete Linked Object
[**linkedObjectList**](DocumentsApi.md#linkedObjectList) | **GET** /public/v1/documents/{id}/linked-objects | List Linked Objects
[**linkedObjectsCreate**](DocumentsApi.md#linkedObjectsCreate) | **POST** /public/v1/documents/{id}/linked-objects | Create Linked Object
[**sendDocument**](DocumentsApi.md#sendDocument) | **POST** /public/v1/documents/{id}/send | Send Document


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
  id: "id_example",
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **documentCreate**
> DocumentCreateResponse documentCreate()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiDocumentCreateRequest = {
  // string | Set this parameter as `ev1` if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace. (optional)
  editorVer: "ev1",
  // InlineObject (optional)
  inlineObject: {
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
        name: "Pricing Table",
        options: {
          currency: "USD",
          discount: {
            isGlobal: true,
            type: "absolute",
            name: "Global Discount",
            value: 2.26,
          },
          taxFirst: {
            isGlobal: true,
            type: "percent",
            name: "Tax First",
            value: 2.26,
          },
          taxSecond: {
            isGlobal: true,
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
        blockId: "hryJY9mqYZHjQCYQuSjRQg",
        contentLibraryItems: [
          {
            id: "hryJY9mqYZHjQCYQuSjRQg",
            pricingTables: [
              {
                name: "Pricing Table",
                options: {
                  currency: "USD",
                  discount: {
                    isGlobal: true,
                    type: "absolute",
                    name: "Global Discount",
                    value: 2.26,
                  },
                  taxFirst: {
                    isGlobal: true,
                    type: "percent",
                    name: "Tax First",
                    value: 2.26,
                  },
                  taxSecond: {
                    isGlobal: true,
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
              {},
            ],
          },
        ],
      },
    ],
    url: "https://s3.amazonaws.com/pd-static-content/public-docs/pandadoc-panda-bear.png",
    parseFormFields: true,
  },
};

apiInstance.documentCreate(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | **InlineObject**|  |
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **documentCreateLink**
> DocumentCreateLinkResponse documentCreateLink(documentCreateLinkRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiDocumentCreateLinkRequest = {
  // string | Document ID
  id: "id_example",
  // DocumentCreateLinkRequest
  documentCreateLinkRequest: null,
};

apiInstance.documentCreateLink(body).then((data) => {
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **documentDetails**
> DocumentDetailsResponse documentDetails()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiDocumentDetailsRequest = {
  // string | Document ID
  id: "id_example",
};

apiInstance.documentDetails(body).then((data) => {
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **documentList**
> DocumentListResponse documentList()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiDocumentListRequest = {
  // string | Return results where the `date_completed` field (ISO 8601) is greater than or equal to this value. (optional)
  completedFrom: "2021-10-27T15:22:23.132757Z",
  // string | Return results where the `date_completed` field (ISO 8601) is less than or equal to this value. (optional)
  completedTo: "2021-10-27T15:22:23.132757Z",
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
  status: 0,
  // DocumentStatusEnum | Specify the status of documents to return (exclude).   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined  (optional)
  statusNe: 0,
  // string | Search tag. Filter by document tag. (optional)
  tag: "tag_1",
  // string | Specify the template used for documents creation. Parameter can't be used with form_id. (optional)
  templateId: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.documentList(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **completedFrom** | [**string**] | Return results where the &#x60;date_completed&#x60; field (ISO 8601) is greater than or equal to this value. | (optional) defaults to undefined
 **completedTo** | [**string**] | Return results where the &#x60;date_completed&#x60; field (ISO 8601) is less than or equal to this value. | (optional) defaults to undefined
 **count** | [**number**] | Specify how many document results to return. Default is 50 documents, maximum is 100 documents. | (optional) defaults to undefined
 **createdFrom** | [**string**] | Return results where the &#x60;date_created&#x60; field (ISO 8601) is greater than or equal to this value. | (optional) defaults to undefined
 **createdTo** | [**string**] | Return results where the &#x60;date_created&#x60; field (ISO 8601) is less than this value. | (optional) defaults to undefined
 **deleted** | [**boolean**] | Returns only the deleted documents. | (optional) defaults to undefined
 **id** | [**string**] |  | (optional) defaults to undefined
 **folderUuid** | [**string**] | The UUID of the folder where the documents are stored. | (optional) defaults to undefined
 **formId** | [**string**] | Specify the form used for documents creation. This parameter can&#39;t be used with template_id. | (optional) defaults to undefined
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
**401** | Bad Request |  -  |
**403** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **documentStatus**
> DocumentStatusResponse documentStatus()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiDocumentStatusRequest = {
  // string | Specify document ID.
  id: "id_example",
};

apiInstance.documentStatus(body).then((data) => {
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

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
  id: "id_example",
  // string | HEX code (for example `#RRGGBB`). (optional)
  watermarkColor: "watermark_color_example",
  // number | Font size of the watermark. (optional)
  watermarkFontSize: 1,
  // number | In range 0.0-1.0 (optional)
  watermarkOpacity: 3.14,
  // string | Specify watermark text. (optional)
  watermarkText: "watermark_text_example",
};

apiInstance.downloadDocument(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Specify document ID. | defaults to undefined
 **watermarkColor** | [**string**] | HEX code (for example &#x60;#RRGGBB&#x60;). | (optional) defaults to undefined
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **linkedObjectDelete**
> void linkedObjectDelete()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiLinkedObjectDeleteRequest = {
  // string | Specify document ID.
  id: "id_example",
  // string | Specify linked object ID.
  linkedObjectId: "linked_object_id_example",
};

apiInstance.linkedObjectDelete(body).then((data) => {
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **linkedObjectList**
> LinkedObjectListResponse linkedObjectList()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiLinkedObjectListRequest = {
  // string | Specify document ID.
  id: "id_example",
};

apiInstance.linkedObjectList(body).then((data) => {
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **linkedObjectsCreate**
> LinkedObjectCreateResponse linkedObjectsCreate(linkedObjectCreateRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentsApi(configuration);

const body:pd_api.DocumentsApiLinkedObjectsCreateRequest = {
  // string | Specify document ID.
  id: "id_example",
  // LinkedObjectCreateRequest
  linkedObjectCreateRequest: null,
};

apiInstance.linkedObjectsCreate(body).then((data) => {
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendDocument**
> DocumentSendResponse sendDocument()


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
  id: "id_example",
  // DocumentSendRequest (optional)
  documentSendRequest: null,
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

