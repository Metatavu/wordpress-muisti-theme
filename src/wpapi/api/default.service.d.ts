import { Attachment } from '../model/attachment';
import { Category } from '../model/category';
import { Comment } from '../model/comment';
import { Page } from '../model/page';
import { PageRevision } from '../model/pageRevision';
import { Post } from '../model/post';
import { PostRevision } from '../model/postRevision';
import { RenderedBlock } from '../model/renderedBlock';
import { SearchResult } from '../model/searchResult';
import { Settings } from '../model/settings';
import { Status } from '../model/status';
import { Tag } from '../model/tag';
import { Taxonomy } from '../model/taxonomy';
import { Theme } from '../model/theme';
import { Type } from '../model/type';
import { User } from '../model/user';
import { WpBlock } from '../model/wpBlock';
import { WpBlockRevision } from '../model/wpBlockRevision';
export declare class DefaultService {
    private rptToken;
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     *
     * @param id
     * @param id2 Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    deleteWpV2BlocksById(id: string, id2?: number, force?: boolean, retrying?: boolean): Promise<WpBlock>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the term.
     * @param force Required to be true, as terms do not support trashing.
    */
    deleteWpV2CategoriesById(id: string, id2?: number, force?: boolean, retrying?: boolean): Promise<Category>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
     * @param password The password for the parent post of the comment (if the post is password protected).
    */
    deleteWpV2CommentsById(id: string, id2?: number, force?: boolean, password?: string, retrying?: boolean): Promise<Comment>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    deleteWpV2MediaById(id: string, id2?: number, force?: boolean, retrying?: boolean): Promise<Attachment>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    deleteWpV2PagesById(id: string, id2?: number, force?: boolean, retrying?: boolean): Promise<Page>;
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 Unique identifier for the object.
     * @param force Required to be true, as revisions do not support trashing.
    */
    deleteWpV2PagesByParentRevisionsById(parent: string, id: string, parent2?: number, id2?: number, force?: boolean, retrying?: boolean): Promise<PageRevision>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    deleteWpV2PostsById(id: string, id2?: number, force?: boolean, retrying?: boolean): Promise<Post>;
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 Unique identifier for the object.
     * @param force Required to be true, as revisions do not support trashing.
    */
    deleteWpV2PostsByParentRevisionsById(parent: string, id: string, parent2?: number, id2?: number, force?: boolean, retrying?: boolean): Promise<PostRevision>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the term.
     * @param force Required to be true, as terms do not support trashing.
    */
    deleteWpV2TagsById(id: string, id2?: number, force?: boolean, retrying?: boolean): Promise<Tag>;
    /**
     *
     * @param id
     * @param reassign Reassign the deleted user&#39;s posts and links to this user ID.
     * @param id2 Unique identifier for the user.
     * @param force Required to be true, as users do not support trashing.
    */
    deleteWpV2UsersById(id: string, reassign: number, id2?: number, force?: boolean, retrying?: boolean): Promise<User>;
    /**
     *
     * @param reassign Reassign the deleted user&#39;s posts and links to this user ID.
     * @param force Required to be true, as users do not support trashing.
    */
    deleteWpV2UsersMe(reassign: number, force?: boolean, retrying?: boolean): Promise<User>;
    /**
     *
     * @param name
     * @param name2 Unique registered name for the block.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param attributes Attributes for core/tag-cloud block
     * @param postId ID of the post context.
    */
    getWpV2BlockRendererByName(name: string, name2?: string, context?: string, attributes?: string, postId?: number, retrying?: boolean): Promise<RenderedBlock>;
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
    getWpV2Blocks(context?: string, page?: number, perPage?: number, search?: string, after?: Date, before?: Date, exclude?: Array<string>, include?: Array<string>, offset?: number, order?: string, orderby?: string, slug?: Array<string>, status?: Array<string>, retrying?: boolean): Promise<Array<WpBlock>>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    getWpV2BlocksById(id: string, id2?: number, context?: string, password?: string, retrying?: boolean): Promise<WpBlock>;
    /**
     *
     * @param id
     * @param parent The ID for the parent of the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2BlocksByIdAutosaves(id: string, parent?: number, context?: string, retrying?: boolean): Promise<Array<WpBlockRevision>>;
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2BlocksByParentAutosavesById(parent: string, id: string, parent2?: number, id2?: number, context?: string, retrying?: boolean): Promise<WpBlockRevision>;
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
    getWpV2Categories(context?: string, page?: number, perPage?: number, search?: string, exclude?: Array<string>, include?: Array<string>, order?: string, orderby?: string, hideEmpty?: boolean, parent?: number, post?: number, slug?: Array<string>, retrying?: boolean): Promise<Array<Category>>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the term.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2CategoriesById(id: string, id2?: number, context?: string, retrying?: boolean): Promise<Category>;
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
    getWpV2Comments(context?: string, page?: number, perPage?: number, search?: string, after?: Date, author?: Array<string>, authorExclude?: Array<string>, authorEmail?: string, before?: Date, exclude?: Array<string>, include?: Array<string>, offset?: number, order?: string, orderby?: string, parent?: Array<string>, parentExclude?: Array<string>, post?: Array<string>, status?: string, type?: string, password?: string, retrying?: boolean): Promise<Array<Comment>>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the parent post of the comment (if the post is password protected).
    */
    getWpV2CommentsById(id: string, id2?: number, context?: string, password?: string, retrying?: boolean): Promise<Comment>;
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
    getWpV2Media(context?: string, page?: number, perPage?: number, search?: string, after?: Date, author?: Array<string>, authorExclude?: Array<string>, before?: Date, exclude?: Array<string>, include?: Array<string>, offset?: number, order?: string, orderby?: string, parent?: Array<string>, parentExclude?: Array<string>, slug?: Array<string>, status?: Array<string>, mediaType?: string, mimeType?: string, retrying?: boolean): Promise<Array<Attachment>>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2MediaById(id: string, id2?: number, context?: string, retrying?: boolean): Promise<Attachment>;
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
    getWpV2Pages(context?: string, page?: number, perPage?: number, search?: string, after?: Date, author?: Array<string>, authorExclude?: Array<string>, before?: Date, exclude?: Array<string>, include?: Array<string>, menuOrder?: number, offset?: number, order?: string, orderby?: string, parent?: Array<string>, parentExclude?: Array<string>, slug?: Array<string>, status?: Array<string>, retrying?: boolean): Promise<Array<Page>>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    getWpV2PagesById(id: string, id2?: number, context?: string, password?: string, retrying?: boolean): Promise<Page>;
    /**
     *
     * @param id
     * @param parent The ID for the parent of the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2PagesByIdAutosaves(id: string, parent?: number, context?: string, retrying?: boolean): Promise<Array<PageRevision>>;
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2PagesByParentAutosavesById(parent: string, id: string, parent2?: number, id2?: number, context?: string, retrying?: boolean): Promise<PageRevision>;
    /**
     *
     * @param parent
     * @param parent2 The ID for the parent of the object.
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
    getWpV2PagesByParentRevisions(parent: string, parent2?: number, context?: string, page?: number, perPage?: number, search?: string, exclude?: Array<string>, include?: Array<string>, offset?: number, order?: string, orderby?: string, retrying?: boolean): Promise<Array<PageRevision>>;
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2PagesByParentRevisionsById(parent: string, id: string, parent2?: number, id2?: number, context?: string, retrying?: boolean): Promise<PageRevision>;
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
    getWpV2Posts(context?: string, page?: number, perPage?: number, search?: string, after?: Date, author?: Array<string>, authorExclude?: Array<string>, before?: Date, exclude?: Array<string>, include?: Array<string>, offset?: number, order?: string, orderby?: string, slug?: Array<string>, status?: Array<string>, categories?: Array<string>, categoriesExclude?: Array<string>, tags?: Array<string>, tagsExclude?: Array<string>, sticky?: boolean, retrying?: boolean): Promise<Array<Post>>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    getWpV2PostsById(id: string, id2?: number, context?: string, password?: string, retrying?: boolean): Promise<Post>;
    /**
     *
     * @param id
     * @param parent The ID for the parent of the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2PostsByIdAutosaves(id: string, parent?: number, context?: string, retrying?: boolean): Promise<Array<PostRevision>>;
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2PostsByParentAutosavesById(parent: string, id: string, parent2?: number, id2?: number, context?: string, retrying?: boolean): Promise<PostRevision>;
    /**
     *
     * @param parent
     * @param parent2 The ID for the parent of the object.
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
    getWpV2PostsByParentRevisions(parent: string, parent2?: number, context?: string, page?: number, perPage?: number, search?: string, exclude?: Array<string>, include?: Array<string>, offset?: number, order?: string, orderby?: string, retrying?: boolean): Promise<Array<PostRevision>>;
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2PostsByParentRevisionsById(parent: string, id: string, parent2?: number, id2?: number, context?: string, retrying?: boolean): Promise<PostRevision>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param type Limit results to items of an object type.
     * @param subtype Limit results to items of one or more object subtypes.
    */
    getWpV2Search(context?: string, page?: number, perPage?: number, search?: string, type?: string, subtype?: Array<string>, retrying?: boolean): Promise<Array<SearchResult>>;
    /**
     *
    */
    getWpV2Settings(retrying?: boolean): Promise<Array<Settings>>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2Statuses(context?: string, retrying?: boolean): Promise<Array<Status>>;
    /**
     *
     * @param status
     * @param status2 An alphanumeric identifier for the status.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2StatusesByStatus(status: string, status2?: string, context?: string, retrying?: boolean): Promise<Status>;
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
    getWpV2Tags(context?: string, page?: number, perPage?: number, search?: string, exclude?: Array<string>, include?: Array<string>, offset?: number, order?: string, orderby?: string, hideEmpty?: boolean, post?: number, slug?: Array<string>, retrying?: boolean): Promise<Array<Tag>>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the term.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2TagsById(id: string, id2?: number, context?: string, retrying?: boolean): Promise<Tag>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param type Limit results to taxonomies associated with a specific post type.
    */
    getWpV2Taxonomies(context?: string, type?: string, retrying?: boolean): Promise<Array<Taxonomy>>;
    /**
     *
     * @param taxonomy
     * @param taxonomy2 An alphanumeric identifier for the taxonomy.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2TaxonomiesByTaxonomy(taxonomy: string, taxonomy2?: string, context?: string, retrying?: boolean): Promise<Taxonomy>;
    /**
     *
     * @param status Limit result set to themes assigned one or more statuses.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
    */
    getWpV2Themes(status: Array<string>, context?: string, page?: number, perPage?: number, search?: string, retrying?: boolean): Promise<Array<Theme>>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2Types(context?: string, retrying?: boolean): Promise<Array<Type>>;
    /**
     *
     * @param type
     * @param type2 An alphanumeric identifier for the post type.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2TypesByType(type: string, type2?: string, context?: string, retrying?: boolean): Promise<Type>;
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
    getWpV2Users(context?: string, page?: number, perPage?: number, search?: string, exclude?: Array<string>, include?: Array<string>, offset?: number, order?: string, orderby?: string, slug?: Array<string>, roles?: Array<string>, who?: string, retrying?: boolean): Promise<Array<User>>;
    /**
     *
     * @param id
     * @param id2 Unique identifier for the user.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2UsersById(id: string, id2?: number, context?: string, retrying?: boolean): Promise<User>;
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
    */
    getWpV2UsersMe(context?: string, retrying?: boolean): Promise<Array<User>>;
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
    postWpV2Blocks(date?: Date, dateGmt?: Date, slug?: string, status?: string, password?: string, title?: string, content?: string, template?: string, retrying?: boolean): Promise<WpBlock>;
    /**
     *
     * @param id2
     * @param id
     * @param date
     * @param dateGmt
     * @param slug
     * @param status
     * @param password
     * @param title
     * @param content
     * @param template
    */
    postWpV2BlocksById(id2: string, id?: number, date?: Date, dateGmt?: Date, slug?: string, status?: string, password?: string, title?: string, content?: string, template?: string, retrying?: boolean): Promise<WpBlock>;
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
    postWpV2BlocksByIdAutosaves(id: string, parent?: number, date?: Date, dateGmt?: Date, slug?: string, status?: string, password?: string, title?: string, content?: string, template?: string, retrying?: boolean): Promise<WpBlockRevision>;
    /**
     *
     * @param description
     * @param name
     * @param slug
     * @param parent
     * @param meta
    */
    postWpV2Categories(description?: string, name?: string, slug?: string, parent?: number, meta?: string, retrying?: boolean): Promise<Category>;
    /**
     *
     * @param id2
     * @param id
     * @param description
     * @param name
     * @param slug
     * @param parent
     * @param meta
    */
    postWpV2CategoriesById(id2: string, id?: number, description?: string, name?: string, slug?: string, parent?: number, meta?: string, retrying?: boolean): Promise<Category>;
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
    postWpV2Comments(author?: number, authorEmail?: string, authorIp?: string, authorName?: string, authorUrl?: string, authorUserAgent?: string, content?: string, date?: Date, dateGmt?: Date, parent?: number, post?: number, status?: string, meta?: string, retrying?: boolean): Promise<Comment>;
    /**
     *
     * @param id2
     * @param id
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
    postWpV2CommentsById(id2: string, id?: number, author?: number, authorEmail?: string, authorIp?: string, authorName?: string, authorUrl?: string, authorUserAgent?: string, content?: string, date?: Date, dateGmt?: Date, parent?: number, post?: number, status?: string, meta?: string, retrying?: boolean): Promise<Comment>;
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
    postWpV2Media(date?: Date, dateGmt?: Date, slug?: string, status?: string, title?: string, author?: number, commentStatus?: string, pingStatus?: string, meta?: string, template?: string, altText?: string, caption?: string, description?: string, post?: number, retrying?: boolean): Promise<Attachment>;
    /**
     *
     * @param id2
     * @param id
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
    postWpV2MediaById(id2: string, id?: number, date?: Date, dateGmt?: Date, slug?: string, status?: string, title?: string, author?: number, commentStatus?: string, pingStatus?: string, meta?: string, template?: string, altText?: string, caption?: string, description?: string, post?: number, retrying?: boolean): Promise<Attachment>;
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
    postWpV2Pages(date?: Date, dateGmt?: Date, slug?: string, status?: string, password?: string, parent?: number, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: string, pingStatus?: string, menuOrder?: number, meta?: string, template?: string, retrying?: boolean): Promise<Page>;
    /**
     *
     * @param id2
     * @param id
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
    postWpV2PagesById(id2: string, id?: number, date?: Date, dateGmt?: Date, slug?: string, status?: string, password?: string, parent?: number, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: string, pingStatus?: string, menuOrder?: number, meta?: string, template?: string, retrying?: boolean): Promise<Page>;
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
    postWpV2PagesByIdAutosaves(id: string, parent?: number, date?: Date, dateGmt?: Date, slug?: string, status?: string, password?: string, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: string, pingStatus?: string, menuOrder?: number, meta?: string, template?: string, retrying?: boolean): Promise<PageRevision>;
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
    postWpV2Posts(date?: Date, dateGmt?: Date, slug?: string, status?: string, password?: string, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: string, pingStatus?: string, format?: string, meta?: string, sticky?: boolean, template?: string, categories?: Array<string>, tags?: Array<string>, retrying?: boolean): Promise<Post>;
    /**
     *
     * @param id2
     * @param id
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
    postWpV2PostsById(id2: string, id?: number, date?: Date, dateGmt?: Date, slug?: string, status?: string, password?: string, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: string, pingStatus?: string, format?: string, meta?: string, sticky?: boolean, template?: string, categories?: Array<string>, tags?: Array<string>, retrying?: boolean): Promise<Post>;
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
    postWpV2PostsByIdAutosaves(id: string, parent?: number, date?: Date, dateGmt?: Date, slug?: string, status?: string, password?: string, title?: string, content?: string, author?: number, excerpt?: string, featuredMedia?: number, commentStatus?: string, pingStatus?: string, format?: string, meta?: string, sticky?: boolean, template?: string, categories?: Array<string>, tags?: Array<string>, retrying?: boolean): Promise<PostRevision>;
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
    postWpV2Settings(title?: string, description?: string, url?: string, email?: string, timezone?: string, dateFormat?: string, timeFormat?: string, startOfWeek?: number, language?: string, useSmilies?: boolean, defaultCategory?: number, defaultPostFormat?: string, postsPerPage?: number, defaultPingStatus?: string, defaultCommentStatus?: string, retrying?: boolean): Promise<Settings>;
    /**
     *
     * @param description
     * @param name
     * @param slug
     * @param meta
    */
    postWpV2Tags(description?: string, name?: string, slug?: string, meta?: string, retrying?: boolean): Promise<Tag>;
    /**
     *
     * @param id2
     * @param id
     * @param description
     * @param name
     * @param slug
     * @param meta
    */
    postWpV2TagsById(id2: string, id?: number, description?: string, name?: string, slug?: string, meta?: string, retrying?: boolean): Promise<Tag>;
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
    postWpV2Users(username?: string, name?: string, firstName?: string, lastName?: string, email?: string, url?: string, description?: string, locale?: string, nickname?: string, slug?: string, roles?: Array<string>, password?: string, meta?: string, retrying?: boolean): Promise<User>;
    /**
     *
     * @param id2
     * @param id
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
    postWpV2UsersById(id2: string, id?: number, username?: string, name?: string, firstName?: string, lastName?: string, email?: string, url?: string, description?: string, locale?: string, nickname?: string, slug?: string, roles?: Array<string>, password?: string, meta?: string, retrying?: boolean): Promise<User>;
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
    postWpV2UsersMe(username?: string, name?: string, firstName?: string, lastName?: string, email?: string, url?: string, description?: string, locale?: string, nickname?: string, slug?: string, roles?: Array<string>, password?: string, meta?: string, retrying?: boolean): Promise<User>;
}
