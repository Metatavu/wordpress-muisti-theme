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
 * @interface InlineObject3
 */
export interface InlineObject3 {
    /**
     * The date the object was published, in the site\'s timezone.
     * @type {Date}
     * @memberof InlineObject3
     */
    date?: Date;
    /**
     * The date the object was published, as GMT.
     * @type {Date}
     * @memberof InlineObject3
     */
    date_gmt?: Date;
    /**
     * An alphanumeric identifier for the object unique to its type.
     * @type {string}
     * @memberof InlineObject3
     */
    slug?: string;
    /**
     * A named status for the object.
     * @type {string}
     * @memberof InlineObject3
     */
    status?: InlineObject3StatusEnum;
    /**
     * A password to protect access to the content and excerpt.
     * @type {string}
     * @memberof InlineObject3
     */
    password?: string;
    /**
     * The ID for the parent of the object.
     * @type {number}
     * @memberof InlineObject3
     */
    parent?: number;
    /**
     * The title for the object.
     * @type {string}
     * @memberof InlineObject3
     */
    title?: string;
    /**
     * The content for the object.
     * @type {string}
     * @memberof InlineObject3
     */
    content?: string;
    /**
     * The ID for the author of the object.
     * @type {number}
     * @memberof InlineObject3
     */
    author?: number;
    /**
     * The excerpt for the object.
     * @type {string}
     * @memberof InlineObject3
     */
    excerpt?: string;
    /**
     * The ID of the featured media for the object.
     * @type {number}
     * @memberof InlineObject3
     */
    featured_media?: number;
    /**
     * Whether or not comments are open on the object.
     * @type {string}
     * @memberof InlineObject3
     */
    comment_status?: InlineObject3CommentStatusEnum;
    /**
     * Whether or not the object can be pinged.
     * @type {string}
     * @memberof InlineObject3
     */
    ping_status?: InlineObject3PingStatusEnum;
    /**
     * The order of the object in relation to other object of its type.
     * @type {number}
     * @memberof InlineObject3
     */
    menu_order?: number;
    /**
     * Meta fields.
     * @type {string}
     * @memberof InlineObject3
     */
    meta?: string;
    /**
     * The theme file to use to display the object.
     * @type {string}
     * @memberof InlineObject3
     */
    template?: string;
}

export function InlineObject3FromJSON(json: any): InlineObject3 {
    return InlineObject3FromJSONTyped(json, false);
}

export function InlineObject3FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject3 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : new Date(json['date']),
        'date_gmt': !exists(json, 'date_gmt') ? undefined : new Date(json['date_gmt']),
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'excerpt': !exists(json, 'excerpt') ? undefined : json['excerpt'],
        'featured_media': !exists(json, 'featured_media') ? undefined : json['featured_media'],
        'comment_status': !exists(json, 'comment_status') ? undefined : json['comment_status'],
        'ping_status': !exists(json, 'ping_status') ? undefined : json['ping_status'],
        'menu_order': !exists(json, 'menu_order') ? undefined : json['menu_order'],
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
        'template': !exists(json, 'template') ? undefined : json['template'],
    };
}

export function InlineObject3ToJSON(value?: InlineObject3 | null): any {
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
        'parent': value.parent,
        'title': value.title,
        'content': value.content,
        'author': value.author,
        'excerpt': value.excerpt,
        'featured_media': value.featured_media,
        'comment_status': value.comment_status,
        'ping_status': value.ping_status,
        'menu_order': value.menu_order,
        'meta': value.meta,
        'template': value.template,
    };
}

/**
* @export
* @enum {string}
*/
export enum InlineObject3StatusEnum {
    Publish = 'publish',
    Future = 'future',
    Draft = 'draft',
    Pending = 'pending',
    Private = 'private'
}
/**
* @export
* @enum {string}
*/
export enum InlineObject3CommentStatusEnum {
    Open = 'open',
    Closed = 'closed'
}
/**
* @export
* @enum {string}
*/
export enum InlineObject3PingStatusEnum {
    Open = 'open',
    Closed = 'closed'
}


