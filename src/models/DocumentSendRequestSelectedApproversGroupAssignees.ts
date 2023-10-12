/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DocumentSendRequestSelectedApproversGroupAssignees {
    /**
    * User ID
    */
    'user'?: string;
    /**
    * Whether the user is selected
    */
    'isSelected'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        },
        {
            "name": "isSelected",
            "baseName": "is_selected",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentSendRequestSelectedApproversGroupAssignees.attributeTypeMap;
    }

    public constructor() {
    }
}

