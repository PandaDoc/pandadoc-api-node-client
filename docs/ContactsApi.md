# .ContactsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](ContactsApi.md#createContact) | **POST** /public/v1/contacts | Create contact
[**deleteContact**](ContactsApi.md#deleteContact) | **DELETE** /public/v1/contacts/{id} | Delete Contact
[**detailsContact**](ContactsApi.md#detailsContact) | **GET** /public/v1/contacts/{id} | Contact Details
[**listContacts**](ContactsApi.md#listContacts) | **GET** /public/v1/contacts | List contacts
[**updateContact**](ContactsApi.md#updateContact) | **PATCH** /public/v1/contacts/{id} | Update Contact


# **createContact**
> ContactDetailsResponse createContact(contactCreateRequest)

This method adds a contact into a contacts list.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContactsApi(configuration);

const body:pd_api.ContactsApiCreateContactRequest = {
  // ContactCreateRequest
  contactCreateRequest: {
    email: "user01@pandadoc.com",
    firstName: "John",
    lastName: "Doe",
    company: "John Doe Inc.",
    jobTitle: "CTO",
    phone: "+14842634627",
    country: "USA",
    state: "Texas",
    streetAddress: "1313 Mockingbird Lane",
    city: "Austin",
    postalCode: "75001",
  },
};

apiInstance.createContact(body).then((data) => {
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

# **deleteContact**
> void deleteContact()

This method deletes a contact.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContactsApi(configuration);

const body:pd_api.ContactsApiDeleteContactRequest = {
  // string | Contact id.
  id: "SyoufNkJiHRn24LpuJ7RXb",
};

apiInstance.deleteContact(body).then((data) => {
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

# **detailsContact**
> ContactDetailsResponse detailsContact()

Returns contact details by its ID.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContactsApi(configuration);

const body:pd_api.ContactsApiDetailsContactRequest = {
  // string | Contact id.
  id: "SyoufNkJiHRn24LpuJ7RXb",
};

apiInstance.detailsContact(body).then((data) => {
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

# **listContacts**
> ContactListResponse listContacts()

This method returns a list of contacts associated with a workspace.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContactsApi(configuration);

const body:pd_api.ContactsApiListContactsRequest = {
  // string | Optional search parameter. Filter results by exact match. (optional)
  email: "",
};

apiInstance.listContacts(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] | Optional search parameter. Filter results by exact match. | (optional) defaults to undefined


### Return type

**ContactListResponse**

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

# **updateContact**
> ContactDetailsResponse updateContact(contactUpdateRequest)

This method updates a contact details.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ContactsApi(configuration);

const body:pd_api.ContactsApiUpdateContactRequest = {
  // string | Contact id.
  id: "SyoufNkJiHRn24LpuJ7RXb",
  // ContactUpdateRequest
  contactUpdateRequest: {
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

apiInstance.updateContact(body).then((data) => {
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

