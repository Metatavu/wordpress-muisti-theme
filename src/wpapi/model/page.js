"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Page;
(function (Page) {
    Page.StatusEnum = {
        Publish: 'publish',
        Future: 'future',
        Draft: 'draft',
        Pending: 'pending',
        Private: 'private'
    };
    Page.CommentStatusEnum = {
        Open: 'open',
        Closed: 'closed'
    };
    Page.PingStatusEnum = {
        Open: 'open',
        Closed: 'closed'
    };
})(Page = exports.Page || (exports.Page = {}));
