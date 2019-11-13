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
 * @interface Settings
 */
export interface Settings {
    /**
     * Site title.
     * @type {string}
     * @memberof Settings
     */
    title?: string;
    /**
     * Site tagline.
     * @type {string}
     * @memberof Settings
     */
    description?: string;
    /**
     * Site URL.
     * @type {string}
     * @memberof Settings
     */
    url?: string;
    /**
     * This address is used for admin purposes, like new user notification.
     * @type {string}
     * @memberof Settings
     */
    email?: string;
    /**
     * A city in the same timezone as you.
     * @type {string}
     * @memberof Settings
     */
    timezone?: string;
    /**
     * A date format for all date strings.
     * @type {string}
     * @memberof Settings
     */
    date_format?: string;
    /**
     * A time format for all time strings.
     * @type {string}
     * @memberof Settings
     */
    time_format?: string;
    /**
     * A day number of the week that the week should start on.
     * @type {number}
     * @memberof Settings
     */
    start_of_week?: number;
    /**
     * WordPress locale code.
     * @type {string}
     * @memberof Settings
     */
    language?: string;
    /**
     * Convert emoticons like :-) and :-P to graphics on display.
     * @type {boolean}
     * @memberof Settings
     */
    use_smilies?: boolean;
    /**
     * Default post category.
     * @type {number}
     * @memberof Settings
     */
    default_category?: number;
    /**
     * Default post format.
     * @type {string}
     * @memberof Settings
     */
    default_post_format?: string;
    /**
     * Blog pages show at most.
     * @type {number}
     * @memberof Settings
     */
    posts_per_page?: number;
    /**
     * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
     * @type {string}
     * @memberof Settings
     */
    default_ping_status?: SettingsDefaultPingStatusEnum;
    /**
     * Allow people to post comments on new articles.
     * @type {string}
     * @memberof Settings
     */
    default_comment_status?: SettingsDefaultCommentStatusEnum;
}

export function SettingsFromJSON(json: any): Settings {
    return SettingsFromJSONTyped(json, false);
}

export function SettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Settings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'date_format': !exists(json, 'date_format') ? undefined : json['date_format'],
        'time_format': !exists(json, 'time_format') ? undefined : json['time_format'],
        'start_of_week': !exists(json, 'start_of_week') ? undefined : json['start_of_week'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'use_smilies': !exists(json, 'use_smilies') ? undefined : json['use_smilies'],
        'default_category': !exists(json, 'default_category') ? undefined : json['default_category'],
        'default_post_format': !exists(json, 'default_post_format') ? undefined : json['default_post_format'],
        'posts_per_page': !exists(json, 'posts_per_page') ? undefined : json['posts_per_page'],
        'default_ping_status': !exists(json, 'default_ping_status') ? undefined : json['default_ping_status'],
        'default_comment_status': !exists(json, 'default_comment_status') ? undefined : json['default_comment_status'],
    };
}

export function SettingsToJSON(value?: Settings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'url': value.url,
        'email': value.email,
        'timezone': value.timezone,
        'date_format': value.date_format,
        'time_format': value.time_format,
        'start_of_week': value.start_of_week,
        'language': value.language,
        'use_smilies': value.use_smilies,
        'default_category': value.default_category,
        'default_post_format': value.default_post_format,
        'posts_per_page': value.posts_per_page,
        'default_ping_status': value.default_ping_status,
        'default_comment_status': value.default_comment_status,
    };
}

/**
* @export
* @enum {string}
*/
export enum SettingsDefaultPingStatusEnum {
    Open = 'open',
    Closed = 'closed'
}
/**
* @export
* @enum {string}
*/
export enum SettingsDefaultCommentStatusEnum {
    Open = 'open',
    Closed = 'closed'
}

