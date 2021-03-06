/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DocumentTransferOwnershipRequest {
    /**
    * A unique identifier of a workspace member.
    */
    'membershipId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "membershipId",
            "baseName": "membership_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentTransferOwnershipRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

