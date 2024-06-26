/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RecipientRedirect } from './RecipientRedirect';
import { RecipientVerificationSettings } from './RecipientVerificationSettings';
import { RicipientDeliveryMethods } from './RicipientDeliveryMethods';
import { HttpFile } from '../http/http';

export class DocumentDetailsResponseRecipients {
    'recipientType'?: string;
    'role'?: string;
    'roles'?: Array<string>;
    'lastName'?: string;
    'signingOrder'?: any;
    'id'?: string;
    'contactId'?: string;
    'firstName'?: string;
    'email'?: string;
    'phone'?: string;
    'deliveryMethods'?: RicipientDeliveryMethods;
    'hasCompleted'?: boolean;
    'sharedLink'?: string;
    'signatureDate'?: string;
    'verificationSettings'?: RecipientVerificationSettings;
    'redirect'?: RecipientRedirect;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recipientType",
            "baseName": "recipient_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "signingOrder",
            "baseName": "signing_order",
            "type": "any",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryMethods",
            "baseName": "delivery_methods",
            "type": "RicipientDeliveryMethods",
            "format": ""
        },
        {
            "name": "hasCompleted",
            "baseName": "has_completed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sharedLink",
            "baseName": "shared_link",
            "type": "string",
            "format": ""
        },
        {
            "name": "signatureDate",
            "baseName": "signature_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "verificationSettings",
            "baseName": "verification_settings",
            "type": "RecipientVerificationSettings",
            "format": ""
        },
        {
            "name": "redirect",
            "baseName": "redirect",
            "type": "RecipientRedirect",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentDetailsResponseRecipients.attributeTypeMap;
    }

    public constructor() {
    }
}

