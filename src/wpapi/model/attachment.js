"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attachment;
(function (Attachment) {
    Attachment.StatusEnum = {
        Publish: 'publish',
        Future: 'future',
        Draft: 'draft',
        Pending: 'pending',
        Private: 'private'
    };
    Attachment.CommentStatusEnum = {
        Open: 'open',
        Closed: 'closed'
    };
    Attachment.PingStatusEnum = {
        Open: 'open',
        Closed: 'closed'
    };
    Attachment.MediaTypeEnum = {
        Image: 'image',
        File: 'file'
    };
})(Attachment = exports.Attachment || (exports.Attachment = {}));
