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
 * 
 * @export
 * @interface RenderedBlock
 */
export interface RenderedBlock {
    /**
     * The rendered block.
     * @type {string}
     * @memberof RenderedBlock
     */
    rendered?: string;
}

export function RenderedBlockFromJSON(json: any): RenderedBlock {
    return RenderedBlockFromJSONTyped(json, false);
}

export function RenderedBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): RenderedBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rendered': !exists(json, 'rendered') ? undefined : json['rendered'],
    };
}

export function RenderedBlockToJSON(value?: RenderedBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rendered': value.rendered,
    };
}


