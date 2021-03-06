// tslint:disable
/**
 * localhost:1234
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * The attachment caption.
 * @export
 * @interface AttachmentCaption
 */
export interface AttachmentCaption {
    /**
     * Caption for the attachment, as it exists in the database.
     * @type {string}
     * @memberof AttachmentCaption
     */
    raw?: string;
    /**
     * HTML caption for the attachment, transformed for display.
     * @type {string}
     * @memberof AttachmentCaption
     */
    rendered?: string;
}

export function AttachmentCaptionFromJSON(json: any): AttachmentCaption {
    return AttachmentCaptionFromJSONTyped(json, false);
}

export function AttachmentCaptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachmentCaption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'raw': !exists(json, 'raw') ? undefined : json['raw'],
        'rendered': !exists(json, 'rendered') ? undefined : json['rendered'],
    };
}

export function AttachmentCaptionToJSON(value?: AttachmentCaption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'raw': value.raw,
        'rendered': value.rendered,
    };
}


