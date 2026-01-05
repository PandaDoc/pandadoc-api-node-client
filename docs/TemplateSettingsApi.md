# .TemplateSettingsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templateSettingsGet**](TemplateSettingsApi.md#templateSettingsGet) | **GET** /public/v2/templates/{template_id}/settings | Get template settings
[**templateSettingsUpdate**](TemplateSettingsApi.md#templateSettingsUpdate) | **PATCH** /public/v2/templates/{template_id}/settings | Update template settings


# **templateSettingsGet**
> TemplateSettingsResponse templateSettingsGet()

Retrieves the settings for a specified template. Only the language field is currently supported. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.TemplateSettingsApi(configuration);

const body:pd_api.TemplateSettingsApiTemplateSettingsGetRequest = {
  // string | Unique identifier of the template to retrieve settings for.
  templateId: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.templateSettingsGet(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | Unique identifier of the template to retrieve settings for. | defaults to undefined


### Return type

**TemplateSettingsResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved template settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **templateSettingsUpdate**
> TemplateSettingsResponse templateSettingsUpdate(updateTemplateSettingsRequest)

Updates the settings for a specified template. Only the language field is currently supported. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.TemplateSettingsApi(configuration);

const body:pd_api.TemplateSettingsApiTemplateSettingsUpdateRequest = {
  // string | Unique identifier of the template to update settings for.
  templateId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // UpdateTemplateSettingsRequest
  updateTemplateSettingsRequest: {
    language: "en-US",
  },
};

apiInstance.templateSettingsUpdate(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTemplateSettingsRequest** | **UpdateTemplateSettingsRequest**|  |
 **templateId** | [**string**] | Unique identifier of the template to update settings for. | defaults to undefined


### Return type

**TemplateSettingsResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated template settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

