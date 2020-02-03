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
 * @interface InlineObject2
 */
export interface InlineObject2 {
    /**
     * The ID for the parent of the object.
     * @type {number}
     * @memberof InlineObject2
     */
    parent?: number;
    /**
     * The date the object was published, in the site\'s timezone.
     * @type {Date}
     * @memberof InlineObject2
     */
    date?: Date;
    /**
     * The date the object was published, as GMT.
     * @type {Date}
     * @memberof InlineObject2
     */
    date_gmt?: Date;
    /**
     * An alphanumeric identifier for the object unique to its type.
     * @type {string}
     * @memberof InlineObject2
     */
    slug?: string;
    /**
     * A named status for the object.
     * @type {string}
     * @memberof InlineObject2
     */
    status?: InlineObject2StatusEnum;
    /**
     * A password to protect access to the content and excerpt.
     * @type {string}
     * @memberof InlineObject2
     */
    password?: string;
    /**
     * The title for the object.
     * @type {string}
     * @memberof InlineObject2
     */
    title?: string;
    /**
     * The content for the object.
     * @type {string}
     * @memberof InlineObject2
     */
    content?: string;
    /**
     * The ID for the author of the object.
     * @type {number}
     * @memberof InlineObject2
     */
    author?: number;
    /**
     * The excerpt for the object.
     * @type {string}
     * @memberof InlineObject2
     */
    excerpt?: string;
    /**
     * The ID of the featured media for the object.
     * @type {number}
     * @memberof InlineObject2
     */
    featured_media?: number;
    /**
     * Whether or not comments are open on the object.
     * @type {string}
     * @memberof InlineObject2
     */
    comment_status?: InlineObject2CommentStatusEnum;
    /**
     * Whether or not the object can be pinged.
     * @type {string}
     * @memberof InlineObject2
     */
    ping_status?: InlineObject2PingStatusEnum;
    /**
     * The format for the object.
     * @type {string}
     * @memberof InlineObject2
     */
    format?: InlineObject2FormatEnum;
    /**
     * Meta fields.
     * @type {string}
     * @memberof InlineObject2
     */
    meta?: string;
    /**
     * Whether or not the object should be treated as sticky.
     * @type {boolean}
     * @memberof InlineObject2
     */
    sticky?: boolean;
    /**
     * The theme file to use to display the object.
     * @type {string}
     * @memberof InlineObject2
     */
    template?: string;
    /**
     * The terms assigned to the object in the category taxonomy.
     * @type {string}
     * @memberof InlineObject2
     */
    categories?: string;
    /**
     * The terms assigned to the object in the post_tag taxonomy.
     * @type {string}
     * @memberof InlineObject2
     */
    tags?: string;
}

export function InlineObject2FromJSON(json: any): InlineObject2 {
    return InlineObject2FromJSONTyped(json, false);
}

export function InlineObject2FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'date': !exists(json, 'date') ? undefined : new Date(json['date']),
        'date_gmt': !exists(json, 'date_gmt') ? undefined : new Date(json['date_gmt']),
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'excerpt': !exists(json, 'excerpt') ? undefined : json['excerpt'],
        'featured_media': !exists(json, 'featured_media') ? undefined : json['featured_media'],
        'comment_status': !exists(json, 'comment_status') ? undefined : json['comment_status'],
        'ping_status': !exists(json, 'ping_status') ? undefined : json['ping_status'],
        'format': !exists(json, 'format') ? undefined : json['format'],
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
        'sticky': !exists(json, 'sticky') ? undefined : json['sticky'],
        'template': !exists(json, 'template') ? undefined : json['template'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function InlineObject2ToJSON(value?: InlineObject2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parent': value.parent,
        'date': value.date == null ? undefined : value.date.toISOString(),
        'date_gmt': value.date_gmt == null ? undefined : value.date_gmt.toISOString(),
        'slug': value.slug,
        'status': value.status,
        'password': value.password,
        'title': value.title,
        'content': value.content,
        'author': value.author,
        'excerpt': value.excerpt,
        'featured_media': value.featured_media,
        'comment_status': value.comment_status,
        'ping_status': value.ping_status,
        'format': value.format,
        'meta': value.meta,
        'sticky': value.sticky,
        'template': value.template,
        'categories': value.categories,
        'tags': value.tags,
    };
}

/**
* @export
* @enum {string}
*/
export enum InlineObject2StatusEnum {
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
export enum InlineObject2CommentStatusEnum {
    Open = 'open',
    Closed = 'closed'
}
/**
* @export
* @enum {string}
*/
export enum InlineObject2PingStatusEnum {
    Open = 'open',
    Closed = 'closed'
}
/**
* @export
* @enum {string}
*/
export enum InlineObject2FormatEnum {
    Standard = 'standard',
    Aside = 'aside',
    Chat = 'chat',
    Gallery = 'gallery',
    Link = 'link',
    Image = 'image',
    Quote = 'quote',
    Status = 'status',
    Video = 'video',
    Audio = 'audio'
}


