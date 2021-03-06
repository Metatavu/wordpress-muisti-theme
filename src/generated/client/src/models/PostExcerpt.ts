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
 * The excerpt for the object.
 * @export
 * @interface PostExcerpt
 */
export interface PostExcerpt {
    /**
     * Excerpt for the object, as it exists in the database.
     * @type {string}
     * @memberof PostExcerpt
     */
    raw?: string;
    /**
     * HTML excerpt for the object, transformed for display.
     * @type {string}
     * @memberof PostExcerpt
     */
    rendered?: string;
    /**
     * Whether the excerpt is protected with a password.
     * @type {boolean}
     * @memberof PostExcerpt
     */
    _protected?: boolean;
}

export function PostExcerptFromJSON(json: any): PostExcerpt {
    return PostExcerptFromJSONTyped(json, false);
}

export function PostExcerptFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostExcerpt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'raw': !exists(json, 'raw') ? undefined : json['raw'],
        'rendered': !exists(json, 'rendered') ? undefined : json['rendered'],
        '_protected': !exists(json, 'protected') ? undefined : json['protected'],
    };
}

export function PostExcerptToJSON(value?: PostExcerpt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'raw': value.raw,
        'rendered': value.rendered,
        'protected': value._protected,
    };
}


