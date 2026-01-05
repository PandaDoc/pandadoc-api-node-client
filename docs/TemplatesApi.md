# .TemplatesApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTemplate**](TemplatesApi.md#createTemplate) | **POST** /public/v1/templates | Create Template
[**createTemplateEditingSession**](TemplatesApi.md#createTemplateEditingSession) | **POST** /public/v1/templates/{id}/editing-sessions | Create Template Editing Session 
[**createTemplateWithUpload**](TemplatesApi.md#createTemplateWithUpload) | **POST** /public/v1/templates?upload | Create Template from File Upload
[**deleteTemplate**](TemplatesApi.md#deleteTemplate) | **DELETE** /public/v1/templates/{id} | Delete Template
[**detailsTemplate**](TemplatesApi.md#detailsTemplate) | **GET** /public/v1/templates/{id}/details | Template Details
[**listTemplates**](TemplatesApi.md#listTemplates) | **GET** /public/v1/templates | List Templates
[**statusTemplate**](TemplatesApi.md#statusTemplate) | **GET** /public/v1/templates/{id} | Template Status
[**updateTemplate**](TemplatesApi.md#updateTemplate) | **PATCH** /public/v1/templates/{id} | Template Update


# **createTemplate**
> TemplateCreateResponse createTemplate(createTemplateFromUrlRequest)

This operation allows you to create a new template by providing the necessary template details.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.TemplatesApi(configuration);

const body:pd_api.TemplatesApiCreateTemplateRequest = {
  // CreateTemplateFromUrlRequest
  createTemplateFromUrlRequest: null,
  // Array<'content_date_modified'> | A comma-separated list of additional fields to include in the response. (optional)
  fields: ["content_date_modified"],
};

apiInstance.createTemplate(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTemplateFromUrlRequest** | **CreateTemplateFromUrlRequest**|  |
 **fields** | **Array<&#39;content_date_modified&#39;>** | A comma-separated list of additional fields to include in the response. | (optional) defaults to undefined


### Return type

**TemplateCreateResponse**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createTemplateEditingSession**
> CreateTemplateEditingSession201Response createTemplateEditingSession(editingSessionRequest)

Creates a new editing session for the Embedded Editor. The response includes an E-Token, which is required to open the template.  #### Limitations  - **Single Active Session per User-Template Pair**    Only one editing session can be active at a time for a specific user and template. Creating a new session for the same user-template pair will automatically invalidate the previous one.  - **Weekly Session Cap**    A maximum of **250** editing sessions can be created for a single template per week. Any attempt to exceed this limit will result in a `403 Forbidden` error. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.TemplatesApi(configuration);

const body:pd_api.TemplatesApiCreateTemplateEditingSessionRequest = {
  // string | Template ID
  id: "a53a2f96b91d47f99ee33f",
  // EditingSessionRequest
  editingSessionRequest: {
    email: "john.doe@pandadoc.com",
    lifetime: 3600,
  },
};

apiInstance.createTemplateEditingSession(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editingSessionRequest** | **EditingSessionRequest**|  |
 **id** | [**string**] | Template ID | defaults to undefined


### Return type

**CreateTemplateEditingSession201Response**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Template Editing Session created |  -  |
**400** | Bad request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createTemplateWithUpload**
> TemplateCreateResponse createTemplateWithUpload()

This asynchronous endpoint allows users to create a new template by uploading a file.  The uploaded file is processed in the background to generate the template. The maximum allowable file size for upload is 100 MB. Field tags and form fields are not supported yet.  Once the file is uploaded, the processing will happen asynchronously, and users need to check [the status of the template](https://developers.pandadoc.com/reference/template-status) creation. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.TemplatesApi(configuration);

const body:pd_api.TemplatesApiCreateTemplateWithUploadRequest = {
  // Array<'content_date_modified'> | A comma-separated list of additional fields to include in the response. (optional)
  fields: ["content_date_modified"],
  // HttpFile | Binary PDF/DocX/RTF File. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // CreateTemplateRequest | JSON as a multipart/form-data string. (optional)
  data: null,
};

apiInstance.createTemplateWithUpload(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **Array<&#39;content_date_modified&#39;>** | A comma-separated list of additional fields to include in the response. | (optional) defaults to undefined
 **file** | [**HttpFile**] | Binary PDF/DocX/RTF File. | (optional) defaults to undefined
 **data** | **CreateTemplateRequest** | JSON as a multipart/form-data string. | (optional) defaults to undefined


### Return type

**TemplateCreateResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deleteTemplate**
> void deleteTemplate()

Delete a template

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.TemplatesApi(configuration);

const body:pd_api.TemplatesApiDeleteTemplateRequest = {
  // string | Template ID
  id: "EE8yUNg5HztqVAuH85He8V",
};

apiInstance.deleteTemplate(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Template ID | defaults to undefined


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
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **detailsTemplate**
> TemplateDetailsResponse detailsTemplate()

Get details about a template by `id`. Details include:  - Basic template information (name, author, etc) - Roles - All fields with values - All tokens with values - Pricing information (pricing tables, products, quotes) - Template metadata - Template tags - Content placeholders - Modification timestamps. Note that `date_modified` means any changes associated with the template roles, while `content_date_modified` logs any changes in the template content. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.TemplatesApi(configuration);

const body:pd_api.TemplatesApiDetailsTemplateRequest = {
  // string | Template ID
  id: "vibuun3DXG8QDDLfXm27Ne",
};

apiInstance.detailsTemplate(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Template ID | defaults to undefined


### Return type

**TemplateDetailsResponse**

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

# **listTemplates**
> TemplateListResponse listTemplates()

Retrieves a list of templates. You can filter results by a search query, tags, or fields.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.TemplatesApi(configuration);

const body:pd_api.TemplatesApiListTemplatesRequest = {
  // string | Search query. Filter by template name. (optional)
  q: "Sample onboarding template",
  // boolean | Returns only the shared templates. (optional)
  shared: false,
  // boolean | Returns only the deleted templates. (optional)
  deleted: false,
  // number | Specify how many templates to return. (optional)
  count: 10,
  // number | Specify which page of the dataset to return. (optional)
  page: 1,
  // string | Specify template ID. (optional)
  id: "e9LxBesSL73AeZMzeYdfvV",
  // string | UUID of the folder where the templates are stored. (optional)
  folderUuid: "xDKHoJ8DkwhiTQSUzNveCJ",
  // Array<string> | Search tag. Filter by template tag. (optional)
  tag: ["onboarding"],
  // Array<'content_date_modified'> | A comma-separated list of additional fields to include in the response. (optional)
  fields: ["content_date_modified"],
};

apiInstance.listTemplates(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | Search query. Filter by template name. | (optional) defaults to undefined
 **shared** | [**boolean**] | Returns only the shared templates. | (optional) defaults to undefined
 **deleted** | [**boolean**] | Returns only the deleted templates. | (optional) defaults to undefined
 **count** | [**number**] | Specify how many templates to return. | (optional) defaults to 50
 **page** | [**number**] | Specify which page of the dataset to return. | (optional) defaults to undefined
 **id** | [**string**] | Specify template ID. | (optional) defaults to undefined
 **folderUuid** | [**string**] | UUID of the folder where the templates are stored. | (optional) defaults to undefined
 **tag** | **Array&lt;string&gt;** | Search tag. Filter by template tag. | (optional) defaults to undefined
 **fields** | **Array<&#39;content_date_modified&#39;>** | A comma-separated list of additional fields to include in the response. | (optional) defaults to undefined


### Return type

**TemplateListResponse**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **statusTemplate**
> TemplateStatusResponse statusTemplate()

## Available Template Statuses  The following is a complete list of all possible template statuses returned:  | Template Status      | Status Description                                                                                                                      | | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | | `template.UPLOADED`  | The template upload process has been initiated and is currently in progress. It will soon transition to the `template.PROCESSED` state. | | `template.PROCESSED` | The template has been successfully uploaded and created. At this stage, all aspects of the template are editable.                       | | `template.ERROR`     | The template upload process has failed. Please refer to the error details in the response for more information.                         | 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.TemplatesApi(configuration);

const body:pd_api.TemplatesApiStatusTemplateRequest = {
  // string | Template ID
  id: "vibuun3DXG8QDDLfXm27Ne",
};

apiInstance.statusTemplate(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Template ID | defaults to undefined


### Return type

**TemplateStatusResponse**

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

# **updateTemplate**
> void updateTemplate(templateUpdateRequest)

> 🚧 Template status >  > You can only update a template in the PROCESSED status (`template.PROCESSED`).  >  > After creating a new template, it usually retains a `template.uploaded` status for 3-5 seconds while the template syncs across PandaDoc servers. When the template is available for further API calls, the template moves to the `template.PROCESSED` state. Use [Template Status](https://developers.pandadoc.com/reference/template-status) or Webhooks to check template status. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.TemplatesApi(configuration);

const body:pd_api.TemplatesApiUpdateTemplateRequest = {
  // string | Template ID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // TemplateUpdateRequest
  templateUpdateRequest: {
    tokens: [
      {
        name: "Favorite.Pet",
        value: "Panda",
      },
    ],
  },
};

apiInstance.updateTemplate(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateUpdateRequest** | **TemplateUpdateRequest**|  |
 **id** | [**string**] | Template ID | defaults to undefined


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

