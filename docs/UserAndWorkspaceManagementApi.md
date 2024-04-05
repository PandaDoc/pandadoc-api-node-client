# .UserAndWorkspaceManagementApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMember**](UserAndWorkspaceManagementApi.md#addMember) | **POST** /public/v1/workspaces/{workspace_id}/members | Add member
[**createUser**](UserAndWorkspaceManagementApi.md#createUser) | **POST** /public/v1/users | Create User
[**createWorkspace**](UserAndWorkspaceManagementApi.md#createWorkspace) | **POST** /public/v1/workspaces | Create Workspace


# **addMember**
> AddMemberResponse addMember(addMemberRequest)


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
    role: "Admin",
  },
  // boolean | Send a confirmation email to the user that was added to workspace(s). (optional)
  notifyUser: true,
  // boolean | Send a confirmation email to all workspace admins indicating that the user has been added to the workspace. (optional)
  notifyWsAdmins: true,
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

# **createUser**
> CreateUserResponse createUser(createUserRequest)


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
        role: "Admin",
      },
    ],
    license: "Full",
  },
  // boolean | Send a confirmation email to the user that was added to workspace(s). (optional)
  notifyUser: true,
  // boolean | Send a confirmation email to all workspace admins indicating that the user has been added to the workspace. (optional)
  notifyWsAdmins: true,
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

