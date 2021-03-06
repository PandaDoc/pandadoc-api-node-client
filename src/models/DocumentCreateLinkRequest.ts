/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DocumentCreateLinkRequest {
    /**
    * The email address for the recipient you're creating a document link for.
    */
    'recipient': string;
    /**
    * Provide the number of seconds that a document link should be valid for. Default is 3600 seconds.
    */
    'lifetime'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "string",
            "format": ""
        },
        {
            "name": "lifetime",
            "baseName": "lifetime",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentCreateLinkRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

