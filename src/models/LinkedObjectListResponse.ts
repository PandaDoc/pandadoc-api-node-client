/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LinkedObjectCreateResponse } from './LinkedObjectCreateResponse';
import { HttpFile } from '../http/http';

export class LinkedObjectListResponse {
    'linkedObjects'?: Array<LinkedObjectCreateResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "linkedObjects",
            "baseName": "linked_objects",
            "type": "Array<LinkedObjectCreateResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LinkedObjectListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
