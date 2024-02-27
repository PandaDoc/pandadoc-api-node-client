# .TemplatesApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTemplate**](TemplatesApi.md#deleteTemplate) | **DELETE** /public/v1/templates/{id} | Delete Template
[**detailsTemplate**](TemplatesApi.md#detailsTemplate) | **GET** /public/v1/templates/{id}/details | Details Template
[**listTemplates**](TemplatesApi.md#listTemplates) | **GET** /public/v1/templates | List Templates


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

Return detailed data about a template.

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
  id: "EE8yUNg5HztqVAuH85He8V",
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

Optionally, filter by a search query or tags.

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
  // string | Optional search query. Filter by template name. (optional)
  q: "Sample onboarding template",
  // boolean | Returns only the shared templates. (optional)
  shared: true,
  // boolean | Optional. Returns only the deleted templates. (optional)
  deleted: true,
  // number | Optionally, specify how many templates to return. Default is 50 templates, maximum is 100 templates. (optional)
  count: 10,
  // number | Optionally, specify which page of the dataset to return. (optional)
  page: 1,
  // string | Optionally, specify template ID. (optional)
  id: "e9LxBesSL73AeZMzeYdfvV",
  // string | UUID of the folder where the templates are stored. (optional)
  folderUuid: "xDKHoJ8DkwhiTQSUzNveCJ",
  // Array<string> | Optional search tag. Filter by template tag. (optional)
  tag: [
    "tag_example",
  ],
  // string | A comma-separated list of additional fields to include in the response.  Each field must be a valid template property.  Currently, only one additional field, `content_date_modified`, is supported.  For example, `GET /templates?fields=content_date_modified`. (optional)
  fields: "fields_example",
};

apiInstance.listTemplates(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | Optional search query. Filter by template name. | (optional) defaults to undefined
 **shared** | [**boolean**] | Returns only the shared templates. | (optional) defaults to undefined
 **deleted** | [**boolean**] | Optional. Returns only the deleted templates. | (optional) defaults to undefined
 **count** | [**number**] | Optionally, specify how many templates to return. Default is 50 templates, maximum is 100 templates. | (optional) defaults to undefined
 **page** | [**number**] | Optionally, specify which page of the dataset to return. | (optional) defaults to undefined
 **id** | [**string**] | Optionally, specify template ID. | (optional) defaults to undefined
 **folderUuid** | [**string**] | UUID of the folder where the templates are stored. | (optional) defaults to undefined
 **tag** | **Array&lt;string&gt;** | Optional search tag. Filter by template tag. | (optional) defaults to undefined
 **fields** | [**string**] | A comma-separated list of additional fields to include in the response.  Each field must be a valid template property.  Currently, only one additional field, &#x60;content_date_modified&#x60;, is supported.  For example, &#x60;GET /templates?fields&#x3D;content_date_modified&#x60;. | (optional) defaults to undefined


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

