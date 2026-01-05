# .QuotesApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteUpdate**](QuotesApi.md#quoteUpdate) | **PUT** /public/v1/documents/{document_id}/quotes/{quote_id} | Quote update


# **quoteUpdate**
> QuoteResponse quoteUpdate(quoteUpdateRequest)

This operation updates the details of a specific quote within a document by specifying the document ID and quote ID.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.QuotesApi(configuration);

const body:pd_api.QuotesApiQuoteUpdateRequest = {
  // string | Document ID
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Quote ID
  quoteId: "99aaa4f9-3250-4f5b-a953-6d7bfc5d8c9e",
  // QuoteUpdateRequest
  quoteUpdateRequest: {
    sections: [
      {
        id: "id_example",
        name: "Section name",
        items: [
          {
            id: "id_example",
            sku: "#",
            name: "",
            description: "",
            qty: 10,
            price: 42.42,
            priceSettings: {
              baseValue: 3.14,
              tiers: [
                {
                  minQty: 1,
                  value: 3.14,
                },
              ],
            },
            cost: 42.42,
            billingFrequency: "weekly",
            contractTerm: 1,
            referenceId: "referenceId_example",
            options: {
              selected: true,
              qtyEditable: true,
              optional: false,
            },
            customColumns: {
              "key": "key_example",
            },
            externalColumns: {
              "key": "key_example",
            },
            textColumns: {
              "key": "key_example",
            },
            discounts: {
              "key": {
                type: "percent",
                value: 3.14,
              },
            },
            taxes: {
              "key": {
                type: "percent",
                value: 3.14,
              },
            },
            fees: {
              "key": {
                type: "percent",
                value: 3.14,
              },
            },
            multipliers: {
              "key": 3.14,
            },
          },
        ],
        settings: {
          optional: true,
          selected: true,
          selectionType: "custom",
        },
      },
    ],
    settings: {
      selectionType: "custom",
    },
  },
};

apiInstance.quoteUpdate(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quoteUpdateRequest** | **QuoteUpdateRequest**|  |
 **documentId** | [**string**] | Document ID | defaults to undefined
 **quoteId** | [**string**] | Quote ID | defaults to undefined


### Return type

**QuoteResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
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

