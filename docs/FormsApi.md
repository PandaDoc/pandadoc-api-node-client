# .FormsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listForm**](FormsApi.md#listForm) | **GET** /public/v1/forms | List Forms


# **listForm**
> FormListResponse listForm()

Retrieve a paginated list of forms with optional filtering and sorting options.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.FormsApi(configuration);

const body:pd_api.FormsApiListFormRequest = {
  // number | Specify how many forms to return. Default is 50 forms, maximum is 100 forms. (optional)
  count: 10,
  // number | Specify which page of the dataset to return. (optional)
  page: 1,
  // Array<'draft' | 'active' | 'disabled'> | Specify which status of the forms dataset to return. (optional)
  status: ["draft","active"],
  // 'name' | 'responses' | 'status' | 'created_date' | 'modified_date' | Specify the form dataset order to return. (optional)
  orderBy: "name",
  // boolean | Specify sorting the result-set in ascending or descending order. (optional)
  asc: true,
  // string | Specify the form name. (optional)
  name: "New Form",
};

apiInstance.listForm(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | [**number**] | Specify how many forms to return. Default is 50 forms, maximum is 100 forms. | (optional) defaults to undefined
 **page** | [**number**] | Specify which page of the dataset to return. | (optional) defaults to undefined
 **status** | **Array<&#39;draft&#39; &#124; &#39;active&#39; &#124; &#39;disabled&#39;>** | Specify which status of the forms dataset to return. | (optional) defaults to undefined
 **orderBy** | [**&#39;name&#39; | &#39;responses&#39; | &#39;status&#39; | &#39;created_date&#39; | &#39;modified_date&#39;**]**Array<&#39;name&#39; &#124; &#39;responses&#39; &#124; &#39;status&#39; &#124; &#39;created_date&#39; &#124; &#39;modified_date&#39;>** | Specify the form dataset order to return. | (optional) defaults to undefined
 **asc** | [**boolean**] | Specify sorting the result-set in ascending or descending order. | (optional) defaults to undefined
 **name** | [**string**] | Specify the form name. | (optional) defaults to undefined


### Return type

**FormListResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

