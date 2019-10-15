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
import { PostContent } from './postContent';
import { PostExcerpt } from './postExcerpt';
import { PostGuid } from './postGuid';
import { PostTitle } from './postTitle';
export interface Post {
    /**
     * The date the object was published, in the site's timezone.
     */
    date?: Date;
    /**
     * The date the object was published, as GMT.
     */
    dateGmt?: Date;
    guid?: PostGuid;
    /**
     * Unique identifier for the object.
     */
    id?: number;
    /**
     * URL to the object.
     */
    link?: string;
    /**
     * The date the object was last modified, in the site's timezone.
     */
    modified?: Date;
    /**
     * The date the object was last modified, as GMT.
     */
    modifiedGmt?: Date;
    /**
     * An alphanumeric identifier for the object unique to its type.
     */
    slug?: string;
    /**
     * A named status for the object.
     */
    status?: Post.StatusEnum;
    /**
     * Type of Post for the object.
     */
    type?: string;
    /**
     * A password to protect access to the content and excerpt.
     */
    password?: string;
    /**
     * Permalink template for the object.
     */
    permalinkTemplate?: string;
    /**
     * Slug automatically generated from the object title.
     */
    generatedSlug?: string;
    title?: PostTitle;
    content?: PostContent;
    /**
     * The ID for the author of the object.
     */
    author?: number;
    excerpt?: PostExcerpt;
    /**
     * The ID of the featured media for the object.
     */
    featuredMedia?: number;
    /**
     * Whether or not comments are open on the object.
     */
    commentStatus?: Post.CommentStatusEnum;
    /**
     * Whether or not the object can be pinged.
     */
    pingStatus?: Post.PingStatusEnum;
    /**
     * The format for the object.
     */
    format?: Post.FormatEnum;
    /**
     * Meta fields.
     */
    meta?: any;
    /**
     * Whether or not the object should be treated as sticky.
     */
    sticky?: boolean;
    /**
     * The theme file to use to display the object.
     */
    template?: string;
    /**
     * The terms assigned to the object in the category taxonomy.
     */
    categories?: Array<string>;
    /**
     * The terms assigned to the object in the post_tag taxonomy.
     */
    tags?: Array<string>;
}
export interface PostOpt {
    /**
     * The date the object was published, in the site's timezone.
     */
    date?: Date;
    /**
     * The date the object was published, as GMT.
     */
    dateGmt?: Date;
    guid?: PostGuid;
    /**
     * Unique identifier for the object.
     */
    id?: number;
    /**
     * URL to the object.
     */
    link?: string;
    /**
     * The date the object was last modified, in the site's timezone.
     */
    modified?: Date;
    /**
     * The date the object was last modified, as GMT.
     */
    modifiedGmt?: Date;
    /**
     * An alphanumeric identifier for the object unique to its type.
     */
    slug?: string;
    /**
     * A named status for the object.
     */
    status?: Post.StatusEnum;
    /**
     * Type of Post for the object.
     */
    type?: string;
    /**
     * A password to protect access to the content and excerpt.
     */
    password?: string;
    /**
     * Permalink template for the object.
     */
    permalinkTemplate?: string;
    /**
     * Slug automatically generated from the object title.
     */
    generatedSlug?: string;
    title?: PostTitle;
    content?: PostContent;
    /**
     * The ID for the author of the object.
     */
    author?: number;
    excerpt?: PostExcerpt;
    /**
     * The ID of the featured media for the object.
     */
    featuredMedia?: number;
    /**
     * Whether or not comments are open on the object.
     */
    commentStatus?: Post.CommentStatusEnum;
    /**
     * Whether or not the object can be pinged.
     */
    pingStatus?: Post.PingStatusEnum;
    /**
     * The format for the object.
     */
    format?: Post.FormatEnum;
    /**
     * Meta fields.
     */
    meta?: any;
    /**
     * Whether or not the object should be treated as sticky.
     */
    sticky?: boolean;
    /**
     * The theme file to use to display the object.
     */
    template?: string;
    /**
     * The terms assigned to the object in the category taxonomy.
     */
    categories?: Array<string>;
    /**
     * The terms assigned to the object in the post_tag taxonomy.
     */
    tags?: Array<string>;
}
export declare namespace Post {
    type StatusEnum = 'publish' | 'future' | 'draft' | 'pending' | 'private';
    const StatusEnum: {
        Publish: import("./attachment").Attachment.StatusEnum;
        Future: import("./attachment").Attachment.StatusEnum;
        Draft: import("./attachment").Attachment.StatusEnum;
        Pending: import("./attachment").Attachment.StatusEnum;
        Private: import("./attachment").Attachment.StatusEnum;
    };
    type CommentStatusEnum = 'open' | 'closed';
    const CommentStatusEnum: {
        Open: "closed" | "open";
        Closed: "closed" | "open";
    };
    type PingStatusEnum = 'open' | 'closed';
    const PingStatusEnum: {
        Open: "closed" | "open";
        Closed: "closed" | "open";
    };
    type FormatEnum = 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';
    const FormatEnum: {
        Standard: FormatEnum;
        Aside: FormatEnum;
        Chat: FormatEnum;
        Gallery: FormatEnum;
        Link: FormatEnum;
        Image: FormatEnum;
        Quote: FormatEnum;
        Status: FormatEnum;
        Video: FormatEnum;
        Audio: FormatEnum;
    };
}
