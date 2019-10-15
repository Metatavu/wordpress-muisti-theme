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
export interface Body4 {
    /**
     * Unique identifier for the object.
     */
    id?: number;
    /**
     * The date the object was published, in the site's timezone.
     */
    date?: Date;
    /**
     * The date the object was published, as GMT.
     */
    dateGmt?: Date;
    /**
     * An alphanumeric identifier for the object unique to its type.
     */
    slug?: string;
    /**
     * A named status for the object.
     */
    status?: Body4.StatusEnum;
    /**
     * A password to protect access to the content and excerpt.
     */
    password?: string;
    /**
     * The ID for the parent of the object.
     */
    parent?: number;
    /**
     * The title for the object.
     */
    title?: string;
    /**
     * The content for the object.
     */
    content?: string;
    /**
     * The ID for the author of the object.
     */
    author?: number;
    /**
     * The excerpt for the object.
     */
    excerpt?: string;
    /**
     * The ID of the featured media for the object.
     */
    featuredMedia?: number;
    /**
     * Whether or not comments are open on the object.
     */
    commentStatus?: Body4.CommentStatusEnum;
    /**
     * Whether or not the object can be pinged.
     */
    pingStatus?: Body4.PingStatusEnum;
    /**
     * The order of the object in relation to other object of its type.
     */
    menuOrder?: number;
    /**
     * Meta fields.
     */
    meta?: string;
    /**
     * The theme file to use to display the object.
     */
    template?: string;
}
export interface Body4Opt {
    /**
     * Unique identifier for the object.
     */
    id?: number;
    /**
     * The date the object was published, in the site's timezone.
     */
    date?: Date;
    /**
     * The date the object was published, as GMT.
     */
    dateGmt?: Date;
    /**
     * An alphanumeric identifier for the object unique to its type.
     */
    slug?: string;
    /**
     * A named status for the object.
     */
    status?: Body4.StatusEnum;
    /**
     * A password to protect access to the content and excerpt.
     */
    password?: string;
    /**
     * The ID for the parent of the object.
     */
    parent?: number;
    /**
     * The title for the object.
     */
    title?: string;
    /**
     * The content for the object.
     */
    content?: string;
    /**
     * The ID for the author of the object.
     */
    author?: number;
    /**
     * The excerpt for the object.
     */
    excerpt?: string;
    /**
     * The ID of the featured media for the object.
     */
    featuredMedia?: number;
    /**
     * Whether or not comments are open on the object.
     */
    commentStatus?: Body4.CommentStatusEnum;
    /**
     * Whether or not the object can be pinged.
     */
    pingStatus?: Body4.PingStatusEnum;
    /**
     * The order of the object in relation to other object of its type.
     */
    menuOrder?: number;
    /**
     * Meta fields.
     */
    meta?: string;
    /**
     * The theme file to use to display the object.
     */
    template?: string;
}
export declare namespace Body4 {
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
}
