/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class LinkedObjectCreateRequest {
    /**
    * CRM name (lowercase). See the list above.
    */
    'provider': string;
    /**
    * Entity type. The system validates if the type is supported. See the list for each CRM above.
    */
    'entityType': string;
    /**
    * Entity unique identifier. The system validates if the entity exists.
    */
    'entityId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityType",
            "baseName": "entity_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityId",
            "baseName": "entity_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LinkedObjectCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

