/**
 * localhost:1234
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CommentAuthorAvatarUrls } from './commentAuthorAvatarUrls';
import { CommentContent } from './commentContent';
export interface Comment {
    /**
     * Unique identifier for the object.
     */
    id?: number;
    /**
     * The ID of the user object, if author was a user.
     */
    author?: number;
    /**
     * Email address for the object author.
     */
    authorEmail?: string;
    /**
     * IP address for the object author.
     */
    authorIp?: string;
    /**
     * Display name for the object author.
     */
    authorName?: string;
    /**
     * URL for the object author.
     */
    authorUrl?: string;
    /**
     * User agent for the object author.
     */
    authorUserAgent?: string;
    content?: CommentContent;
    /**
     * The date the object was published, in the site's timezone.
     */
    date?: Date;
    /**
     * The date the object was published, as GMT.
     */
    dateGmt?: Date;
    /**
     * URL to the object.
     */
    link?: string;
    /**
     * The ID for the parent of the object.
     */
    parent?: number;
    /**
     * The ID of the associated post object.
     */
    post?: number;
    /**
     * State of the object.
     */
    status?: string;
    /**
     * Type of Comment for the object.
     */
    type?: string;
    authorAvatarUrls?: CommentAuthorAvatarUrls;
    /**
     * Meta fields.
     */
    meta?: any;
}
export interface CommentOpt {
    /**
     * Unique identifier for the object.
     */
    id?: number;
    /**
     * The ID of the user object, if author was a user.
     */
    author?: number;
    /**
     * Email address for the object author.
     */
    authorEmail?: string;
    /**
     * IP address for the object author.
     */
    authorIp?: string;
    /**
     * Display name for the object author.
     */
    authorName?: string;
    /**
     * URL for the object author.
     */
    authorUrl?: string;
    /**
     * User agent for the object author.
     */
    authorUserAgent?: string;
    content?: CommentContent;
    /**
     * The date the object was published, in the site's timezone.
     */
    date?: Date;
    /**
     * The date the object was published, as GMT.
     */
    dateGmt?: Date;
    /**
     * URL to the object.
     */
    link?: string;
    /**
     * The ID for the parent of the object.
     */
    parent?: number;
    /**
     * The ID of the associated post object.
     */
    post?: number;
    /**
     * State of the object.
     */
    status?: string;
    /**
     * Type of Comment for the object.
     */
    type?: string;
    authorAvatarUrls?: CommentAuthorAvatarUrls;
    /**
     * Meta fields.
     */
    meta?: any;
}
