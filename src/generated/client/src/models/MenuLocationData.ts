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
    MenuItemData,
    MenuItemDataFromJSON,
    MenuItemDataFromJSONTyped,
    MenuItemDataToJSON,
} from './';

/**
 * 
 * @export
 * @interface MenuLocationData
 */
export interface MenuLocationData {
    /**
     * 
     * @type {number}
     * @memberof MenuLocationData
     */
    term_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MenuLocationData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof MenuLocationData
     */
    slug?: string;
    /**
     * 
     * @type {number}
     * @memberof MenuLocationData
     */
    term_group?: number;
    /**
     * 
     * @type {number}
     * @memberof MenuLocationData
     */
    term_taxonomy_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MenuLocationData
     */
    taxonomy?: string;
    /**
     * 
     * @type {string}
     * @memberof MenuLocationData
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof MenuLocationData
     */
    parent?: number;
    /**
     * 
     * @type {number}
     * @memberof MenuLocationData
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof MenuLocationData
     */
    filter?: string;
    /**
     * 
     * @type {Array<MenuItemData>}
     * @memberof MenuLocationData
     */
    items?: Array<MenuItemData>;
}

export function MenuLocationDataFromJSON(json: any): MenuLocationData {
    return MenuLocationDataFromJSONTyped(json, false);
}

export function MenuLocationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MenuLocationData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'term_id': !exists(json, 'term_id') ? undefined : json['term_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'term_group': !exists(json, 'term_group') ? undefined : json['term_group'],
        'term_taxonomy_id': !exists(json, 'term_taxonomy_id') ? undefined : json['term_taxonomy_id'],
        'taxonomy': !exists(json, 'taxonomy') ? undefined : json['taxonomy'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'filter': !exists(json, 'filter') ? undefined : json['filter'],
        'items': !exists(json, 'items') ? undefined : (json['items'] as Array<any>).map(MenuItemDataFromJSON),
    };
}

export function MenuLocationDataToJSON(value?: MenuLocationData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'term_id': value.term_id,
        'name': value.name,
        'slug': value.slug,
        'term_group': value.term_group,
        'term_taxonomy_id': value.term_taxonomy_id,
        'taxonomy': value.taxonomy,
        'description': value.description,
        'parent': value.parent,
        'count': value.count,
        'filter': value.filter,
        'items': value.items == null ? undefined : (value.items as Array<any>).map(MenuItemDataToJSON),
    };
}


