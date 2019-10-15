"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var EndpointService = /** @class */ (function () {
    function EndpointService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     *
     * @param name Unique registered name for the block.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param attributes Attributes for core/tag-cloud block
     * @param postId ID of the post context.
    */
    EndpointService.prototype.wpV2BlockRendererNameGet = function (name, context, attributes, postId, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/block-renderer/" + encodeURIComponent(String(name)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (attributes !== undefined && attributes !== null) {
                            uri.addQuery('attributes', attributes);
                        }
                        if (postId !== undefined && postId !== null) {
                            uri.addQuery('post_id', postId);
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2BlockRendererNameGet(name, context, attributes, postId, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2BlocksGet = function (context, page, perPage, search, after, before, exclude, include, offset, order, orderby, slug, status, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (after !== undefined && after !== null) {
                            uri.addQuery('after', after.toISOString());
                        }
                        if (before !== undefined && before !== null) {
                            uri.addQuery('before', before.toISOString());
                        }
                        if (exclude) {
                            exclude.forEach(function (element) {
                                uri.addQuery('exclude', element);
                            });
                        }
                        if (include) {
                            include.forEach(function (element) {
                                uri.addQuery('include', element);
                            });
                        }
                        if (offset !== undefined && offset !== null) {
                            uri.addQuery('offset', offset);
                        }
                        if (order) {
                            order.forEach(function (element) {
                                uri.addQuery('order', element);
                            });
                        }
                        if (orderby) {
                            orderby.forEach(function (element) {
                                uri.addQuery('orderby', element);
                            });
                        }
                        if (slug) {
                            slug.forEach(function (element) {
                                uri.addQuery('slug', element);
                            });
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2BlocksGet(context, page, perPage, search, after, before, exclude, include, offset, order, orderby, slug, status, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id
     * @param parent The ID for the parent of the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2BlocksIdAutosavesGet = function (id, parent, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(id)) + "/autosaves");
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2BlocksIdAutosavesGet(id, parent, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2BlocksIdAutosavesPost = function (id, parent, date, dateGmt, slug, status, password, title, content, template, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(id)) + "/autosaves");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2BlocksIdAutosavesPost(id, parent, date, dateGmt, slug, status, password, title, content, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    EndpointService.prototype.wpV2BlocksIdDelete = function (id, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(id)));
                        if (force !== undefined && force !== null) {
                            uri.addQuery('force', force);
                        }
                        options = {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2BlocksIdDelete(id, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    EndpointService.prototype.wpV2BlocksIdGet = function (id, context, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2BlocksIdGet(id, context, password, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2BlocksIdPatch = function (id, date, dateGmt, slug, status, password, title, content, template, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(id)));
                        if (date !== undefined && date !== null) {
                            uri.addQuery('date', date.toISOString());
                        }
                        if (dateGmt !== undefined && dateGmt !== null) {
                            uri.addQuery('date_gmt', dateGmt.toISOString());
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        if (title !== undefined && title !== null) {
                            uri.addQuery('title', title);
                        }
                        if (content !== undefined && content !== null) {
                            uri.addQuery('content', content);
                        }
                        if (template !== undefined && template !== null) {
                            uri.addQuery('template', template);
                        }
                        options = {
                            method: "patch",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2BlocksIdPatch(id, date, dateGmt, slug, status, password, title, content, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2BlocksIdPost = function (id, date, dateGmt, slug, status, password, title, content, template, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(id)));
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2BlocksIdPost(id, date, dateGmt, slug, status, password, title, content, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2BlocksIdPut = function (id, date, dateGmt, slug, status, password, title, content, template, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(id)));
                        if (date !== undefined && date !== null) {
                            uri.addQuery('date', date.toISOString());
                        }
                        if (dateGmt !== undefined && dateGmt !== null) {
                            uri.addQuery('date_gmt', dateGmt.toISOString());
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        if (title !== undefined && title !== null) {
                            uri.addQuery('title', title);
                        }
                        if (content !== undefined && content !== null) {
                            uri.addQuery('content', content);
                        }
                        if (template !== undefined && template !== null) {
                            uri.addQuery('template', template);
                        }
                        options = {
                            method: "put",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2BlocksIdPut(id, date, dateGmt, slug, status, password, title, content, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2BlocksParentAutosavesIdGet = function (parent, id, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(parent)) + "/autosaves/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2BlocksParentAutosavesIdGet(parent, id, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2BlocksPost = function (date, dateGmt, slug, status, password, title, content, template, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2BlocksPost(date, dateGmt, slug, status, password, title, content, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2CategoriesGet = function (context, page, perPage, search, exclude, include, order, orderby, hideEmpty, parent, post, slug, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/categories");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (exclude) {
                            exclude.forEach(function (element) {
                                uri.addQuery('exclude', element);
                            });
                        }
                        if (include) {
                            include.forEach(function (element) {
                                uri.addQuery('include', element);
                            });
                        }
                        if (order) {
                            order.forEach(function (element) {
                                uri.addQuery('order', element);
                            });
                        }
                        if (orderby) {
                            orderby.forEach(function (element) {
                                uri.addQuery('orderby', element);
                            });
                        }
                        if (hideEmpty !== undefined && hideEmpty !== null) {
                            uri.addQuery('hide_empty', hideEmpty);
                        }
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (post !== undefined && post !== null) {
                            uri.addQuery('post', post);
                        }
                        if (slug) {
                            slug.forEach(function (element) {
                                uri.addQuery('slug', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CategoriesGet(context, page, perPage, search, exclude, include, order, orderby, hideEmpty, parent, post, slug, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the term.
     * @param force Required to be true, as terms do not support trashing.
    */
    EndpointService.prototype.wpV2CategoriesIdDelete = function (id, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/categories/" + encodeURIComponent(String(id)));
                        if (force !== undefined && force !== null) {
                            uri.addQuery('force', force);
                        }
                        options = {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CategoriesIdDelete(id, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the term.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2CategoriesIdGet = function (id, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/categories/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CategoriesIdGet(id, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the term.
     * @param description HTML description of the term.
     * @param name HTML title for the term.
     * @param slug An alphanumeric identifier for the term unique to its type.
     * @param parent The parent term ID.
     * @param meta Meta fields.
    */
    EndpointService.prototype.wpV2CategoriesIdPatch = function (id, description, name, slug, parent, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/categories/" + encodeURIComponent(String(id)));
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (name !== undefined && name !== null) {
                            uri.addQuery('name', name);
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        options = {
                            method: "patch",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CategoriesIdPatch(id, description, name, slug, parent, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the term.
     * @param description
     * @param name
     * @param slug
     * @param parent
     * @param meta
    */
    EndpointService.prototype.wpV2CategoriesIdPost = function (id, description, name, slug, parent, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/categories/" + encodeURIComponent(String(id)));
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CategoriesIdPost(id, description, name, slug, parent, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the term.
     * @param description HTML description of the term.
     * @param name HTML title for the term.
     * @param slug An alphanumeric identifier for the term unique to its type.
     * @param parent The parent term ID.
     * @param meta Meta fields.
    */
    EndpointService.prototype.wpV2CategoriesIdPut = function (id, description, name, slug, parent, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/categories/" + encodeURIComponent(String(id)));
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (name !== undefined && name !== null) {
                            uri.addQuery('name', name);
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        options = {
                            method: "put",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CategoriesIdPut(id, description, name, slug, parent, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param description
     * @param name
     * @param slug
     * @param parent
     * @param meta
    */
    EndpointService.prototype.wpV2CategoriesPost = function (description, name, slug, parent, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/categories");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CategoriesPost(description, name, slug, parent, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2CommentsGet = function (context, page, perPage, search, after, author, authorExclude, authorEmail, before, exclude, include, offset, order, orderby, parent, parentExclude, post, status, type, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/comments");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (after !== undefined && after !== null) {
                            uri.addQuery('after', after.toISOString());
                        }
                        if (author) {
                            author.forEach(function (element) {
                                uri.addQuery('author', element);
                            });
                        }
                        if (authorExclude) {
                            authorExclude.forEach(function (element) {
                                uri.addQuery('author_exclude', element);
                            });
                        }
                        if (authorEmail !== undefined && authorEmail !== null) {
                            uri.addQuery('author_email', authorEmail);
                        }
                        if (before !== undefined && before !== null) {
                            uri.addQuery('before', before.toISOString());
                        }
                        if (exclude) {
                            exclude.forEach(function (element) {
                                uri.addQuery('exclude', element);
                            });
                        }
                        if (include) {
                            include.forEach(function (element) {
                                uri.addQuery('include', element);
                            });
                        }
                        if (offset !== undefined && offset !== null) {
                            uri.addQuery('offset', offset);
                        }
                        if (order) {
                            order.forEach(function (element) {
                                uri.addQuery('order', element);
                            });
                        }
                        if (orderby) {
                            orderby.forEach(function (element) {
                                uri.addQuery('orderby', element);
                            });
                        }
                        if (parent) {
                            parent.forEach(function (element) {
                                uri.addQuery('parent', element);
                            });
                        }
                        if (parentExclude) {
                            parentExclude.forEach(function (element) {
                                uri.addQuery('parent_exclude', element);
                            });
                        }
                        if (post) {
                            post.forEach(function (element) {
                                uri.addQuery('post', element);
                            });
                        }
                        if (status !== undefined && status !== null) {
                            uri.addQuery('status', status);
                        }
                        if (type !== undefined && type !== null) {
                            uri.addQuery('type', type);
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CommentsGet(context, page, perPage, search, after, author, authorExclude, authorEmail, before, exclude, include, offset, order, orderby, parent, parentExclude, post, status, type, password, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
     * @param password The password for the parent post of the comment (if the post is password protected).
    */
    EndpointService.prototype.wpV2CommentsIdDelete = function (id, force, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/comments/" + encodeURIComponent(String(id)));
                        if (force !== undefined && force !== null) {
                            uri.addQuery('force', force);
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        options = {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CommentsIdDelete(id, force, password, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the parent post of the comment (if the post is password protected).
    */
    EndpointService.prototype.wpV2CommentsIdGet = function (id, context, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/comments/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CommentsIdGet(id, context, password, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2CommentsIdPatch = function (id, author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/comments/" + encodeURIComponent(String(id)));
                        if (author !== undefined && author !== null) {
                            uri.addQuery('author', author);
                        }
                        if (authorEmail !== undefined && authorEmail !== null) {
                            uri.addQuery('author_email', authorEmail);
                        }
                        if (authorIp !== undefined && authorIp !== null) {
                            uri.addQuery('author_ip', authorIp);
                        }
                        if (authorName !== undefined && authorName !== null) {
                            uri.addQuery('author_name', authorName);
                        }
                        if (authorUrl !== undefined && authorUrl !== null) {
                            uri.addQuery('author_url', authorUrl);
                        }
                        if (authorUserAgent !== undefined && authorUserAgent !== null) {
                            uri.addQuery('author_user_agent', authorUserAgent);
                        }
                        if (content !== undefined && content !== null) {
                            uri.addQuery('content', content);
                        }
                        if (date !== undefined && date !== null) {
                            uri.addQuery('date', date.toISOString());
                        }
                        if (dateGmt !== undefined && dateGmt !== null) {
                            uri.addQuery('date_gmt', dateGmt.toISOString());
                        }
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (post !== undefined && post !== null) {
                            uri.addQuery('post', post);
                        }
                        if (status !== undefined && status !== null) {
                            uri.addQuery('status', status);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        options = {
                            method: "patch",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CommentsIdPatch(id, author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2CommentsIdPost = function (id, author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/comments/" + encodeURIComponent(String(id)));
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CommentsIdPost(id, author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2CommentsIdPut = function (id, author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/comments/" + encodeURIComponent(String(id)));
                        if (author !== undefined && author !== null) {
                            uri.addQuery('author', author);
                        }
                        if (authorEmail !== undefined && authorEmail !== null) {
                            uri.addQuery('author_email', authorEmail);
                        }
                        if (authorIp !== undefined && authorIp !== null) {
                            uri.addQuery('author_ip', authorIp);
                        }
                        if (authorName !== undefined && authorName !== null) {
                            uri.addQuery('author_name', authorName);
                        }
                        if (authorUrl !== undefined && authorUrl !== null) {
                            uri.addQuery('author_url', authorUrl);
                        }
                        if (authorUserAgent !== undefined && authorUserAgent !== null) {
                            uri.addQuery('author_user_agent', authorUserAgent);
                        }
                        if (content !== undefined && content !== null) {
                            uri.addQuery('content', content);
                        }
                        if (date !== undefined && date !== null) {
                            uri.addQuery('date', date.toISOString());
                        }
                        if (dateGmt !== undefined && dateGmt !== null) {
                            uri.addQuery('date_gmt', dateGmt.toISOString());
                        }
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (post !== undefined && post !== null) {
                            uri.addQuery('post', post);
                        }
                        if (status !== undefined && status !== null) {
                            uri.addQuery('status', status);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        options = {
                            method: "put",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CommentsIdPut(id, author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2CommentsPost = function (author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/comments");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2CommentsPost(author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2MediaGet = function (context, page, perPage, search, after, author, authorExclude, before, exclude, include, offset, order, orderby, parent, parentExclude, slug, status, mediaType, mimeType, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/media");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (after !== undefined && after !== null) {
                            uri.addQuery('after', after.toISOString());
                        }
                        if (author) {
                            author.forEach(function (element) {
                                uri.addQuery('author', element);
                            });
                        }
                        if (authorExclude) {
                            authorExclude.forEach(function (element) {
                                uri.addQuery('author_exclude', element);
                            });
                        }
                        if (before !== undefined && before !== null) {
                            uri.addQuery('before', before.toISOString());
                        }
                        if (exclude) {
                            exclude.forEach(function (element) {
                                uri.addQuery('exclude', element);
                            });
                        }
                        if (include) {
                            include.forEach(function (element) {
                                uri.addQuery('include', element);
                            });
                        }
                        if (offset !== undefined && offset !== null) {
                            uri.addQuery('offset', offset);
                        }
                        if (order) {
                            order.forEach(function (element) {
                                uri.addQuery('order', element);
                            });
                        }
                        if (orderby) {
                            orderby.forEach(function (element) {
                                uri.addQuery('orderby', element);
                            });
                        }
                        if (parent) {
                            parent.forEach(function (element) {
                                uri.addQuery('parent', element);
                            });
                        }
                        if (parentExclude) {
                            parentExclude.forEach(function (element) {
                                uri.addQuery('parent_exclude', element);
                            });
                        }
                        if (slug) {
                            slug.forEach(function (element) {
                                uri.addQuery('slug', element);
                            });
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        if (mediaType) {
                            mediaType.forEach(function (element) {
                                uri.addQuery('media_type', element);
                            });
                        }
                        if (mimeType !== undefined && mimeType !== null) {
                            uri.addQuery('mime_type', mimeType);
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2MediaGet(context, page, perPage, search, after, author, authorExclude, before, exclude, include, offset, order, orderby, parent, parentExclude, slug, status, mediaType, mimeType, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    EndpointService.prototype.wpV2MediaIdDelete = function (id, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/media/" + encodeURIComponent(String(id)));
                        if (force !== undefined && force !== null) {
                            uri.addQuery('force', force);
                        }
                        options = {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2MediaIdDelete(id, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2MediaIdGet = function (id, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/media/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2MediaIdGet(id, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2MediaIdPatch = function (id, date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/media/" + encodeURIComponent(String(id)));
                        if (date !== undefined && date !== null) {
                            uri.addQuery('date', date.toISOString());
                        }
                        if (dateGmt !== undefined && dateGmt !== null) {
                            uri.addQuery('date_gmt', dateGmt.toISOString());
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        if (title !== undefined && title !== null) {
                            uri.addQuery('title', title);
                        }
                        if (author !== undefined && author !== null) {
                            uri.addQuery('author', author);
                        }
                        if (commentStatus) {
                            commentStatus.forEach(function (element) {
                                uri.addQuery('comment_status', element);
                            });
                        }
                        if (pingStatus) {
                            pingStatus.forEach(function (element) {
                                uri.addQuery('ping_status', element);
                            });
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        if (template !== undefined && template !== null) {
                            uri.addQuery('template', template);
                        }
                        if (altText !== undefined && altText !== null) {
                            uri.addQuery('alt_text', altText);
                        }
                        if (caption !== undefined && caption !== null) {
                            uri.addQuery('caption', caption);
                        }
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (post !== undefined && post !== null) {
                            uri.addQuery('post', post);
                        }
                        options = {
                            method: "patch",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2MediaIdPatch(id, date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2MediaIdPost = function (id, date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/media/" + encodeURIComponent(String(id)));
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2MediaIdPost(id, date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2MediaIdPut = function (id, date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/media/" + encodeURIComponent(String(id)));
                        if (date !== undefined && date !== null) {
                            uri.addQuery('date', date.toISOString());
                        }
                        if (dateGmt !== undefined && dateGmt !== null) {
                            uri.addQuery('date_gmt', dateGmt.toISOString());
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        if (title !== undefined && title !== null) {
                            uri.addQuery('title', title);
                        }
                        if (author !== undefined && author !== null) {
                            uri.addQuery('author', author);
                        }
                        if (commentStatus) {
                            commentStatus.forEach(function (element) {
                                uri.addQuery('comment_status', element);
                            });
                        }
                        if (pingStatus) {
                            pingStatus.forEach(function (element) {
                                uri.addQuery('ping_status', element);
                            });
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        if (template !== undefined && template !== null) {
                            uri.addQuery('template', template);
                        }
                        if (altText !== undefined && altText !== null) {
                            uri.addQuery('alt_text', altText);
                        }
                        if (caption !== undefined && caption !== null) {
                            uri.addQuery('caption', caption);
                        }
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (post !== undefined && post !== null) {
                            uri.addQuery('post', post);
                        }
                        options = {
                            method: "put",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2MediaIdPut(id, date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2MediaPost = function (date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/media");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2MediaPost(date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PagesGet = function (context, page, perPage, search, after, author, authorExclude, before, exclude, include, menuOrder, offset, order, orderby, parent, parentExclude, slug, status, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (after !== undefined && after !== null) {
                            uri.addQuery('after', after.toISOString());
                        }
                        if (author) {
                            author.forEach(function (element) {
                                uri.addQuery('author', element);
                            });
                        }
                        if (authorExclude) {
                            authorExclude.forEach(function (element) {
                                uri.addQuery('author_exclude', element);
                            });
                        }
                        if (before !== undefined && before !== null) {
                            uri.addQuery('before', before.toISOString());
                        }
                        if (exclude) {
                            exclude.forEach(function (element) {
                                uri.addQuery('exclude', element);
                            });
                        }
                        if (include) {
                            include.forEach(function (element) {
                                uri.addQuery('include', element);
                            });
                        }
                        if (menuOrder !== undefined && menuOrder !== null) {
                            uri.addQuery('menu_order', menuOrder);
                        }
                        if (offset !== undefined && offset !== null) {
                            uri.addQuery('offset', offset);
                        }
                        if (order) {
                            order.forEach(function (element) {
                                uri.addQuery('order', element);
                            });
                        }
                        if (orderby) {
                            orderby.forEach(function (element) {
                                uri.addQuery('orderby', element);
                            });
                        }
                        if (parent) {
                            parent.forEach(function (element) {
                                uri.addQuery('parent', element);
                            });
                        }
                        if (parentExclude) {
                            parentExclude.forEach(function (element) {
                                uri.addQuery('parent_exclude', element);
                            });
                        }
                        if (slug) {
                            slug.forEach(function (element) {
                                uri.addQuery('slug', element);
                            });
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesGet(context, page, perPage, search, after, author, authorExclude, before, exclude, include, menuOrder, offset, order, orderby, parent, parentExclude, slug, status, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id
     * @param parent The ID for the parent of the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2PagesIdAutosavesGet = function (id, parent, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(id)) + "/autosaves");
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesIdAutosavesGet(id, parent, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PagesIdAutosavesPost = function (id, parent, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(id)) + "/autosaves");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesIdAutosavesPost(id, parent, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    EndpointService.prototype.wpV2PagesIdDelete = function (id, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(id)));
                        if (force !== undefined && force !== null) {
                            uri.addQuery('force', force);
                        }
                        options = {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesIdDelete(id, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    EndpointService.prototype.wpV2PagesIdGet = function (id, context, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesIdGet(id, context, password, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PagesIdPatch = function (id, date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(id)));
                        if (date !== undefined && date !== null) {
                            uri.addQuery('date', date.toISOString());
                        }
                        if (dateGmt !== undefined && dateGmt !== null) {
                            uri.addQuery('date_gmt', dateGmt.toISOString());
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (title !== undefined && title !== null) {
                            uri.addQuery('title', title);
                        }
                        if (content !== undefined && content !== null) {
                            uri.addQuery('content', content);
                        }
                        if (author !== undefined && author !== null) {
                            uri.addQuery('author', author);
                        }
                        if (excerpt !== undefined && excerpt !== null) {
                            uri.addQuery('excerpt', excerpt);
                        }
                        if (featuredMedia !== undefined && featuredMedia !== null) {
                            uri.addQuery('featured_media', featuredMedia);
                        }
                        if (commentStatus) {
                            commentStatus.forEach(function (element) {
                                uri.addQuery('comment_status', element);
                            });
                        }
                        if (pingStatus) {
                            pingStatus.forEach(function (element) {
                                uri.addQuery('ping_status', element);
                            });
                        }
                        if (menuOrder !== undefined && menuOrder !== null) {
                            uri.addQuery('menu_order', menuOrder);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        if (template !== undefined && template !== null) {
                            uri.addQuery('template', template);
                        }
                        options = {
                            method: "patch",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesIdPatch(id, date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PagesIdPost = function (id, date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(id)));
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesIdPost(id, date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PagesIdPut = function (id, date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(id)));
                        if (date !== undefined && date !== null) {
                            uri.addQuery('date', date.toISOString());
                        }
                        if (dateGmt !== undefined && dateGmt !== null) {
                            uri.addQuery('date_gmt', dateGmt.toISOString());
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (title !== undefined && title !== null) {
                            uri.addQuery('title', title);
                        }
                        if (content !== undefined && content !== null) {
                            uri.addQuery('content', content);
                        }
                        if (author !== undefined && author !== null) {
                            uri.addQuery('author', author);
                        }
                        if (excerpt !== undefined && excerpt !== null) {
                            uri.addQuery('excerpt', excerpt);
                        }
                        if (featuredMedia !== undefined && featuredMedia !== null) {
                            uri.addQuery('featured_media', featuredMedia);
                        }
                        if (commentStatus) {
                            commentStatus.forEach(function (element) {
                                uri.addQuery('comment_status', element);
                            });
                        }
                        if (pingStatus) {
                            pingStatus.forEach(function (element) {
                                uri.addQuery('ping_status', element);
                            });
                        }
                        if (menuOrder !== undefined && menuOrder !== null) {
                            uri.addQuery('menu_order', menuOrder);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        if (template !== undefined && template !== null) {
                            uri.addQuery('template', template);
                        }
                        options = {
                            method: "put",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesIdPut(id, date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2PagesParentAutosavesIdGet = function (parent, id, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(parent)) + "/autosaves/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesParentAutosavesIdGet(parent, id, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PagesParentRevisionsGet = function (parent, context, page, perPage, search, exclude, include, offset, order, orderby, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(parent)) + "/revisions");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (exclude) {
                            exclude.forEach(function (element) {
                                uri.addQuery('exclude', element);
                            });
                        }
                        if (include) {
                            include.forEach(function (element) {
                                uri.addQuery('include', element);
                            });
                        }
                        if (offset !== undefined && offset !== null) {
                            uri.addQuery('offset', offset);
                        }
                        if (order) {
                            order.forEach(function (element) {
                                uri.addQuery('order', element);
                            });
                        }
                        if (orderby) {
                            orderby.forEach(function (element) {
                                uri.addQuery('orderby', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesParentRevisionsGet(parent, context, page, perPage, search, exclude, include, offset, order, orderby, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id Unique identifier for the object.
     * @param force Required to be true, as revisions do not support trashing.
    */
    EndpointService.prototype.wpV2PagesParentRevisionsIdDelete = function (parent, id, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(parent)) + "/revisions/" + encodeURIComponent(String(id)));
                        if (force !== undefined && force !== null) {
                            uri.addQuery('force', force);
                        }
                        options = {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesParentRevisionsIdDelete(parent, id, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2PagesParentRevisionsIdGet = function (parent, id, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(parent)) + "/revisions/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesParentRevisionsIdGet(parent, id, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PagesPost = function (date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PagesPost(date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PostsGet = function (context, page, perPage, search, after, author, authorExclude, before, exclude, include, offset, order, orderby, slug, status, categories, categoriesExclude, tags, tagsExclude, sticky, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (after !== undefined && after !== null) {
                            uri.addQuery('after', after.toISOString());
                        }
                        if (author) {
                            author.forEach(function (element) {
                                uri.addQuery('author', element);
                            });
                        }
                        if (authorExclude) {
                            authorExclude.forEach(function (element) {
                                uri.addQuery('author_exclude', element);
                            });
                        }
                        if (before !== undefined && before !== null) {
                            uri.addQuery('before', before.toISOString());
                        }
                        if (exclude) {
                            exclude.forEach(function (element) {
                                uri.addQuery('exclude', element);
                            });
                        }
                        if (include) {
                            include.forEach(function (element) {
                                uri.addQuery('include', element);
                            });
                        }
                        if (offset !== undefined && offset !== null) {
                            uri.addQuery('offset', offset);
                        }
                        if (order) {
                            order.forEach(function (element) {
                                uri.addQuery('order', element);
                            });
                        }
                        if (orderby) {
                            orderby.forEach(function (element) {
                                uri.addQuery('orderby', element);
                            });
                        }
                        if (slug) {
                            slug.forEach(function (element) {
                                uri.addQuery('slug', element);
                            });
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        if (categories) {
                            categories.forEach(function (element) {
                                uri.addQuery('categories', element);
                            });
                        }
                        if (categoriesExclude) {
                            categoriesExclude.forEach(function (element) {
                                uri.addQuery('categories_exclude', element);
                            });
                        }
                        if (tags) {
                            tags.forEach(function (element) {
                                uri.addQuery('tags', element);
                            });
                        }
                        if (tagsExclude) {
                            tagsExclude.forEach(function (element) {
                                uri.addQuery('tags_exclude', element);
                            });
                        }
                        if (sticky !== undefined && sticky !== null) {
                            uri.addQuery('sticky', sticky);
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsGet(context, page, perPage, search, after, author, authorExclude, before, exclude, include, offset, order, orderby, slug, status, categories, categoriesExclude, tags, tagsExclude, sticky, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id
     * @param parent The ID for the parent of the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2PostsIdAutosavesGet = function (id, parent, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(id)) + "/autosaves");
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsIdAutosavesGet(id, parent, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PostsIdAutosavesPost = function (id, parent, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(id)) + "/autosaves");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsIdAutosavesPost(id, parent, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    EndpointService.prototype.wpV2PostsIdDelete = function (id, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(id)));
                        if (force !== undefined && force !== null) {
                            uri.addQuery('force', force);
                        }
                        options = {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsIdDelete(id, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    EndpointService.prototype.wpV2PostsIdGet = function (id, context, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsIdGet(id, context, password, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PostsIdPatch = function (id, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(id)));
                        if (date !== undefined && date !== null) {
                            uri.addQuery('date', date.toISOString());
                        }
                        if (dateGmt !== undefined && dateGmt !== null) {
                            uri.addQuery('date_gmt', dateGmt.toISOString());
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        if (title !== undefined && title !== null) {
                            uri.addQuery('title', title);
                        }
                        if (content !== undefined && content !== null) {
                            uri.addQuery('content', content);
                        }
                        if (author !== undefined && author !== null) {
                            uri.addQuery('author', author);
                        }
                        if (excerpt !== undefined && excerpt !== null) {
                            uri.addQuery('excerpt', excerpt);
                        }
                        if (featuredMedia !== undefined && featuredMedia !== null) {
                            uri.addQuery('featured_media', featuredMedia);
                        }
                        if (commentStatus) {
                            commentStatus.forEach(function (element) {
                                uri.addQuery('comment_status', element);
                            });
                        }
                        if (pingStatus) {
                            pingStatus.forEach(function (element) {
                                uri.addQuery('ping_status', element);
                            });
                        }
                        if (format) {
                            format.forEach(function (element) {
                                uri.addQuery('format', element);
                            });
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        if (sticky !== undefined && sticky !== null) {
                            uri.addQuery('sticky', sticky);
                        }
                        if (template !== undefined && template !== null) {
                            uri.addQuery('template', template);
                        }
                        if (categories) {
                            categories.forEach(function (element) {
                                uri.addQuery('categories', element);
                            });
                        }
                        if (tags) {
                            tags.forEach(function (element) {
                                uri.addQuery('tags', element);
                            });
                        }
                        options = {
                            method: "patch",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsIdPatch(id, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PostsIdPost = function (id, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(id)));
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsIdPost(id, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PostsIdPut = function (id, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(id)));
                        if (date !== undefined && date !== null) {
                            uri.addQuery('date', date.toISOString());
                        }
                        if (dateGmt !== undefined && dateGmt !== null) {
                            uri.addQuery('date_gmt', dateGmt.toISOString());
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        if (title !== undefined && title !== null) {
                            uri.addQuery('title', title);
                        }
                        if (content !== undefined && content !== null) {
                            uri.addQuery('content', content);
                        }
                        if (author !== undefined && author !== null) {
                            uri.addQuery('author', author);
                        }
                        if (excerpt !== undefined && excerpt !== null) {
                            uri.addQuery('excerpt', excerpt);
                        }
                        if (featuredMedia !== undefined && featuredMedia !== null) {
                            uri.addQuery('featured_media', featuredMedia);
                        }
                        if (commentStatus) {
                            commentStatus.forEach(function (element) {
                                uri.addQuery('comment_status', element);
                            });
                        }
                        if (pingStatus) {
                            pingStatus.forEach(function (element) {
                                uri.addQuery('ping_status', element);
                            });
                        }
                        if (format) {
                            format.forEach(function (element) {
                                uri.addQuery('format', element);
                            });
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        if (sticky !== undefined && sticky !== null) {
                            uri.addQuery('sticky', sticky);
                        }
                        if (template !== undefined && template !== null) {
                            uri.addQuery('template', template);
                        }
                        if (categories) {
                            categories.forEach(function (element) {
                                uri.addQuery('categories', element);
                            });
                        }
                        if (tags) {
                            tags.forEach(function (element) {
                                uri.addQuery('tags', element);
                            });
                        }
                        options = {
                            method: "put",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsIdPut(id, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2PostsParentAutosavesIdGet = function (parent, id, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(parent)) + "/autosaves/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsParentAutosavesIdGet(parent, id, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PostsParentRevisionsGet = function (parent, context, page, perPage, search, exclude, include, offset, order, orderby, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(parent)) + "/revisions");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (exclude) {
                            exclude.forEach(function (element) {
                                uri.addQuery('exclude', element);
                            });
                        }
                        if (include) {
                            include.forEach(function (element) {
                                uri.addQuery('include', element);
                            });
                        }
                        if (offset !== undefined && offset !== null) {
                            uri.addQuery('offset', offset);
                        }
                        if (order) {
                            order.forEach(function (element) {
                                uri.addQuery('order', element);
                            });
                        }
                        if (orderby) {
                            orderby.forEach(function (element) {
                                uri.addQuery('orderby', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsParentRevisionsGet(parent, context, page, perPage, search, exclude, include, offset, order, orderby, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id Unique identifier for the object.
     * @param force Required to be true, as revisions do not support trashing.
    */
    EndpointService.prototype.wpV2PostsParentRevisionsIdDelete = function (parent, id, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(parent)) + "/revisions/" + encodeURIComponent(String(id)));
                        if (force !== undefined && force !== null) {
                            uri.addQuery('force', force);
                        }
                        options = {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsParentRevisionsIdDelete(parent, id, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent The ID for the parent of the object.
     * @param id Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2PostsParentRevisionsIdGet = function (parent, id, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(parent)) + "/revisions/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsParentRevisionsIdGet(parent, id, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2PostsPost = function (date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2PostsPost(date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
     * @param type Limit results to items of an object type.
     * @param subtype Limit results to items of one or more object subtypes.
    */
    EndpointService.prototype.wpV2SearchGet = function (context, page, perPage, search, type, subtype, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/search");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (type) {
                            type.forEach(function (element) {
                                uri.addQuery('type', element);
                            });
                        }
                        if (subtype) {
                            subtype.forEach(function (element) {
                                uri.addQuery('subtype', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2SearchGet(context, page, perPage, search, type, subtype, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
    */
    EndpointService.prototype.wpV2SettingsGet = function (retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/settings");
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2SettingsGet(true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2SettingsPatch = function (title, description, url, email, timezone, dateFormat, timeFormat, startOfWeek, language, useSmilies, defaultCategory, defaultPostFormat, postsPerPage, defaultPingStatus, defaultCommentStatus, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/settings");
                        if (title !== undefined && title !== null) {
                            uri.addQuery('title', title);
                        }
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (url !== undefined && url !== null) {
                            uri.addQuery('url', url);
                        }
                        if (email !== undefined && email !== null) {
                            uri.addQuery('email', email);
                        }
                        if (timezone !== undefined && timezone !== null) {
                            uri.addQuery('timezone', timezone);
                        }
                        if (dateFormat !== undefined && dateFormat !== null) {
                            uri.addQuery('date_format', dateFormat);
                        }
                        if (timeFormat !== undefined && timeFormat !== null) {
                            uri.addQuery('time_format', timeFormat);
                        }
                        if (startOfWeek !== undefined && startOfWeek !== null) {
                            uri.addQuery('start_of_week', startOfWeek);
                        }
                        if (language !== undefined && language !== null) {
                            uri.addQuery('language', language);
                        }
                        if (useSmilies !== undefined && useSmilies !== null) {
                            uri.addQuery('use_smilies', useSmilies);
                        }
                        if (defaultCategory !== undefined && defaultCategory !== null) {
                            uri.addQuery('default_category', defaultCategory);
                        }
                        if (defaultPostFormat !== undefined && defaultPostFormat !== null) {
                            uri.addQuery('default_post_format', defaultPostFormat);
                        }
                        if (postsPerPage !== undefined && postsPerPage !== null) {
                            uri.addQuery('posts_per_page', postsPerPage);
                        }
                        if (defaultPingStatus) {
                            defaultPingStatus.forEach(function (element) {
                                uri.addQuery('default_ping_status', element);
                            });
                        }
                        if (defaultCommentStatus) {
                            defaultCommentStatus.forEach(function (element) {
                                uri.addQuery('default_comment_status', element);
                            });
                        }
                        options = {
                            method: "patch",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2SettingsPatch(title, description, url, email, timezone, dateFormat, timeFormat, startOfWeek, language, useSmilies, defaultCategory, defaultPostFormat, postsPerPage, defaultPingStatus, defaultCommentStatus, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2SettingsPost = function (title, description, url, email, timezone, dateFormat, timeFormat, startOfWeek, language, useSmilies, defaultCategory, defaultPostFormat, postsPerPage, defaultPingStatus, defaultCommentStatus, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/settings");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2SettingsPost(title, description, url, email, timezone, dateFormat, timeFormat, startOfWeek, language, useSmilies, defaultCategory, defaultPostFormat, postsPerPage, defaultPingStatus, defaultCommentStatus, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2SettingsPut = function (title, description, url, email, timezone, dateFormat, timeFormat, startOfWeek, language, useSmilies, defaultCategory, defaultPostFormat, postsPerPage, defaultPingStatus, defaultCommentStatus, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/settings");
                        if (title !== undefined && title !== null) {
                            uri.addQuery('title', title);
                        }
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (url !== undefined && url !== null) {
                            uri.addQuery('url', url);
                        }
                        if (email !== undefined && email !== null) {
                            uri.addQuery('email', email);
                        }
                        if (timezone !== undefined && timezone !== null) {
                            uri.addQuery('timezone', timezone);
                        }
                        if (dateFormat !== undefined && dateFormat !== null) {
                            uri.addQuery('date_format', dateFormat);
                        }
                        if (timeFormat !== undefined && timeFormat !== null) {
                            uri.addQuery('time_format', timeFormat);
                        }
                        if (startOfWeek !== undefined && startOfWeek !== null) {
                            uri.addQuery('start_of_week', startOfWeek);
                        }
                        if (language !== undefined && language !== null) {
                            uri.addQuery('language', language);
                        }
                        if (useSmilies !== undefined && useSmilies !== null) {
                            uri.addQuery('use_smilies', useSmilies);
                        }
                        if (defaultCategory !== undefined && defaultCategory !== null) {
                            uri.addQuery('default_category', defaultCategory);
                        }
                        if (defaultPostFormat !== undefined && defaultPostFormat !== null) {
                            uri.addQuery('default_post_format', defaultPostFormat);
                        }
                        if (postsPerPage !== undefined && postsPerPage !== null) {
                            uri.addQuery('posts_per_page', postsPerPage);
                        }
                        if (defaultPingStatus) {
                            defaultPingStatus.forEach(function (element) {
                                uri.addQuery('default_ping_status', element);
                            });
                        }
                        if (defaultCommentStatus) {
                            defaultCommentStatus.forEach(function (element) {
                                uri.addQuery('default_comment_status', element);
                            });
                        }
                        options = {
                            method: "put",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2SettingsPut(title, description, url, email, timezone, dateFormat, timeFormat, startOfWeek, language, useSmilies, defaultCategory, defaultPostFormat, postsPerPage, defaultPingStatus, defaultCommentStatus, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2StatusesGet = function (context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/statuses");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2StatusesGet(context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param status An alphanumeric identifier for the status.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2StatusesStatusGet = function (status, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/statuses/" + encodeURIComponent(String(status)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2StatusesStatusGet(status, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2TagsGet = function (context, page, perPage, search, exclude, include, offset, order, orderby, hideEmpty, post, slug, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/tags");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (exclude) {
                            exclude.forEach(function (element) {
                                uri.addQuery('exclude', element);
                            });
                        }
                        if (include) {
                            include.forEach(function (element) {
                                uri.addQuery('include', element);
                            });
                        }
                        if (offset !== undefined && offset !== null) {
                            uri.addQuery('offset', offset);
                        }
                        if (order) {
                            order.forEach(function (element) {
                                uri.addQuery('order', element);
                            });
                        }
                        if (orderby) {
                            orderby.forEach(function (element) {
                                uri.addQuery('orderby', element);
                            });
                        }
                        if (hideEmpty !== undefined && hideEmpty !== null) {
                            uri.addQuery('hide_empty', hideEmpty);
                        }
                        if (post !== undefined && post !== null) {
                            uri.addQuery('post', post);
                        }
                        if (slug) {
                            slug.forEach(function (element) {
                                uri.addQuery('slug', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2TagsGet(context, page, perPage, search, exclude, include, offset, order, orderby, hideEmpty, post, slug, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the term.
     * @param force Required to be true, as terms do not support trashing.
    */
    EndpointService.prototype.wpV2TagsIdDelete = function (id, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/tags/" + encodeURIComponent(String(id)));
                        if (force !== undefined && force !== null) {
                            uri.addQuery('force', force);
                        }
                        options = {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2TagsIdDelete(id, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the term.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2TagsIdGet = function (id, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/tags/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2TagsIdGet(id, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the term.
     * @param description HTML description of the term.
     * @param name HTML title for the term.
     * @param slug An alphanumeric identifier for the term unique to its type.
     * @param meta Meta fields.
    */
    EndpointService.prototype.wpV2TagsIdPatch = function (id, description, name, slug, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/tags/" + encodeURIComponent(String(id)));
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (name !== undefined && name !== null) {
                            uri.addQuery('name', name);
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        options = {
                            method: "patch",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2TagsIdPatch(id, description, name, slug, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the term.
     * @param description
     * @param name
     * @param slug
     * @param meta
    */
    EndpointService.prototype.wpV2TagsIdPost = function (id, description, name, slug, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/tags/" + encodeURIComponent(String(id)));
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2TagsIdPost(id, description, name, slug, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the term.
     * @param description HTML description of the term.
     * @param name HTML title for the term.
     * @param slug An alphanumeric identifier for the term unique to its type.
     * @param meta Meta fields.
    */
    EndpointService.prototype.wpV2TagsIdPut = function (id, description, name, slug, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/tags/" + encodeURIComponent(String(id)));
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (name !== undefined && name !== null) {
                            uri.addQuery('name', name);
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        options = {
                            method: "put",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2TagsIdPut(id, description, name, slug, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param description
     * @param name
     * @param slug
     * @param meta
    */
    EndpointService.prototype.wpV2TagsPost = function (description, name, slug, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/tags");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2TagsPost(description, name, slug, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
     * @param type Limit results to taxonomies associated with a specific post type.
    */
    EndpointService.prototype.wpV2TaxonomiesGet = function (context, type, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/taxonomies");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (type !== undefined && type !== null) {
                            uri.addQuery('type', type);
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2TaxonomiesGet(context, type, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param taxonomy An alphanumeric identifier for the taxonomy.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2TaxonomiesTaxonomyGet = function (taxonomy, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/taxonomies/" + encodeURIComponent(String(taxonomy)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2TaxonomiesTaxonomyGet(taxonomy, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param status Limit result set to themes assigned one or more statuses.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param page Current page of the collection.
     * @param perPage Maximum number of items to be returned in result set.
     * @param search Limit results to those matching a string.
    */
    EndpointService.prototype.wpV2ThemesGet = function (status, context, page, perPage, search, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/themes");
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (status) {
                            status.forEach(function (element) {
                                uri.addQuery('status', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2ThemesGet(status, context, page, perPage, search, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2TypesGet = function (context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/types");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2TypesGet(context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param type An alphanumeric identifier for the post type.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2TypesTypeGet = function (type, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/types/" + encodeURIComponent(String(type)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2TypesTypeGet(type, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2UsersGet = function (context, page, perPage, search, exclude, include, offset, order, orderby, slug, roles, who, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        if (page !== undefined && page !== null) {
                            uri.addQuery('page', page);
                        }
                        if (perPage !== undefined && perPage !== null) {
                            uri.addQuery('per_page', perPage);
                        }
                        if (search !== undefined && search !== null) {
                            uri.addQuery('search', search);
                        }
                        if (exclude) {
                            exclude.forEach(function (element) {
                                uri.addQuery('exclude', element);
                            });
                        }
                        if (include) {
                            include.forEach(function (element) {
                                uri.addQuery('include', element);
                            });
                        }
                        if (offset !== undefined && offset !== null) {
                            uri.addQuery('offset', offset);
                        }
                        if (order) {
                            order.forEach(function (element) {
                                uri.addQuery('order', element);
                            });
                        }
                        if (orderby) {
                            orderby.forEach(function (element) {
                                uri.addQuery('orderby', element);
                            });
                        }
                        if (slug) {
                            slug.forEach(function (element) {
                                uri.addQuery('slug', element);
                            });
                        }
                        if (roles) {
                            roles.forEach(function (element) {
                                uri.addQuery('roles', element);
                            });
                        }
                        if (who) {
                            who.forEach(function (element) {
                                uri.addQuery('who', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersGet(context, page, perPage, search, exclude, include, offset, order, orderby, slug, roles, who, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the user.
     * @param reassign Reassign the deleted user&#39;s posts and links to this user ID.
     * @param force Required to be true, as users do not support trashing.
    */
    EndpointService.prototype.wpV2UsersIdDelete = function (id, reassign, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/" + encodeURIComponent(String(id)));
                        if (force !== undefined && force !== null) {
                            uri.addQuery('force', force);
                        }
                        if (reassign !== undefined && reassign !== null) {
                            uri.addQuery('reassign', reassign);
                        }
                        options = {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersIdDelete(id, reassign, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id Unique identifier for the user.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2UsersIdGet = function (id, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/" + encodeURIComponent(String(id)));
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersIdGet(id, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2UsersIdPatch = function (id, username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/" + encodeURIComponent(String(id)));
                        if (username !== undefined && username !== null) {
                            uri.addQuery('username', username);
                        }
                        if (name !== undefined && name !== null) {
                            uri.addQuery('name', name);
                        }
                        if (firstName !== undefined && firstName !== null) {
                            uri.addQuery('first_name', firstName);
                        }
                        if (lastName !== undefined && lastName !== null) {
                            uri.addQuery('last_name', lastName);
                        }
                        if (email !== undefined && email !== null) {
                            uri.addQuery('email', email);
                        }
                        if (url !== undefined && url !== null) {
                            uri.addQuery('url', url);
                        }
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (locale) {
                            locale.forEach(function (element) {
                                uri.addQuery('locale', element);
                            });
                        }
                        if (nickname !== undefined && nickname !== null) {
                            uri.addQuery('nickname', nickname);
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (roles) {
                            roles.forEach(function (element) {
                                uri.addQuery('roles', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        options = {
                            method: "patch",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersIdPatch(id, username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2UsersIdPost = function (id, username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/" + encodeURIComponent(String(id)));
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersIdPost(id, username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2UsersIdPut = function (id, username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/" + encodeURIComponent(String(id)));
                        if (username !== undefined && username !== null) {
                            uri.addQuery('username', username);
                        }
                        if (name !== undefined && name !== null) {
                            uri.addQuery('name', name);
                        }
                        if (firstName !== undefined && firstName !== null) {
                            uri.addQuery('first_name', firstName);
                        }
                        if (lastName !== undefined && lastName !== null) {
                            uri.addQuery('last_name', lastName);
                        }
                        if (email !== undefined && email !== null) {
                            uri.addQuery('email', email);
                        }
                        if (url !== undefined && url !== null) {
                            uri.addQuery('url', url);
                        }
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (locale) {
                            locale.forEach(function (element) {
                                uri.addQuery('locale', element);
                            });
                        }
                        if (nickname !== undefined && nickname !== null) {
                            uri.addQuery('nickname', nickname);
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (roles) {
                            roles.forEach(function (element) {
                                uri.addQuery('roles', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        options = {
                            method: "put",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersIdPut(id, username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param reassign Reassign the deleted user&#39;s posts and links to this user ID.
     * @param force Required to be true, as users do not support trashing.
    */
    EndpointService.prototype.wpV2UsersMeDelete = function (reassign, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/me");
                        if (force !== undefined && force !== null) {
                            uri.addQuery('force', force);
                        }
                        if (reassign !== undefined && reassign !== null) {
                            uri.addQuery('reassign', reassign);
                        }
                        options = {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersMeDelete(reassign, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param context Scope under which the request is made; determines fields present in response.
    */
    EndpointService.prototype.wpV2UsersMeGet = function (context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/me");
                        if (context) {
                            context.forEach(function (element) {
                                uri.addQuery('context', element);
                            });
                        }
                        options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersMeGet(context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2UsersMePatch = function (username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/me");
                        if (username !== undefined && username !== null) {
                            uri.addQuery('username', username);
                        }
                        if (name !== undefined && name !== null) {
                            uri.addQuery('name', name);
                        }
                        if (firstName !== undefined && firstName !== null) {
                            uri.addQuery('first_name', firstName);
                        }
                        if (lastName !== undefined && lastName !== null) {
                            uri.addQuery('last_name', lastName);
                        }
                        if (email !== undefined && email !== null) {
                            uri.addQuery('email', email);
                        }
                        if (url !== undefined && url !== null) {
                            uri.addQuery('url', url);
                        }
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (locale) {
                            locale.forEach(function (element) {
                                uri.addQuery('locale', element);
                            });
                        }
                        if (nickname !== undefined && nickname !== null) {
                            uri.addQuery('nickname', nickname);
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (roles) {
                            roles.forEach(function (element) {
                                uri.addQuery('roles', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        options = {
                            method: "patch",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersMePatch(username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2UsersMePost = function (username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/me");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersMePost(username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2UsersMePut = function (username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/me");
                        if (username !== undefined && username !== null) {
                            uri.addQuery('username', username);
                        }
                        if (name !== undefined && name !== null) {
                            uri.addQuery('name', name);
                        }
                        if (firstName !== undefined && firstName !== null) {
                            uri.addQuery('first_name', firstName);
                        }
                        if (lastName !== undefined && lastName !== null) {
                            uri.addQuery('last_name', lastName);
                        }
                        if (email !== undefined && email !== null) {
                            uri.addQuery('email', email);
                        }
                        if (url !== undefined && url !== null) {
                            uri.addQuery('url', url);
                        }
                        if (description !== undefined && description !== null) {
                            uri.addQuery('description', description);
                        }
                        if (locale) {
                            locale.forEach(function (element) {
                                uri.addQuery('locale', element);
                            });
                        }
                        if (nickname !== undefined && nickname !== null) {
                            uri.addQuery('nickname', nickname);
                        }
                        if (slug !== undefined && slug !== null) {
                            uri.addQuery('slug', slug);
                        }
                        if (roles) {
                            roles.forEach(function (element) {
                                uri.addQuery('roles', element);
                            });
                        }
                        if (password !== undefined && password !== null) {
                            uri.addQuery('password', password);
                        }
                        if (meta !== undefined && meta !== null) {
                            uri.addQuery('meta', meta);
                        }
                        options = {
                            method: "put",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersMePut(username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    EndpointService.prototype.wpV2UsersPost = function (username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users");
                        options = {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + (this.rptToken ? this.rptToken : this.token)
                            }
                        };
                        return [4 /*yield*/, fetch(uri.toString(), options)];
                    case 1:
                        response = _a.sent();
                        if (!(!retrying && response.status == 401)) return [3 /*break*/, 3];
                        ticket = api_1.ApiUtils.getUMATicket(response);
                        authorization = response.headers.get("Authorization");
                        return [4 /*yield*/, api_1.ApiUtils.getRPT(authorization, ticket)];
                    case 2:
                        rptToken = _a.sent();
                        this.rptToken = rptToken ? rptToken["access_token"] : null;
                        if (this.rptToken) {
                            return [2 /*return*/, this.wpV2UsersPost(username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    return EndpointService;
}());
exports.EndpointService = EndpointService;
