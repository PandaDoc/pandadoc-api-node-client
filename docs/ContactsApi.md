# .ContactsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactCreate**](ContactsApi.md#contactCreate) | **POST** /public/v1/contacts | Create contact
[**contactDelete**](ContactsApi.md#contactDelete) | **DELETE** /public/v1/contacts/{id} | Delete contact by id
[**contactDetails**](ContactsApi.md#contactDetails) | **GET** /public/v1/contacts/{id} | Get contact details by id
[**contactList**](ContactsApi.md#contactList) | **GET** /public/v1/contacts | List contacts
[**contactUpdate**](ContactsApi.md#contactUpdate) | **PATCH** /public/v1/contacts/{id} | Update contact by id


# **contactCreate**
> ContactDetailsResponse contactCreate(contactCreateRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContactsApi(configuration);

const body:pd_api.ContactsApiContactCreateRequest = {
  // ContactCreateRequest
  contactCreateRequest: {
    email: "user01@pandadoc.com",
    firstName: "John",
    lastName: "Doe",
    company: "John Doe Inc.",
    jobTitle: "CTO",
    phone: "+14842634627",
    state: "Texas",
    streetAddress: "1313 Mockingbird Lane",
    city: "Austin",
    postalCode: "75001",
  },
};

apiInstance.contactCreate(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactCreateRequest** | **ContactCreateRequest**|  |


### Return type

**ContactDetailsResponse**

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

# **contactDelete**
> void contactDelete()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContactsApi(configuration);

const body:pd_api.ContactsApiContactDeleteRequest = {
  // string | Contact id.
  id: "SyoufNkJiHRn24LpuJ7RXb",
};

apiInstance.contactDelete(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Contact id. | defaults to undefined


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
**204** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Bad Request |  -  |
**403** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **contactDetails**
> ContactDetailsResponse contactDetails()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContactsApi(configuration);

const body:pd_api.ContactsApiContactDetailsRequest = {
  // string | Contact id.
  id: "SyoufNkJiHRn24LpuJ7RXb",
};

apiInstance.contactDetails(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Contact id. | defaults to undefined


### Return type

**ContactDetailsResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **contactList**
> Array<ContactDetailsResponse> contactList()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContactsApi(configuration);

let body:any = {};

apiInstance.contactList(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ContactDetailsResponse>**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **contactUpdate**
> ContactDetailsResponse contactUpdate(contactUpdateRequest)


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContactsApi(configuration);

const body:pd_api.ContactsApiContactUpdateRequest = {
  // string | Contact id.
  id: "SyoufNkJiHRn24LpuJ7RXb",
  // ContactUpdateRequest
  contactUpdateRequest: {
    email: "user01@pandadoc.com",
    firstName: "John",
    lastName: "Doe",
    company: "John Doe Inc.",
    jobTitle: "CTO",
    phone: "+14842634627",
    state: "Texas",
    streetAddress: "1313 Mockingbird Lane",
    city: "Austin",
    postalCode: "75001",
  },
};

apiInstance.contactUpdate(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactUpdateRequest** | **ContactUpdateRequest**|  |
 **id** | [**string**] | Contact id. | defaults to undefined


### Return type

**ContactDetailsResponse**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

