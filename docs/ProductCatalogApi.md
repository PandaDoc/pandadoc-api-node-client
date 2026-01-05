# .ProductCatalogApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCatalogItem**](ProductCatalogApi.md#createCatalogItem) | **POST** /public/v2/product-catalog/items | Create Catalog Item
[**deleteCatalogItem**](ProductCatalogApi.md#deleteCatalogItem) | **DELETE** /public/v2/product-catalog/items/{item_uuid} | Delete Catalog Item
[**getCatalogItem**](ProductCatalogApi.md#getCatalogItem) | **GET** /public/v2/product-catalog/items/{item_uuid} | Catalog Item Details
[**searchCatalogItems**](ProductCatalogApi.md#searchCatalogItems) | **GET** /public/v2/product-catalog/items/search | List Catalog Items Search
[**updateCatalogItem**](ProductCatalogApi.md#updateCatalogItem) | **PATCH** /public/v2/product-catalog/items/{item_uuid} | Update Catalog Item


# **createCatalogItem**
> ProductCatalogItemResponse createCatalogItem(productCatalogItemRequest)

Create a new catalog item.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ProductCatalogApi(configuration);

const body:pd_api.ProductCatalogApiCreateCatalogItemRequest = {
  // ProductCatalogItemRequest
  productCatalogItemRequest: {
    title: "title_example",
    categoryId: "categoryId_example",
    sku: "sku_example",
    description: "description_example",
    type: "regular",
    bundleItems: [
      {
        quantity: 1,
        itemOrUuid: null,
      },
    ],
    images: [
      {
        isMain: true,
        order: 3.14,
        src: "src_example",
      },
    ],
    customFields: [
      {
        name: "name_example",
        value: "value_example",
      },
    ],
    priceConfiguration: {
      currency: "USD",
      price: 59.99,
      cost: 3.14,
      billingType: "billingType_example",
      billingCycle: "billingCycle_example",
      tiers: [
        {
          value: 9.99,
          minQty: 1,
        },
      ],
      pricingMethod: 0,
    },
  },
};

apiInstance.createCatalogItem(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCatalogItemRequest** | **ProductCatalogItemRequest**|  |


### Return type

**ProductCatalogItemResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created a new catalog item |  -  |
**403** | Permission error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deleteCatalogItem**
> void deleteCatalogItem()

Delete catalog item.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ProductCatalogApi(configuration);

const body:pd_api.ProductCatalogApiDeleteCatalogItemRequest = {
  // string | Catalog item UUID
  itemUuid: "2e39c7e0-acb0-4ff2-b4cd-ea3141f95db8",
};

apiInstance.deleteCatalogItem(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemUuid** | [**string**] | Catalog item UUID | defaults to undefined


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
**200** | No content |  -  |
**403** | Permission error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getCatalogItem**
> ProductCatalogItemResponse getCatalogItem()

Get catalog item.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ProductCatalogApi(configuration);

const body:pd_api.ProductCatalogApiGetCatalogItemRequest = {
  // string | Catalog item UUID
  itemUuid: "2e39c7e0-acb0-4ff2-b4cd-ea3141f95db8",
};

apiInstance.getCatalogItem(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemUuid** | [**string**] | Catalog item UUID | defaults to undefined


### Return type

**ProductCatalogItemResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Catalog Item |  -  |
**403** | Permission error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **searchCatalogItems**
> ListCatalogItemsSearchResponse searchCatalogItems()

This method searches for items in your [product catalog](https://support.pandadoc.com/en/articles/9714691-product-catalog).  Use the `query` parameter to search in title, SKU, description, category name, custom fields name and value. You can also search for items by their type, billing type, and category id.  Order search results, in both ascending and descending order, by these item properties:  - SKU - Name - Price - Modification date  Use the `exclude_uuids` parameter to exclude particular uuids from the search request. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ProductCatalogApi(configuration);

const body:pd_api.ProductCatalogApiSearchCatalogItemsRequest = {
  // number | Page number. (optional)
  page: 1,
  // number | Items per page. (optional)
  perPage: 10,
  // string | Search query. Searches the following fields: Title, SKU, description, category name, custom fields name and value.  (optional)
  query: "coffee",
  // 'sku' | '-sku' | 'title' | '-title' | 'price' | '-price' | 'date_modified' | '-date_modified' | Ordering principle for displaying search results. (optional)
  orderBy: "-date_modified",
  // Array<ProductCatalogTypeEnum> | Filter by catalog item types. (optional)
  types: [
    "["regular"]",
  ],
  // Array<'one_time' | 'recurring'> | Filter by billing types. (optional)
  billingTypes: ["one_time"],
  // Array<string> | A list of item uuids to be excluded from search. (optional)
  excludeUuids: ["1725f759-3a1c-64e3-2daa-f67eafa589d7","06cb0ce9-094b-1f38-2fe6-0a9d226cd22c"],
  // string | Category id. (optional)
  categoryId: "06cb0ce9-094b-1f38-2fe6-0a9d226cd22c",
  // boolean (optional)
  noCategory: true,
};

apiInstance.searchCatalogItems(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Page number. | (optional) defaults to undefined
 **perPage** | [**number**] | Items per page. | (optional) defaults to undefined
 **query** | [**string**] | Search query. Searches the following fields: Title, SKU, description, category name, custom fields name and value.  | (optional) defaults to undefined
 **orderBy** | [**&#39;sku&#39; | &#39;-sku&#39; | &#39;title&#39; | &#39;-title&#39; | &#39;price&#39; | &#39;-price&#39; | &#39;date_modified&#39; | &#39;-date_modified&#39;**]**Array<&#39;sku&#39; &#124; &#39;-sku&#39; &#124; &#39;title&#39; &#124; &#39;-title&#39; &#124; &#39;price&#39; &#124; &#39;-price&#39; &#124; &#39;date_modified&#39; &#124; &#39;-date_modified&#39;>** | Ordering principle for displaying search results. | (optional) defaults to undefined
 **types** | **Array&lt;ProductCatalogTypeEnum&gt;** | Filter by catalog item types. | (optional) defaults to undefined
 **billingTypes** | **Array<&#39;one_time&#39; &#124; &#39;recurring&#39;>** | Filter by billing types. | (optional) defaults to undefined
 **excludeUuids** | **Array&lt;string&gt;** | A list of item uuids to be excluded from search. | (optional) defaults to undefined
 **categoryId** | [**string**] | Category id. | (optional) defaults to undefined
 **noCategory** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ListCatalogItemsSearchResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated catalog items |  -  |
**400** | Bad Request error |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**429** | Too many requests error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **updateCatalogItem**
> ProductCatalogItemResponse updateCatalogItem(productCatalogItemPatchRequest)

Update catalog item.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.ProductCatalogApi(configuration);

const body:pd_api.ProductCatalogApiUpdateCatalogItemRequest = {
  // string | Catalog item UUID
  itemUuid: "2e39c7e0-acb0-4ff2-b4cd-ea3141f95db8",
  // ProductCatalogItemPatchRequest
  productCatalogItemPatchRequest: {
    title: "title_example",
    categoryId: "categoryId_example",
    type: "regular",
    bundleItems: [
      {
        quantity: 1,
        itemOrUuid: null,
      },
    ],
    productVariant: {
      sku: "sku_example",
      description: "description_example",
      images: [
        {
          isMain: true,
          order: 3.14,
          src: "src_example",
        },
      ],
      customFields: [
        {
          name: "name_example",
          value: "value_example",
        },
      ],
      priceConfiguration: {
        currency: "USD",
        price: 59.99,
        cost: 3.14,
        billingType: "billingType_example",
        billingCycle: "billingCycle_example",
        tiers: [
          {
            value: 9.99,
            minQty: 1,
          },
        ],
        pricingMethod: 0,
      },
    },
  },
};

apiInstance.updateCatalogItem(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCatalogItemPatchRequest** | **ProductCatalogItemPatchRequest**|  |
 **itemUuid** | [**string**] | Catalog item UUID | defaults to undefined


### Return type

**ProductCatalogItemResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update Catalog item |  -  |
**403** | Permission error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

