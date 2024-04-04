# .SectionsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSections**](SectionsApi.md#listSections) | **GET** /public/v1/documents/{document_id}/sections | List sections
[**sectionDetails**](SectionsApi.md#sectionDetails) | **GET** /public/v1/documents/{document_id}/sections/uploads/{upload_id} | Section details
[**sectionInfo**](SectionsApi.md#sectionInfo) | **GET** /public/v1/documents/{document_id}/sections/{section_id} | Section Info
[**uploadSection**](SectionsApi.md#uploadSection) | **POST** /public/v1/documents/{document_id}/sections/uploads | Upload section


# **listSections**
> UploadSectionListResponse listSections()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.SectionsApi(configuration);

const body:pd_api.SectionsApiListSectionsRequest = {
  // string | Document ID
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.listSections(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | Document ID | defaults to undefined


### Return type

**UploadSectionListResponse**

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

# **sectionDetails**
> UploadSectionStatusResponse sectionDetails()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.SectionsApi(configuration);

const body:pd_api.SectionsApiSectionDetailsRequest = {
  // string | Document ID
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Upload ID
  uploadId: "LQ6cUT7xevPLUEgJeF8Zrm",
};

apiInstance.sectionDetails(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | Document ID | defaults to undefined
 **uploadId** | [**string**] | Upload ID | defaults to undefined


### Return type

**UploadSectionStatusResponse**

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
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **sectionInfo**
> SectionInfoResponse sectionInfo()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.SectionsApi(configuration);

const body:pd_api.SectionsApiSectionInfoRequest = {
  // string | Document ID
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Section ID
  sectionId: "LQ6cUT7xevPLUEgJeF8Zrm",
};

apiInstance.sectionInfo(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | Document ID | defaults to undefined
 **sectionId** | [**string**] | Section ID | defaults to undefined


### Return type

**SectionInfoResponse**

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
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **uploadSection**
> UploadSectionResponse uploadSection(uploadSectionRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.SectionsApi(configuration);

const body:pd_api.SectionsApiUploadSectionRequest = {
  // string | Document ID
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // UploadSectionRequest | Use a PandaDoc template or an existing PDF to upload a section. See the creation request examples [by template](/schemas/UploadSectionByTemplateRequest) and [by pdf](/schemas/UploadSectionByPdfRequest) 
  uploadSectionRequest: {
    name: "API Sample Section from PandaDoc Template",
    templateUuid: "hryJY9mqYZHjQCYQuSjRQg",
    recipients: [
      {
        email: "josh@example.com",
        phone: "+14842634627",
        deliveryMethods: {
          email: true,
          sms: false,
        },
        firstName: "Josh",
        lastName: "Ron",
        role: "user",
        signingOrder: 1,
        redirect: {
          isEnabled: true,
          url: "https://example.com",
        },
      },
    ],
    tokens: [
      {
        name: "Favorite.Pet",
        value: "Panda",
      },
    ],
    fields: {},
    tags: ["created_via_api","test_document"],
    pricingTables: [
      {
        name: "Pricing Table 1",
        dataMerge: true,
        options: {},
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
                data: {},
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
                options: {},
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
                        data: {},
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
                phone: "+14842634627",
                deliveryMethods: {
                  email: true,
                  sms: false,
                },
                firstName: "Josh",
                lastName: "Ron",
                role: "user",
                signingOrder: 1,
                redirect: {
                  isEnabled: true,
                  url: "https://example.com",
                },
              },
            ],
          },
        ],
      },
    ],
    url: "https://s3.amazonaws.com/pd-static-content/public-docs/pandadoc-panda-bear.png",
    parseFormFields: true,
  },
  // 'document' | 'upload' | Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID.  (optional)
  mergeFieldScope: "document",
};

apiInstance.uploadSection(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadSectionRequest** | **UploadSectionRequest**| Use a PandaDoc template or an existing PDF to upload a section. See the creation request examples [by template](/schemas/UploadSectionByTemplateRequest) and [by pdf](/schemas/UploadSectionByPdfRequest)  |
 **documentId** | [**string**] | Document ID | defaults to undefined
 **mergeFieldScope** | [**&#39;document&#39; | &#39;upload&#39;**]**Array<&#39;document&#39; &#124; &#39;upload&#39;>** | Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID.  | (optional) defaults to undefined


### Return type

**UploadSectionResponse**

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

