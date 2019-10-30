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
 * @interface InlineObject8
 */
export interface InlineObject8 {
    /**
     * The date the object was published, in the site\'s timezone.
     * @type {Date}
     * @memberof InlineObject8
     */
    date?: Date;
    /**
     * The date the object was published, as GMT.
     * @type {Date}
     * @memberof InlineObject8
     */
    date_gmt?: Date;
    /**
     * An alphanumeric identifier for the object unique to its type.
     * @type {string}
     * @memberof InlineObject8
     */
    slug?: string;
    /**
     * A named status for the object.
     * @type {string}
     * @memberof InlineObject8
     */
    status?: InlineObject8StatusEnum;
    /**
     * A password to protect access to the content and excerpt.
     * @type {string}
     * @memberof InlineObject8
     */
    password?: string;
    /**
     * The title for the object.
     * @type {string}
     * @memberof InlineObject8
     */
    title?: string;
    /**
     * The content for the object.
     * @type {string}
     * @memberof InlineObject8
     */
    content?: string;
    /**
     * The theme file to use to display the object.
     * @type {string}
     * @memberof InlineObject8
     */
    template?: string;
}

export function InlineObject8FromJSON(json: any): InlineObject8 {
    return InlineObject8FromJSONTyped(json, false);
}

export function InlineObject8FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject8 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : new Date(json['date']),
        'date_gmt': !exists(json, 'date_gmt') ? undefined : new Date(json['date_gmt']),
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'template': !exists(json, 'template') ? undefined : json['template'],
    };
}

export function InlineObject8ToJSON(value?: InlineObject8 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date == null ? undefined : value.date.toISOString(),
        'date_gmt': value.date_gmt == null ? undefined : value.date_gmt.toISOString(),
        'slug': value.slug,
        'status': value.status,
        'password': value.password,
        'title': value.title,
        'content': value.content,
        'template': value.template,
    };
}

/**
* @export
* @enum {string}
*/
export enum InlineObject8StatusEnum {
    Publish = 'publish',
    Future = 'future',
    Draft = 'draft',
    Pending = 'pending',
    Private = 'private'
}


