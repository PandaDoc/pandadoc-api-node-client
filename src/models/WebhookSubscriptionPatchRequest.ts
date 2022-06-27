/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebhookSubscriptionPayloadEnum } from './WebhookSubscriptionPayloadEnum';
import { WebhookSubscriptionTriggerEnum } from './WebhookSubscriptionTriggerEnum';
import { HttpFile } from '../http/http';

export class WebhookSubscriptionPatchRequest {
    'name'?: string;
    'url'?: string;
    'active'?: boolean;
    'payload'?: Array<WebhookSubscriptionPayloadEnum>;
    'triggers'?: Array<WebhookSubscriptionTriggerEnum>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": "url"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "Array<WebhookSubscriptionPayloadEnum>",
            "format": ""
        },
        {
            "name": "triggers",
            "baseName": "triggers",
            "type": "Array<WebhookSubscriptionTriggerEnum>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookSubscriptionPatchRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

