"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post;
(function (Post) {
    Post.StatusEnum = {
        Publish: 'publish',
        Future: 'future',
        Draft: 'draft',
        Pending: 'pending',
        Private: 'private'
    };
    Post.CommentStatusEnum = {
        Open: 'open',
        Closed: 'closed'
    };
    Post.PingStatusEnum = {
        Open: 'open',
        Closed: 'closed'
    };
    Post.FormatEnum = {
        Standard: 'standard',
        Aside: 'aside',
        Chat: 'chat',
        Gallery: 'gallery',
        Link: 'link',
        Image: 'image',
        Quote: 'quote',
        Status: 'status',
        Video: 'video',
        Audio: 'audio'
    };
})(Post = exports.Post || (exports.Post = {}));
