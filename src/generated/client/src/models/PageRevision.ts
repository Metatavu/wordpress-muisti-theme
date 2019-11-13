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
import {
    PostContent,
    PostContentFromJSON,
    PostContentFromJSONTyped,
    PostContentToJSON,
    PostExcerpt,
    PostExcerptFromJSON,
    PostExcerptFromJSONTyped,
    PostExcerptToJSON,
    PostGuid,
    PostGuidFromJSON,
    PostGuidFromJSONTyped,
    PostGuidToJSON,
    PostTitle,
    PostTitleFromJSON,
    PostTitleFromJSONTyped,
    PostTitleToJSON,
} from './';

/**
 * 
 * @export
 * @interface PageRevision
 */
export interface PageRevision {
    /**
     * The ID for the author of the object.
     * @type {number}
     * @memberof PageRevision
     */
    author?: number;
    /**
     * The date the object was published, in the site\'s timezone.
     * @type {Date}
     * @memberof PageRevision
     */
    date?: Date;
    /**
     * The date the object was published, as GMT.
     * @type {Date}
     * @memberof PageRevision
     */
    date_gmt?: Date;
    /**
     * 
     * @type {PostGuid}
     * @memberof PageRevision
     */
    guid?: PostGuid;
    /**
     * Unique identifier for the object.
     * @type {number}
     * @memberof PageRevision
     */
    id?: number;
    /**
     * The date the object was last modified, in the site\'s timezone.
     * @type {Date}
     * @memberof PageRevision
     */
    modified?: Date;
    /**
     * The date the object was last modified, as GMT.
     * @type {Date}
     * @memberof PageRevision
     */
    modified_gmt?: Date;
    /**
     * The ID for the parent of the object.
     * @type {number}
     * @memberof PageRevision
     */
    parent?: number;
    /**
     * An alphanumeric identifier for the object unique to its type.
     * @type {string}
     * @memberof PageRevision
     */
    slug?: string;
    /**
     * 
     * @type {PostTitle}
     * @memberof PageRevision
     */
    title?: PostTitle;
    /**
     * 
     * @type {PostContent}
     * @memberof PageRevision
     */
    content?: PostContent;
    /**
     * 
     * @type {PostExcerpt}
     * @memberof PageRevision
     */
    excerpt?: PostExcerpt;
    /**
     * Preview link for the post.
     * @type {string}
     * @memberof PageRevision
     */
    preview_link?: string;
}

export function PageRevisionFromJSON(json: any): PageRevision {
    return PageRevisionFromJSONTyped(json, false);
}

export function PageRevisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageRevision {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'author': !exists(json, 'author') ? undefined : json['author'],
        'date': !exists(json, 'date') ? undefined : new Date(json['date']),
        'date_gmt': !exists(json, 'date_gmt') ? undefined : new Date(json['date_gmt']),
        'guid': !exists(json, 'guid') ? undefined : PostGuidFromJSON(json['guid']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'modified': !exists(json, 'modified') ? undefined : new Date(json['modified']),
        'modified_gmt': !exists(json, 'modified_gmt') ? undefined : new Date(json['modified_gmt']),
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'title': !exists(json, 'title') ? undefined : PostTitleFromJSON(json['title']),
        'content': !exists(json, 'content') ? undefined : PostContentFromJSON(json['content']),
        'excerpt': !exists(json, 'excerpt') ? undefined : PostExcerptFromJSON(json['excerpt']),
        'preview_link': !exists(json, 'preview_link') ? undefined : json['preview_link'],
    };
}

export function PageRevisionToJSON(value?: PageRevision | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'author': value.author,
        'date': value.date == null ? undefined : value.date.toISOString(),
        'date_gmt': value.date_gmt == null ? undefined : value.date_gmt.toISOString(),
        'guid': PostGuidToJSON(value.guid),
        'id': value.id,
        'modified': value.modified == null ? undefined : value.modified.toISOString(),
        'modified_gmt': value.modified_gmt == null ? undefined : value.modified_gmt.toISOString(),
        'parent': value.parent,
        'slug': value.slug,
        'title': PostTitleToJSON(value.title),
        'content': PostContentToJSON(value.content),
        'excerpt': PostExcerptToJSON(value.excerpt),
        'preview_link': value.preview_link,
    };
}

