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
var DefaultService = /** @class */ (function () {
    function DefaultService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     *
     * @param id
     * @param id2 Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    DefaultService.prototype.deleteWpV2BlocksById = function (id, id2, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
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
                            return [2 /*return*/, this.deleteWpV2BlocksById(id, id2, force, true)];
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
     * @param id2 Unique identifier for the term.
     * @param force Required to be true, as terms do not support trashing.
    */
    DefaultService.prototype.deleteWpV2CategoriesById = function (id, id2, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/categories/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
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
                            return [2 /*return*/, this.deleteWpV2CategoriesById(id, id2, force, true)];
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
     * @param id2 Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
     * @param password The password for the parent post of the comment (if the post is password protected).
    */
    DefaultService.prototype.deleteWpV2CommentsById = function (id, id2, force, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/comments/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
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
                            return [2 /*return*/, this.deleteWpV2CommentsById(id, id2, force, password, true)];
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
     * @param id2 Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    DefaultService.prototype.deleteWpV2MediaById = function (id, id2, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/media/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
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
                            return [2 /*return*/, this.deleteWpV2MediaById(id, id2, force, true)];
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
     * @param id2 Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    DefaultService.prototype.deleteWpV2PagesById = function (id, id2, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
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
                            return [2 /*return*/, this.deleteWpV2PagesById(id, id2, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 Unique identifier for the object.
     * @param force Required to be true, as revisions do not support trashing.
    */
    DefaultService.prototype.deleteWpV2PagesByParentRevisionsById = function (parent, id, parent2, id2, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(parent)) + "/revisions/" + encodeURIComponent(String(id)));
                        if (parent2 !== undefined && parent2 !== null) {
                            uri.addQuery('parent', parent2);
                        }
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
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
                            return [2 /*return*/, this.deleteWpV2PagesByParentRevisionsById(parent, id, parent2, id2, force, true)];
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
     * @param id2 Unique identifier for the object.
     * @param force Whether to bypass trash and force deletion.
    */
    DefaultService.prototype.deleteWpV2PostsById = function (id, id2, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
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
                            return [2 /*return*/, this.deleteWpV2PostsById(id, id2, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 Unique identifier for the object.
     * @param force Required to be true, as revisions do not support trashing.
    */
    DefaultService.prototype.deleteWpV2PostsByParentRevisionsById = function (parent, id, parent2, id2, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(parent)) + "/revisions/" + encodeURIComponent(String(id)));
                        if (parent2 !== undefined && parent2 !== null) {
                            uri.addQuery('parent', parent2);
                        }
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
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
                            return [2 /*return*/, this.deleteWpV2PostsByParentRevisionsById(parent, id, parent2, id2, force, true)];
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
     * @param id2 Unique identifier for the term.
     * @param force Required to be true, as terms do not support trashing.
    */
    DefaultService.prototype.deleteWpV2TagsById = function (id, id2, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/tags/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
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
                            return [2 /*return*/, this.deleteWpV2TagsById(id, id2, force, true)];
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
     * @param reassign Reassign the deleted user&#39;s posts and links to this user ID.
     * @param id2 Unique identifier for the user.
     * @param force Required to be true, as users do not support trashing.
    */
    DefaultService.prototype.deleteWpV2UsersById = function (id, reassign, id2, force, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
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
                            return [2 /*return*/, this.deleteWpV2UsersById(id, reassign, id2, force, true)];
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
    DefaultService.prototype.deleteWpV2UsersMe = function (reassign, force, retrying) {
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
                            return [2 /*return*/, this.deleteWpV2UsersMe(reassign, force, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param name
     * @param name2 Unique registered name for the block.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param attributes Attributes for core/tag-cloud block
     * @param postId ID of the post context.
    */
    DefaultService.prototype.getWpV2BlockRendererByName = function (name, name2, context, attributes, postId, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/block-renderer/" + encodeURIComponent(String(name)));
                        if (name2 !== undefined && name2 !== null) {
                            uri.addQuery('name', name2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2BlockRendererByName(name, name2, context, attributes, postId, true)];
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
    DefaultService.prototype.getWpV2Blocks = function (context, page, perPage, search, after, before, exclude, include, offset, order, orderby, slug, status, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks");
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
                        if (order !== undefined && order !== null) {
                            uri.addQuery('order', order);
                        }
                        if (orderby !== undefined && orderby !== null) {
                            uri.addQuery('orderby', orderby);
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
                            return [2 /*return*/, this.getWpV2Blocks(context, page, perPage, search, after, before, exclude, include, offset, order, orderby, slug, status, true)];
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
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    DefaultService.prototype.getWpV2BlocksById = function (id, id2, context, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2BlocksById(id, id2, context, password, true)];
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
    DefaultService.prototype.getWpV2BlocksByIdAutosaves = function (id, parent, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(id)) + "/autosaves");
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2BlocksByIdAutosaves(id, parent, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2BlocksByParentAutosavesById = function (parent, id, parent2, id2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/blocks/" + encodeURIComponent(String(parent)) + "/autosaves/" + encodeURIComponent(String(id)));
                        if (parent2 !== undefined && parent2 !== null) {
                            uri.addQuery('parent', parent2);
                        }
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2BlocksByParentAutosavesById(parent, id, parent2, id2, context, true)];
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
    DefaultService.prototype.getWpV2Categories = function (context, page, perPage, search, exclude, include, order, orderby, hideEmpty, parent, post, slug, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/categories");
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
                        if (order !== undefined && order !== null) {
                            uri.addQuery('order', order);
                        }
                        if (orderby !== undefined && orderby !== null) {
                            uri.addQuery('orderby', orderby);
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
                            return [2 /*return*/, this.getWpV2Categories(context, page, perPage, search, exclude, include, order, orderby, hideEmpty, parent, post, slug, true)];
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
     * @param id2 Unique identifier for the term.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2CategoriesById = function (id, id2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/categories/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2CategoriesById(id, id2, context, true)];
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
    DefaultService.prototype.getWpV2Comments = function (context, page, perPage, search, after, author, authorExclude, authorEmail, before, exclude, include, offset, order, orderby, parent, parentExclude, post, status, type, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/comments");
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
                        if (order !== undefined && order !== null) {
                            uri.addQuery('order', order);
                        }
                        if (orderby !== undefined && orderby !== null) {
                            uri.addQuery('orderby', orderby);
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
                            return [2 /*return*/, this.getWpV2Comments(context, page, perPage, search, after, author, authorExclude, authorEmail, before, exclude, include, offset, order, orderby, parent, parentExclude, post, status, type, password, true)];
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
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the parent post of the comment (if the post is password protected).
    */
    DefaultService.prototype.getWpV2CommentsById = function (id, id2, context, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/comments/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2CommentsById(id, id2, context, password, true)];
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
    DefaultService.prototype.getWpV2Media = function (context, page, perPage, search, after, author, authorExclude, before, exclude, include, offset, order, orderby, parent, parentExclude, slug, status, mediaType, mimeType, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/media");
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
                        if (order !== undefined && order !== null) {
                            uri.addQuery('order', order);
                        }
                        if (orderby !== undefined && orderby !== null) {
                            uri.addQuery('orderby', orderby);
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
                        if (mediaType !== undefined && mediaType !== null) {
                            uri.addQuery('media_type', mediaType);
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
                            return [2 /*return*/, this.getWpV2Media(context, page, perPage, search, after, author, authorExclude, before, exclude, include, offset, order, orderby, parent, parentExclude, slug, status, mediaType, mimeType, true)];
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
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2MediaById = function (id, id2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/media/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2MediaById(id, id2, context, true)];
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
    DefaultService.prototype.getWpV2Pages = function (context, page, perPage, search, after, author, authorExclude, before, exclude, include, menuOrder, offset, order, orderby, parent, parentExclude, slug, status, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages");
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
                        if (order !== undefined && order !== null) {
                            uri.addQuery('order', order);
                        }
                        if (orderby !== undefined && orderby !== null) {
                            uri.addQuery('orderby', orderby);
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
                            return [2 /*return*/, this.getWpV2Pages(context, page, perPage, search, after, author, authorExclude, before, exclude, include, menuOrder, offset, order, orderby, parent, parentExclude, slug, status, true)];
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
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    DefaultService.prototype.getWpV2PagesById = function (id, id2, context, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2PagesById(id, id2, context, password, true)];
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
    DefaultService.prototype.getWpV2PagesByIdAutosaves = function (id, parent, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(id)) + "/autosaves");
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2PagesByIdAutosaves(id, parent, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2PagesByParentAutosavesById = function (parent, id, parent2, id2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(parent)) + "/autosaves/" + encodeURIComponent(String(id)));
                        if (parent2 !== undefined && parent2 !== null) {
                            uri.addQuery('parent', parent2);
                        }
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2PagesByParentAutosavesById(parent, id, parent2, id2, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    DefaultService.prototype.getWpV2PagesByParentRevisions = function (parent, parent2, context, page, perPage, search, exclude, include, offset, order, orderby, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(parent)) + "/revisions");
                        if (parent2 !== undefined && parent2 !== null) {
                            uri.addQuery('parent', parent2);
                        }
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
                        if (order !== undefined && order !== null) {
                            uri.addQuery('order', order);
                        }
                        if (orderby !== undefined && orderby !== null) {
                            uri.addQuery('orderby', orderby);
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
                            return [2 /*return*/, this.getWpV2PagesByParentRevisions(parent, parent2, context, page, perPage, search, exclude, include, offset, order, orderby, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2PagesByParentRevisionsById = function (parent, id, parent2, id2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/pages/" + encodeURIComponent(String(parent)) + "/revisions/" + encodeURIComponent(String(id)));
                        if (parent2 !== undefined && parent2 !== null) {
                            uri.addQuery('parent', parent2);
                        }
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2PagesByParentRevisionsById(parent, id, parent2, id2, context, true)];
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
    DefaultService.prototype.getWpV2Posts = function (context, page, perPage, search, after, author, authorExclude, before, exclude, include, offset, order, orderby, slug, status, categories, categoriesExclude, tags, tagsExclude, sticky, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts");
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
                        if (order !== undefined && order !== null) {
                            uri.addQuery('order', order);
                        }
                        if (orderby !== undefined && orderby !== null) {
                            uri.addQuery('orderby', orderby);
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
                            return [2 /*return*/, this.getWpV2Posts(context, page, perPage, search, after, author, authorExclude, before, exclude, include, offset, order, orderby, slug, status, categories, categoriesExclude, tags, tagsExclude, sticky, true)];
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
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
     * @param password The password for the post if it is password protected.
    */
    DefaultService.prototype.getWpV2PostsById = function (id, id2, context, password, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2PostsById(id, id2, context, password, true)];
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
    DefaultService.prototype.getWpV2PostsByIdAutosaves = function (id, parent, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(id)) + "/autosaves");
                        if (parent !== undefined && parent !== null) {
                            uri.addQuery('parent', parent);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2PostsByIdAutosaves(id, parent, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 The ID for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2PostsByParentAutosavesById = function (parent, id, parent2, id2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(parent)) + "/autosaves/" + encodeURIComponent(String(id)));
                        if (parent2 !== undefined && parent2 !== null) {
                            uri.addQuery('parent', parent2);
                        }
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2PostsByParentAutosavesById(parent, id, parent2, id2, context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    DefaultService.prototype.getWpV2PostsByParentRevisions = function (parent, parent2, context, page, perPage, search, exclude, include, offset, order, orderby, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(parent)) + "/revisions");
                        if (parent2 !== undefined && parent2 !== null) {
                            uri.addQuery('parent', parent2);
                        }
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
                        if (order !== undefined && order !== null) {
                            uri.addQuery('order', order);
                        }
                        if (orderby !== undefined && orderby !== null) {
                            uri.addQuery('orderby', orderby);
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
                            return [2 /*return*/, this.getWpV2PostsByParentRevisions(parent, parent2, context, page, perPage, search, exclude, include, offset, order, orderby, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param parent
     * @param id
     * @param parent2 The ID for the parent of the object.
     * @param id2 Unique identifier for the object.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2PostsByParentRevisionsById = function (parent, id, parent2, id2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/posts/" + encodeURIComponent(String(parent)) + "/revisions/" + encodeURIComponent(String(id)));
                        if (parent2 !== undefined && parent2 !== null) {
                            uri.addQuery('parent', parent2);
                        }
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2PostsByParentRevisionsById(parent, id, parent2, id2, context, true)];
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
    DefaultService.prototype.getWpV2Search = function (context, page, perPage, search, type, subtype, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/search");
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
                        if (type !== undefined && type !== null) {
                            uri.addQuery('type', type);
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
                            return [2 /*return*/, this.getWpV2Search(context, page, perPage, search, type, subtype, true)];
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
    DefaultService.prototype.getWpV2Settings = function (retrying) {
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
                            return [2 /*return*/, this.getWpV2Settings(true)];
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
    DefaultService.prototype.getWpV2Statuses = function (context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/statuses");
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2Statuses(context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param status
     * @param status2 An alphanumeric identifier for the status.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2StatusesByStatus = function (status, status2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/statuses/" + encodeURIComponent(String(status)));
                        if (status2 !== undefined && status2 !== null) {
                            uri.addQuery('status', status2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2StatusesByStatus(status, status2, context, true)];
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
    DefaultService.prototype.getWpV2Tags = function (context, page, perPage, search, exclude, include, offset, order, orderby, hideEmpty, post, slug, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/tags");
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
                        if (order !== undefined && order !== null) {
                            uri.addQuery('order', order);
                        }
                        if (orderby !== undefined && orderby !== null) {
                            uri.addQuery('orderby', orderby);
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
                            return [2 /*return*/, this.getWpV2Tags(context, page, perPage, search, exclude, include, offset, order, orderby, hideEmpty, post, slug, true)];
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
     * @param id2 Unique identifier for the term.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2TagsById = function (id, id2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/tags/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2TagsById(id, id2, context, true)];
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
    DefaultService.prototype.getWpV2Taxonomies = function (context, type, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/taxonomies");
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2Taxonomies(context, type, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param taxonomy
     * @param taxonomy2 An alphanumeric identifier for the taxonomy.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2TaxonomiesByTaxonomy = function (taxonomy, taxonomy2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/taxonomies/" + encodeURIComponent(String(taxonomy)));
                        if (taxonomy2 !== undefined && taxonomy2 !== null) {
                            uri.addQuery('taxonomy', taxonomy2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2TaxonomiesByTaxonomy(taxonomy, taxonomy2, context, true)];
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
    DefaultService.prototype.getWpV2Themes = function (status, context, page, perPage, search, retrying) {
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
                            return [2 /*return*/, this.getWpV2Themes(status, context, page, perPage, search, true)];
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
    DefaultService.prototype.getWpV2Types = function (context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/types");
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2Types(context, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param type
     * @param type2 An alphanumeric identifier for the post type.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2TypesByType = function (type, type2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/types/" + encodeURIComponent(String(type)));
                        if (type2 !== undefined && type2 !== null) {
                            uri.addQuery('type', type2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2TypesByType(type, type2, context, true)];
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
    DefaultService.prototype.getWpV2Users = function (context, page, perPage, search, exclude, include, offset, order, orderby, slug, roles, who, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users");
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
                        if (order !== undefined && order !== null) {
                            uri.addQuery('order', order);
                        }
                        if (orderby !== undefined && orderby !== null) {
                            uri.addQuery('orderby', orderby);
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
                        if (who !== undefined && who !== null) {
                            uri.addQuery('who', who);
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
                            return [2 /*return*/, this.getWpV2Users(context, page, perPage, search, exclude, include, offset, order, orderby, slug, roles, who, true)];
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
     * @param id2 Unique identifier for the user.
     * @param context Scope under which the request is made; determines fields present in response.
    */
    DefaultService.prototype.getWpV2UsersById = function (id, id2, context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/" + encodeURIComponent(String(id)));
                        if (id2 !== undefined && id2 !== null) {
                            uri.addQuery('id', id2);
                        }
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2UsersById(id, id2, context, true)];
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
    DefaultService.prototype.getWpV2UsersMe = function (context, retrying) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, response, ticket, authorization, rptToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URI(this.basePath + "/wp/v2/users/me");
                        if (context !== undefined && context !== null) {
                            uri.addQuery('context', context);
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
                            return [2 /*return*/, this.getWpV2UsersMe(context, true)];
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
    DefaultService.prototype.postWpV2Blocks = function (date, dateGmt, slug, status, password, title, content, template, retrying) {
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
                            return [2 /*return*/, this.postWpV2Blocks(date, dateGmt, slug, status, password, title, content, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    DefaultService.prototype.postWpV2BlocksById = function (id2, id, date, dateGmt, slug, status, password, title, content, template, retrying) {
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
                            return [2 /*return*/, this.postWpV2BlocksById(id2, id, date, dateGmt, slug, status, password, title, content, template, true)];
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
    DefaultService.prototype.postWpV2BlocksByIdAutosaves = function (id, parent, date, dateGmt, slug, status, password, title, content, template, retrying) {
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
                            return [2 /*return*/, this.postWpV2BlocksByIdAutosaves(id, parent, date, dateGmt, slug, status, password, title, content, template, true)];
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
    DefaultService.prototype.postWpV2Categories = function (description, name, slug, parent, meta, retrying) {
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
                            return [2 /*return*/, this.postWpV2Categories(description, name, slug, parent, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    DefaultService.prototype.postWpV2CategoriesById = function (id2, id, description, name, slug, parent, meta, retrying) {
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
                            return [2 /*return*/, this.postWpV2CategoriesById(id2, id, description, name, slug, parent, meta, true)];
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
    DefaultService.prototype.postWpV2Comments = function (author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, retrying) {
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
                            return [2 /*return*/, this.postWpV2Comments(author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    DefaultService.prototype.postWpV2CommentsById = function (id2, id, author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, retrying) {
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
                            return [2 /*return*/, this.postWpV2CommentsById(id2, id, author, authorEmail, authorIp, authorName, authorUrl, authorUserAgent, content, date, dateGmt, parent, post, status, meta, true)];
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
    DefaultService.prototype.postWpV2Media = function (date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, retrying) {
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
                            return [2 /*return*/, this.postWpV2Media(date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    DefaultService.prototype.postWpV2MediaById = function (id2, id, date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, retrying) {
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
                            return [2 /*return*/, this.postWpV2MediaById(id2, id, date, dateGmt, slug, status, title, author, commentStatus, pingStatus, meta, template, altText, caption, description, post, true)];
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
    DefaultService.prototype.postWpV2Pages = function (date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, retrying) {
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
                            return [2 /*return*/, this.postWpV2Pages(date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    DefaultService.prototype.postWpV2PagesById = function (id2, id, date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, retrying) {
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
                            return [2 /*return*/, this.postWpV2PagesById(id2, id, date, dateGmt, slug, status, password, parent, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, true)];
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
    DefaultService.prototype.postWpV2PagesByIdAutosaves = function (id, parent, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, retrying) {
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
                            return [2 /*return*/, this.postWpV2PagesByIdAutosaves(id, parent, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, menuOrder, meta, template, true)];
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
    DefaultService.prototype.postWpV2Posts = function (date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, retrying) {
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
                            return [2 /*return*/, this.postWpV2Posts(date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    DefaultService.prototype.postWpV2PostsById = function (id2, id, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, retrying) {
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
                            return [2 /*return*/, this.postWpV2PostsById(id2, id, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, true)];
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
    DefaultService.prototype.postWpV2PostsByIdAutosaves = function (id, parent, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, retrying) {
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
                            return [2 /*return*/, this.postWpV2PostsByIdAutosaves(id, parent, date, dateGmt, slug, status, password, title, content, author, excerpt, featuredMedia, commentStatus, pingStatus, format, meta, sticky, template, categories, tags, true)];
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
    DefaultService.prototype.postWpV2Settings = function (title, description, url, email, timezone, dateFormat, timeFormat, startOfWeek, language, useSmilies, defaultCategory, defaultPostFormat, postsPerPage, defaultPingStatus, defaultCommentStatus, retrying) {
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
                            return [2 /*return*/, this.postWpV2Settings(title, description, url, email, timezone, dateFormat, timeFormat, startOfWeek, language, useSmilies, defaultCategory, defaultPostFormat, postsPerPage, defaultPingStatus, defaultCommentStatus, true)];
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
    DefaultService.prototype.postWpV2Tags = function (description, name, slug, meta, retrying) {
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
                            return [2 /*return*/, this.postWpV2Tags(description, name, slug, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    /**
     *
     * @param id2
     * @param id
     * @param description
     * @param name
     * @param slug
     * @param meta
    */
    DefaultService.prototype.postWpV2TagsById = function (id2, id, description, name, slug, meta, retrying) {
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
                            return [2 /*return*/, this.postWpV2TagsById(id2, id, description, name, slug, meta, true)];
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
    DefaultService.prototype.postWpV2Users = function (username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, retrying) {
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
                            return [2 /*return*/, this.postWpV2Users(username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
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
    DefaultService.prototype.postWpV2UsersById = function (id2, id, username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, retrying) {
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
                            return [2 /*return*/, this.postWpV2UsersById(id2, id, username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, true)];
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
    DefaultService.prototype.postWpV2UsersMe = function (username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, retrying) {
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
                            return [2 /*return*/, this.postWpV2UsersMe(username, name, firstName, lastName, email, url, description, locale, nickname, slug, roles, password, meta, true)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, api_1.ApiUtils.handleResponse(response)];
                }
            });
        });
    };
    return DefaultService;
}());
exports.DefaultService = DefaultService;
