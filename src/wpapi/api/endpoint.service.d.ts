export declare class EndpointService {
    private rptToken;
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     *
     * @param name Unique registered name for the block.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param attributes Attributes for core/tag-cloud block
     * @param postId ID of the post context.
    */
    wpV2BlockRendererNameGet(name: string, context?: Array<string>, attributes?: string, postId?: number, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param after Limit response to posts published after a given ISO8601 compliant date.
     * @param before Limit response to posts published before a given ISO8601 compliant date.
     * @param exclude Ensure result set excludes specific IDs.
     * @param include Limit result set to specific IDs.
     * @param offset Offset the result set by a specific number of items.
     * @param order Order sort attribute ascending or descending.
     * @param orderby Sort collection by object attribute.
     * @param slug Limit result set to posts with one or more specific slugs.
     * @param status Limit result set to posts assigned one or more statuses.
    */
    wpV2BlocksGet(context?: Array<string>, page?: number, perPage?: number, search?: string, after?: Date, before?: Date, exclude?: Array<number>, include?: Array<number>, offset?: number, order?: Array<string>, orderby?: Array<string>, slug?: Array<string>, status?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id
     * @param parent The ID for the parent of the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2BlocksIdAutosavesGet(id: number, parent?: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id
     * @param parent
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param password
     * @param title
     * @param content
     * @param template
    */
    wpV2BlocksIdAutosavesPost(id: number, parent?: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, title?: string, content?: string, template?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    wpV2BlocksIdDelete(id: number, force?: boolean, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    wpV2BlocksIdGet(id: number, context?: Array<string>, password?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date The date the object was published, in the site&#39;s timezone.
     * @param dateGmt The date the object was published, as GMT.
     * @param slug An alphanumeric identifier for the object unique to its type.
     * @param status A named status for the object.
     * @param password A password to protect access to the content and excerpt.
     * @param title The title for the object.
     * @param content The content for the object.
     * @param template The theme file to use to display the object.
    */
    wpV2BlocksIdPatch(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, title?: string, content?: string, template?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param password
     * @param title
     * @param content
     * @param template
    */
    wpV2BlocksIdPost(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, title?: string, content?: string, template?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date The date the object was published, in the site&#39;s timezone.
     * @param dateGmt The date the object was published, as GMT.
     * @param slug An alphanumeric identifier for the object unique to its type.
     * @param status A named status for the object.
     * @param password A password to protect access to the content and excerpt.
     * @param title The title for the object.
     * @param content The content for the object.
     * @param template The theme file to use to display the object.
    */
    wpV2BlocksIdPut(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, title?: string, content?: string, template?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2BlocksParentAutosavesIdGet(parent: number, id: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param password
     * @param title
     * @param content
     * @param template
    */
    wpV2BlocksPost(date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, title?: string, content?: string, template?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param exclude Ensure result set excludes specific IDs.
     * @param include Limit result set to specific IDs.
     * @param order Order sort attribute ascending or descending.
     * @param orderby Sort collection by term attribute.
     * @param hideEmpty Whether to hide terms not assigned to any posts.
     * @param parent Limit result set to terms assigned to a specific parent.
     * @param post Limit result set to terms assigned to a specific post.
     * @param slug Limit result set to terms with one or more specific slugs.
    */
    wpV2CategoriesGet(context?: Array<string>, page?: number, perPage?: number, search?: string, exclude?: Array<number>, include?: Array<number>, order?: Array<string>, orderby?: Array<string>, hideEmpty?: boolean, parent?: number, post?: number, slug?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the term.
     * @param force Required to be true, as terms do not support trashing.
    */
    wpV2CategoriesIdDelete(id: number, force?: boolean, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the term.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2CategoriesIdGet(id: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the term.
     * @param description HTML description of the term.
     * @param name HTML title for the term.
     * @param slug An alphanumeric identifier for the term unique to its type.
     * @param parent The parent term ID.
     * @param meta Meta fields.
    */
    wpV2CategoriesIdPatch(id: number, description?: string, name?: string, slug?: string, parent?: number, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the term.
     * @param description
     * @param name
     * @param slug
     * @param parent
     * @param meta
    */
    wpV2CategoriesIdPost(id: number, description?: string, name?: string, slug?: string, parent?: number, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the term.
     * @param description HTML description of the term.
     * @param name HTML title for the term.
     * @param slug An alphanumeric identifier for the term unique to its type.
     * @param parent The parent term ID.
     * @param meta Meta fields.
    */
    wpV2CategoriesIdPut(id: number, description?: string, name?: string, slug?: string, parent?: number, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param description
     * @param name
     * @param slug
     * @param parent
     * @param meta
    */
    wpV2CategoriesPost(description?: string, name?: string, slug?: string, parent?: number, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param after Limit response to comments published after a given ISO8601 compliant date.
     * @param author Limit result set to comments assigned to specific user IDs. Requires authorization.
     * @param authorExclude Ensure result set excludes comments assigned to specific user IDs. Requires authorization.
     * @param authorEmail Limit result set to that from a specific author email. Requires authorization.
     * @param before Limit response to comments published before a given ISO8601 compliant date.
     * @param exclude Ensure result set excludes specific IDs.
     * @param include Limit result set to specific IDs.
     * @param offset Offset the result set by a specific number of items.
     * @param order Order sort attribute ascending or descending.
     * @param orderby Sort collection by object attribute.
     * @param parent Limit result set to comments of specific parent IDs.
     * @param parentExclude Ensure result set excludes specific parent IDs.
     * @param post Limit result set to comments assigned to specific post IDs.
     * @param status Limit result set to comments assigned a specific status. Requires authorization.
     * @param type Limit result set to comments assigned a specific type. Requires authorization.
     * @param password The password for the post if it is password protected.
    */
    wpV2CommentsGet(context?: Array<string>, page?: number, perPage?: number, search?: string, after?: Date, author?: Array<number>, authorExclude?: Array<number>, authorEmail?: string, before?: Date, exclude?: Array<number>, include?: Array<number>, offset?: number, order?: Array<string>, orderby?: Array<string>, parent?: Array<number>, parentExclude?: Array<number>, post?: Array<number>, status?: string, type?: string, password?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
     * @param password The password for the parent post of the comment (if the post is password protected).
    */
    wpV2CommentsIdDelete(id: number, force?: boolean, password?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the parent post of the comment (if the post is password protected).
    */
    wpV2CommentsIdGet(id: number, context?: Array<string>, password?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param author The ID of the user object, if author was a user.
     * @param authorEmail Email address for the object author.
     * @param authorIp IP address for the object author.
     * @param authorName Display name for the object author.
     * @param authorUrl URL for the object author.
     * @param authorUserAgent User agent for the object author.
     * @param content The content for the object.
     * @param date The date the object was published, in the site&#39;s timezone.
     * @param dateGmt The date the object was published, as GMT.
     * @param parent The ID for the parent of the object.
     * @param post The ID of the associated post object.
     * @param status State of the object.
     * @param meta Meta fields.
    */
    wpV2CommentsIdPatch(id: number, author?: number, authorEmail?: string, authorIp?: string, authorName?: string, authorUrl?: string, authorUserAgent?: string, content?: string, date?: Date, dateGmt?: Date, parent?: number, post?: number, status?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param author
     * @param authorEmail
     * @param authorIp
     * @param authorName
     * @param authorUrl
     * @param authorUserAgent
     * @param content
     * @param date
     * @param dateGmt
     * @param parent
     * @param post
     * @param status
     * @param meta
    */
    wpV2CommentsIdPost(id: number, author?: number, authorEmail?: string, authorIp?: string, authorName?: string, authorUrl?: string, authorUserAgent?: string, content?: string, date?: Date, dateGmt?: Date, parent?: number, post?: number, status?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param author The ID of the user object, if author was a user.
     * @param authorEmail Email address for the object author.
     * @param authorIp IP address for the object author.
     * @param authorName Display name for the object author.
     * @param authorUrl URL for the object author.
     * @param authorUserAgent User agent for the object author.
     * @param content The content for the object.
     * @param date The date the object was published, in the site&#39;s timezone.
     * @param dateGmt The date the object was published, as GMT.
     * @param parent The ID for the parent of the object.
     * @param post The ID of the associated post object.
     * @param status State of the object.
     * @param meta Meta fields.
    */
    wpV2CommentsIdPut(id: number, author?: number, authorEmail?: string, authorIp?: string, authorName?: string, authorUrl?: string, authorUserAgent?: string, content?: string, date?: Date, dateGmt?: Date, parent?: number, post?: number, status?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param author
     * @param authorEmail
     * @param authorIp
     * @param authorName
     * @param authorUrl
     * @param authorUserAgent
     * @param content
     * @param date
     * @param dateGmt
     * @param parent
     * @param post
     * @param status
     * @param meta
    */
    wpV2CommentsPost(author?: number, authorEmail?: string, authorIp?: string, authorName?: string, authorUrl?: string, authorUserAgent?: string, content?: string, date?: Date, dateGmt?: Date, parent?: number, post?: number, status?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param after Limit response to posts published after a given ISO8601 compliant date.
     * @param author Limit result set to posts assigned to specific authors.
     * @param authorExclude Ensure result set excludes posts assigned to specific authors.
     * @param before Limit response to posts published before a given ISO8601 compliant date.
     * @param exclude Ensure result set excludes specific IDs.
     * @param include Limit result set to specific IDs.
     * @param offset Offset the result set by a specific number of items.
     * @param order Order sort attribute ascending or descending.
     * @param orderby Sort collection by object attribute.
     * @param parent Limit result set to items with particular parent IDs.
     * @param parentExclude Limit result set to all items except those of a particular parent ID.
     * @param slug Limit result set to posts with one or more specific slugs.
     * @param status Limit result set to posts assigned one or more statuses.
     * @param mediaType Limit result set to attachments of a particular media type.
     * @param mimeType Limit result set to attachments of a particular MIME type.
    */
    wpV2MediaGet(context?: Array<string>, page?: number, perPage?: number, search?: string, after?: Date, author?: Array<number>, authorExclude?: Array<number>, before?: Date, exclude?: Array<number>, include?: Array<number>, offset?: number, order?: Array<string>, orderby?: Array<string>, parent?: Array<number>, parentExclude?: Array<number>, slug?: Array<string>, status?: Array<string>, mediaType?: Array<string>, mimeType?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    wpV2MediaIdDelete(id: number, force?: boolean, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2MediaIdGet(id: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date The date the object was published, in the site&#39;s timezone.
     * @param dateGmt The date the object was published, as GMT.
     * @param slug An alphanumeric identifier for the object unique to its type.
     * @param status A named status for the object.
     * @param title The title for the object.
     * @param author The ID for the author of the object.
     * @param commentStatus Whether or not comments are open on the object.
     * @param pingStatus Whether or not the object can be pinged.
     * @param meta Meta fields.
     * @param template The theme file to use to display the object.
     * @param altText Alternative text to display when attachment is not displayed.
     * @param caption The attachment caption.
     * @param description The attachment description.
     * @param post The ID for the associated post of the attachment.
    */
    wpV2MediaIdPatch(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, title?: string, author?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, meta?: string, template?: string, altText?: string, caption?: string, description?: string, post?: number, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param title
     * @param author
     * @param commentStatus
     * @param pingStatus
     * @param meta
     * @param template
     * @param altText
     * @param caption
     * @param description
     * @param post
    */
    wpV2MediaIdPost(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, title?: string, author?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, meta?: string, template?: string, altText?: string, caption?: string, description?: string, post?: number, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date The date the object was published, in the site&#39;s timezone.
     * @param dateGmt The date the object was published, as GMT.
     * @param slug An alphanumeric identifier for the object unique to its type.
     * @param status A named status for the object.
     * @param title The title for the object.
     * @param author The ID for the author of the object.
     * @param commentStatus Whether or not comments are open on the object.
     * @param pingStatus Whether or not the object can be pinged.
     * @param meta Meta fields.
     * @param template The theme file to use to display the object.
     * @param altText Alternative text to display when attachment is not displayed.
     * @param caption The attachment caption.
     * @param description The attachment description.
     * @param post The ID for the associated post of the attachment.
    */
    wpV2MediaIdPut(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, title?: string, author?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, meta?: string, template?: string, altText?: string, caption?: string, description?: string, post?: number, retrying?: boolean): Promise<any>;
    /**
     *
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param title
     * @param author
     * @param commentStatus
     * @param pingStatus
     * @param meta
     * @param template
     * @param altText
     * @param caption
     * @param description
     * @param post
    */
    wpV2MediaPost(date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, title?: string, author?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, meta?: string, template?: string, altText?: string, caption?: string, description?: string, post?: number, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param after Limit response to posts published after a given ISO8601 compliant date.
     * @param author Limit result set to posts assigned to specific authors.
     * @param authorExclude Ensure result set excludes posts assigned to specific authors.
     * @param before Limit response to posts published before a given ISO8601 compliant date.
     * @param exclude Ensure result set excludes specific IDs.
     * @param include Limit result set to specific IDs.
     * @param menuOrder Limit result set to posts with a specific menu_order value.
     * @param offset Offset the result set by a specific number of items.
     * @param order Order sort attribute ascending or descending.
     * @param orderby Sort collection by object attribute.
     * @param parent Limit result set to items with particular parent IDs.
     * @param parentExclude Limit result set to all items except those of a particular parent ID.
     * @param slug Limit result set to posts with one or more specific slugs.
     * @param status Limit result set to posts assigned one or more statuses.
    */
    wpV2PagesGet(context?: Array<string>, page?: number, perPage?: number, search?: string, after?: Date, author?: Array<number>, authorExclude?: Array<number>, before?: Date, exclude?: Array<number>, include?: Array<number>, menuOrder?: number, offset?: number, order?: Array<string>, orderby?: Array<string>, parent?: Array<number>, parentExclude?: Array<number>, slug?: Array<string>, status?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id
     * @param parent The ID for the parent of the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2PagesIdAutosavesGet(id: number, parent?: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id
     * @param parent
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param password
     * @param title
     * @param content
     * @param author
     * @param excerpt
     * @param featuredMedia
     * @param commentStatus
     * @param pingStatus
     * @param menuOrder
     * @param meta
     * @param template
    */
    wpV2PagesIdAutosavesPost(id: number, parent?: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, menuOrder?: number, meta?: string, template?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    wpV2PagesIdDelete(id: number, force?: boolean, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    wpV2PagesIdGet(id: number, context?: Array<string>, password?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date The date the object was published, in the site&#39;s timezone.
     * @param dateGmt The date the object was published, as GMT.
     * @param slug An alphanumeric identifier for the object unique to its type.
     * @param status A named status for the object.
     * @param password A password to protect access to the content and excerpt.
     * @param parent The ID for the parent of the object.
     * @param title The title for the object.
     * @param content The content for the object.
     * @param author The ID for the author of the object.
     * @param excerpt The excerpt for the object.
     * @param featuredMedia The ID of the featured media for the object.
     * @param commentStatus Whether or not comments are open on the object.
     * @param pingStatus Whether or not the object can be pinged.
     * @param menuOrder The order of the object in relation to other object of its type.
     * @param meta Meta fields.
     * @param template The theme file to use to display the object.
    */
    wpV2PagesIdPatch(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, parent?: number, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, menuOrder?: number, meta?: string, template?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param password
     * @param parent
     * @param title
     * @param content
     * @param author
     * @param excerpt
     * @param featuredMedia
     * @param commentStatus
     * @param pingStatus
     * @param menuOrder
     * @param meta
     * @param template
    */
    wpV2PagesIdPost(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, parent?: number, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, menuOrder?: number, meta?: string, template?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date The date the object was published, in the site&#39;s timezone.
     * @param dateGmt The date the object was published, as GMT.
     * @param slug An alphanumeric identifier for the object unique to its type.
     * @param status A named status for the object.
     * @param password A password to protect access to the content and excerpt.
     * @param parent The ID for the parent of the object.
     * @param title The title for the object.
     * @param content The content for the object.
     * @param author The ID for the author of the object.
     * @param excerpt The excerpt for the object.
     * @param featuredMedia The ID of the featured media for the object.
     * @param commentStatus Whether or not comments are open on the object.
     * @param pingStatus Whether or not the object can be pinged.
     * @param menuOrder The order of the object in relation to other object of its type.
     * @param meta Meta fields.
     * @param template The theme file to use to display the object.
    */
    wpV2PagesIdPut(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, parent?: number, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, menuOrder?: number, meta?: string, template?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2PagesParentAutosavesIdGet(parent: number, id: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param exclude Ensure result set excludes specific IDs.
     * @param include Limit result set to specific IDs.
     * @param offset Offset the result set by a specific number of items.
     * @param order Order sort attribute ascending or descending.
     * @param orderby Sort collection by object attribute.
    */
    wpV2PagesParentRevisionsGet(parent: number, context?: Array<string>, page?: number, perPage?: number, search?: string, exclude?: Array<number>, include?: Array<number>, offset?: number, order?: Array<string>, orderby?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id Unique identifier for the object.
     * @param force Required to be true, as revisions do not support trashing.
    */
    wpV2PagesParentRevisionsIdDelete(parent: number, id: number, force?: boolean, retrying?: boolean): Promise<any>;
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2PagesParentRevisionsIdGet(parent: number, id: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param password
     * @param parent
     * @param title
     * @param content
     * @param author
     * @param excerpt
     * @param featuredMedia
     * @param commentStatus
     * @param pingStatus
     * @param menuOrder
     * @param meta
     * @param template
    */
    wpV2PagesPost(date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, parent?: number, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, menuOrder?: number, meta?: string, template?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param after Limit response to posts published after a given ISO8601 compliant date.
     * @param author Limit result set to posts assigned to specific authors.
     * @param authorExclude Ensure result set excludes posts assigned to specific authors.
     * @param before Limit response to posts published before a given ISO8601 compliant date.
     * @param exclude Ensure result set excludes specific IDs.
     * @param include Limit result set to specific IDs.
     * @param offset Offset the result set by a specific number of items.
     * @param order Order sort attribute ascending or descending.
     * @param orderby Sort collection by object attribute.
     * @param slug Limit result set to posts with one or more specific slugs.
     * @param status Limit result set to posts assigned one or more statuses.
     * @param categories Limit result set to all items that have the specified term assigned in the categories taxonomy.
     * @param categoriesExclude Limit result set to all items except those that have the specified term assigned in the categories taxonomy.
     * @param tags Limit result set to all items that have the specified term assigned in the tags taxonomy.
     * @param tagsExclude Limit result set to all items except those that have the specified term assigned in the tags taxonomy.
     * @param sticky Limit result set to items that are sticky.
    */
    wpV2PostsGet(context?: Array<string>, page?: number, perPage?: number, search?: string, after?: Date, author?: Array<number>, authorExclude?: Array<number>, before?: Date, exclude?: Array<number>, include?: Array<number>, offset?: number, order?: Array<string>, orderby?: Array<string>, slug?: Array<string>, status?: Array<string>, categories?: Array<number>, categoriesExclude?: Array<number>, tags?: Array<number>, tagsExclude?: Array<number>, sticky?: boolean, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id
     * @param parent The ID for the parent of the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2PostsIdAutosavesGet(id: number, parent?: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id
     * @param parent
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param password
     * @param title
     * @param content
     * @param author
     * @param excerpt
     * @param featuredMedia
     * @param commentStatus
     * @param pingStatus
     * @param format
     * @param meta
     * @param sticky
     * @param template
     * @param categories
     * @param tags
    */
    wpV2PostsIdAutosavesPost(id: number, parent?: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, format?: Array<string>, meta?: string, sticky?: boolean, template?: string, categories?: Array<number>, tags?: Array<number>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    wpV2PostsIdDelete(id: number, force?: boolean, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    wpV2PostsIdGet(id: number, context?: Array<string>, password?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date The date the object was published, in the site&#39;s timezone.
     * @param dateGmt The date the object was published, as GMT.
     * @param slug An alphanumeric identifier for the object unique to its type.
     * @param status A named status for the object.
     * @param password A password to protect access to the content and excerpt.
     * @param title The title for the object.
     * @param content The content for the object.
     * @param author The ID for the author of the object.
     * @param excerpt The excerpt for the object.
     * @param featuredMedia The ID of the featured media for the object.
     * @param commentStatus Whether or not comments are open on the object.
     * @param pingStatus Whether or not the object can be pinged.
     * @param format The format for the object.
     * @param meta Meta fields.
     * @param sticky Whether or not the object should be treated as sticky.
     * @param template The theme file to use to display the object.
     * @param categories The terms assigned to the object in the category taxonomy.
     * @param tags The terms assigned to the object in the post_tag taxonomy.
    */
    wpV2PostsIdPatch(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, format?: Array<string>, meta?: string, sticky?: boolean, template?: string, categories?: Array<number>, tags?: Array<number>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param password
     * @param title
     * @param content
     * @param author
     * @param excerpt
     * @param featuredMedia
     * @param commentStatus
     * @param pingStatus
     * @param format
     * @param meta
     * @param sticky
     * @param template
     * @param categories
     * @param tags
    */
    wpV2PostsIdPost(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, format?: Array<string>, meta?: string, sticky?: boolean, template?: string, categories?: Array<number>, tags?: Array<number>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the object.
     * @param date The date the object was published, in the site&#39;s timezone.
     * @param dateGmt The date the object was published, as GMT.
     * @param slug An alphanumeric identifier for the object unique to its type.
     * @param status A named status for the object.
     * @param password A password to protect access to the content and excerpt.
     * @param title The title for the object.
     * @param content The content for the object.
     * @param author The ID for the author of the object.
     * @param excerpt The excerpt for the object.
     * @param featuredMedia The ID of the featured media for the object.
     * @param commentStatus Whether or not comments are open on the object.
     * @param pingStatus Whether or not the object can be pinged.
     * @param format The format for the object.
     * @param meta Meta fields.
     * @param sticky Whether or not the object should be treated as sticky.
     * @param template The theme file to use to display the object.
     * @param categories The terms assigned to the object in the category taxonomy.
     * @param tags The terms assigned to the object in the post_tag taxonomy.
    */
    wpV2PostsIdPut(id: number, date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, format?: Array<string>, meta?: string, sticky?: boolean, template?: string, categories?: Array<number>, tags?: Array<number>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2PostsParentAutosavesIdGet(parent: number, id: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param exclude Ensure result set excludes specific IDs.
     * @param include Limit result set to specific IDs.
     * @param offset Offset the result set by a specific number of items.
     * @param order Order sort attribute ascending or descending.
     * @param orderby Sort collection by object attribute.
    */
    wpV2PostsParentRevisionsGet(parent: number, context?: Array<string>, page?: number, perPage?: number, search?: string, exclude?: Array<number>, include?: Array<number>, offset?: number, order?: Array<string>, orderby?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id Unique identifier for the object.
     * @param force Required to be true, as revisions do not support trashing.
    */
    wpV2PostsParentRevisionsIdDelete(parent: number, id: number, force?: boolean, retrying?: boolean): Promise<any>;
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2PostsParentRevisionsIdGet(parent: number, id: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param password
     * @param title
     * @param content
     * @param author
     * @param excerpt
     * @param featuredMedia
     * @param commentStatus
     * @param pingStatus
     * @param format
     * @param meta
     * @param sticky
     * @param template
     * @param categories
     * @param tags
    */
    wpV2PostsPost(date?: Date, dateGmt?: Date, slug?: string, status?: Array<string>, password?: string, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: Array<string>, pingStatus?: Array<string>, format?: Array<string>, meta?: string, sticky?: boolean, template?: string, categories?: Array<number>, tags?: Array<number>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param type Limit results to items of an object type.
     * @param subtype Limit results to items of one or more object subtypes.
    */
    wpV2SearchGet(context?: Array<string>, page?: number, perPage?: number, search?: string, type?: Array<string>, subtype?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
    */
    wpV2SettingsGet(retrying?: boolean): Promise<any>;
    /**
     *
     * @param title Site title.
     * @param description Site tagline.
     * @param url Site URL.
     * @param email This address is used for admin purposes, like new user notification.
     * @param timezone A city in the same timezone as you.
     * @param dateFormat A date format for all date strings.
     * @param timeFormat A time format for all time strings.
     * @param startOfWeek A day number of the week that the week should start on.
     * @param language WordPress locale code.
     * @param useSmilies Convert emoticons like :-) and :-P to graphics on display.
     * @param defaultCategory Default post category.
     * @param defaultPostFormat Default post format.
     * @param postsPerPage Blog pages show at most.
     * @param defaultPingStatus Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
     * @param defaultCommentStatus Allow people to post comments on new articles.
    */
    wpV2SettingsPatch(title?: string, description?: string, url?: string, email?: string, timezone?: string, dateFormat?: string, timeFormat?: string, startOfWeek?: number, language?: string, useSmilies?: boolean, defaultCategory?: number, defaultPostFormat?: string, postsPerPage?: number, defaultPingStatus?: Array<string>, defaultCommentStatus?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param title
     * @param description
     * @param url
     * @param email
     * @param timezone
     * @param dateFormat
     * @param timeFormat
     * @param startOfWeek
     * @param language
     * @param useSmilies
     * @param defaultCategory
     * @param defaultPostFormat
     * @param postsPerPage
     * @param defaultPingStatus
     * @param defaultCommentStatus
    */
    wpV2SettingsPost(title?: string, description?: string, url?: string, email?: string, timezone?: string, dateFormat?: string, timeFormat?: string, startOfWeek?: number, language?: string, useSmilies?: boolean, defaultCategory?: number, defaultPostFormat?: string, postsPerPage?: number, defaultPingStatus?: Array<string>, defaultCommentStatus?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param title Site title.
     * @param description Site tagline.
     * @param url Site URL.
     * @param email This address is used for admin purposes, like new user notification.
     * @param timezone A city in the same timezone as you.
     * @param dateFormat A date format for all date strings.
     * @param timeFormat A time format for all time strings.
     * @param startOfWeek A day number of the week that the week should start on.
     * @param language WordPress locale code.
     * @param useSmilies Convert emoticons like :-) and :-P to graphics on display.
     * @param defaultCategory Default post category.
     * @param defaultPostFormat Default post format.
     * @param postsPerPage Blog pages show at most.
     * @param defaultPingStatus Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
     * @param defaultCommentStatus Allow people to post comments on new articles.
    */
    wpV2SettingsPut(title?: string, description?: string, url?: string, email?: string, timezone?: string, dateFormat?: string, timeFormat?: string, startOfWeek?: number, language?: string, useSmilies?: boolean, defaultCategory?: number, defaultPostFormat?: string, postsPerPage?: number, defaultPingStatus?: Array<string>, defaultCommentStatus?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2StatusesGet(context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param status An alphanumeric identifier for the status.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2StatusesStatusGet(status: string, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param exclude Ensure result set excludes specific IDs.
     * @param include Limit result set to specific IDs.
     * @param offset Offset the result set by a specific number of items.
     * @param order Order sort attribute ascending or descending.
     * @param orderby Sort collection by term attribute.
     * @param hideEmpty Whether to hide terms not assigned to any posts.
     * @param post Limit result set to terms assigned to a specific post.
     * @param slug Limit result set to terms with one or more specific slugs.
    */
    wpV2TagsGet(context?: Array<string>, page?: number, perPage?: number, search?: string, exclude?: Array<number>, include?: Array<number>, offset?: number, order?: Array<string>, orderby?: Array<string>, hideEmpty?: boolean, post?: number, slug?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the term.
     * @param force Required to be true, as terms do not support trashing.
    */
    wpV2TagsIdDelete(id: number, force?: boolean, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the term.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2TagsIdGet(id: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the term.
     * @param description HTML description of the term.
     * @param name HTML title for the term.
     * @param slug An alphanumeric identifier for the term unique to its type.
     * @param meta Meta fields.
    */
    wpV2TagsIdPatch(id: number, description?: string, name?: string, slug?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the term.
     * @param description
     * @param name
     * @param slug
     * @param meta
    */
    wpV2TagsIdPost(id: number, description?: string, name?: string, slug?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the term.
     * @param description HTML description of the term.
     * @param name HTML title for the term.
     * @param slug An alphanumeric identifier for the term unique to its type.
     * @param meta Meta fields.
    */
    wpV2TagsIdPut(id: number, description?: string, name?: string, slug?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param description
     * @param name
     * @param slug
     * @param meta
    */
    wpV2TagsPost(description?: string, name?: string, slug?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param type Limit results to taxonomies associated with a specific post type.
    */
    wpV2TaxonomiesGet(context?: Array<string>, type?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param taxonomy An alphanumeric identifier for the taxonomy.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2TaxonomiesTaxonomyGet(taxonomy: string, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param status Limit result set to themes assigned one or more statuses.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
    */
    wpV2ThemesGet(status: Array<string>, context?: string, page?: number, perPage?: number, search?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2TypesGet(context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param type An alphanumeric identifier for the post type.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2TypesTypeGet(type: string, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param exclude Ensure result set excludes specific IDs.
     * @param include Limit result set to specific IDs.
     * @param offset Offset the result set by a specific number of items.
     * @param order Order sort attribute ascending or descending.
     * @param orderby Sort collection by object attribute.
     * @param slug Limit result set to users with one or more specific slugs.
     * @param roles Limit result set to users matching at least one specific role provided. Accepts csv list or single role.
     * @param who Limit result set to users who are considered authors.
    */
    wpV2UsersGet(context?: Array<string>, page?: number, perPage?: number, search?: string, exclude?: Array<number>, include?: Array<number>, offset?: number, order?: Array<string>, orderby?: Array<string>, slug?: Array<string>, roles?: Array<string>, who?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the user.
     * @param reassign Reassign the deleted user&#39;s posts and links to this user ID.
     * @param force Required to be true, as users do not support trashing.
    */
    wpV2UsersIdDelete(id: number, reassign: number, force?: boolean, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the user.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2UsersIdGet(id: number, context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the user.
     * @param username Login name for the user.
     * @param name Display name for the user.
     * @param firstName First name for the user.
     * @param lastName Last name for the user.
     * @param email The email address for the user.
     * @param url URL of the user.
     * @param description Description of the user.
     * @param locale Locale for the user.
     * @param nickname The nickname for the user.
     * @param slug An alphanumeric identifier for the user.
     * @param roles Roles assigned to the user.
     * @param password Password for the user (never included).
     * @param meta Meta fields.
    */
    wpV2UsersIdPatch(id: number, username?: string, name?: string, firstName?: string, lastName?: string, email?: string, url?: string, description?: string, locale?: Array<string>, nickname?: string, slug?: string, roles?: Array<string>, password?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the user.
     * @param username
     * @param name
     * @param firstName
     * @param lastName
     * @param email
     * @param url
     * @param description
     * @param locale
     * @param nickname
     * @param slug
     * @param roles
     * @param password
     * @param meta
    */
    wpV2UsersIdPost(id: number, username?: string, name?: string, firstName?: string, lastName?: string, email?: string, url?: string, description?: string, locale?: Array<string>, nickname?: string, slug?: string, roles?: Array<string>, password?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param id Unique identifier for the user.
     * @param username Login name for the user.
     * @param name Display name for the user.
     * @param firstName First name for the user.
     * @param lastName Last name for the user.
     * @param email The email address for the user.
     * @param url URL of the user.
     * @param description Description of the user.
     * @param locale Locale for the user.
     * @param nickname The nickname for the user.
     * @param slug An alphanumeric identifier for the user.
     * @param roles Roles assigned to the user.
     * @param password Password for the user (never included).
     * @param meta Meta fields.
    */
    wpV2UsersIdPut(id: number, username?: string, name?: string, firstName?: string, lastName?: string, email?: string, url?: string, description?: string, locale?: Array<string>, nickname?: string, slug?: string, roles?: Array<string>, password?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param reassign Reassign the deleted user&#39;s posts and links to this user ID.
     * @param force Required to be true, as users do not support trashing.
    */
    wpV2UsersMeDelete(reassign: number, force?: boolean, retrying?: boolean): Promise<any>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
    */
    wpV2UsersMeGet(context?: Array<string>, retrying?: boolean): Promise<any>;
    /**
     *
     * @param username Login name for the user.
     * @param name Display name for the user.
     * @param firstName First name for the user.
     * @param lastName Last name for the user.
     * @param email The email address for the user.
     * @param url URL of the user.
     * @param description Description of the user.
     * @param locale Locale for the user.
     * @param nickname The nickname for the user.
     * @param slug An alphanumeric identifier for the user.
     * @param roles Roles assigned to the user.
     * @param password Password for the user (never included).
     * @param meta Meta fields.
    */
    wpV2UsersMePatch(username?: string, name?: string, firstName?: string, lastName?: string, email?: string, url?: string, description?: string, locale?: Array<string>, nickname?: string, slug?: string, roles?: Array<string>, password?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param username
     * @param name
     * @param firstName
     * @param lastName
     * @param email
     * @param url
     * @param description
     * @param locale
     * @param nickname
     * @param slug
     * @param roles
     * @param password
     * @param meta
    */
    wpV2UsersMePost(username?: string, name?: string, firstName?: string, lastName?: string, email?: string, url?: string, description?: string, locale?: Array<string>, nickname?: string, slug?: string, roles?: Array<string>, password?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param username Login name for the user.
     * @param name Display name for the user.
     * @param firstName First name for the user.
     * @param lastName Last name for the user.
     * @param email The email address for the user.
     * @param url URL of the user.
     * @param description Description of the user.
     * @param locale Locale for the user.
     * @param nickname The nickname for the user.
     * @param slug An alphanumeric identifier for the user.
     * @param roles Roles assigned to the user.
     * @param password Password for the user (never included).
     * @param meta Meta fields.
    */
    wpV2UsersMePut(username?: string, name?: string, firstName?: string, lastName?: string, email?: string, url?: string, description?: string, locale?: Array<string>, nickname?: string, slug?: string, roles?: Array<string>, password?: string, meta?: string, retrying?: boolean): Promise<any>;
    /**
     *
     * @param username
     * @param name
     * @param firstName
     * @param lastName
     * @param email
     * @param url
     * @param description
     * @param locale
     * @param nickname
     * @param slug
     * @param roles
     * @param password
     * @param meta
    */
    wpV2UsersPost(username?: string, name?: string, firstName?: string, lastName?: string, email?: string, url?: string, description?: string, locale?: Array<string>, nickname?: string, slug?: string, roles?: Array<string>, password?: string, meta?: string, retrying?: boolean): Promise<any>;
}
