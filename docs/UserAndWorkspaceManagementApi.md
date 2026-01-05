# .UserAndWorkspaceManagementApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMember**](UserAndWorkspaceManagementApi.md#addMember) | **POST** /public/v1/workspaces/{workspace_id}/members | Add Member to Workspace
[**createApiKey**](UserAndWorkspaceManagementApi.md#createApiKey) | **POST** /public/v1/workspaces/{workspace_id}/api-keys | Create API Key
[**createUser**](UserAndWorkspaceManagementApi.md#createUser) | **POST** /public/v1/users | Create User
[**createWorkspace**](UserAndWorkspaceManagementApi.md#createWorkspace) | **POST** /public/v1/workspaces | Create Workspace
[**deactivateWorkspace**](UserAndWorkspaceManagementApi.md#deactivateWorkspace) | **POST** /public/v1/workspaces/{workspace_id}/deactivate | Deactivate Workspace
[**getWorkspacesList**](UserAndWorkspaceManagementApi.md#getWorkspacesList) | **GET** /public/v1/workspaces | List Workspaces
[**listUsers**](UserAndWorkspaceManagementApi.md#listUsers) | **GET** /public/v1/users | List Users
[**removeMember**](UserAndWorkspaceManagementApi.md#removeMember) | **DELETE** /public/v1/workspaces/{workspace_id}/members/{member_id} | Remove Member from Workspace


# **addMember**
> AddMemberResponse addMember(addMemberRequest)

Add an existing user to a workspace. - You must be an organization admin or a workspace admin to add members. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.UserAndWorkspaceManagementApi(configuration);

const body:pd_api.UserAndWorkspaceManagementApiAddMemberRequest = {
  // string
  workspaceId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // AddMemberRequest
  addMemberRequest: {
    userId: "2eWSKSvVqmuVCnuUK3iWwD",
    role: "Member",
  },
  // boolean | Send a confirmation email to the user that was added to workspace(s). (optional)
  notifyUser: true,
  // boolean | Send a confirmation email to all workspace admins indicating that the user has been added to the workspace. (optional)
  notifyWsAdmins: false,
};

apiInstance.addMember(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addMemberRequest** | **AddMemberRequest**|  |
 **workspaceId** | [**string**] |  | defaults to undefined
 **notifyUser** | [**boolean**] | Send a confirmation email to the user that was added to workspace(s). | (optional) defaults to undefined
 **notifyWsAdmins** | [**boolean**] | Send a confirmation email to all workspace admins indicating that the user has been added to the workspace. | (optional) defaults to undefined


### Return type

**AddMemberResponse**

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

# **createApiKey**
> CreateApiKeyResponse createApiKey(createApiKeyRequest)

Generate a new API key for the workspace. Check out [API Key Authentication article](https://developers.pandadoc.com/reference/api-key-authentication-process) for detailed API Keys description.  > 📘  > - Only an **Org Admin** can generate an API keys. > - To make another user a key\'s owner, pass `user_id` of this user. The user should has an **Admin** role in the workspace. > - Generating a new key invalidates existing key with the same type. Using this request, you can deactivate the key you\'re using for the request. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.UserAndWorkspaceManagementApi(configuration);

const body:pd_api.UserAndWorkspaceManagementApiCreateApiKeyRequest = {
  // string | Workspace id.
  workspaceId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // CreateApiKeyRequest
  createApiKeyRequest: {
    userId: "2eWSKSvVqmuVCnuUK3iWwD",
    type: "sandbox",
  },
};

apiInstance.createApiKey(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createApiKeyRequest** | **CreateApiKeyRequest**|  |
 **workspaceId** | [**string**] | Workspace id. | defaults to undefined


### Return type

**CreateApiKeyResponse**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createUser**
> CreateUserResponse createUser(createUserRequest)

Create users, and assign them roles, licenses, and workspaces.  - You must be an organization admin to create users. - We check that the user email domain matches your organization domain. - We check that the user email and phone number have a valid format. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.UserAndWorkspaceManagementApi(configuration);

const body:pd_api.UserAndWorkspaceManagementApiCreateUserRequest = {
  // CreateUserRequest
  createUserRequest: {
    user: {
      email: "email@example.com",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "+14842634627",
    },
    workspaces: [
      {
        workspaceId: "2eWSKSvVqmuVCnuUK3iWwD",
        role: "Member",
      },
    ],
    license: "Full",
  },
  // boolean | Send a confirmation email to the user that was added to workspace(s). (optional)
  notifyUser: true,
  // boolean | Send a confirmation email to all workspace admins indicating that the user has been added to the workspace. (optional)
  notifyWsAdmins: false,
};

apiInstance.createUser(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserRequest** | **CreateUserRequest**|  |
 **notifyUser** | [**boolean**] | Send a confirmation email to the user that was added to workspace(s). | (optional) defaults to undefined
 **notifyWsAdmins** | [**boolean**] | Send a confirmation email to all workspace admins indicating that the user has been added to the workspace. | (optional) defaults to undefined


### Return type

**CreateUserResponse**

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

# **createWorkspace**
> CreateWorkspaceResponse createWorkspace(createWorkspaceRequest)

Create a workspace in your organization.  - You need to be an Org Admin to create a workspace. - You will be added to the new workspace with an Admin role. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.UserAndWorkspaceManagementApi(configuration);

const body:pd_api.UserAndWorkspaceManagementApiCreateWorkspaceRequest = {
  // CreateWorkspaceRequest
  createWorkspaceRequest: {
    name: "A new workspace",
  },
};

apiInstance.createWorkspace(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWorkspaceRequest** | **CreateWorkspaceRequest**|  |


### Return type

**CreateWorkspaceResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deactivateWorkspace**
> any deactivateWorkspace()

Deactivate the workspace, remove all the members from it and make it  unavailable. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.UserAndWorkspaceManagementApi(configuration);

const body:pd_api.UserAndWorkspaceManagementApiDeactivateWorkspaceRequest = {
  // string
  workspaceId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // any (optional)
  body: {},
};

apiInstance.deactivateWorkspace(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **workspaceId** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace was deactivated successfully. |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getWorkspacesList**
> ListWorkspacesResponse getWorkspacesList()

Get a list of all the active workspaces in the organization. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.UserAndWorkspaceManagementApi(configuration);

const body:pd_api.UserAndWorkspaceManagementApiGetWorkspacesListRequest = {
  // number | Number of elements in page. (optional)
  count: 10,
  // number | Page number. (optional)
  page: 1,
};

apiInstance.getWorkspacesList(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | [**number**] | Number of elements in page. | (optional) defaults to 50
 **page** | [**number**] | Page number. | (optional) defaults to 1


### Return type

**ListWorkspacesResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page of workspaces |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listUsers**
> ListUsersResponse listUsers()

Get a list of all users with membership in your organization, with their contact information, license type, and workspace roles.  You must be an organization admin to list users. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.UserAndWorkspaceManagementApi(configuration);

const body:pd_api.UserAndWorkspaceManagementApiListUsersRequest = {
  // number | Number of elements in page. (optional)
  count: 10,
  // number | Page number. (optional)
  page: 1,
  // boolean | Filter option - show users with removed memberships. (optional)
  showRemoved: false,
};

apiInstance.listUsers(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | [**number**] | Number of elements in page. | (optional) defaults to 50
 **page** | [**number**] | Page number. | (optional) defaults to 1
 **showRemoved** | [**boolean**] | Filter option - show users with removed memberships. | (optional) defaults to true


### Return type

**ListUsersResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page of users. |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **removeMember**
> void removeMember()

This operation removes a specified member from a workspace by providing the workspace ID and member ID.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.UserAndWorkspaceManagementApi(configuration);

const body:pd_api.UserAndWorkspaceManagementApiRemoveMemberRequest = {
  // string | Workspace id
  workspaceId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Member id
  memberId: "nPh2PDhFdDqAES9k64h9qX",
};

apiInstance.removeMember(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | [**string**] | Workspace id | defaults to undefined
 **memberId** | [**string**] | Member id | defaults to undefined


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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Bad Request |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

