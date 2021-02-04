(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('lodash'), require('@ngrx/component-store'), require('rxjs'), require('@angular/common'), require('ng-zorro-antd/pipes'), require('ng-zorro-antd/core/util'), require('ng-zorro-antd/tree'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/card'), require('@angular/cdk/drag-drop'), require('ng-zorro-antd/button'), require('@angular/forms'), require('ng-zorro-antd/form'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/input'), require('ng-zorro-antd/collapse'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/select'), require('ng-zorro-antd/tag'), require('@angular/common/http'), require('@angular/platform-browser/animations'), require('@ant-design/icons-angular/icons'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('angular-editor-lib', ['exports', '@angular/core', 'rxjs/operators', 'lodash', '@ngrx/component-store', 'rxjs', '@angular/common', 'ng-zorro-antd/pipes', 'ng-zorro-antd/core/util', 'ng-zorro-antd/tree', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/menu', 'ng-zorro-antd/card', '@angular/cdk/drag-drop', 'ng-zorro-antd/button', '@angular/forms', 'ng-zorro-antd/form', 'ng-zorro-antd/grid', 'ng-zorro-antd/input-number', 'ng-zorro-antd/input', 'ng-zorro-antd/collapse', 'ng-zorro-antd/switch', 'ng-zorro-antd/select', 'ng-zorro-antd/tag', '@angular/common/http', '@angular/platform-browser/animations', '@ant-design/icons-angular/icons', 'ng-zorro-antd/divider', 'ng-zorro-antd/tabs', 'ng-zorro-antd/tooltip'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-editor-lib'] = {}, global.ng.core, global.rxjs.operators, global._, global.componentStore, global.rxjs, global.ng.common, global.i3, global.util, global.i4, global.i3$1, global.i6, global.i6$1, global.i8, global.i2$1, global.ng.cdk.dragDrop, global.i5, global.ng.forms, global.i3$3, global.i4$1, global.i7, global.i8$1, global.i3$4, global.i9, global.i10, global.i8$2, global.ng.common.http, global.ng.platformBrowser.animations, global.AllIcons, global.divider, global.tabs, global.tooltip));
}(this, (function (exports, i0, operators, _, componentStore, rxjs, i2, i3, util, i4, i3$1, i6, i6$1, i8, i2$1, i3$2, i5, i1, i3$3, i4$1, i7, i8$1, i3$4, i9, i10, i8$2, http, animations, AllIcons, divider, tabs, tooltip) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var AllIcons__namespace = /*#__PURE__*/_interopNamespace(AllIcons);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var SPECIAL_ROTATE = new Set([0, 90, 180, 270, 360]);
    function genNodeId() {
        return "" + Date.now() + Math.round(Math.random() * 1000000000000);
    }
    var CeUtilsService = /** @class */ (function () {
        function CeUtilsService() {
            CeUtilsService.shared = this;
        }
        CeUtilsService.prototype.isTemplateType = function (content) {
            return content instanceof i0.TemplateRef;
        };
        CeUtilsService.prototype.isDeepEqual = function (v1, v2) {
            var _this = this;
            if (typeof v1 !== typeof v2) {
                return false;
            }
            else {
                switch (typeof v1) {
                    case 'number':
                    case 'string':
                    case 'bigint':
                    case 'boolean':
                    case 'symbol':
                    case 'undefined':
                    case 'function':
                        return v1 === v2;
                    case 'object':
                        if (v1 === null || v2 === null) {
                            return v1 === v2;
                        }
                        else if (Array.isArray(v1)) {
                            if (v1.length !== v2.length) {
                                return false;
                            }
                            var flag_1 = true;
                            v1.forEach(function (v, i) {
                                if (flag_1) {
                                    flag_1 = _this.isDeepEqual(v, v2[i]);
                                }
                            });
                            return flag_1;
                        }
                        else if (v1 instanceof Set && v2 instanceof Set) {
                            return this.isDeepEqual(__spread(v1), __spread(v2));
                        }
                        else {
                            var flag_2 = true;
                            Object.keys(v1).forEach(function (v1k) {
                                if (flag_2) {
                                    if (v2.hasOwnProperty(v1k)) {
                                        flag_2 = _this.isDeepEqual(v1[v1k], v2[v1k]);
                                    }
                                    else {
                                        flag_2 = false;
                                    }
                                }
                            });
                            return flag_2;
                        }
                }
            }
        };
        /**
         * 通过节点ID在树中查找节点
         * @param id 节点ID
         * @param nodes 节点树
         */
        CeUtilsService.prototype.getNodeById = function (id, nodes) {
            var flag = false;
            var node;
            var stack = __spread(nodes);
            var _loop_1 = function () {
                var item = stack.pop();
                if (item.id === id) {
                    flag = true;
                    node = item;
                }
                else {
                    if (item.children && item.children.length) {
                        stack.push.apply(stack, __spread(item.children.map(function (i) { return (Object.assign(Object.assign({}, i), { parentNode: item })); })));
                    }
                }
            };
            while (!flag && stack.length) {
                _loop_1();
            }
            return node;
        };
        /**
         * 通过节点ID查找节点及节点所有父级
         * @param id 节点ID
         * @param nodes 节点树
         */
        CeUtilsService.prototype.getNodeAndParentListById = function (id, nodes) {
            if (!id) {
                return [];
            }
            var rootIdSet = new Set(nodes.map(function (node) { return node.id; }));
            var flag = false;
            var path = [];
            var stack = __spread(nodes);
            while (!flag && stack.length) {
                var node = stack.shift();
                if (rootIdSet.has(node.id)) {
                    path = [];
                }
                if (node.id === id) {
                    flag = true;
                    path.unshift(node);
                }
                else {
                    if (node.children && node.children.length) {
                        path.unshift(node);
                        stack.unshift.apply(stack, __spread(node.children));
                    }
                }
            }
            return path;
        };
        /**
         * 通过子节点id集合和节点树，获取子节点的父节点，若子节点不在同一级则返回undefined
         * @param childrenIds 子节点ID列表
         * @param nodes 节点集合
         */
        CeUtilsService.prototype.getSameLayerParentByChildren = function (childrenIds, nodes) {
            var _this = this;
            var flag = true;
            var parents = childrenIds.map(function (id) { return _this.getNodeAndParentListById(id, nodes)[1]; });
            var prevParent = parents.pop();
            while (flag && parents.length) {
                var parent = parents.pop();
                if ((prevParent === null || prevParent === void 0 ? void 0 : prevParent.id) === (parent === null || parent === void 0 ? void 0 : parent.id)) {
                    prevParent = parent;
                }
                else {
                    flag = false;
                }
            }
            return flag && prevParent;
        };
        /**
         * 通过直线的两点方程获取直线上人一点点的坐标
         * y = (x-x1)*(y2-y1)/(x2-x1)+y1
         * x = (y-y1)*(x2-x1)/(y2-y1)+x1
         * @param direction 要获取点的坐标轴
         * @param n 要获取点的已知轴的坐标
         * @param line 确定一条直线的两点的坐标
         */
        CeUtilsService.prototype.getPointInLine = function (direction, n, line) {
            var _b = __read(line, 2), _c = __read(_b[0], 2), x1 = _c[0], y1 = _c[1], _d = __read(_b[1], 2), x2 = _d[0], y2 = _d[1];
            switch (direction) {
                case 'x':
                    return ((n - y1) * (x2 - x1)) / (y2 - y1) + x1;
                case 'y':
                    return ((n - x1) * (y2 - y1)) / (x2 - x1) + y1;
            }
        };
        /**
         * 通过元素在所在坐标系的中心点、宽、高以及旋转角度获取元素在所在坐标系的四个顶点的坐标
         * @param cx 中心点x轴坐标
         * @param cy 中心点y轴坐标
         * @param width 宽
         * @param height 高
         * @param rotate 旋转角度
         */
        CeUtilsService.prototype.getAbsolutePosition = function (cx, cy, width, height, rotate) {
            if (rotate === void 0) { rotate = 0; }
            if (SPECIAL_ROTATE.has(rotate)) {
                return this.getAbsolutePositionSpecial(cx, cy, width, height, rotate);
            }
            else {
                var r = Math.sqrt(Math.pow((width / 2), 2) + Math.pow((height / 2), 2));
                var patchRad1 = Math.atan(height / 2 / (width / 2));
                var patchRad2 = Math.atan(width / 2 / (height / 2));
                var currentRad = (rotate * Math.PI) / 180;
                return {
                    tl: [cx - Math.cos(currentRad + patchRad1) * r, cy - Math.sin(currentRad + patchRad1) * r],
                    tr: [cx - Math.cos(currentRad + patchRad1 + patchRad2 * 2) * r, cy - Math.sin(currentRad + patchRad1 + patchRad2 * 2) * r],
                    bl: [cx - Math.cos(currentRad - patchRad1) * r, cy - Math.sin(currentRad - patchRad1) * r],
                    br: [cx - Math.cos(currentRad - patchRad1 - patchRad2 * 2) * r, cy - Math.sin(currentRad - patchRad1 - patchRad2 * 2) * r],
                };
            }
        };
        /**
         * 获取特殊旋转角度下元素的四个顶点在所在坐标系的坐标
         * @param cx 元素的中心点x轴坐标
         * @param cy 元素的中心点y轴坐标
         * @param width 宽
         * @param height 高
         * @param rotate 旋转角度
         */
        CeUtilsService.prototype.getAbsolutePositionSpecial = function (cx, cy, width, height, rotate) {
            if (SPECIAL_ROTATE.has(rotate)) {
                switch (rotate) {
                    case 0:
                    case 360:
                        return {
                            tl: [cx - width / 2, cy - height / 2],
                            tr: [cx + width / 2, cy - height / 2],
                            bl: [cx - width / 2, cy + height / 2],
                            br: [cx + width / 2, cy + height / 2],
                        };
                    case 90:
                        return {
                            tl: [cx + height / 2, cy - width / 2],
                            tr: [cx + height / 2, cy + width / 2],
                            bl: [cx - height / 2, cy - width / 2],
                            br: [cx - height / 2, cy + width / 2],
                        };
                    case 180:
                        return {
                            tl: [cx + width / 2, cy + height / 2],
                            tr: [cx - width / 2, cy + height / 2],
                            bl: [cx + width / 2, cy - height / 2],
                            br: [cx - width / 2, cy - height / 2],
                        };
                    case 270:
                        return {
                            tl: [cx - height / 2, cy + width / 2],
                            tr: [cx - height / 2, cy - width / 2],
                            bl: [cx + height / 2, cy + width / 2],
                            br: [cx + height / 2, cy - width / 2],
                        };
                }
            }
        };
        /**
         * 通过元素顶点坐标获取上、右、下和左方向的坐标
         * @param position
         */
        CeUtilsService.prototype.getVerticalAndHorizontalPointByAbsolutePosition = function (position) {
            var tl = position.tl, bl = position.bl, br = position.br, tr = position.tr;
            return {
                t: [(Math.max(tl[0], tr[0]) - Math.min(tl[0], tr[0])) / 2, (Math.max(tl[1], tr[1]) - Math.min(tl[1], tr[1])) / 2],
                r: [(Math.max(br[0], tr[0]) - Math.min(br[0], tr[0])) / 2, (Math.max(br[1], tr[1]) - Math.min(br[1], tr[1])) / 2],
                b: [(Math.max(bl[0], br[0]) - Math.min(bl[0], br[0])) / 2, (Math.max(bl[1], br[1]) - Math.min(bl[1], br[1])) / 2],
                l: [(Math.max(tl[0], bl[0]) - Math.min(tl[0], bl[0])) / 2, (Math.max(tl[1], bl[1]) - Math.min(tl[1], bl[1])) / 2],
            };
        };
        /**
         * 通过HTML元素的宽、高、旋转角度以及所在坐标系的x、y点获取元素在所在坐标系的包围盒
         * @param width 宽
         * @param height 高
         * @param left 在所在坐标系中x轴的坐标
         * @param top 在所在坐标系中y轴的坐标
         * @param rotate 旋转角度
         */
        CeUtilsService.prototype.getBoundingBox = function (width, height, left, top, rotate) {
            if (rotate === void 0) { rotate = 0; }
            var position = this.getAbsolutePosition(left + width / 2, top + height / 2, width, height, rotate);
            var l = Math.min.apply(Math, __spread(this.getAxisListByPosition('x', [position])));
            var r = Math.max.apply(Math, __spread(this.getAxisListByPosition('x', [position])));
            var t = Math.min.apply(Math, __spread(this.getAxisListByPosition('y', [position])));
            var b = Math.max.apply(Math, __spread(this.getAxisListByPosition('y', [position])));
            return { left: l, top: t, width: r - l, height: b - t, bottom: b, right: r, cx: l + (r - l) / 2, cy: t + (b - t) / 2 };
        };
        /**
         * 通过盒子的绝对坐标列表获取对应坐标的值的集合
         * @param axis 要获取的坐标轴
         * @param positions 绝对坐标列表
         */
        CeUtilsService.prototype.getAxisListByPosition = function (axis, positions) {
            switch (axis) {
                case 'x':
                    return positions.reduce(function (arr, position) { return __spread(arr, [position.bl[0], position.br[0], position.tl[0], position.tr[0]]); }, []);
                case 'y':
                    return positions.reduce(function (arr, position) { return __spread(arr, [position.bl[1], position.br[1], position.tl[1], position.tr[1]]); }, []);
            }
        };
        /**
         * 获取多个盒子的最小外包围盒的尺寸
         * @param positions 盒子绝对坐标列表
         */
        CeUtilsService.prototype.getOuterBoundingBox = function (positions) {
            var l = Math.min.apply(Math, __spread(this.getAxisListByPosition('x', positions)));
            var r = Math.max.apply(Math, __spread(this.getAxisListByPosition('x', positions)));
            var t = Math.min.apply(Math, __spread(this.getAxisListByPosition('y', positions)));
            var b = Math.max.apply(Math, __spread(this.getAxisListByPosition('y', positions)));
            return { left: l, top: t, width: r - l, height: b - t, bottom: b, right: r, cx: l + (r - l) / 2, cy: t + (b - t) / 2 };
        };
        /**
         * 依据zIndex对节点递归排序
         * @param list 节点列表
         */
        CeUtilsService.prototype.sortNodeListByIndex = function (list) {
            var _this = this;
            return (list &&
                _.chain(list)
                    .sortBy(function (item) { return item.zIndex; })
                    .map(function (item) { return (Object.assign(Object.assign({}, item), { children: _this.sortNodeListByIndex(item.children) })); })
                    .value());
        };
        /**
         * 通过直线的斜率方程和直线上两点A，B以及直线外一点D，求出D点上直线AB的垂线DC和直线AB的交点C的坐标
         * @param PA 点A
         * @param PB 点B
         * @param PD 点D
         */
        CeUtilsService.prototype.getVerticalLineCrossPoint = function (PA, PB, PD) {
            var _b = __read(PA, 2), PAx = _b[0], PAy = _b[1];
            var _c = __read(PB, 2), PBx = _c[0], PBy = _c[1];
            var _d = __read(PD, 2), PDx = _d[0], PDy = _d[1];
            if (PAx === PBx) {
                return [PAx, PDy];
            }
            else if (PAy === PBy) {
                return [PDx, PAy];
            }
            else {
                var L1k = (PAy - PBy) / (PAx - PBx);
                var L2k = -1 / L1k;
                var a = PAy - L1k * PAx;
                var b = PDy - L2k * PDx;
                var x = (b - a) / (L1k - L2k);
                var y = L1k * x + a;
                return [x, y];
            }
        };
        /**
         * 通过元素在所在坐标系内四个顶点的坐标，使用直线的两点方程求出两两对点所在直线的交点（矩形的中心点），
         * 使用勾股定理求出元素宽高，转换后得到元素在所在坐标系的宽、高、x轴坐标和y轴坐标
         * width = sqrt((trx - tlx)^2 + (try - tly)^2)
         * height = sqrt((blx - tlx)^2 + (bly - tly)^2)
         * a1*x + b1*y + c1 = 0
         * a2*x + b2*y + c2 = 0
         * a1*x + b1*y + c1 = a2*x + b2*y + c2
         * 由直线的两点式方程可得a=y0-y1, b=x1-x0, c=x0*y1 - x1*y0
         * 解方程组可得两条直线的交点x,y
         * @param position 元素在所在坐标系内四个顶点的坐标
         */
        CeUtilsService.prototype.getRelativePosition = function (position) {
            var tl = position.tl, bl = position.bl, br = position.br, tr = position.tr;
            var width = Math.sqrt(Math.pow((tr[0] - tl[0]), 2) + Math.pow((tr[1] - tl[1]), 2));
            var height = Math.sqrt(Math.pow((bl[0] - tl[0]), 2) + Math.pow((bl[1] - tl[1]), 2));
            var a1 = br[1] - tl[1];
            var b1 = tl[0] - br[0];
            var c1 = br[0] * tl[1] - tl[0] * br[1];
            var a2 = bl[1] - tr[1];
            var b2 = tr[0] - bl[0];
            var c2 = bl[0] * tr[1] - tr[0] * bl[1];
            var cx = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
            var cy = (a2 * c1 - a1 * c2) / (a1 * b2 - a2 * b1);
            return {
                cx: cx,
                cy: cy,
                width: width,
                height: height,
                left: cx - width / 2,
                top: cy - height / 2,
                bottom: cx + width / 2,
                right: cy + height / 2,
            };
        };
        /**
         * 获取元素的四个顶点在外包围盒的矩形内的坐标的百分比
         * @param group 元素外包围盒
         * @param item 元素的四个顶点坐标
         */
        CeUtilsService.prototype.getItemPercentPositionInGroup = function (group, item) {
            return {
                tl: [(item.tl[0] - group.left) / group.width, (item.tl[1] - group.top) / group.height],
                tr: [(item.tr[0] - group.left) / group.width, (item.tr[1] - group.top) / group.height],
                bl: [(item.bl[0] - group.left) / group.width, (item.bl[1] - group.top) / group.height],
                br: [(item.br[0] - group.left) / group.width, (item.br[1] - group.top) / group.height],
            };
        };
        /**
         * 通过矩形中心点坐标C(cx,cy)中心点和Y轴平行线在中心点上方的一点S(sx,sy),旋转落点E(ex,ey),利用三角形余弦定理，
         * 求出∠SCE的角度，再通过ex和sx的大小判断旋转的角度为内角还是外角
         * @param cx 中心点x坐标
         * @param cy 中心点y坐标
         * @param sx 与中心点相同的x坐标
         * @param sy 与中心点同x坐标的上方一点的y坐标
         * @param ex 旋转终点x坐标
         * @param ey x旋转终点y坐标
         */
        CeUtilsService.prototype.getRotate = function (cx, cy, sx, sy, ex, ey) {
            var rotate = (Math.acos((Math.pow((cy - sy), 2) + Math.pow((cx - sx), 2) + Math.pow((cx - ex), 2) + Math.pow((cy - ey), 2) - (Math.pow((ex - sx), 2) + Math.pow((ey - sy), 2))) /
                (2 * Math.sqrt(Math.pow((cy - sy), 2) + Math.pow((cx - sx), 2)) * Math.sqrt(Math.pow((cx - ex), 2) + Math.pow((cy - ey), 2)))) *
                180) /
                Math.PI;
            if (ex === sx) {
                return 180;
            }
            if (ex > sx) {
                return rotate;
            }
            if (ex < sx) {
                return 360 - rotate;
            }
        };
        /**
         * 通过向量四边形法则求出向量ab、向量ac的对角线ad的d点坐标, ab + ac = ad
         * @param ab 向量ab
         * @param ac 向量ac
         * @param a a点坐标
         */
        CeUtilsService.prototype.getPointByVectorSum = function (ab, ac, a) {
            return [ab[0] + ac[0] + a[0], ab[1] + ac[1] + a[1]];
        };
        /**
         * 获取两点之间的线段长度
         * @param point1 点1
         * @param point2 点2
         */
        CeUtilsService.prototype.getDistanceBeforeToPoint = function (point1, point2) {
            return Math.sqrt(Math.pow((point1[0] - point2[0]), 2) + Math.pow((point1[1] - point2[1]), 2));
        };
        /**
         * 通过获取父节点中心点坐标和原始子节点中心点坐标，将向量（父节点中心点-子节点原始中心点）
         * 旋转父节点旋转的角度(rotate)后得到向量（父节点中心点-子节点中心点）然后利用向量旋转的
         * 公式直接求出子节点中心点坐标
         * x1 = x0*cos(rotate) - y0*sin(rotate)
         * y1 = x0*sin(rotate) - y0*cos(rotate)
         * @param parentRect 父元素尺寸
         * @param parentRotate 父元素旋转角度
         * @param childRect 子元素尺寸
         */
        CeUtilsService.prototype.getChildPositionBaseOnParentCoordinateSystem = function (parentRect, parentRotate, childRect) {
            var parentCenter = [parentRect.left + parentRect.width / 2, parentRect.top + parentRect.height / 2];
            var originalCenter = [childRect.left + childRect.width / 2 + parentRect.left, childRect.top + childRect.height / 2 + parentRect.top];
            var _b = __read([
                (originalCenter[0] - parentCenter[0]) * Math.cos((parentRotate * Math.PI) / 180) -
                    (originalCenter[1] - parentCenter[1]) * Math.sin((parentRotate * Math.PI) / 180) +
                    parentCenter[0],
                (originalCenter[1] - parentCenter[1]) * Math.cos((parentRotate * Math.PI) / 180) +
                    (originalCenter[0] - parentCenter[0]) * Math.sin((parentRotate * Math.PI) / 180) +
                    parentCenter[1],
            ], 2), newCenterX = _b[0], newCenterY = _b[1];
            return {
                left: newCenterX - childRect.width / 2,
                top: newCenterY - childRect.height / 2,
                bottom: newCenterX + childRect.width / 2,
                right: newCenterY + childRect.height / 2,
                width: childRect.width,
                height: childRect.height,
                cx: newCenterX,
                cy: newCenterY,
            };
        };
        /**
         * 获取单个子节点相对于多层父节点的坐标
         * @param child 子节点size
         * @param parents 父节点集合（排序为从左往右依次外扩）
         */
        CeUtilsService.prototype.getChildPositionBaseOnMultipleParentCoordinataSystem = function (child, parents) {
            var rect = Object.assign({}, child);
            while (parents.length) {
                var parent = parents.shift();
                rect = this.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate, child);
            }
            return rect;
        };
        /**
         * 获取多个子节点相对与多层父节点的坐标
         * @param children 子节点列表
         * @param parents 父节点列表
         */
        CeUtilsService.prototype.getChildrenBoundingBoxBaseOnParentCoordinateSystem = function (children, parents) {
            var _this = this;
            var outerBox = this.getOuterBoundingBox(children.map(function (child) { return _this.getAbsolutePosition(child.left + child.width / 2, child.top + child.height / 2, child.width, child.height, child.rotate); }));
            var domRect = Object.assign({}, outerBox);
            while (parents.length) {
                var parent = parents.shift();
                domRect = this.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate, domRect);
            }
            return domRect;
        };
        /**
         * 获取已选中节点的缩放框的尺寸
         * @param selected 已选中节点
         * @param nodes 节点树
         */
        CeUtilsService.prototype.getResizeBoundingBox = function (selected, nodes) {
            var _this = this;
            var _a;
            var rect;
            var rotate;
            if (selected.length === 1) {
                var _b = __read(this.getNodeAndParentListById(selected[0], nodes)), node = _b[0], parents = _b.slice(1);
                rect = Object.assign({}, this.getChildPositionBaseOnMultipleParentCoordinataSystem(node, __spread(parents)));
                rotate = parents.reduce(function (sum, p) { var _a; return sum + ((_a = p.rotate) !== null && _a !== void 0 ? _a : 0); }, (_a = node.rotate) !== null && _a !== void 0 ? _a : 0);
            }
            else {
                var parent = this.getSameLayerParentByChildren(selected, nodes);
                if (parent !== false) {
                    var parents = this.getNodeAndParentListById(parent === null || parent === void 0 ? void 0 : parent.id, nodes);
                    rect = this.getChildrenBoundingBoxBaseOnParentCoordinateSystem(selected.map(function (id) { return _this.getNodeById(id, nodes); }), __spread(parents));
                    rotate = parents.reduce(function (sum, p) { var _a; return sum + ((_a = p.rotate) !== null && _a !== void 0 ? _a : 0); }, 0);
                }
            }
            return Object.assign(Object.assign({}, rect), { rotate: rotate });
        };
        return CeUtilsService;
    }());
    CeUtilsService.ɵfac = function CeUtilsService_Factory(t) { return new (t || CeUtilsService)(); };
    CeUtilsService.ɵprov = i0.ɵɵdefineInjectable({ token: CeUtilsService, factory: CeUtilsService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CeUtilsService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return []; }, null);
    })();

    var DEFAULT_STORE = {
        nodes: new Array(500).fill(1).map(function (_v, i) { return ({
            id: "" + Math.round(Math.random() * Math.pow(10, 8)),
            height: 100,
            width: 200,
            left: Math.round(Math.random() * 900),
            top: Math.round(Math.random() * 500),
            name: 'test',
            rotate: 0,
            locked: false,
            zIndex: i + 1,
            borderWidth: 1,
            borderColor: '#333',
            borderStyle: 'dashed',
        }); }),
        selected: new Set(),
        bordered: new Set(),
        canvasBackground: { backgroundColor: '#ffffff' },
        canvasPosition: {
            left: 100,
            top: 100,
            scale: 1,
        },
        canvasSize: {
            width: 1366,
            height: 768,
        },
        refLineState: {
            tx: { state: false },
            bx: { state: false },
            ly: { state: false },
            ry: { state: false },
            cx: { state: false },
            cy: { state: false },
        },
    };

    var EditorStore = /** @class */ (function (_super) {
        __extends(EditorStore, _super);
        function EditorStore(utils) {
            var _this = _super.call(this, DEFAULT_STORE) || this;
            _this.utils = utils;
            _this._defaultPanels = [
                { key: 'LAYERS', title: '图层', content: LayerTreeComponent, show: true, x: 10, y: 60 },
                { key: 'WIDGET_LIST', title: '组件', content: WidgetListComponent, show: false, x: 50, y: 60 },
                { key: 'PROPERTIES', title: '属性', content: PropertyFormComponent, show: true, x: window.innerWidth - 350, y: 60 },
            ];
            _this.panels = [];
            _this.panels$ = new rxjs.BehaviorSubject(__spread(_this._defaultPanels, _this.panels));
            return _this;
        }
        EditorStore.prototype.initialize = function (state) {
            this.setState(state);
        };
        EditorStore.prototype._get = function () {
            return this.get();
        };
        EditorStore.prototype.dispatch = function (action) {
            this.setState(action);
        };
        EditorStore.prototype.selectDifferent = function (cb) {
            var _this = this;
            return this.select(cb).pipe(operators.startWith(null, cb(this.get())), operators.pairwise(), operators.filter(function (_a) {
                var _b = __read(_a, 2), prev = _b[0], present = _b[1];
                return !_this.utils.isDeepEqual(prev, present);
            }), operators.map(function (_a) {
                var _b = __read(_a, 2), present = _b[1];
                return present;
            }));
        };
        EditorStore.prototype.toJSON = function () {
            var state = this.get();
            return JSON.stringify({
                canvasPosition: state.canvasPosition,
                canvasSize: state.canvasSize,
                canvasBackground: state.canvasBackground,
                nodes: state.nodes,
                selected: state.selected,
                bordered: state.bordered,
            });
        };
        EditorStore.prototype.addPanels = function (panels) {
            this.panels = __spread(this.panels, panels);
            this.panels$.next(__spread(this._defaultPanels, this.panels));
        };
        EditorStore.prototype.getPanel = function (key) {
            return __spread(this._defaultPanels, this.panels).find(function (panel) { return panel.key === key; });
        };
        EditorStore.prototype.updatePanelPosition = function (key, _a) {
            var _b = __read(_a, 2), x = _b[0], y = _b[1];
            __spread(this._defaultPanels, this.panels).forEach(function (panel) {
                if (panel.key === key) {
                    panel.x = x;
                    panel.y = y;
                }
            });
            this.panels$.next(__spread(this._defaultPanels, this.panels));
        };
        EditorStore.prototype.togglePanelVisible = function (key) {
            __spread(this._defaultPanels, this.panels).forEach(function (panel) {
                if (panel.key === key) {
                    panel.show = !panel.show;
                }
            });
            this.panels$.next(__spread(this._defaultPanels, this.panels));
        };
        EditorStore.prototype.togglePanelCollapsed = function (key) {
            __spread(this._defaultPanels, this.panels).forEach(function (panel) {
                if (panel.key === key) {
                    panel.collapsed = !panel.collapsed;
                }
            });
            this.panels$.next(__spread(this._defaultPanels, this.panels));
        };
        return EditorStore;
    }(componentStore.ComponentStore));
    EditorStore.ɵfac = function EditorStore_Factory(t) { return new (t || EditorStore)(i0.ɵɵinject(CeUtilsService)); };
    EditorStore.ɵprov = i0.ɵɵdefineInjectable({ token: EditorStore, factory: EditorStore.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EditorStore, [{
                type: i0.Injectable
            }], function () { return [{ type: CeUtilsService }]; }, null);
    })();

    function BorderedAreaComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 1);
        }
        if (rf & 2) {
            var node_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("left", node_r1.left, "%")("top", node_r1.top, "%")("width", node_r1.width, "%")("height", node_r1.height, "%")("transform", ctx_r0.getRotate(node_r1.rotate));
        }
    }
    var BorderedAreaComponent = /** @class */ (function () {
        function BorderedAreaComponent(store, utils) {
            this.store = store;
            this.utils = utils;
            this.borderedNodeMap = new Map();
        }
        BorderedAreaComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.borderedNodeList$ = this.store
                .selectDifferent(function (state) { return ({ bordered: state.bordered, nodes: state.nodes, canvasSize: state.canvasSize }); })
                .pipe(operators.map(function (_b) {
                var bordered = _b.bordered, nodes = _b.nodes, canvasSize = _b.canvasSize;
                if (!bordered.size) {
                    return [];
                }
                else {
                    return _this.refreshBorderedList(nodes, bordered, canvasSize);
                }
            }));
        };
        BorderedAreaComponent.prototype.getRotate = function (rotate) {
            return "rotate(" + rotate + "deg)";
        };
        BorderedAreaComponent.prototype.trackByFn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return args[1].id + "-" + args[1].width + "-" + args[1].height + "-" + args[1].left + "-" + args[1].top + "-" + args[1].rotate;
        };
        BorderedAreaComponent.prototype.refreshBorderedList = function (nodes, bordered, canvasSize) {
            var _this = this;
            return __spread(bordered).map(function (id) { return _this.utils.getNodeById(id, nodes); })
                .filter(function (node) { return !!node; })
                .map(function (node) {
                var _a;
                {
                    var _b = __read(_this.utils.getNodeAndParentListById(node.id, nodes)), parents = _b.slice(1);
                    var child = Object.assign({}, node);
                    while (parents.length) {
                        var parent = parents.shift();
                        child = Object.assign(Object.assign(Object.assign({}, child), _this.utils.getChildPositionBaseOnParentCoordinateSystem(parent, (_a = parent.rotate) !== null && _a !== void 0 ? _a : 0, child)), { rotate: child.rotate + parent.rotate });
                    }
                    return {
                        id: node.id,
                        width: (child.width / canvasSize.width) * 100,
                        height: (child.height / canvasSize.height) * 100,
                        left: (child.left / canvasSize.width) * 100,
                        top: (child.top / canvasSize.height) * 100,
                        rotate: child.rotate,
                    };
                }
            });
        };
        return BorderedAreaComponent;
    }());
    BorderedAreaComponent.ɵfac = function BorderedAreaComponent_Factory(t) { return new (t || BorderedAreaComponent)(i0.ɵɵdirectiveInject(EditorStore), i0.ɵɵdirectiveInject(CeUtilsService)); };
    BorderedAreaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BorderedAreaComponent, selectors: [["ce-bordered-area"], ["", "ceBorderedArea", ""]], decls: 2, vars: 4, consts: [["class", "box-border", 3, "left", "top", "width", "height", "transform", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "box-border"]], template: function BorderedAreaComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, BorderedAreaComponent_div_0_Template, 1, 10, "div", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(1, 2, ctx.borderedNodeList$))("ngForTrackBy", ctx.trackByFn);
            }
        }, directives: [i2.NgForOf], pipes: [i2.AsyncPipe], styles: ["[ceBorderedArea],ce-bordered-area{bottom:0;display:block;left:0;position:absolute;right:0;top:0}[ceBorderedArea] .box-border,ce-bordered-area .box-border{border:1px solid #1890ff;box-sizing:border-box;position:absolute}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BorderedAreaComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-bordered-area,[ceBorderedArea]',
                        templateUrl: './bordered-area.component.html',
                        styleUrls: ['./bordered-area.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: EditorStore }, { type: CeUtilsService }]; }, null);
    })();

    function BoxItemComponent_ng_container_0_ce_box_item_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "ce-box-item", 2);
        }
        if (rf & 2) {
            var item_r2 = ctx.$implicit;
            i0.ɵɵproperty("node", item_r2);
        }
    }
    function BoxItemComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, BoxItemComponent_ng_container_0_ce_box_item_1_Template, 1, 1, "ce-box-item", 1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.node.children);
        }
    }
    var BoxItemComponent = /** @class */ (function () {
        function BoxItemComponent(renderer, eleRef) {
            this.renderer = renderer;
            this.eleRef = eleRef;
        }
        Object.defineProperty(BoxItemComponent.prototype, "node", {
            get: function () {
                return this._node;
            },
            set: function (val) {
                this._node = val;
                this.generatorStyles();
            },
            enumerable: false,
            configurable: true
        });
        BoxItemComponent.prototype.ngAfterViewInit = function () {
            this.generatorStyles();
        };
        BoxItemComponent.prototype.generatorStyles = function () {
            var _a;
            if (this.eleRef.nativeElement) {
                this.renderer.setAttribute(this.eleRef.nativeElement, 'id', "box-item-" + this.node.id);
                this.renderer.setStyle(this.eleRef.nativeElement, 'width', this.node.width + "px");
                this.renderer.setStyle(this.eleRef.nativeElement, 'height', this.node.height + "px");
                this.renderer.setStyle(this.eleRef.nativeElement, 'left', this.node.left + "px");
                this.renderer.setStyle(this.eleRef.nativeElement, 'top', this.node.top + "px");
                this.renderer.setStyle(this.eleRef.nativeElement, 'transform', "translate3d(0,0,0) rotate(" + ((_a = this.node.rotate) !== null && _a !== void 0 ? _a : 0) + "deg)");
                this.renderer.setStyle(this.eleRef.nativeElement, 'border-style', this.node.borderStyle);
                this.renderer.setStyle(this.eleRef.nativeElement, 'border-color', this.node.borderColor);
                this.renderer.setStyle(this.eleRef.nativeElement, 'border-width', this.node.borderWidth + "px");
                this.renderer.setStyle(this.eleRef.nativeElement, 'z-index', this.node.zIndex);
                this.renderer.setStyle(this.eleRef.nativeElement, 'background-image', this.node.backgroundImage);
                this.renderer.setStyle(this.eleRef.nativeElement, 'background-position', this.node.backgroundPosition);
                this.renderer.setStyle(this.eleRef.nativeElement, 'background-repeat', this.node.backgroundRepeat);
                this.renderer.setStyle(this.eleRef.nativeElement, 'background-size', this.node.backgroundSize);
                this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.node.backgroundColor);
            }
        };
        return BoxItemComponent;
    }());
    BoxItemComponent.ɵfac = function BoxItemComponent_Factory(t) { return new (t || BoxItemComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    BoxItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BoxItemComponent, selectors: [["ce-box-item"]], inputs: { node: "node" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "node", 4, "ngFor", "ngForOf"], [3, "node"]], template: function BoxItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, BoxItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", (ctx.node == null ? null : ctx.node.children) && (ctx.node == null ? null : ctx.node.children.length));
            }
        }, directives: [i2.NgIf, i2.NgForOf, BoxItemComponent], styles: ["ce-box-item{box-sizing:border-box;display:block;position:absolute}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BoxItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-box-item',
                        templateUrl: 'box-item.component.html',
                        styleUrls: ['box-item.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { node: [{
                    type: i0.Input
                }] });
    })();

    function CanvasBackgroundComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "img", 1);
            i0.ɵɵpipe(1, "nzSanitizer");
            i0.ɵɵpipe(2, "async");
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("src", i0.ɵɵpipeBind2(1, 1, i0.ɵɵpipeBind1(2, 4, ctx_r0.backgroundImage$), "url"), i0.ɵɵsanitizeUrl);
        }
    }
    var CanvasBackgroundComponent = /** @class */ (function () {
        function CanvasBackgroundComponent(store) {
            this.store = store;
            this.backgroundColor$ = this.store.selectDifferent(function (state) { return state.canvasBackground.backgroundColor; });
            this.backgroundImage$ = this.store.selectDifferent(function (state) { return state.canvasBackground.backgroundImage; });
        }
        return CanvasBackgroundComponent;
    }());
    CanvasBackgroundComponent.ɵfac = function CanvasBackgroundComponent_Factory(t) { return new (t || CanvasBackgroundComponent)(i0.ɵɵdirectiveInject(EditorStore)); };
    CanvasBackgroundComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CanvasBackgroundComponent, selectors: [["ce-canvas-background"], ["", "ceCanvasBackground", ""]], decls: 4, vars: 7, consts: [[3, "ngIf"], ["alt", "", 3, "src"]], template: function CanvasBackgroundComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵpipe(1, "async");
                i0.ɵɵtemplate(2, CanvasBackgroundComponent_ng_template_2_Template, 3, 6, "ng-template", 0);
                i0.ɵɵpipe(3, "async");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵstyleProp("background-color", i0.ɵɵpipeBind1(1, 3, ctx.backgroundColor$));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 5, ctx.backgroundImage$));
            }
        }, directives: [i2.NgIf], pipes: [i2.AsyncPipe, i3.NzSanitizerPipe], styles: ["ce-canvas-background{display:block;left:0;overflow:hidden;position:absolute;top:0}ce-canvas-background,ce-canvas-background>div{height:100%;width:100%}ce-canvas-background img{height:100%;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:100%}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CanvasBackgroundComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-canvas-background,[ceCanvasBackground]',
                        templateUrl: 'canvas-background.component.html',
                        styleUrls: ['canvas-background.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: EditorStore }]; }, null);
    })();

    var CanvasGridComponent = /** @class */ (function () {
        function CanvasGridComponent(store) {
            var _this = this;
            this.store = store;
            var scale$ = this.store.selectDifferent(function (state) { return state.canvasPosition.scale; });
            this.childDPath$ = scale$.pipe(operators.map(function (scale) { return _this.getPath(10, scale); }));
            this.parentDPath$ = scale$.pipe(operators.map(function (scale) { return _this.getPath(50, scale); }));
            this.childWidth$ = scale$.pipe(operators.map(function (scale) { return 10 * scale; }));
            this.parentWidth$ = scale$.pipe(operators.map(function (scale) { return 50 * scale; }));
        }
        CanvasGridComponent.prototype.getPath = function (size, scale) {
            return "M " + (size * scale || 0) + " 0 L 0 0 0 " + (size * scale || 0);
        };
        return CanvasGridComponent;
    }());
    CanvasGridComponent.ɵfac = function CanvasGridComponent_Factory(t) { return new (t || CanvasGridComponent)(i0.ɵɵdirectiveInject(EditorStore)); };
    CanvasGridComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CanvasGridComponent, selectors: [["ce-canvas-grid"]], decls: 16, vars: 24, consts: [["data-html2canvas-ignore", "", "width", "100%", "height", "100%", 1, "grid"], ["id", "smallGrid", "patternUnits", "userSpaceOnUse"], ["fill", "none", "stroke", "rgba(207, 207, 207, 0.8)", "stroke-width", "1"], ["id", "grid", "patternUnits", "userSpaceOnUse"], ["fill", "url(#smallGrid)"], ["fill", "none", "stroke", "rgba(186, 186, 186, 1)", "stroke-width", "1"], ["width", "100%", "height", "100%", "fill", "url(#grid)"]], template: function CanvasGridComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelementStart(1, "defs");
                i0.ɵɵelementStart(2, "pattern", 1);
                i0.ɵɵpipe(3, "async");
                i0.ɵɵpipe(4, "async");
                i0.ɵɵelement(5, "path", 2);
                i0.ɵɵpipe(6, "async");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "pattern", 3);
                i0.ɵɵpipe(8, "async");
                i0.ɵɵpipe(9, "async");
                i0.ɵɵelement(10, "rect", 4);
                i0.ɵɵpipe(11, "async");
                i0.ɵɵpipe(12, "async");
                i0.ɵɵelement(13, "path", 5);
                i0.ɵɵpipe(14, "async");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(15, "rect", 6);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵattribute("width", i0.ɵɵpipeBind1(3, 8, ctx.childWidth$))("height", i0.ɵɵpipeBind1(4, 10, ctx.childWidth$));
                i0.ɵɵadvance(3);
                i0.ɵɵattribute("d", i0.ɵɵpipeBind1(6, 12, ctx.childDPath$));
                i0.ɵɵadvance(2);
                i0.ɵɵattribute("width", i0.ɵɵpipeBind1(8, 14, ctx.parentWidth$))("height", i0.ɵɵpipeBind1(9, 16, ctx.parentWidth$));
                i0.ɵɵadvance(3);
                i0.ɵɵattribute("width", i0.ɵɵpipeBind1(11, 18, ctx.parentWidth$))("height", i0.ɵɵpipeBind1(12, 20, ctx.parentWidth$));
                i0.ɵɵadvance(3);
                i0.ɵɵattribute("d", i0.ɵɵpipeBind1(14, 22, ctx.parentDPath$));
            }
        }, pipes: [i2.AsyncPipe], styles: ["ce-canvas-grid{display:block;height:100%;left:0;position:absolute;top:0;width:100%}ce-canvas-grid .grid{border-bottom:1px solid #cfcfcf;border-right:1px solid #cfcfcf;left:0;position:absolute;top:0;z-index:0}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CanvasGridComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-canvas-grid',
                        templateUrl: 'canvas-grid.component.html',
                        styleUrls: ['canvas-grid.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: EditorStore }]; }, null);
    })();

    function clearSelected() {
        return function (state) { return (Object.assign(Object.assign({}, state), { selected: new Set([]) })); };
    }
    function addSelectedNodes(ids) {
        return function (state) { return (Object.assign(Object.assign({}, state), { selected: new Set(__spread(state.selected, ids)) })); };
    }
    function removeSelectedNodes(ids) {
        return function (state) { return (Object.assign(Object.assign({}, state), { selected: new Set(__spread(state.selected).filter(function (id) { return !ids.includes(id); })) })); };
    }
    function setSelectedNodes(ids) {
        return function (state) { return (Object.assign(Object.assign({}, state), { selected: new Set(__spread(ids)) })); };
    }
    function clearBordered() {
        return function (state) { return (Object.assign(Object.assign({}, state), { bordered: new Set([]) })); };
    }
    function addBorderedNodes(ids) {
        return function (state) { return (Object.assign(Object.assign({}, state), { bordered: new Set(__spread(state.bordered, ids)) })); };
    }
    function removeBorderedNodes(ids) {
        return function (state) { return (Object.assign(Object.assign({}, state), { bordered: new Set(__spread(state.bordered).filter(function (id) { return !ids.includes(id); })) })); };
    }
    function setBorderedNodes(ids) {
        return function (state) { return (Object.assign(Object.assign({}, state), { bordered: new Set(__spread(ids)) })); };
    }

    function updateCanvasSize(canvasSize) {
        return function (state) { return (Object.assign(Object.assign({}, state), { canvasSize: Object.assign(Object.assign({}, state.canvasSize), canvasSize) })); };
    }
    function updateCanvasPosition(canvasPosition) {
        return function (state) { return (Object.assign(Object.assign({}, state), { canvasPosition: Object.assign(Object.assign({}, state.canvasPosition), canvasPosition) })); };
    }
    function updateCanvasBackground(canvasBackground) {
        return function (state) { return (Object.assign(Object.assign({}, state), { canvasBackground: Object.assign(Object.assign({}, state.canvasBackground), canvasBackground) })); };
    }

    function lockNodes(ids) {
        return function (state) { return (Object.assign(Object.assign({}, state), { nodes: state.nodes.map(function (node) { return (ids.includes(node.id) ? Object.assign(Object.assign({}, node), { locked: true }) : node); }) })); };
    }
    function unlockNodes(ids) {
        return function (state) { return (Object.assign(Object.assign({}, state), { nodes: state.nodes.map(function (node) { return (ids.includes(node.id) ? Object.assign(Object.assign({}, node), { locked: false }) : node); }) })); };
    }
    function addNodes(nodes) {
        return function (state) { return (Object.assign(Object.assign({}, state), { nodes: __spread(state.nodes, nodes) })); };
    }
    function removeNodes(ids) {
        return function (state) {
            var parent = CeUtilsService.shared.getSameLayerParentByChildren(ids, state.nodes);
            if (parent === false) {
                return Object.assign({}, state);
            }
            else if (parent === undefined) {
                return Object.assign(Object.assign({}, state), { nodes: state.nodes.filter(function (node) { return !ids.includes(node.id); }) });
            }
            else {
                var originalParentId = parent.id;
                var prevParent_1;
                var prevParentId_1;
                var parents = CeUtilsService.shared.getNodeAndParentListById(parent.id, _.cloneDeep(state.nodes));
                while (parents.length) {
                    parent = parents.shift();
                    var children = void 0;
                    if (parent.id === originalParentId) {
                        children = parent.children.filter(function (child) { return !ids.includes(child.id); });
                    }
                    else {
                        children = parent.children
                            .filter(function (child) { return (child.id === prevParentId_1 ? prevParent_1 : child); })
                            .filter(function (child) { return !!child; });
                    }
                    prevParentId_1 = parent.id;
                    if (children.length > 1) {
                        var rect = CeUtilsService.shared.getOuterBoundingBox(children
                            .map(function (child) { return (Object.assign({ rotate: child.rotate }, CeUtilsService.shared.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate, child))); })
                            .map(function (item) { return CeUtilsService.shared.getAbsolutePosition(item.cx, item.cy, item.width, item.height, item.rotate); }));
                        parent.width = rect.width;
                        parent.height = rect.height;
                        parent.left = rect.left;
                        parent.top = rect.top;
                        parent.children = children;
                    }
                    else if (children.length === 1) {
                        var rect = CeUtilsService.shared.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate, children[0]);
                        parent = Object.assign(Object.assign({}, children[0]), rect);
                    }
                    else if (children.length === 0) {
                        parent = null;
                    }
                    prevParent_1 = parent;
                }
                return Object.assign(Object.assign({}, state), { nodes: state.nodes.map(function (node) { return (node.id === prevParentId_1 ? parent : node); }).filter(function (node) { return !!node; }) });
            }
        };
    }
    function updateNodes(nodes) {
        return function (state) { return (Object.assign(Object.assign({}, state), { nodes: state.nodes.map(function (item) { return (Object.assign(Object.assign({}, item), nodes.find(function (i) { return i.id === item.id; }))); }) })); };
    }
    function updateNodesSize(nodesSizeMap) {
        return function (state) {
            var _a;
            var inSameLayer = true;
            var ids = __spread(nodesSizeMap.keys());
            var parent;
            while (inSameLayer && ids.length) {
                var id = ids.pop();
                var node = CeUtilsService.shared.getNodeById(id, state.nodes);
                inSameLayer = (parent === null || parent === void 0 ? void 0 : parent.id) === ((_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.id);
                parent = node.parentNode;
            }
            if (!inSameLayer) {
                return state;
            }
            else {
                if (!parent) {
                    return Object.assign(Object.assign({}, state), { nodes: state.nodes.map(function (node) {
                            var newNode = Object.assign(Object.assign({}, node), nodesSizeMap.get(node.id));
                            if (node.children && node.children.length) {
                                return Object.assign(Object.assign({}, newNode), { children: recursiveUpdateNodeChildrenSize(newNode.children, Object.assign({}, node), Object.assign({}, newNode)) });
                            }
                            else {
                                return newNode;
                            }
                        }) });
                }
                else {
                    return state;
                }
            }
        };
    }
    function groupNodes(ids) {
        return function (state) {
            var parent = CeUtilsService.shared.getSameLayerParentByChildren(ids, state.nodes);
            if (parent === false) {
                return state;
            }
            var nodeMap = new Map();
            ids.forEach(function (id) {
                var node = state.nodes.find(function (i) { return i.id === id; });
                if (node) {
                    nodeMap.set(id, node);
                }
            });
            var groupRect = CeUtilsService.shared.getOuterBoundingBox(ids
                .filter(function (id) { return nodeMap.has(id); })
                .map(function (id) {
                var node = nodeMap.get(id);
                return CeUtilsService.shared.getAbsolutePosition(node.left + node.width / 2, node.top + node.height / 2, node.width, node.height, node.rotate);
            }));
            var groupNode = Object.assign(Object.assign({ id: genNodeId(), name: 'Group' }, groupRect), { rotate: 0, zIndex: Math.max.apply(Math, __spread(state.nodes.filter(function (node) { return !nodeMap.has(node.id); }).map(function (node) { return node.zIndex; }))) + 1, children: ids
                    .filter(function (id) { return nodeMap.has(id); })
                    .map(function (id) {
                    var node = nodeMap.get(id);
                    var _c = CeUtilsService.shared.getAbsolutePosition(node.left + node.width / 2, node.top + node.height / 2, node.width, node.height, node.rotate), bl = _c.bl, br = _c.br, tl = _c.tl, tr = _c.tr;
                    return Object.assign(Object.assign({}, node), CeUtilsService.shared.getRelativePosition({
                        bl: [bl[0] - groupRect.left, bl[1] - groupRect.top],
                        br: [br[0] - groupRect.left, br[1] - groupRect.top],
                        tl: [tl[0] - groupRect.left, tl[1] - groupRect.top],
                        tr: [tr[0] - groupRect.left, tr[1] - groupRect.top],
                    }));
                }) });
            return Object.assign(Object.assign({}, state), { nodes: __spread(state.nodes.filter(function (node) { return !nodeMap.has(node.id); }), [groupNode]) });
        };
    }
    function breakNode(id) {
        return function (state) {
            var _c = __read(CeUtilsService.shared.getNodeAndParentListById(id, _.cloneDeep(state.nodes))), node = _c[0], parents = _c.slice(1);
            var newNodes = node.children.map(function (child) {
                var _a, _b;
                return Object.assign(Object.assign(Object.assign({}, child), CeUtilsService.shared.getChildPositionBaseOnParentCoordinateSystem(node, node.rotate, child)), { rotate: ((_a = child.rotate) !== null && _a !== void 0 ? _a : 0) + ((_b = node.rotate) !== null && _b !== void 0 ? _b : 0) });
            });
            if (!parents.length) {
                return Object.assign(Object.assign({}, state), { nodes: __spread(state.nodes.filter(function (i) { return i.id !== node.id; }), newNodes) });
            }
            else {
                var parent_1 = parents.shift();
                parent_1.children = __spread(parent_1.children.filter(function (child) { return child.id !== node.id; }), newNodes);
                while (parents.length) {
                    var nextParent = parents.shift();
                    nextParent.children = nextParent.children.map(function (child) { return (child.id === parent_1.id ? parent_1 : child); });
                    parent_1 = nextParent;
                }
                return Object.assign(Object.assign({}, state), { nodes: __spread(state.nodes.filter(function (i) { return i.id !== parent_1.id; }), [parent_1]) });
            }
        };
    }
    // /**
    //  * 递归更新节点的位置和大小
    //  * @param nodes 节点列表
    //  * @param oldParentRect 父节点的旧尺寸和位置
    //  * @param newParentRect 父节点的新尺寸和位置
    //  */
    // function recursiveUpdateNodeChildrenSize(nodes: INode[], oldParentRect: IDOMRect, newParentRect: IDOMRect): INode[] {
    //   const { width, height } = newParentRect;
    //   return nodes.map((node) => {
    //     const cxPercent = (node.left + node.width / 2) / oldParentRect.width;
    //     const cyPercent = (node.top + node.height / 2) / oldParentRect.height;
    //     const widthPercent = node.width / oldParentRect.width;
    //     const heightPercent = node.height / oldParentRect.height;
    //     const newNodeRect: IDOMRect = {
    //       width: widthPercent * width,
    //       height: heightPercent * height,
    //       left: cxPercent * width - (widthPercent * width) / 2,
    //       top: cyPercent * height - (heightPercent * height) / 2,
    //     };
    //     if (node.children && node.children.length) {
    //       return { ...node, ...newNodeRect, children: recursiveUpdateNodeChildrenSize(node.children, { ...node }, { ...newNodeRect }) };
    //     } else {
    //       return { ...node, ...newNodeRect };
    //     }
    //   });
    // }
    /**
     * 递归更新节点的位置和大小
     * @param nodes 节点列表
     * @param oldParentRect 父节点的旧尺寸和位置
     * @param newParentRect 父节点的新尺寸和位置
     */
    function recursiveUpdateNodeChildrenSize(nodes, oldParentRect, newParentRect) {
        var width = newParentRect.width, height = newParentRect.height;
        return nodes.map(function (node) {
            var nodeAbsolutePosition = CeUtilsService.shared.getAbsolutePosition(node.left + node.width / 2, node.top + node.height / 2, node.width, node.height, node.rotate);
            var _c = CeUtilsService.shared.getItemPercentPositionInGroup(Object.assign(Object.assign({}, oldParentRect), { left: 0, top: 0 }), nodeAbsolutePosition), tl = _c.tl, tr = _c.tr, bl = _c.bl, br = _c.br;
            var newNodeRect = CeUtilsService.shared.getRelativePosition({
                tl: [tl[0] * width, tl[1] * height],
                tr: [tr[0] * width, tr[1] * height],
                bl: [bl[0] * width, bl[1] * height],
                br: [br[0] * width, br[1] * height],
            });
            if (node.children && node.children.length) {
                return Object.assign(Object.assign(Object.assign({}, node), newNodeRect), { children: recursiveUpdateNodeChildrenSize(node.children, Object.assign({}, node), Object.assign({}, newNodeRect)) });
            }
            else {
                return Object.assign(Object.assign({}, node), newNodeRect);
            }
        });
    }

    function updateRefLineState(direction, state) {
        return function (state) {
            var _a;
            return (Object.assign(Object.assign({}, state), { refLineState: Object.assign(Object.assign({}, state.refLineState), (_a = {}, _a[direction] = state, _a)) }));
        };
    }
    function resetRefLineState() {
        return function (state) { return (Object.assign(Object.assign({}, state), { refLineState: DEFAULT_STORE.refLineState })); };
    }
    function updateRefLinesState(refLineState) {
        return function (state) { return (Object.assign(Object.assign({}, state), { refLineState: Object.assign(Object.assign({}, state.refLineState), refLineState) })); };
    }

    var DraggableDirective = /** @class */ (function () {
        function DraggableDirective(eleRef, cdr) {
            this.eleRef = eleRef;
            this.cdr = cdr;
            this.ceDragDisabled = false;
            this.ceUseSpace = false;
            this.ceOnStart = new i0.EventEmitter();
            this.ceOnMove = new i0.EventEmitter();
            this.ceOnStop = new i0.EventEmitter();
            this.ceOnSpaceKeyDown = new i0.EventEmitter();
            this.spaceKeyDown = false;
            this.subscription = new rxjs.Subscription();
            this.mouseMove$ = rxjs.fromEvent(window, 'pointermove');
            this.mouseUp$ = rxjs.fromEvent(window, 'pointerup');
            this.keyDown$ = rxjs.fromEvent(document, 'keydown');
            this.keyUp$ = rxjs.fromEvent(document, 'keyup');
            this.mouseDown$ = rxjs.fromEvent(this.eleRef.nativeElement, 'pointerdown').pipe(operators.filter(function (e) { return e.button === 0; }));
            this.mouseEnter$ = rxjs.fromEvent(this.eleRef.nativeElement, 'pointerenter');
            this.mouseLeave$ = rxjs.fromEvent(this.eleRef.nativeElement, 'pointerleave');
        }
        DraggableDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.listenSpaceKeyEvent();
            this.mouseDown$
                .pipe(operators.filter(function () { return !_this.ceDragDisabled; }), operators.filter(function () { return (_this.ceUseSpace ? _this.spaceKeyDown : true); }), operators.switchMap(function (startEv) {
                _this.ceOnStart.emit(startEv);
                return _this.mouseMove$.pipe(operators.takeUntil(_this.mouseUp$.pipe(operators.map(function (stopEv) { return _this.ceOnStop.emit(stopEv); }))));
            }))
                .subscribe(function (moveEv) { return _this.ceOnMove.emit(moveEv); });
        };
        DraggableDirective.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        DraggableDirective.prototype.listenSpaceKeyEvent = function () {
            var _this = this;
            this.subscription.add(this.mouseEnter$
                .pipe(operators.filter(function () { return !_this.ceDragDisabled; }), operators.filter(function () { return _this.ceUseSpace; }), operators.switchMap(function () { return _this.keyDown$.pipe(operators.switchMap(function (e) {
                _this.spaceKeyDown = e.key === ' ';
                _this.cdr.detectChanges();
                if (_this.spaceKeyDown) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                return _this.keyUp$;
            }), operators.map(function () {
                _this.spaceKeyDown = false;
                _this.ceOnStop.emit();
            }), operators.takeUntil(_this.mouseLeave$), operators.finalize(function () {
                _this.spaceKeyDown = false;
                _this.ceOnStop.emit();
            })); }))
                .subscribe());
        };
        return DraggableDirective;
    }());
    DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    DraggableDirective.ɵdir = i0.ɵɵdefineDirective({ type: DraggableDirective, selectors: [["", "ceDraggable", ""]], inputs: { ceDragDisabled: "ceDragDisabled", ceUseSpace: "ceUseSpace" }, outputs: { ceOnStart: "ceOnStart", ceOnMove: "ceOnMove", ceOnStop: "ceOnStop", ceOnSpaceKeyDown: "ceOnSpaceKeyDown" }, exportAs: ["ceDraggable"] });
    __decorate([
        util.InputBoolean()
    ], DraggableDirective.prototype, "ceDragDisabled", void 0);
    __decorate([
        util.InputBoolean()
    ], DraggableDirective.prototype, "ceUseSpace", void 0);
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DraggableDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ceDraggable]',
                        exportAs: 'ceDraggable',
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { ceDragDisabled: [{
                    type: i0.Input
                }], ceUseSpace: [{
                    type: i0.Input
                }], ceOnStart: [{
                    type: i0.Output
                }], ceOnMove: [{
                    type: i0.Output
                }], ceOnStop: [{
                    type: i0.Output
                }], ceOnSpaceKeyDown: [{
                    type: i0.Output
                }] });
    })();

    function CanvasComponent_ce_box_item_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ce-box-item", 1);
            i0.ɵɵlistener("ceOnStart", function CanvasComponent_ce_box_item_0_Template_ce_box_item_ceOnStart_0_listener($event) { i0.ɵɵrestoreView(_r3_1); var node_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.moveStart($event, node_r1); })("ceOnMove", function CanvasComponent_ce_box_item_0_Template_ce_box_item_ceOnMove_0_listener($event) { i0.ɵɵrestoreView(_r3_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.moving($event); })("ceOnStop", function CanvasComponent_ce_box_item_0_Template_ce_box_item_ceOnStop_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.moveEnd(); })("pointerenter", function CanvasComponent_ce_box_item_0_Template_ce_box_item_pointerenter_0_listener() { i0.ɵɵrestoreView(_r3_1); var node_r1 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.showBorder(node_r1.id); })("pointerleave", function CanvasComponent_ce_box_item_0_Template_ce_box_item_pointerleave_0_listener() { i0.ɵɵrestoreView(_r3_1); var node_r1 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.removeBorder(node_r1.id); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r1 = ctx.$implicit;
            i0.ɵɵproperty("ceDragDisabled", node_r1 == null ? null : node_r1.locked)("node", node_r1);
        }
    }
    var REF_LINE_DIRECTION_COMPARE_MAP = {
        tx: [
            {
                baseKey: 'top',
                referKey: 'top',
                baseValue: function (baseRect, referRect) { return ({ key: 'top', value: referRect.top }); },
            },
            {
                baseKey: 'top',
                referKey: 'cy',
                baseValue: function (baseRect, referRect) { return ({ key: 'top', value: referRect.cy }); },
            },
            {
                baseKey: 'top',
                referKey: 'bottom',
                baseValue: function (baseRect, referRect) { return ({ key: 'top', value: referRect.bottom }); },
            },
        ],
        bx: [
            {
                baseKey: 'bottom',
                referKey: 'top',
                baseValue: function (baseRect, referRect) { return ({ key: 'top', value: referRect.top - baseRect.height }); },
            },
            {
                baseKey: 'bottom',
                referKey: 'cy',
                baseValue: function (baseRect, referRect) { return ({ key: 'top', value: referRect.cy - baseRect.height }); },
            },
            {
                baseKey: 'bottom',
                referKey: 'bottom',
                baseValue: function (baseRect, referRect) { return ({ key: 'top', value: referRect.bottom - baseRect.height }); },
            },
        ],
        ly: [
            {
                baseKey: 'left',
                referKey: 'left',
                baseValue: function (baseRect, referRect) { return ({ key: 'left', value: referRect.left }); },
            },
            {
                baseKey: 'left',
                referKey: 'cx',
                baseValue: function (baseRect, referRect) { return ({ key: 'left', value: referRect.cx }); },
            },
            {
                baseKey: 'left',
                referKey: 'right',
                baseValue: function (baseRect, referRect) { return ({ key: 'left', value: referRect.right }); },
            },
        ],
        ry: [
            {
                baseKey: 'right',
                referKey: 'left',
                baseValue: function (baseRect, referRect) { return ({ key: 'left', value: referRect.left - baseRect.width }); },
            },
            {
                baseKey: 'right',
                referKey: 'cx',
                baseValue: function (baseRect, referRect) { return ({ key: 'left', value: referRect.cx - baseRect.width }); },
            },
            {
                baseKey: 'right',
                referKey: 'right',
                baseValue: function (baseRect, referRect) { return ({ key: 'left', value: referRect.right - baseRect.width }); },
            },
        ],
        cx: [
            {
                baseKey: 'cy',
                referKey: 'top',
                baseValue: function (baseRect, referRect) { return ({ key: 'top', value: referRect.top - baseRect.height / 2 }); },
            },
            {
                baseKey: 'cy',
                referKey: 'cy',
                baseValue: function (baseRect, referRect) { return ({ key: 'top', value: referRect.cy - baseRect.height / 2 }); },
            },
            {
                baseKey: 'cy',
                referKey: 'bottom',
                baseValue: function (baseRect, referRect) { return ({ key: 'top', value: referRect.bottom - baseRect.height / 2 }); },
            },
        ],
        cy: [
            {
                baseKey: 'cx',
                referKey: 'left',
                baseValue: function (baseRect, referRect) { return ({ key: 'left', value: referRect.left - baseRect.width / 2 }); },
            },
            {
                baseKey: 'cx',
                referKey: 'cx',
                baseValue: function (baseRect, referRect) { return ({ key: 'left', value: referRect.cx - baseRect.width / 2 }); },
            },
            {
                baseKey: 'cx',
                referKey: 'right',
                baseValue: function (baseRect, referRect) { return ({ key: 'left', value: referRect.right - baseRect.width / 2 }); },
            },
        ],
    };
    var CanvasComponent = /** @class */ (function () {
        function CanvasComponent(store, utils) {
            var _this = this;
            this.store = store;
            this.utils = utils;
            this.pointerSnapshot = null;
            this.nodesSnapshot = new Map();
            this.gap = 5;
            this.nodes$ = this.store.selectDifferent(function (state) { return state.nodes; });
            this.store.select(function (state) { return state.nodes; }).subscribe(function (nodes) { return (_this.nodes = nodes); });
            this.store.select(function (state) { return state.selected; }).subscribe(function (state) { return (_this.selected = state); });
            this.store.select(function (state) { return state.canvasPosition; }).subscribe(function (state) { return (_this.canvasPosition = state); });
        }
        CanvasComponent.prototype.nodeListTrackByFn = function (i, node) {
            return node.id;
        };
        CanvasComponent.prototype.moveStart = function (ev, node) {
            var _this = this;
            ev.preventDefault();
            ev.stopPropagation();
            this.nodesSnapshot.clear();
            this.pointerSnapshot = [ev.clientX, ev.clientY];
            var selected = __spread(this.selected);
            if (!this.selected.has(node.id)) {
                this.store.dispatch(clearBordered());
                this.store.dispatch(clearSelected());
                this.store.dispatch(addSelectedNodes([node.id]));
                selected = [node.id];
            }
            this.outerBoxSnapshot = this.utils.getOuterBoundingBox(selected
                .map(function (id) { return _this.utils.getNodeById(id, _this.nodes); })
                .map(function (item) { return _this.utils.getAbsolutePosition(item.left + item.width / 2, item.top + item.height / 2, item.width, item.height, item.rotate); }));
            this.unselectedNodes = this.nodes.filter(function (item) { return !selected.includes(item.id); });
            selected.forEach(function (id) {
                var item = _this.nodes.find(function (n) { return n.id === id; });
                _this.nodesSnapshot.set(item.id, Object.assign(Object.assign({}, item), { cxPercent: (item.left + item.width / 2 - _this.outerBoxSnapshot.left) / _this.outerBoxSnapshot.width, cyPercent: (item.top + item.height / 2 - _this.outerBoxSnapshot.top) / _this.outerBoxSnapshot.height }));
            });
        };
        CanvasComponent.prototype.moving = function (ev) {
            var _this = this;
            if (this.pointerSnapshot) {
                this.store.dispatch(resetRefLineState());
                var scale_1 = this.canvasPosition.scale;
                var _a = __read(this.pointerSnapshot, 2), x = _a[0], y = _a[1];
                var _b = __read([(ev.clientX - x) / scale_1, (ev.clientY - y) / scale_1], 2), mx = _b[0], my = _b[1];
                var baseRect_1 = Object.assign(Object.assign({}, this.outerBoxSnapshot), { left: this.outerBoxSnapshot.left + mx, top: this.outerBoxSnapshot.top + my, right: this.outerBoxSnapshot.right + mx, bottom: this.outerBoxSnapshot.bottom + my, cx: this.outerBoxSnapshot.cx + mx, cy: this.outerBoxSnapshot.cy + my });
                var refLinesState_1 = {
                    bx: null,
                    tx: null,
                    ly: null,
                    ry: null,
                    cx: null,
                    cy: null,
                };
                this.unselectedNodes.forEach(function (node) {
                    var nodeRect = _this.utils.getBoundingBox(node.width, node.height, node.left, node.top, node.rotate);
                    ['tx', 'bx', 'ly', 'ry', 'cx', 'cy'].forEach(function (direction) {
                        var result = getRefLineStateByDirection(direction, baseRect_1, nodeRect, _this.gap / scale_1);
                        if (result) {
                            var state = result.state, position = result.position, base = result.base;
                            if (state) {
                                refLinesState_1[direction] = { state: state, position: position };
                                baseRect_1[base.key] = base.value;
                            }
                        }
                    });
                });
                var newNodes_1 = [];
                this.nodesSnapshot.forEach(function (node) {
                    var cxPercent = node.cxPercent, cyPercent = node.cyPercent, width = node.width, height = node.height, nodeRect = node.nodeRect, properties = __rest(node, ["cxPercent", "cyPercent", "width", "height", "nodeRect"]);
                    newNodes_1.push(Object.assign(Object.assign({}, properties), { width: width,
                        height: height, left: cxPercent * baseRect_1.width + baseRect_1.left - width / 2, top: cyPercent * baseRect_1.height + baseRect_1.top - height / 2 }));
                });
                this.store.dispatch(updateRefLinesState(refLinesState_1));
                this.store.dispatch(updateNodes(newNodes_1));
            }
        };
        CanvasComponent.prototype.moveEnd = function () {
            this.pointerSnapshot = null;
            this.store.dispatch(resetRefLineState());
            this.nodesSnapshot.clear();
        };
        CanvasComponent.prototype.showBorder = function (id) {
            this.store.dispatch(addBorderedNodes([id]));
        };
        CanvasComponent.prototype.removeBorder = function (id) {
            if (!this.selected.has(id)) {
                this.store.dispatch(removeBorderedNodes([id]));
            }
        };
        return CanvasComponent;
    }());
    CanvasComponent.ɵfac = function CanvasComponent_Factory(t) { return new (t || CanvasComponent)(i0.ɵɵdirectiveInject(EditorStore), i0.ɵɵdirectiveInject(CeUtilsService)); };
    CanvasComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CanvasComponent, selectors: [["ce-canvas"]], decls: 2, vars: 4, consts: [["ceDraggable", "", 3, "ceDragDisabled", "node", "ceOnStart", "ceOnMove", "ceOnStop", "pointerenter", "pointerleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ceDraggable", "", 3, "ceDragDisabled", "node", "ceOnStart", "ceOnMove", "ceOnStop", "pointerenter", "pointerleave"]], template: function CanvasComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, CanvasComponent_ce_box_item_0_Template, 1, 2, "ce-box-item", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(1, 2, ctx.nodes$))("ngForTrackBy", ctx.nodeListTrackByFn);
            }
        }, directives: [i2.NgForOf, BoxItemComponent, DraggableDirective], pipes: [i2.AsyncPipe], styles: ["ce-canvas{bottom:0;left:0;position:absolute;right:0;top:0}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CanvasComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-canvas',
                        templateUrl: 'canvas.component.html',
                        styleUrls: ['canvas.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: EditorStore }, { type: CeUtilsService }]; }, null);
    })();
    function getRefLineStateByDirection(direction, baseRect, referRect, gap) {
        return REF_LINE_DIRECTION_COMPARE_MAP[direction]
            .map(function (_a) {
            var baseKey = _a.baseKey, referKey = _a.referKey, baseValue = _a.baseValue;
            return ({
                state: Math.abs(baseRect[baseKey] - referRect[referKey]) < gap,
                position: referRect[referKey],
                base: baseValue(baseRect, referRect),
            });
        })
            .find(function (item) { return item.state; });
    }

    var _c0 = ["layerTree"];
    function LayerTreeComponent_ng_template_4_i_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 5);
        }
        if (rf & 2) {
            var node_r5 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("nzType", node_r5.isExpanded ? "folder-open" : "folder");
        }
    }
    function LayerTreeComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, LayerTreeComponent_ng_template_4_i_0_Template, 1, 1, "i", 4);
        }
        if (rf & 2) {
            var node_r5 = ctx.$implicit;
            i0.ɵɵproperty("ngIf", !node_r5.isLeaf);
        }
    }
    function LayerTreeComponent_ng_template_6_li_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 10);
            i0.ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_6_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(2); var _r0 = i0.ɵɵreference(1); return ctx_r15.toggleNodesLockState(_r0.nzSelectedKeys, true); });
            i0.ɵɵelement(1, "i", 12);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3, "\u9501\u5B9A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function LayerTreeComponent_ng_template_6_li_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 10);
            i0.ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_7_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(2); var _r0 = i0.ɵɵreference(1); return ctx_r17.toggleNodesLockState(_r0.nzSelectedKeys, false); });
            i0.ɵɵelement(1, "i", 13);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3, "\u89E3\u9501");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function LayerTreeComponent_ng_template_6_li_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 10);
            i0.ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_12_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(2); var _r0 = i0.ɵɵreference(1); return ctx_r19.group(_r0.nzSelectedKeys); });
            i0.ɵɵelement(1, "i", 14);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3, "\u7EC4\u5408");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 15);
            i0.ɵɵtext(5, " ctrl+shift+G ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function LayerTreeComponent_ng_template_6_li_14_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 10);
            i0.ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_14_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r23_1); var node_r9 = i0.ɵɵnextContext().origin; var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.breakNode(node_r9.id); });
            i0.ɵɵelement(1, "i", 16);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3, "\u6253\u6563");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 15);
            i0.ɵɵtext(5, " ctrl+shift+B ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function LayerTreeComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵlistener("contextmenu", function LayerTreeComponent_ng_template_6_Template_div_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var node_r9 = ctx.origin; var _r10 = i0.ɵɵreference(4); var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.contextMenu($event, _r10, node_r9); })("pointerenter", function LayerTreeComponent_ng_template_6_Template_div_pointerenter_0_listener() { i0.ɵɵrestoreView(_r25_1); var node_r9 = ctx.origin; var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.showBordered(node_r9.id); })("pointerleave", function LayerTreeComponent_ng_template_6_Template_div_pointerleave_0_listener() { i0.ɵɵrestoreView(_r25_1); var node_r9 = ctx.origin; var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.clearBordered(node_r9.id); });
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "nz-dropdown-menu", null, 7);
            i0.ɵɵelementStart(5, "ul", 8);
            i0.ɵɵtemplate(6, LayerTreeComponent_ng_template_6_li_6_Template, 4, 0, "li", 9);
            i0.ɵɵtemplate(7, LayerTreeComponent_ng_template_6_li_7_Template, 4, 0, "li", 9);
            i0.ɵɵelementStart(8, "li", 10);
            i0.ɵɵlistener("click", function LayerTreeComponent_ng_template_6_Template_li_click_8_listener() { i0.ɵɵrestoreView(_r25_1); var ctx_r28 = i0.ɵɵnextContext(); var _r0 = i0.ɵɵreference(1); return ctx_r28.deleteNodes(_r0.nzSelectedKeys); });
            i0.ɵɵelement(9, "i", 11);
            i0.ɵɵelementStart(10, "span");
            i0.ɵɵtext(11, "\u5220\u9664");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, LayerTreeComponent_ng_template_6_li_12_Template, 6, 0, "li", 9);
            i0.ɵɵpipe(13, "async");
            i0.ɵɵtemplate(14, LayerTreeComponent_ng_template_6_li_14_Template, 6, 0, "li", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r9 = ctx.origin;
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("locked", node_r9.locked);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(node_r9.title);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !node_r9.locked);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", node_r9.locked);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(13, 7, ctx_r4.groupStatus$));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r4.selected.size === 1 && node_r9.children && node_r9.children.length);
        }
    }
    var LayerTreeComponent = /** @class */ (function () {
        function LayerTreeComponent(eleRef, store, utils, contextMenuSrv) {
            var _this = this;
            this.eleRef = eleRef;
            this.store = store;
            this.utils = utils;
            this.contextMenuSrv = contextMenuSrv;
            this.treeNodes$ = this.store
                .selectDifferent(function (state) { return state.nodes; })
                .pipe(operators.map(function (nodes) { return _this.transferNodesToNzNodes(_this.utils.sortNodeListByIndex(nodes)); }));
            this.selectedKeys$ = this.store.selectDifferent(function (state) { return state.selected; }).pipe(operators.map(function (selected) { return __spread(selected); }));
            this.groupStatus$ = this.store
                .selectDifferent(function (state) { return state.selected; })
                .pipe(operators.filter(function () { return !!_this.layerTree; }), operators.map(function (selected) { return selected.size > 1
                ? !!__spread(selected).find(function (id) {
                    var _a;
                    var node = (_a = _this.layerTree) === null || _a === void 0 ? void 0 : _a.getSelectedNodeList().find(function (item) { return item.key === id; });
                    return node && node.parentNode;
                })
                : false; }));
            this.store
                .selectDifferent(function (state) { return state.selected; })
                .subscribe(function (selected) {
                _this.selected = selected;
            });
        }
        LayerTreeComponent.prototype.clearBordered = function (id) {
            if (!this.selected.has(id)) {
                this.store.dispatch(removeBorderedNodes([id]));
            }
        };
        LayerTreeComponent.prototype.showBordered = function (id) {
            this.store.dispatch(addBorderedNodes([id]));
        };
        LayerTreeComponent.prototype.layerTrackByFn = function (index, node) {
            return "box-item-" + node.id + "-" + node.zIndex;
        };
        LayerTreeComponent.prototype.transferNodesToNzNodes = function (nodes) {
            var _this = this;
            return nodes.map(function (node) {
                var _a;
                return Object.assign(Object.assign({}, node), { children: node.children && _this.transferNodesToNzNodes(node.children), title: node.name, key: node.id, isLeaf: !((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) });
            });
        };
        LayerTreeComponent.prototype.contextMenu = function (event, menu, node) {
            if (!this.selected.has(node.key)) {
                this.store.dispatch(setSelectedNodes([node.key]));
            }
            this.contextMenuSrv.create(event, menu);
        };
        LayerTreeComponent.prototype.getParentKey = function (parentNode) {
            var _a;
            return (_a = parentNode === null || parentNode === void 0 ? void 0 : parentNode.key) !== null && _a !== void 0 ? _a : 'root';
        };
        LayerTreeComponent.prototype.multipleSelected = function (event) {
            var _this = this;
            if (!this.parentKey) {
                this.parentKey = this.getParentKey(event.node.parentNode);
            }
            var ids = event.selectedKeys.filter(function (node) { return _this.getParentKey(node.parentNode) === _this.parentKey; }).map(function (node) { return node.key; });
            this.store.dispatch(setSelectedNodes(ids));
            this.store.dispatch(setBorderedNodes(ids));
        };
        LayerTreeComponent.prototype.clickNode = function (event) {
            if (event.node) {
                if (/Win|Linux/.test(navigator.platform)) {
                    if (event.event.ctrlKey) {
                        this.multipleSelected(event);
                    }
                    else {
                        this.parentKey = this.getParentKey(event.node.parentNode);
                        this.store.dispatch(setSelectedNodes([event.node.key]));
                        this.store.dispatch(setBorderedNodes([event.node.key]));
                    }
                }
                if (/Mac/.test(navigator.platform)) {
                    if (event.event.metaKey) {
                        this.multipleSelected(event);
                    }
                    else {
                        this.parentKey = this.getParentKey(event.node.parentNode);
                        this.store.dispatch(setSelectedNodes([event.node.key]));
                        this.store.dispatch(setBorderedNodes([event.node.key]));
                    }
                }
            }
        };
        LayerTreeComponent.prototype.group = function (ids) {
            this.store.dispatch(groupNodes(ids));
        };
        LayerTreeComponent.prototype.breakNode = function (id) {
            this.store.dispatch(clearSelected());
            this.store.dispatch(clearBordered());
            this.store.dispatch(breakNode(id));
        };
        LayerTreeComponent.prototype.deleteNodes = function (ids) {
            this.store.dispatch(clearSelected());
            this.store.dispatch(clearBordered());
            this.store.dispatch(removeNodes(ids));
        };
        LayerTreeComponent.prototype.toggleNodesLockState = function (ids, state) {
            if (state) {
                this.store.dispatch(lockNodes(ids));
            }
            else {
                this.store.dispatch(unlockNodes(ids));
            }
        };
        return LayerTreeComponent;
    }());
    LayerTreeComponent.ɵfac = function LayerTreeComponent_Factory(t) { return new (t || LayerTreeComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(EditorStore), i0.ɵɵdirectiveInject(CeUtilsService), i0.ɵɵdirectiveInject(i3$1.NzContextMenuService)); };
    LayerTreeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayerTreeComponent, selectors: [["ce-layer-tree"]], viewQuery: function LayerTreeComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true, i4.NzTreeComponent);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.layerTree = _t.first);
            }
        }, exportAs: ["ceLayerTree"], decls: 8, vars: 8, consts: [["nzBlockNode", "", "nzMultiple", "", 3, "nzData", "nzSelectedKeys", "nzTreeTemplate", "nzExpandedIcon", "nzClick"], ["layerTree", ""], ["multiExpandedIconTpl", ""], ["nzTreeTemplate", ""], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], [1, "layer", 3, "contextmenu", "pointerenter", "pointerleave"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", "class", "action-item", 3, "click", 4, "ngIf"], ["nz-menu-item", "", 1, "action-item", 3, "click"], ["nz-icon", "", "nzType", "delete"], ["nz-icon", "", "nzType", "lock"], ["nz-icon", "", "nzType", "unlock"], ["nz-icon", "", "nzIconfont", "icon-group"], [1, "shortcuts"], ["nz-icon", "", "nzIconfont", "icon-break"]], template: function LayerTreeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-tree", 0, 1);
                i0.ɵɵlistener("nzClick", function LayerTreeComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.clickNode($event); });
                i0.ɵɵpipe(2, "async");
                i0.ɵɵpipe(3, "async");
                i0.ɵɵtemplate(4, LayerTreeComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(6, LayerTreeComponent_ng_template_6_Template, 15, 9, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(5);
                var _r3 = i0.ɵɵreference(7);
                i0.ɵɵproperty("nzData", i0.ɵɵpipeBind1(2, 4, ctx.treeNodes$))("nzSelectedKeys", i0.ɵɵpipeBind1(3, 6, ctx.selectedKeys$))("nzTreeTemplate", _r3)("nzExpandedIcon", _r1);
            }
        }, directives: [i4.NzTreeComponent, i2.NgIf, i6.NzIconDirective, i6$1.ɵNzTransitionPatchDirective, i3$1.NzDropdownMenuComponent, i8.NzMenuDirective, i8.NzMenuItemDirective], pipes: [i2.AsyncPipe], styles: ["ce-layer-tree{display:block;height:100%;margin:0 -12px 0 0;overflow:auto;position:relative}ce-layer-tree ::-webkit-scrollbar{position:absolute;right:0}ce-layer-tree .layer{align-items:center;display:flex}ce-layer-tree .layer.locked{color:rgba(0,0,0,.45)}.action-item{align-items:center;display:flex;justify-content:flex-start;min-width:200px}.action-item .shortcuts{color:rgba(0,0,0,.45);margin-left:auto}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LayerTreeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-layer-tree',
                        exportAs: 'ceLayerTree',
                        templateUrl: 'layer-tree.component.html',
                        styleUrls: ['layer-tree.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: EditorStore }, { type: CeUtilsService }, { type: i3$1.NzContextMenuService }]; }, { layerTree: [{
                    type: i0.ViewChild,
                    args: ['layerTree', { read: i4.NzTreeComponent }]
                }] });
    })();

    function PanelComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r1.panel == null ? null : ctx_r1.panel.title);
        }
    }
    function PanelComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PanelComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PanelComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.panel.content);
        }
    }
    function PanelComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PanelComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PanelComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngComponentOutlet", ctx_r3.panel.content);
        }
    }
    function PanelComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 7);
            i0.ɵɵlistener("click", function PanelComponent_ng_template_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.toggleCollapsed(); });
            i0.ɵɵelement(1, "i", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 9);
            i0.ɵɵlistener("click", function PanelComponent_ng_template_5_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.close(); });
            i0.ɵɵelement(3, "i", 10);
            i0.ɵɵelementEnd();
        }
    }
    var PanelComponent = /** @class */ (function () {
        function PanelComponent(utils, store) {
            this.utils = utils;
            this.store = store;
        }
        Object.defineProperty(PanelComponent.prototype, "panel", {
            get: function () {
                return this._panel;
            },
            set: function (val) {
                this._panel = val;
            },
            enumerable: false,
            configurable: true
        });
        PanelComponent.prototype.updatePosition = function (event) {
            this.store.updatePanelPosition(this.panel.key, [this.panel.x + event.distance.x, this.panel.y + event.distance.y]);
        };
        PanelComponent.prototype.toggleCollapsed = function () {
            this.store.togglePanelCollapsed(this.panel.key);
        };
        PanelComponent.prototype.close = function () {
            this.store.togglePanelVisible(this.panel.key);
        };
        return PanelComponent;
    }());
    PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(i0.ɵɵdirectiveInject(CeUtilsService), i0.ɵɵdirectiveInject(EditorStore)); };
    PanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["ce-panel"], ["", "cePanel", ""]], inputs: { panel: "panel" }, decls: 7, vars: 7, consts: [["nzSize", "small", "cdkDrag", "", 3, "nzTitle", "nzExtra", "cdkDragFreeDragPosition", "cdkDragEnded"], ["cardTitle", ""], [4, "ngIf"], ["cardExtra", ""], ["cdkDragHandle", "", 1, "d-flex", "align-items-center"], [4, "ngTemplateOutlet"], [4, "ngComponentOutlet"], ["nz-button", "", "nzSize", "small", "nzType", "link", 1, "collapse-icon", 3, "click"], ["nz-icon", "", "nzType", "caret-down"], ["nz-button", "", "nzSize", "small", "nzType", "link", 3, "click"], ["nz-icon", "", "nzType", "close"]], template: function PanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-card", 0);
                i0.ɵɵlistener("cdkDragEnded", function PanelComponent_Template_nz_card_cdkDragEnded_0_listener($event) { return ctx.updatePosition($event); });
                i0.ɵɵtemplate(1, PanelComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, PanelComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
                i0.ɵɵtemplate(4, PanelComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, PanelComponent_ng_template_5_Template, 4, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(2);
                var _r4 = i0.ɵɵreference(6);
                i0.ɵɵclassProp("collapsed", ctx.panel == null ? null : ctx.panel.collapsed);
                i0.ɵɵproperty("nzTitle", _r0)("nzExtra", _r4)("cdkDragFreeDragPosition", ctx.panel);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.utils.isTemplateType(ctx.panel.content));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.utils.isTemplateType(ctx.panel.content));
            }
        }, directives: [i2$1.NzCardComponent, i3$2.CdkDrag, i2.NgIf, i3$2.CdkDragHandle, i2.NgTemplateOutlet, i2.NgComponentOutlet, i5.NzButtonComponent, i6$1.ɵNzTransitionPatchDirective, i6.NzIconDirective], styles: ["[cePanel],ce-panel{display:block;pointer-events:none;position:absolute;width:300px}[cePanel] *,ce-panel *{pointer-events:auto}[cePanel]>nz-card.collapsed .ant-card-body,ce-panel>nz-card.collapsed .ant-card-body{height:0;overflow:hidden;padding:0}[cePanel]>nz-card.collapsed .collapse-icon,ce-panel>nz-card.collapsed .collapse-icon{transform:rotate(-180deg)}[cePanel]>nz-card .collapse-icon,ce-panel>nz-card .collapse-icon{transform:rotate(0deg);transition:transform .3s ease-in-out}[cePanel]>nz-card .ant-card-head-title,ce-panel>nz-card .ant-card-head-title{cursor:move}[cePanel]>nz-card .ant-card-body,ce-panel>nz-card .ant-card-body{height:calc(100vh - 110px);transition:height .3s ease-in-out,padding .3s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-panel,[cePanel]',
                        templateUrl: './panel.component.html',
                        styleUrls: ['./panel.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: CeUtilsService }, { type: EditorStore }]; }, { panel: [{
                    type: i0.Input
                }] });
    })();

    function CanvasFormsComponent_img_60_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "img", 20);
            i0.ɵɵpipe(1, "nzSanitizer");
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("max-width", 100, "%");
            i0.ɵɵproperty("src", i0.ɵɵpipeBind2(1, 3, ctx_r0.canvasBackgroundFormGroup.controls["backgroundImage"].value, "url"), i0.ɵɵsanitizeUrl);
        }
    }
    var CanvasFormsComponent = /** @class */ (function () {
        function CanvasFormsComponent(fb, store) {
            var _this = this;
            this.fb = fb;
            this.store = store;
            this.subscription = new rxjs.Subscription();
            this.canvasSizeFormGroup = this.fb.group({
                width: [0, [i1.Validators.required, i1.Validators.min(0)]],
                height: [0, [i1.Validators.required, i1.Validators.min(0)]],
            });
            this.canvasPositionFormGroup = this.fb.group({
                left: [0, [i1.Validators.required]],
                top: [0, [i1.Validators.required]],
                scale: [1, [i1.Validators.min(0.01), i1.Validators.required]],
            });
            this.canvasBackgroundFormGroup = this.fb.group({
                backgroundColor: ['#ffffff'],
                backgroundImage: [null],
            });
            this.subscription.add(this.store
                .selectDifferent(function (state) { return state.canvasSize; })
                .subscribe(function (state) {
                _this.canvasSizeFormGroup.patchValue(state, { emitEvent: false });
            }));
            this.subscription.add(this.store
                .selectDifferent(function (state) { return state.canvasPosition; })
                .subscribe(function (state) {
                var _a;
                _this.canvasPositionFormGroup.patchValue({ left: Math.round(state.left), top: Math.round(state.top), scale: (_a = state.scale) === null || _a === void 0 ? void 0 : _a.toFixed(2) }, { emitEvent: false });
            }));
            this.subscription.add(this.store
                .selectDifferent(function (state) { return state.canvasBackground; })
                .subscribe(function (state) {
                _this.canvasBackgroundFormGroup.patchValue(state, { emitEvent: false });
            }));
        }
        CanvasFormsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.canvasSizeFormGroup.valueChanges.subscribe(function (value) {
                _this.store.dispatch(updateCanvasSize(value));
            });
            this.canvasPositionFormGroup.valueChanges.subscribe(function (value) {
                _this.store.dispatch(updateCanvasPosition(value));
            });
            this.canvasBackgroundFormGroup.valueChanges.subscribe(function (value) {
                console.log(value);
                _this.store.dispatch(updateCanvasBackground(value));
            });
        };
        CanvasFormsComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        return CanvasFormsComponent;
    }());
    CanvasFormsComponent.ɵfac = function CanvasFormsComponent_Factory(t) { return new (t || CanvasFormsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(EditorStore)); };
    CanvasFormsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CanvasFormsComponent, selectors: [["ce-canvas-forms"], ["", "ceCanvasForms", ""]], decls: 61, vars: 4, consts: [["nz-form", "", "nzLayout", "inline", 3, "formGroup"], ["nzGutter", "8"], ["nzSpan", "12"], ["nz-icon", "", "nzIconfont", "icon-kuandu"], ["nzSize", "small", "formControlName", "width"], ["nz-icon", "", "nzIconfont", "icon-gaodu"], ["nzSize", "small", "formControlName", "height"], [1, "mt-2"], ["nz-icon", "", "nzIconfont", "icon-left"], ["nzSize", "small", "formControlName", "left"], ["nz-icon", "", "nzIconfont", "icon-top"], ["nzSize", "small", "formControlName", "top"], ["nz-icon", "", "nzIconfont", "icon-scale"], ["nzSize", "small", "formControlName", "scale"], ["nz-icon", "", "nzIconfont", "icon-color"], ["type", "color", "nz-input", "", "nzSize", "small", "formControlName", "backgroundColor"], ["nz-icon", "", "nzIconfont", "icon-image"], ["type", "text", "nz-input", "", "nzSize", "small", "formControlName", "backgroundImage"], [1, "mt-1"], [3, "max-width", "src", 4, "ngIf"], [3, "src"]], template: function CanvasFormsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "h4");
                i0.ɵɵtext(2, "\u753B\u5E03\u5C3A\u5BF8");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "form", 0);
                i0.ɵɵelementStart(4, "nz-row", 1);
                i0.ɵɵelementStart(5, "nz-col", 2);
                i0.ɵɵelementStart(6, "nz-form-item");
                i0.ɵɵelementStart(7, "nz-form-label");
                i0.ɵɵelement(8, "i", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "nz-form-control");
                i0.ɵɵelement(10, "nz-input-number", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "nz-col", 2);
                i0.ɵɵelementStart(12, "nz-form-item");
                i0.ɵɵelementStart(13, "nz-form-label");
                i0.ɵɵelement(14, "i", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "nz-form-control");
                i0.ɵɵelement(16, "nz-input-number", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div", 7);
                i0.ɵɵelementStart(18, "h4");
                i0.ɵɵtext(19, "\u753B\u5E03\u4F4D\u7F6E");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "form", 0);
                i0.ɵɵelementStart(21, "nz-row", 1);
                i0.ɵɵelementStart(22, "nz-col", 2);
                i0.ɵɵelementStart(23, "nz-form-item");
                i0.ɵɵelementStart(24, "nz-form-label");
                i0.ɵɵelement(25, "i", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "nz-form-control");
                i0.ɵɵelement(27, "nz-input-number", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "nz-col", 2);
                i0.ɵɵelementStart(29, "nz-form-item");
                i0.ɵɵelementStart(30, "nz-form-label");
                i0.ɵɵelement(31, "i", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "nz-form-control");
                i0.ɵɵelement(33, "nz-input-number", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(34, "nz-col", 2);
                i0.ɵɵelementStart(35, "nz-form-item");
                i0.ɵɵelementStart(36, "nz-form-label");
                i0.ɵɵelement(37, "i", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(38, "nz-form-control");
                i0.ɵɵelement(39, "nz-input-number", 13);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(40, "div", 7);
                i0.ɵɵelementStart(41, "h4");
                i0.ɵɵtext(42, "\u753B\u5E03\u80CC\u666F");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(43, "form", 0);
                i0.ɵɵelementStart(44, "nz-row", 1);
                i0.ɵɵelementStart(45, "nz-col", 2);
                i0.ɵɵelementStart(46, "nz-form-item");
                i0.ɵɵelementStart(47, "nz-form-label");
                i0.ɵɵelement(48, "i", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(49, "nz-form-control");
                i0.ɵɵelement(50, "input", 15);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(51, "nz-col", 2);
                i0.ɵɵelementStart(52, "nz-form-item");
                i0.ɵɵelementStart(53, "nz-form-label");
                i0.ɵɵelement(54, "i", 16);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(55, "nz-form-control");
                i0.ɵɵelement(56, "input", 17);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(57, "h5", 18);
                i0.ɵɵtext(58, "\u80CC\u666F\u9884\u89C8");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(59, "div");
                i0.ɵɵtemplate(60, CanvasFormsComponent_img_60_Template, 2, 6, "img", 19);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formGroup", ctx.canvasSizeFormGroup);
                i0.ɵɵadvance(17);
                i0.ɵɵproperty("formGroup", ctx.canvasPositionFormGroup);
                i0.ɵɵadvance(23);
                i0.ɵɵproperty("formGroup", ctx.canvasBackgroundFormGroup);
                i0.ɵɵadvance(17);
                i0.ɵɵproperty("ngIf", ctx.canvasBackgroundFormGroup.controls["backgroundImage"].value);
            }
        }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i3$3.NzFormDirective, i1.FormGroupDirective, i4$1.NzRowDirective, i4$1.NzColDirective, i3$3.NzFormItemComponent, i3$3.NzFormLabelComponent, i6.NzIconDirective, i6$1.ɵNzTransitionPatchDirective, i3$3.NzFormControlComponent, i7.NzInputNumberComponent, i1.NgControlStatus, i1.FormControlName, i8$1.NzInputDirective, i1.DefaultValueAccessor, i2.NgIf], pipes: [i3.NzSanitizerPipe], styles: ["[ceCanvasForms],ce-canvas-forms{display:block;padding:12px}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CanvasFormsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-canvas-forms,[ceCanvasForms]',
                        templateUrl: './canvas-forms.component.html',
                        styleUrls: ['./canvas-forms.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i1.FormBuilder }, { type: EditorStore }]; }, null);
    })();

    var _c0$1 = ["container"];
    function WidgetFormComponent_ng_template_56_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2, "none");
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
    }
    function WidgetFormComponent_ng_template_56_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 31);
            i0.ɵɵelement(2, "path", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
    }
    function WidgetFormComponent_ng_template_56_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 31);
            i0.ɵɵelement(2, "path", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
    }
    function WidgetFormComponent_ng_template_56_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 31);
            i0.ɵɵelement(2, "path", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
    }
    function WidgetFormComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 28);
            i0.ɵɵelementContainerStart(1, 29);
            i0.ɵɵtemplate(2, WidgetFormComponent_ng_template_56_ng_container_2_Template, 3, 0, "ng-container", 30);
            i0.ɵɵtemplate(3, WidgetFormComponent_ng_template_56_ng_container_3_Template, 3, 0, "ng-container", 30);
            i0.ɵɵtemplate(4, WidgetFormComponent_ng_template_56_ng_container_4_Template, 3, 0, "ng-container", 30);
            i0.ɵɵtemplate(5, WidgetFormComponent_ng_template_56_ng_container_5_Template, 3, 0, "ng-container", 30);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var selected_r8 = ctx.$implicit;
            i0.ɵɵstyleProp("width", 40, "px");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", selected_r8.nzValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "none");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "dashed");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "solid");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "dotted");
        }
    }
    function WidgetFormComponent_ng_container_60_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function WidgetFormComponent_ng_container_62_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function WidgetFormComponent_ng_container_64_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function WidgetFormComponent_ng_container_66_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function WidgetFormComponent_ng_template_68_Template(rf, ctx) { }
    var _c1 = function () { return { nzValue: "none" }; };
    var _c2 = function (a0) { return { $implicit: a0 }; };
    var _c3 = function () { return { nzValue: "dashed" }; };
    var _c4 = function () { return { nzValue: "solid" }; };
    var _c5 = function () { return { nzValue: "dotted" }; };
    var WidgetFormComponent = /** @class */ (function () {
        function WidgetFormComponent(fb, cfr, store) {
            this.fb = fb;
            this.cfr = cfr;
            this.store = store;
            this.boundingFormGroup = this.fb.group({
                id: [, [i1.Validators.required]],
                name: [],
                width: [, [i1.Validators.required]],
                height: [, [i1.Validators.required]],
                left: [, [i1.Validators.required]],
                top: [, [i1.Validators.required]],
                locked: [],
                rotate: [, [i1.Validators.required]],
                zIndex: [, [i1.Validators.required]],
                borderStyle: [],
                borderWidth: [],
                borderColor: [],
                borderRadius: [],
                backgroundColor: [],
                backgroundImage: [],
                backgroundRepeat: [],
                backgroundPosition: [],
                backgroundSize: [],
            });
        }
        WidgetFormComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.store
                .select(function (state) { return state.selected; })
                .pipe(operators.filter(function (selected) { return selected.size === 1; }), operators.map(function (selected) { return __spread(selected)[0]; }), operators.switchMap(function (id) { return _this.store.select(function (state) { return state.nodes.find(function (item) { return item.id === id; }); }); }), operators.filter(function (node) { return !!node; }))
                .subscribe(function (node) {
                _this.boundingFormGroup.patchValue(Object.assign(Object.assign({}, node), { width: Math.round(node.width), height: Math.round(node.height), left: Math.round(node.left), top: Math.round(node.top) }), { emitEvent: false });
            });
            this.boundingFormGroup.valueChanges.subscribe(function (values) {
                _this.store.dispatch(updateNodes([values]));
            });
        };
        return WidgetFormComponent;
    }());
    WidgetFormComponent.ɵfac = function WidgetFormComponent_Factory(t) { return new (t || WidgetFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(EditorStore)); };
    WidgetFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WidgetFormComponent, selectors: [["ce-widget-form"], ["", "ceWidgetForm", ""]], viewQuery: function WidgetFormComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, true);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.propsFormContainer = _t.first);
            }
        }, decls: 70, vars: 25, consts: [["nzGhost", "", "nzAccordion", "", "nzSize", "small", 3, "nzBordered"], ["nzHeader", "\u5916\u5305\u56F4\u76D2\u5C5E\u6027", "nzActive", ""], ["nz-form", "", "nzLayout", "inline", 3, "formGroup"], ["nzGutter", "8"], ["nzSpan", "12"], ["nz-icon", "", "nzIconfont", "icon-kuandu"], ["nzSize", "small", "formControlName", "width"], ["nz-icon", "", "nzIconfont", "icon-gaodu"], ["nzSize", "small", "formControlName", "height"], ["nz-icon", "", "nzIconfont", "icon-left"], ["nzSize", "small", "formControlName", "left"], ["nz-icon", "", "nzIconfont", "icon-top"], ["nzSize", "small", "formControlName", "top"], ["nz-icon", "", "nzType", "rotate-right"], ["nzSize", "small", "formControlName", "rotate"], ["nz-icon", "", "nzType", "lock"], ["formControlName", "locked"], ["nzSpan", "24"], ["nz-icon", "", "nzType", "border-outer"], ["borderStyleTpl", ""], ["nzSize", "small", "formControlName", "borderStyle", 3, "nzCustomTemplate"], ["nzValue", "none", "nzLabel", "none"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzValue", "dashed", "nzLabel", "dashed", "nzCustomContent", ""], ["nzValue", "solid", "nzLabel", "solid", "nzCustomContent", ""], ["nzValue", "dotted", "nzLabel", "dotted", "nzCustomContent", ""], ["nzHeader", "\u7EC4\u4EF6\u5C5E\u6027"], ["container", ""], [1, "d-flex", "align-items-center", "h-100"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["viewBox", "0 0 40 1", 1, "svg-icon"], ["d", "M0 1h5V0H0v1zm9 0h5V0H9v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1zm9 0h5V0h-5v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1z"], ["d", "M0 0h80v1H0z"], ["d", "M0 1h1V0H0v1zm4 0h1V0H4v1zm4 0h1V0H8v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1z"]], template: function WidgetFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-collapse", 0);
                i0.ɵɵelementStart(1, "nz-collapse-panel", 1);
                i0.ɵɵelementStart(2, "div");
                i0.ɵɵelementStart(3, "h5");
                i0.ɵɵtext(4, "\u5C3A\u5BF8");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "form", 2);
                i0.ɵɵelementStart(6, "nz-row", 3);
                i0.ɵɵelementStart(7, "nz-col", 4);
                i0.ɵɵelementStart(8, "nz-form-item");
                i0.ɵɵelementStart(9, "nz-form-label");
                i0.ɵɵelement(10, "i", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "nz-form-control");
                i0.ɵɵelement(12, "nz-input-number", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "nz-col", 4);
                i0.ɵɵelementStart(14, "nz-form-item");
                i0.ɵɵelementStart(15, "nz-form-label");
                i0.ɵɵelement(16, "i", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "nz-form-control");
                i0.ɵɵelement(18, "nz-input-number", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "h5");
                i0.ɵɵtext(20, "\u4F4D\u7F6E");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "form", 2);
                i0.ɵɵelementStart(22, "nz-row", 3);
                i0.ɵɵelementStart(23, "nz-col", 4);
                i0.ɵɵelementStart(24, "nz-form-item");
                i0.ɵɵelementStart(25, "nz-form-label");
                i0.ɵɵelement(26, "i", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(27, "nz-form-control");
                i0.ɵɵelement(28, "nz-input-number", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "nz-col", 4);
                i0.ɵɵelementStart(30, "nz-form-item");
                i0.ɵɵelementStart(31, "nz-form-label");
                i0.ɵɵelement(32, "i", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "nz-form-control");
                i0.ɵɵelement(34, "nz-input-number", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "nz-col", 4);
                i0.ɵɵelementStart(36, "nz-form-item");
                i0.ɵɵelementStart(37, "nz-form-label");
                i0.ɵɵelement(38, "i", 13);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(39, "nz-form-control");
                i0.ɵɵelement(40, "nz-input-number", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(41, "nz-col", 4);
                i0.ɵɵelementStart(42, "nz-form-item");
                i0.ɵɵelementStart(43, "nz-form-label");
                i0.ɵɵelement(44, "i", 15);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(45, "nz-form-control");
                i0.ɵɵelement(46, "nz-switch", 16);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(47, "h5");
                i0.ɵɵtext(48, "\u8FB9\u6846");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(49, "form", 2);
                i0.ɵɵelementStart(50, "nz-row", 3);
                i0.ɵɵelementStart(51, "nz-col", 17);
                i0.ɵɵelementStart(52, "nz-form-item");
                i0.ɵɵelementStart(53, "nz-form-label");
                i0.ɵɵelement(54, "i", 18);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(55, "nz-form-control");
                i0.ɵɵtemplate(56, WidgetFormComponent_ng_template_56_Template, 6, 7, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(58, "nz-select", 20);
                i0.ɵɵelementStart(59, "nz-option", 21);
                i0.ɵɵtemplate(60, WidgetFormComponent_ng_container_60_Template, 1, 0, "ng-container", 22);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(61, "nz-option", 23);
                i0.ɵɵtemplate(62, WidgetFormComponent_ng_container_62_Template, 1, 0, "ng-container", 22);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(63, "nz-option", 24);
                i0.ɵɵtemplate(64, WidgetFormComponent_ng_container_64_Template, 1, 0, "ng-container", 22);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(65, "nz-option", 25);
                i0.ɵɵtemplate(66, WidgetFormComponent_ng_container_66_Template, 1, 0, "ng-container", 22);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(67, "nz-collapse-panel", 26);
                i0.ɵɵtemplate(68, WidgetFormComponent_ng_template_68_Template, 0, 0, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(57);
                i0.ɵɵproperty("nzBordered", false);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("formGroup", ctx.boundingFormGroup);
                i0.ɵɵadvance(16);
                i0.ɵɵproperty("formGroup", ctx.boundingFormGroup);
                i0.ɵɵadvance(28);
                i0.ɵɵproperty("formGroup", ctx.boundingFormGroup);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("nzCustomTemplate", _r0);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction1(14, _c2, i0.ɵɵpureFunction0(13, _c1)));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction1(17, _c2, i0.ɵɵpureFunction0(16, _c3)));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction1(20, _c2, i0.ɵɵpureFunction0(19, _c4)));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction1(23, _c2, i0.ɵɵpureFunction0(22, _c5)));
            }
        }, directives: [i3$4.NzCollapseComponent, i3$4.NzCollapsePanelComponent, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i3$3.NzFormDirective, i1.FormGroupDirective, i4$1.NzRowDirective, i4$1.NzColDirective, i3$3.NzFormItemComponent, i3$3.NzFormLabelComponent, i6.NzIconDirective, i6$1.ɵNzTransitionPatchDirective, i3$3.NzFormControlComponent, i7.NzInputNumberComponent, i1.NgControlStatus, i1.FormControlName, i9.NzSwitchComponent, i10.NzSelectComponent, i10.NzOptionComponent, i2.NgTemplateOutlet, i2.NgSwitch, i2.NgSwitchCase], styles: ["[ceWidgetForm],ce-widget-form{display:block}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item,ce-widget-form .ant-collapse-ghost>.ant-collapse-item{border-bottom:1px solid #d9d9d9}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header{padding-left:20px}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow{left:5px}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box{padding:8px}[ceWidgetForm] .ant-form-item-control-input-content,ce-widget-form .ant-form-item-control-input-content{align-items:center;display:flex}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(WidgetFormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-widget-form,[ceWidgetForm]',
                        templateUrl: './widget-form.component.html',
                        styleUrls: ['./widget-form.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () { return [{ type: i1.FormBuilder }, { type: i0.ComponentFactoryResolver }, { type: EditorStore }]; }, { propsFormContainer: [{
                    type: i0.ViewChild,
                    args: ['container']
                }] });
    })();

    var _c0$2 = ["instance"];
    function PropertyFormComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var PropertyFormComponent = /** @class */ (function () {
        function PropertyFormComponent(store) {
            this.store = store;
        }
        PropertyFormComponent.prototype.ngOnInit = function () {
            this.formComponent$ = this.store
                .select(function (state) { return state.selected.size; })
                .pipe(operators.map(function (size) { return (size === 1 ? WidgetFormComponent : CanvasFormsComponent); }));
        };
        return PropertyFormComponent;
    }());
    PropertyFormComponent.ɵfac = function PropertyFormComponent_Factory(t) { return new (t || PropertyFormComponent)(i0.ɵɵdirectiveInject(EditorStore)); };
    PropertyFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PropertyFormComponent, selectors: [["ce-property-form"], ["", "cePropertyForm", ""]], viewQuery: function PropertyFormComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$2, true);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.instance = _t.first);
            }
        }, decls: 2, vars: 3, consts: [[4, "ngComponentOutlet"]], template: function PropertyFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PropertyFormComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(1, 1, ctx.formComponent$));
            }
        }, directives: [i2.NgComponentOutlet], pipes: [i2.AsyncPipe], styles: ["[cePropertyForm],ce-property-form{display:block;margin:-12px}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PropertyFormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-property-form,[cePropertyForm]',
                        templateUrl: './property-form.component.html',
                        styleUrls: ['./property-form.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: EditorStore }]; }, { instance: [{
                    type: i0.ViewChild,
                    args: ['instance']
                }] });
    })();

    function ResizeHandleComponent_ce_rotate_handle_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "ce-rotate-handle");
        }
    }
    function ResizeHandleComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_2_Template_div_ceOnStart_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_2_Template_div_ceOnMove_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.resizing($event, "t"); })("ceOnStop", function ResizeHandleComponent_div_2_Template_div_ceOnStop_0_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.resizeEnd(); });
            i0.ɵɵelementEnd();
        }
    }
    function ResizeHandleComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_4_Template_div_ceOnStart_0_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_4_Template_div_ceOnMove_0_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.resizing($event, "r"); })("ceOnStop", function ResizeHandleComponent_div_4_Template_div_ceOnStop_0_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.resizeEnd(); });
            i0.ɵɵelementEnd();
        }
    }
    function ResizeHandleComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_6_Template_div_ceOnStart_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_6_Template_div_ceOnMove_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.resizing($event, "b"); })("ceOnStop", function ResizeHandleComponent_div_6_Template_div_ceOnStop_0_listener() { i0.ɵɵrestoreView(_r18_1); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.resizeEnd(); });
            i0.ɵɵelementEnd();
        }
    }
    function ResizeHandleComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_8_Template_div_ceOnStart_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_8_Template_div_ceOnMove_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.resizing($event, "l"); })("ceOnStop", function ResizeHandleComponent_div_8_Template_div_ceOnStop_0_listener() { i0.ɵɵrestoreView(_r22_1); var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.resizeEnd(); });
            i0.ɵɵelementEnd();
        }
    }
    function ResizeHandleComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 21);
        }
    }
    function ResizeHandleComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 22);
        }
    }
    function ResizeHandleComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 23);
        }
    }
    function ResizeHandleComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 24);
        }
    }
    var ResizeHandleComponent = /** @class */ (function () {
        function ResizeHandleComponent(store, utils, eleRef) {
            var _this = this;
            this.store = store;
            this.utils = utils;
            this.eleRef = eleRef;
            this.display = 'none';
            this.nodePositionSnapshotList = new Map();
            this.selectedSize$ = this.store.selectDifferent(function (state) { return state.selected.size; });
            this.store
                .selectDifferent(function (state) { return ({ selected: state.selected, canvasPosition: state.canvasPosition, nodes: state.nodes }); })
                .subscribe(function (_b) {
                var selected = _b.selected, canvasPosition = _b.canvasPosition, nodes = _b.nodes;
                _this.display = selected.size ? 'block' : 'none';
                _this.selected = selected;
                _this.canvasPosition = canvasPosition;
                _this.nodes = nodes;
                if (_this.selected.size) {
                    _this.refreshResizeHandle();
                }
            });
        }
        Object.defineProperty(ResizeHandleComponent.prototype, "transform", {
            get: function () {
                var _a;
                return "rotate(" + ((_a = this.rotate) !== null && _a !== void 0 ? _a : 0) + "deg)";
            },
            enumerable: false,
            configurable: true
        });
        ResizeHandleComponent.prototype.refreshResizeHandle = function () {
            if (!this.selected || !this.nodes) {
                return;
            }
            var _b = this.utils.getResizeBoundingBox(__spread(this.selected), this.nodes), left = _b.left, top = _b.top, width = _b.width, height = _b.height, rotate = _b.rotate;
            this.left = left * this.canvasPosition.scale;
            this.top = top * this.canvasPosition.scale;
            this.width = width * this.canvasPosition.scale;
            this.height = height * this.canvasPosition.scale;
            this.rotate = rotate;
        };
        ResizeHandleComponent.prototype.resizeStart = function (event) {
            var _this = this;
            event.preventDefault();
            event.stopPropagation();
            var scale = this.canvasPosition.scale;
            var canvasRect = document.querySelector('ce-canvas').getBoundingClientRect();
            this.groupRectSnapshot = { width: this.width / scale, height: this.height / scale, left: this.left / scale, top: this.top / scale };
            this.groupAbsolutePositionSnapshot = this.utils.getAbsolutePosition((this.left + this.width / 2) / scale, (this.top + this.height / 2) / scale, this.width / scale, this.height / scale);
            this.resizePointSnapshot = {
                absolute: [event.clientX, event.clientY],
                relative: [(event.clientX - canvasRect.left) / scale, (event.clientY - canvasRect.top) / scale],
            };
            this.selected.forEach(function (id) {
                var node = _this.utils.getNodeById(id, _this.nodes);
                var nodeAbsolutePosition = _this.utils.getAbsolutePosition(node.left + node.width / 2, node.top + node.height / 2, node.width, node.height, node.rotate);
                if (_this.selected.size > 1) {
                    _this.resizeMode = 'GROUP';
                    var percentPosition = _this.utils.getItemPercentPositionInGroup(Object.assign({}, _this.groupRectSnapshot), nodeAbsolutePosition);
                    _this.nodePositionSnapshotList.set(id, percentPosition);
                }
                else {
                    _this.resizeMode = 'SINGLE';
                    _this.nodePositionSnapshotList.set(id, nodeAbsolutePosition);
                }
            });
        };
        ResizeHandleComponent.prototype.resizing = function (event, direction) {
            if (this.resizePointSnapshot && this.groupRectSnapshot && this.resizeMode) {
                var _b = __read([event.clientX - this.resizePointSnapshot.absolute[0], event.clientY - this.resizePointSnapshot.absolute[1]], 2), mx = _b[0], my = _b[1];
                switch (this.resizeMode) {
                    case 'GROUP':
                        this.resizingNodeList(direction, mx, my);
                        break;
                    case 'SINGLE':
                        this.resizingNode(direction, mx, my);
                        break;
                }
            }
        };
        ResizeHandleComponent.prototype.resizeEnd = function () {
            this.groupRectSnapshot = null;
            this.resizePointSnapshot = null;
            this.nodePositionSnapshotList.clear();
        };
        ResizeHandleComponent.prototype.resizingNodeList = function (direction, mx, my) {
            var _this = this;
            var scale = this.canvasPosition.scale;
            var relative = this.resizePointSnapshot.relative;
            var endPointer = [relative[0] + mx / scale, relative[1] + my / scale];
            var line = getGroupDiagonalByDirection(direction, this.groupAbsolutePositionSnapshot);
            var newPoint = getPointByEndPointer(direction, endPointer, line);
            var newGroupRect = getGroupRectByDirectionPoint(direction, this.groupAbsolutePositionSnapshot, newPoint);
            var nodesSizeMap = new Map();
            this.nodePositionSnapshotList.forEach(function (_b, id) {
                var tl = _b.tl, bl = _b.bl, br = _b.br, tr = _b.tr;
                nodesSizeMap.set(id, _this.utils.getRelativePosition({
                    bl: [bl[0] * newGroupRect.width + newGroupRect.left, bl[1] * newGroupRect.height + newGroupRect.top],
                    br: [br[0] * newGroupRect.width + newGroupRect.left, br[1] * newGroupRect.height + newGroupRect.top],
                    tl: [tl[0] * newGroupRect.width + newGroupRect.left, tl[1] * newGroupRect.height + newGroupRect.top],
                    tr: [tr[0] * newGroupRect.width + newGroupRect.left, tr[1] * newGroupRect.height + newGroupRect.top],
                }));
            });
            this.store.dispatch(updateNodesSize(nodesSizeMap));
        };
        ResizeHandleComponent.prototype.resizingNode = function (direction, mx, my) {
            var _this = this;
            var scale = this.canvasPosition.scale;
            var relative = this.resizePointSnapshot.relative;
            var endPointer = [relative[0] + mx / scale, relative[1] + my / scale];
            this.nodePositionSnapshotList.forEach(function (position, id) {
                _this.store.dispatch(updateNodesSize(new Map([[id, getDOMRectByDirectionAndPosition(direction, position, endPointer)]])));
            });
        };
        return ResizeHandleComponent;
    }());
    ResizeHandleComponent.ɵfac = function ResizeHandleComponent_Factory(t) { return new (t || ResizeHandleComponent)(i0.ɵɵdirectiveInject(EditorStore), i0.ɵɵdirectiveInject(CeUtilsService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ResizeHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResizeHandleComponent, selectors: [["ce-resize-handle"], ["", "ceResizeHandle", ""]], hostVars: 12, hostBindings: function ResizeHandleComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵstyleProp("display", ctx.display)("width", ctx.width, "px")("height", ctx.height, "px")("left", ctx.left, "px")("top", ctx.top, "px")("transform", ctx.transform);
            }
        }, decls: 26, vars: 27, consts: [[4, "ngIf"], ["class", "resizable-handle t", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle r", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle b", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle l", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["ceDraggable", "", 1, "resizable-handle", "tr", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "br", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "tl", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "bl", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["class", "t circle", 4, "ngIf"], ["class", "r circle", 4, "ngIf"], ["class", "b circle", 4, "ngIf"], ["class", "l circle", 4, "ngIf"], [1, "tr", "circle"], [1, "br", "circle"], [1, "tl", "circle"], [1, "bl", "circle"], ["ceDraggable", "", 1, "resizable-handle", "t", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "r", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "b", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "l", 3, "ceOnStart", "ceOnMove", "ceOnStop"], [1, "t", "circle"], [1, "r", "circle"], [1, "b", "circle"], [1, "l", "circle"]], template: function ResizeHandleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, ResizeHandleComponent_ce_rotate_handle_0_Template, 1, 0, "ce-rotate-handle", 0);
                i0.ɵɵpipe(1, "async");
                i0.ɵɵtemplate(2, ResizeHandleComponent_div_2_Template, 1, 0, "div", 1);
                i0.ɵɵpipe(3, "async");
                i0.ɵɵtemplate(4, ResizeHandleComponent_div_4_Template, 1, 0, "div", 2);
                i0.ɵɵpipe(5, "async");
                i0.ɵɵtemplate(6, ResizeHandleComponent_div_6_Template, 1, 0, "div", 3);
                i0.ɵɵpipe(7, "async");
                i0.ɵɵtemplate(8, ResizeHandleComponent_div_8_Template, 1, 0, "div", 4);
                i0.ɵɵpipe(9, "async");
                i0.ɵɵelementStart(10, "div", 5);
                i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_10_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_10_listener($event) { return ctx.resizing($event, "tr"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_10_listener() { return ctx.resizeEnd(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "div", 6);
                i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_11_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_11_listener($event) { return ctx.resizing($event, "br"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_11_listener() { return ctx.resizeEnd(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "div", 7);
                i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_12_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_12_listener($event) { return ctx.resizing($event, "tl"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_12_listener() { return ctx.resizeEnd(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div", 8);
                i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_13_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_13_listener($event) { return ctx.resizing($event, "bl"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_13_listener() { return ctx.resizeEnd(); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(14, ResizeHandleComponent_div_14_Template, 1, 0, "div", 9);
                i0.ɵɵpipe(15, "async");
                i0.ɵɵtemplate(16, ResizeHandleComponent_div_16_Template, 1, 0, "div", 10);
                i0.ɵɵpipe(17, "async");
                i0.ɵɵtemplate(18, ResizeHandleComponent_div_18_Template, 1, 0, "div", 11);
                i0.ɵɵpipe(19, "async");
                i0.ɵɵtemplate(20, ResizeHandleComponent_div_20_Template, 1, 0, "div", 12);
                i0.ɵɵpipe(21, "async");
                i0.ɵɵelement(22, "div", 13);
                i0.ɵɵelement(23, "div", 14);
                i0.ɵɵelement(24, "div", 15);
                i0.ɵɵelement(25, "div", 16);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 9, ctx.selectedSize$) === 1);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 11, ctx.selectedSize$));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(5, 13, ctx.selectedSize$));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(7, 15, ctx.selectedSize$));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(9, 17, ctx.selectedSize$));
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(15, 19, ctx.selectedSize$) === 1);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(17, 21, ctx.selectedSize$) === 1);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(19, 23, ctx.selectedSize$) === 1);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(21, 25, ctx.selectedSize$) === 1);
            }
        }, styles: ["[ceResizeHandle],ce-resize-handle{border:1px solid #1890ff;box-sizing:border-box;position:absolute}[ceResizeHandle] .resizable-handle,ce-resize-handle .resizable-handle{cursor:pointer;height:14px;pointer-events:auto;position:absolute;width:14px;z-index:1}[ceResizeHandle] .circle,ce-resize-handle .circle{background:#fff;border:1px solid #1890ff;border-radius:50%;height:7px;position:absolute;width:7px}[ceResizeHandle] .b,[ceResizeHandle] .t,ce-resize-handle .b,ce-resize-handle .t{left:50%;margin-left:-3.5px}[ceResizeHandle] .b.resizable-handle,[ceResizeHandle] .t.resizable-handle,ce-resize-handle .b.resizable-handle,ce-resize-handle .t.resizable-handle{margin-left:-7px}[ceResizeHandle] .l,[ceResizeHandle] .r,ce-resize-handle .l,ce-resize-handle .r{margin-top:-3.5px;top:50%}[ceResizeHandle] .l.resizable-handle,[ceResizeHandle] .r.resizable-handle,ce-resize-handle .l.resizable-handle,ce-resize-handle .r.resizable-handle{margin-top:-7px}[ceResizeHandle] .t,[ceResizeHandle] .tl,[ceResizeHandle] .tr,ce-resize-handle .t,ce-resize-handle .tl,ce-resize-handle .tr{top:-3.5px}[ceResizeHandle] .t.resizable-handle,[ceResizeHandle] .tl.resizable-handle,[ceResizeHandle] .tr.resizable-handle,ce-resize-handle .t.resizable-handle,ce-resize-handle .tl.resizable-handle,ce-resize-handle .tr.resizable-handle{top:-7px}[ceResizeHandle] .b,[ceResizeHandle] .bl,[ceResizeHandle] .br,ce-resize-handle .b,ce-resize-handle .bl,ce-resize-handle .br{bottom:-3.5px}[ceResizeHandle] .b.resizable-handle,[ceResizeHandle] .bl.resizable-handle,[ceResizeHandle] .br.resizable-handle,ce-resize-handle .b.resizable-handle,ce-resize-handle .bl.resizable-handle,ce-resize-handle .br.resizable-handle{bottom:-7px}[ceResizeHandle] .br,[ceResizeHandle] .r,[ceResizeHandle] .tr,ce-resize-handle .br,ce-resize-handle .r,ce-resize-handle .tr{right:-3.5px}[ceResizeHandle] .br.resizable-handle,[ceResizeHandle] .r.resizable-handle,[ceResizeHandle] .tr.resizable-handle,ce-resize-handle .br.resizable-handle,ce-resize-handle .r.resizable-handle,ce-resize-handle .tr.resizable-handle{right:-7px}[ceResizeHandle] .bl,[ceResizeHandle] .l,[ceResizeHandle] .tl,ce-resize-handle .bl,ce-resize-handle .l,ce-resize-handle .tl{left:-3.5px}[ceResizeHandle] .bl.resizable-handle,[ceResizeHandle] .l.resizable-handle,[ceResizeHandle] .tl.resizable-handle,ce-resize-handle .bl.resizable-handle,ce-resize-handle .l.resizable-handle,ce-resize-handle .tl.resizable-handle{left:-7px}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ResizeHandleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-resize-handle,[ceResizeHandle]',
                        templateUrl: 'resize-handle.component.html',
                        styleUrls: ['resize-handle.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: EditorStore }, { type: CeUtilsService }, { type: i0.ElementRef }]; }, { display: [{
                    type: i0.HostBinding,
                    args: ['style.display']
                }], width: [{
                    type: i0.HostBinding,
                    args: ['style.width.px']
                }], height: [{
                    type: i0.HostBinding,
                    args: ['style.height.px']
                }], left: [{
                    type: i0.HostBinding,
                    args: ['style.left.px']
                }], top: [{
                    type: i0.HostBinding,
                    args: ['style.top.px']
                }], transform: [{
                    type: i0.HostBinding,
                    args: ['style.transform']
                }] });
    })();
    function getGroupDiagonalByDirection(direction, absolutePosition) {
        var verticalAndHorizontalPosition = CeUtilsService.shared.getVerticalAndHorizontalPointByAbsolutePosition(absolutePosition);
        switch (direction) {
            case 'tl':
            case 'br':
                return [absolutePosition.tl, absolutePosition.br];
            case 'tr':
            case 'bl':
                return [absolutePosition.tr, absolutePosition.bl];
            case 't':
            case 'b':
                return [verticalAndHorizontalPosition.t, verticalAndHorizontalPosition.b];
            case 'l':
            case 'r':
                return [verticalAndHorizontalPosition.l, verticalAndHorizontalPosition.r];
        }
    }
    function getPointByEndPointer(direction, endPointer, line) {
        switch (direction) {
            case 'tl':
            case 'tr':
                if (endPointer[1] >= CeUtilsService.shared.getPointInLine('y', endPointer[0], line)) {
                    return [endPointer[0], CeUtilsService.shared.getPointInLine('y', endPointer[0], line)];
                }
                else {
                    return [CeUtilsService.shared.getPointInLine('x', endPointer[1], line), endPointer[1]];
                }
            case 'bl':
            case 'br':
                if (endPointer[1] >= CeUtilsService.shared.getPointInLine('y', endPointer[0], line)) {
                    return [CeUtilsService.shared.getPointInLine('x', endPointer[1], line), endPointer[1]];
                }
                else {
                    return [endPointer[0], CeUtilsService.shared.getPointInLine('y', endPointer[0], line)];
                }
        }
    }
    function getGroupRectByDirectionPoint(direction, absolutePoint, point) {
        switch (direction) {
            case 'tl':
                return { left: point[0], top: point[1], width: absolutePoint.tr[0] - point[0], height: absolutePoint.bl[1] - point[1] };
            case 'tr':
                return { left: absolutePoint.tl[0], top: point[1], width: point[0] - absolutePoint.tl[0], height: absolutePoint.br[1] - point[1] };
            case 'br':
                return { left: absolutePoint.tl[0], top: absolutePoint.tl[1], width: point[0] - absolutePoint.bl[0], height: point[1] - absolutePoint.tr[1] };
            case 'bl':
                return { left: point[0], top: absolutePoint.tl[1], width: absolutePoint.br[0] - point[0], height: point[1] - absolutePoint.tl[1] };
        }
    }
    function getDOMRectByDirectionAndPosition(direction, position, endPointer) {
        var bl = position.bl, br = position.br, tl = position.tl, tr = position.tr;
        var newTLPoint;
        var newTRPoint;
        var newBLPoint;
        var newBRPoint;
        switch (direction) {
            case 'tl':
                newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, tr, endPointer);
                newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, bl, endPointer);
                return CeUtilsService.shared.getRelativePosition({ tl: endPointer, tr: newTRPoint, bl: newBLPoint, br: br });
            case 'tr':
                newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, tl, endPointer);
                newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, br, endPointer);
                return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr: endPointer, bl: bl, br: newBRPoint });
            case 'bl':
                newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, tl, endPointer);
                newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, br, endPointer);
                return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr: tr, bl: endPointer, br: newBRPoint });
            case 'br':
                newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, tr, endPointer);
                newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, bl, endPointer);
                return CeUtilsService.shared.getRelativePosition({ tl: tl, tr: newTRPoint, bl: newBLPoint, br: endPointer });
            case 't':
                newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, tl, endPointer);
                newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, tr, endPointer);
                return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr: newTRPoint, bl: bl, br: br });
            case 'r':
                newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, tr, endPointer);
                newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, br, endPointer);
                return CeUtilsService.shared.getRelativePosition({ tl: tl, tr: newTRPoint, bl: bl, br: newBRPoint });
            case 'b':
                newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, bl, endPointer);
                newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, br, endPointer);
                return CeUtilsService.shared.getRelativePosition({ tl: tl, tr: tr, bl: newBLPoint, br: newBRPoint });
            case 'l':
                newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, tl, endPointer);
                newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, bl, endPointer);
                return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr: tr, bl: newBLPoint, br: br });
        }
    }

    var RotateHandleComponent = /** @class */ (function () {
        function RotateHandleComponent(parent, store, utils) {
            this.parent = parent;
            this.store = store;
            this.utils = utils;
            this.rotateSnapshot = null;
        }
        RotateHandleComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.store.select(function (state) { return state.selected; }).subscribe(function (selected) { return (_this.selected = selected); });
            this.store.select(function (state) { return state.nodes; }).subscribe(function (nodes) { return (_this.nodes = nodes); });
        };
        RotateHandleComponent.prototype.rotateStart = function (event) {
            event.stopPropagation();
            event.preventDefault();
            var rect = this.parent.eleRef.nativeElement.getBoundingClientRect().toJSON();
            this.rotateSnapshot = [
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
                rect.left + rect.width / 2,
                rect.top + rect.height / 2 - 100,
                this.utils.getNodeById(__spread(this.selected)[0], this.nodes),
            ];
        };
        RotateHandleComponent.prototype.rotating = function (event) {
            if (this.rotateSnapshot) {
                var _a = __read(this.rotateSnapshot, 5), cx = _a[0], cy = _a[1], sx = _a[2], sy = _a[3], node = _a[4];
                var ex = event.clientX;
                var ey = event.clientY;
                var rotate = Math.round(this.utils.getRotate(cx, cy, sx, sy, ex, ey));
                this.store.dispatch(updateNodes([Object.assign(Object.assign({}, node), { rotate: rotate === 360 ? 0 : rotate })]));
            }
        };
        RotateHandleComponent.prototype.rotateStop = function () {
            this.rotateSnapshot = null;
        };
        return RotateHandleComponent;
    }());
    RotateHandleComponent.ɵfac = function RotateHandleComponent_Factory(t) { return new (t || RotateHandleComponent)(i0.ɵɵdirectiveInject(ResizeHandleComponent, 12), i0.ɵɵdirectiveInject(EditorStore), i0.ɵɵdirectiveInject(CeUtilsService)); };
    RotateHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RotateHandleComponent, selectors: [["ce-rotate-handle"]], decls: 3, vars: 2, consts: [["ceDraggable", "", 1, "rotate", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["width", "14", "height", "14", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z", "fill-rule", "nonzero"]], template: function RotateHandleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("ceOnStart", function RotateHandleComponent_Template_div_ceOnStart_0_listener($event) { return ctx.rotateStart($event); })("ceOnMove", function RotateHandleComponent_Template_div_ceOnMove_0_listener($event) { return ctx.rotating($event); })("ceOnStop", function RotateHandleComponent_Template_div_ceOnStop_0_listener() { return ctx.rotateStop(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(1, "svg", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵstyleProp("cursor", ctx.rotateSnapshot && "grabbing");
            }
        }, directives: [DraggableDirective], styles: [".rotate{align-items:center;cursor:grab;display:flex;height:18px;justify-content:center;left:50%;margin-left:-9px;pointer-events:auto;position:absolute;top:-26px;width:18px}.rotate path{fill:#1890ff}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RotateHandleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-rotate-handle',
                        templateUrl: 'rotate-handle.component.html',
                        styleUrls: ['rotate-handle.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: ResizeHandleComponent, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.SkipSelf
                        }] }, { type: EditorStore }, { type: CeUtilsService }];
        }, null);
    })();

    var NoZoomAreaDirective = /** @class */ (function () {
        function NoZoomAreaDirective(store) {
            var _this = this;
            this.store = store;
            this.store
                .select(function (state) { return (Object.assign(Object.assign({}, state.canvasSize), { scale: state.canvasPosition.scale })); })
                .subscribe(function (state) {
                _this.width = state.width * state.scale;
                _this.height = state.height * state.scale;
            });
        }
        return NoZoomAreaDirective;
    }());
    NoZoomAreaDirective.ɵfac = function NoZoomAreaDirective_Factory(t) { return new (t || NoZoomAreaDirective)(i0.ɵɵdirectiveInject(EditorStore)); };
    NoZoomAreaDirective.ɵdir = i0.ɵɵdefineDirective({ type: NoZoomAreaDirective, selectors: [["", "ceNoZoomArea", ""]], hostVars: 4, hostBindings: function NoZoomAreaDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵstyleProp("width", ctx.width, "px")("height", ctx.height, "px");
            }
        }, exportAs: ["ceNoZoomArea"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NoZoomAreaDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ceNoZoomArea]',
                        exportAs: 'ceNoZoomArea',
                    }]
            }], function () { return [{ type: EditorStore }]; }, { width: [{
                    type: i0.HostBinding,
                    args: ['style.width.px']
                }], height: [{
                    type: i0.HostBinding,
                    args: ['style.height.px']
                }] });
    })();

    var SelectorDirective = /** @class */ (function () {
        function SelectorDirective(eleRef) {
            this.eleRef = eleRef;
            this.subscription = new rxjs.Subscription();
            this.move$ = rxjs.fromEvent(window, 'pointermove');
            this.up$ = rxjs.fromEvent(window, 'pointerup');
            this.startPointSnapshot = null;
            this.ceSelectorDisabled = false;
            this.ceOnSelectorStart = new i0.EventEmitter();
            this.ceOnSelectorMoving = new i0.EventEmitter();
            this.ceOnSelectorStop = new i0.EventEmitter();
        }
        SelectorDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription.add(rxjs.fromEvent(this.eleRef.nativeElement, 'pointerdown')
                .pipe(operators.filter(function (e) { return e.button === 0; }), operators.filter(function () { return !_this.ceSelectorDisabled; }), operators.switchMap(function (ev) {
                _this.boxRect = _this.eleRef.nativeElement.getBoundingClientRect();
                _this.startPointSnapshot = [ev.clientX, ev.clientY];
                _this.ceOnSelectorStart.emit();
                return _this.move$.pipe(operators.finalize(function () {
                    _this.startPointSnapshot = null;
                    _this.ceOnSelectorStop.emit();
                }), operators.takeUntil(_this.up$));
            }))
                .subscribe(function (e) {
                if (_this.startPointSnapshot) {
                    var x = void 0;
                    var y = void 0;
                    var _a = __read([e.clientX - _this.startPointSnapshot[0], e.clientY - _this.startPointSnapshot[1]], 2), mx = _a[0], my = _a[1];
                    if (mx >= 0) {
                        x = _this.startPointSnapshot[0] - _this.boxRect.left;
                    }
                    else {
                        x = e.clientX - _this.boxRect.left;
                    }
                    if (my >= 0) {
                        y = _this.startPointSnapshot[1] - _this.boxRect.top;
                    }
                    else {
                        y = e.clientY - _this.boxRect.top;
                    }
                    _this.ceOnSelectorMoving.emit({ x: x, y: y, width: Math.abs(mx), height: Math.abs(my) });
                }
            }));
        };
        SelectorDirective.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        return SelectorDirective;
    }());
    SelectorDirective.ɵfac = function SelectorDirective_Factory(t) { return new (t || SelectorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    SelectorDirective.ɵdir = i0.ɵɵdefineDirective({ type: SelectorDirective, selectors: [["", "ceSelector", ""]], inputs: { ceSelectorDisabled: "ceSelectorDisabled" }, outputs: { ceOnSelectorStart: "ceOnSelectorStart", ceOnSelectorMoving: "ceOnSelectorMoving", ceOnSelectorStop: "ceOnSelectorStop" }, exportAs: ["ceSelector"] });
    __decorate([
        util.InputBoolean()
    ], SelectorDirective.prototype, "ceSelectorDisabled", void 0);
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectorDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ceSelector]',
                        exportAs: 'ceSelector',
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { ceSelectorDisabled: [{
                    type: i0.Input
                }], ceOnSelectorStart: [{
                    type: i0.Output
                }], ceOnSelectorMoving: [{
                    type: i0.Output
                }], ceOnSelectorStop: [{
                    type: i0.Output
                }] });
    })();

    var ZoomAreaDirective = /** @class */ (function () {
        function ZoomAreaDirective(store) {
            var _this = this;
            this.store = store;
            this.transformOrigin = '0 0';
            this.store
                .select(function (state) { return (Object.assign(Object.assign({}, state.canvasSize), { scale: state.canvasPosition.scale })); })
                .subscribe(function (state) {
                _this.scale = "perspective(1px) scale(" + state.scale + ")";
                _this.width = state.width;
                _this.height = state.height;
            });
        }
        return ZoomAreaDirective;
    }());
    ZoomAreaDirective.ɵfac = function ZoomAreaDirective_Factory(t) { return new (t || ZoomAreaDirective)(i0.ɵɵdirectiveInject(EditorStore)); };
    ZoomAreaDirective.ɵdir = i0.ɵɵdefineDirective({ type: ZoomAreaDirective, selectors: [["", "ceZoomArea", ""]], hostVars: 8, hostBindings: function ZoomAreaDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵstyleProp("transform-origin", ctx.transformOrigin)("transform", ctx.scale)("width", ctx.width, "px")("height", ctx.height, "px");
            }
        }, exportAs: ["ceZoomArea"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ZoomAreaDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ceZoomArea]',
                        exportAs: 'ceZoomArea',
                    }]
            }], function () { return [{ type: EditorStore }]; }, { transformOrigin: [{
                    type: i0.HostBinding,
                    args: ['style.transform-origin']
                }], scale: [{
                    type: i0.HostBinding,
                    args: ['style.transform']
                }], width: [{
                    type: i0.HostBinding,
                    args: ['style.width.px']
                }], height: [{
                    type: i0.HostBinding,
                    args: ['style.height.px']
                }] });
    })();

    var CeToolbarDirective = /** @class */ (function () {
        function CeToolbarDirective() {
        }
        return CeToolbarDirective;
    }());
    CeToolbarDirective.ɵfac = function CeToolbarDirective_Factory(t) { return new (t || CeToolbarDirective)(); };
    CeToolbarDirective.ɵdir = i0.ɵɵdefineDirective({ type: CeToolbarDirective, selectors: [["", "ceToolbar", ""]], exportAs: ["ceToolbar"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CeToolbarDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ceToolbar]',
                        exportAs: 'ceToolbar',
                    }]
            }], function () { return []; }, null);
    })();

    function ToolbarComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementContainerEnd();
        }
    }
    function ToolbarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-card", 2);
            i0.ɵɵelementStart(1, "div", 3);
            i0.ɵɵelementStart(2, "span", 4);
            i0.ɵɵtext(3, "Canvas Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 5);
            i0.ɵɵelementStart(5, "button", 6);
            i0.ɵɵpipe(6, "async");
            i0.ɵɵelement(7, "i", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 8);
            i0.ɵɵelement(9, "i", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 5);
            i0.ɵɵelementStart(11, "button", 10);
            i0.ɵɵlistener("click", function ToolbarComponent_ng_template_1_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.groupNodes(); });
            i0.ɵɵpipe(12, "async");
            i0.ɵɵelement(13, "i", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 10);
            i0.ɵɵlistener("click", function ToolbarComponent_ng_template_1_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.breakNode(); });
            i0.ɵɵpipe(15, "async");
            i0.ɵɵelement(16, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 5);
            i0.ɵɵelementStart(18, "button", 6);
            i0.ɵɵpipe(19, "async");
            i0.ɵɵelement(20, "i", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "button", 6);
            i0.ɵɵpipe(22, "async");
            i0.ɵɵelement(23, "i", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 6);
            i0.ɵɵpipe(25, "async");
            i0.ɵɵelement(26, "i", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "button", 6);
            i0.ɵɵpipe(28, "async");
            i0.ɵɵelement(29, "i", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "button", 6);
            i0.ɵɵpipe(31, "async");
            i0.ɵɵelement(32, "i", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "button", 6);
            i0.ɵɵpipe(34, "async");
            i0.ɵɵelement(35, "i", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "button", 6);
            i0.ɵɵpipe(37, "async");
            i0.ɵɵelement(38, "i", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "button", 6);
            i0.ɵɵpipe(40, "async");
            i0.ɵɵelement(41, "i", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 5);
            i0.ɵɵelementStart(43, "nz-tag", 21);
            i0.ɵɵlistener("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_43_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.store.togglePanelVisible("LAYERS"); });
            i0.ɵɵelement(44, "i", 22);
            i0.ɵɵelementStart(45, "span");
            i0.ɵɵtext(46, "\u56FE\u5C42");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "nz-tag", 21);
            i0.ɵɵlistener("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_47_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.store.togglePanelVisible("WIDGET_LIST"); });
            i0.ɵɵelement(48, "i", 23);
            i0.ɵɵelementStart(49, "span");
            i0.ɵɵtext(50, "\u7EC4\u4EF6");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "nz-tag", 21);
            i0.ɵɵlistener("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_51_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.store.togglePanelVisible("PROPERTIES"); });
            i0.ɵɵelement(52, "i", 24);
            i0.ɵɵelementStart(53, "span");
            i0.ɵɵtext(54, "\u5C5E\u6027");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "div", 5);
            i0.ɵɵelementStart(56, "button", 8);
            i0.ɵɵelement(57, "i", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            var tmp_11_0 = null;
            var tmp_12_0 = null;
            var tmp_13_0 = null;
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(6, 14, ctx_r2.copyStatus$));
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(12, 16, ctx_r2.groupStatus$));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", !i0.ɵɵpipeBind1(15, 18, ctx_r2.breakStatus$));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(19, 20, ctx_r2.groupStatus$));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(22, 22, ctx_r2.groupStatus$));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(25, 24, ctx_r2.groupStatus$));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(28, 26, ctx_r2.groupStatus$));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(31, 28, ctx_r2.groupStatus$));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(34, 30, ctx_r2.groupStatus$));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(37, 32, ctx_r2.groupStatus$));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(40, 34, ctx_r2.groupStatus$));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("nzChecked", (tmp_11_0 = ctx_r2.store.getPanel("LAYERS")) == null ? null : tmp_11_0.show);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("nzChecked", (tmp_12_0 = ctx_r2.store.getPanel("WIDGET_LIST")) == null ? null : tmp_12_0.show);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("nzChecked", (tmp_13_0 = ctx_r2.store.getPanel("PROPERTIES")) == null ? null : tmp_13_0.show);
        }
    }
    var _c0$3 = [[["", "ceToolbar", ""]]];
    var _c1$1 = ["[ceToolbar]"];
    var ToolbarComponent = /** @class */ (function () {
        function ToolbarComponent(store, utils) {
            var _this = this;
            this.store = store;
            this.utils = utils;
            this.store
                .selectDifferent(function (state) { return ({ selected: state.selected, nodes: state.nodes }); })
                .subscribe(function (_c) {
                var selected = _c.selected, nodes = _c.nodes;
                _this.selected = selected;
                _this.nodes = nodes;
            });
            this.selected$ = this.store.selectDifferent(function (state) { return state.selected; });
            this.groupStatus$ = this.selected$.pipe(operators.map(function (state) { return state.size <= 1; }));
            this.breakStatus$ = this.selected$.pipe(operators.map(function (state) { return (state.size === 1 ? __spread(state)[0] : false); }), operators.map(function (id) { var _a, _b; return id && !!((_b = (_a = _this.utils.getNodeById(id, _this.nodes)) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length); }));
        }
        Object.defineProperty(ToolbarComponent.prototype, "copyStatus$", {
            get: function () {
                return this.selected$.pipe(operators.map(function (state) { return state.size === 0; }));
            },
            enumerable: false,
            configurable: true
        });
        ToolbarComponent.prototype.groupNodes = function () {
            var ids = __spread(this.selected);
            this.store.dispatch(clearSelected());
            this.store.dispatch(clearBordered());
            this.store.dispatch(groupNodes(ids));
        };
        ToolbarComponent.prototype.breakNode = function () {
            var node = this.utils.getNodeById(__spread(this.selected)[0], this.nodes);
            this.store.dispatch(clearSelected());
            this.store.dispatch(clearBordered());
            this.store.dispatch(breakNode(node.id));
        };
        return ToolbarComponent;
    }());
    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(i0.ɵɵdirectiveInject(EditorStore), i0.ɵɵdirectiveInject(CeUtilsService)); };
    ToolbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarComponent, selectors: [["ce-toolbar"]], contentQueries: function ToolbarComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CeToolbarDirective, true);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ceToolbar = _t.first);
            }
        }, exportAs: ["ceToolbar"], ngContentSelectors: _c1$1, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["nzSize", "small", 1, "tool-bar"], [1, "d-flex", "align-items-center", "col", "p-0"], [1, "ml-2"], [1, "d-flex", "ml-auto", "align-items-center"], ["nz-button", "", "nzType", "link", 3, "disabled"], ["nz-icon", "", "nzIconfont", "icon-copy"], ["nz-button", "", "nzType", "link"], ["nz-icon", "", "nzIconfont", "icon-paste"], ["nz-button", "", "nzType", "link", 3, "disabled", "click"], ["nz-icon", "", "nzIconfont", "icon-group"], ["nz-icon", "", "nzIconfont", "icon-break"], ["nz-icon", "", "nzIconfont", "icon-horizontal-between"], ["nz-icon", "", "nzIconfont", "icon-horizontal-align"], ["nz-icon", "", "nzIconfont", "icon-vertical-between"], ["nz-icon", "", "nzIconfont", "icon-vertical-align"], ["nz-icon", "", "nzIconfont", "icon-left-align"], ["nz-icon", "", "nzIconfont", "icon-right-align"], ["nz-icon", "", "nzIconfont", "icon-top-align"], ["nz-icon", "", "nzIconfont", "icon-bottom-align"], ["nzMode", "checkable", 3, "nzChecked", "nzCheckedChange"], ["nz-icon", "", "nzIconfont", "icon-tuceng"], ["nz-icon", "", "nzIconfont", "icon-widgets"], ["nz-icon", "", "nzIconfont", "icon-widget"], ["nz-icon", "", "nzIconfont", "icon-run"]], template: function ToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c0$3);
                i0.ɵɵtemplate(0, ToolbarComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
                i0.ɵɵtemplate(1, ToolbarComponent_ng_template_1_Template, 58, 36, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(2);
                i0.ɵɵproperty("ngIf", ctx.ceToolbar)("ngIfElse", _r1);
            }
        }, directives: [i2.NgIf, i2$1.NzCardComponent, i5.NzButtonComponent, i6$1.ɵNzTransitionPatchDirective, i6.NzIconDirective, i8$2.NzTagComponent], pipes: [i2.AsyncPipe], styles: ["ce-toolbar{display:flex;flex:1;height:40px;max-height:40px;width:100%}ce-toolbar .tool-bar{flex:1}ce-toolbar .tool-bar [nz-icon]{font-size:18px}ce-toolbar .tool-bar nz-tag{margin:auto .2rem;padding:auto 2px}ce-toolbar .tool-bar nz-tag [nz-icon]{font-size:13px}ce-toolbar .tool-bar .ant-card-body{display:flex;height:100%;padding:2px 5px}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ToolbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-toolbar',
                        exportAs: 'ceToolbar',
                        templateUrl: 'toolbar.component.html',
                        styleUrls: ['toolbar.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: EditorStore }, { type: CeUtilsService }]; }, { ceToolbar: [{
                    type: i0.ContentChild,
                    args: [CeToolbarDirective]
                }] });
    })();

    var WidgetListComponent = /** @class */ (function () {
        function WidgetListComponent() {
        }
        WidgetListComponent.prototype.ngOnInit = function () { };
        return WidgetListComponent;
    }());
    WidgetListComponent.ɵfac = function WidgetListComponent_Factory(t) { return new (t || WidgetListComponent)(); };
    WidgetListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WidgetListComponent, selectors: [["ce-widget-list"]], decls: 2, vars: 0, template: function WidgetListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "widget-list works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(WidgetListComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-widget-list',
                        templateUrl: 'widget-list.component.html',
                        styleUrls: ['widget-list.component.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () { return []; }, null);
    })();

    var _c0$4 = ["container"];
    function AngularEditorLibComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 14);
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("left", ctx_r2.selectorRect.x, "px")("top", ctx_r2.selectorRect.y, "px")("width", ctx_r2.selectorRect.width, "px")("height", ctx_r2.selectorRect.height, "px");
        }
    }
    function AngularEditorLibComponent_ng_container_33_ce_panel_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "ce-panel", 16);
        }
        if (rf & 2) {
            var panel_r4 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("panel", panel_r4);
        }
    }
    function AngularEditorLibComponent_ng_container_33_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, AngularEditorLibComponent_ng_container_33_ce_panel_1_Template, 1, 1, "ce-panel", 15);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var panel_r4 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", panel_r4.show);
        }
    }
    var _c1$2 = [[["", "toolbar", ""]]];
    var _c2$1 = ["[toolbar]"];
    var AngularEditorLibComponent = /** @class */ (function () {
        function AngularEditorLibComponent(store) {
            var _this = this;
            this.store = store;
            this.subscription = new rxjs.Subscription();
            this.startPoints = [];
            this.selectorRect = null;
            this.nodesRectSnapshot = null;
            this.nodeIdList = null;
            this.store
                .select(function (state) { return state.canvasPosition; })
                .subscribe(function (canvasPosition) {
                _this.canvasPosition = canvasPosition;
                _this.matrix = "translate3d(" + _this.canvasPosition.left + "px," + _this.canvasPosition.top + "px,0)";
            });
            this.store.select(function (state) { return state.nodes; }).subscribe(function (nodes) { return (_this.nodes = nodes); });
            this.refLineState$ = this.store.selectDifferent(function (state) { return state.refLineState; });
        }
        Object.defineProperty(AngularEditorLibComponent.prototype, "state", {
            set: function (state) {
                var _a;
                (_a = this.store) === null || _a === void 0 ? void 0 : _a.setState(function (oldState) { return (Object.assign(Object.assign({}, oldState), state)); });
            },
            enumerable: false,
            configurable: true
        });
        AngularEditorLibComponent.prototype.ngAfterViewInit = function () {
            this.listenScaleEvent();
        };
        AngularEditorLibComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        AngularEditorLibComponent.prototype.panelsTrackByFn = function (_i, panel) {
            return panel.key + "_" + panel.show.toString();
        };
        AngularEditorLibComponent.prototype.dragStart = function (ev) {
            this.startPoints = [ev.clientX, ev.clientY, this.canvasPosition.left, this.canvasPosition.top];
        };
        AngularEditorLibComponent.prototype.dragging = function (ev) {
            if (this.startPoints) {
                var _b = __read(this.startPoints, 4), sx = _b[0], sy = _b[1], left = _b[2], top = _b[3];
                var _c = __read([ev.clientX - sx, ev.clientY - sy], 2), mx = _c[0], my = _c[1];
                this.store.dispatch(updateCanvasPosition({ left: left + mx, top: top + my }));
            }
        };
        AngularEditorLibComponent.prototype.dragEnd = function () {
            this.startPoints = null;
        };
        AngularEditorLibComponent.prototype.listenScaleEvent = function () {
            var _this = this;
            var scaleEle = this.containerEleRef.nativeElement;
            this.subscription.add(rxjs.fromEvent(scaleEle, 'wheel')
                .pipe(operators.filter(function (e) { return e.ctrlKey; }))
                .subscribe(function (e) {
                e.preventDefault();
                e.stopPropagation();
                var containerBox = scaleEle.getBoundingClientRect();
                var wheelDelta = (e.wheelDelta / 120 || -e.deltaY / 3) * 0.05;
                var _b = __read([e.clientX - containerBox.left, e.clientY - containerBox.top], 2), x = _b[0], y = _b[1];
                if (_this.canvasPosition.scale + wheelDelta >= 0.2) {
                    _this.store.dispatch(updateCanvasPosition({
                        scale: _this.canvasPosition.scale + wheelDelta,
                        left: (_this.canvasPosition.left - x) * (wheelDelta / _this.canvasPosition.scale) + _this.canvasPosition.left,
                        top: (_this.canvasPosition.top - y) * (wheelDelta / _this.canvasPosition.scale) + _this.canvasPosition.top,
                    }));
                }
            }));
        };
        AngularEditorLibComponent.prototype.selectorStart = function () {
            var _this = this;
            this.clearSelectAndBorder();
            var boxRect = this.containerEleRef.nativeElement.getBoundingClientRect();
            this.nodesRectSnapshot = new Map();
            this.nodes
                .filter(function (node) { return !node.locked; })
                .forEach(function (node) {
                var _a;
                var rect = (_a = document.querySelector("#box-item-" + node.id)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                if (rect) {
                    var width = rect.width, height = rect.height, left = rect.left, top = rect.top;
                    _this.nodesRectSnapshot.set(node.id, { width: width, height: height, left: left - boxRect.left, top: top - boxRect.top });
                }
            });
        };
        AngularEditorLibComponent.prototype.selectorMoving = function (rect) {
            var _this = this;
            this.selectorRect = rect;
            this.nodeIdList = [];
            this.nodesRectSnapshot.forEach(function (item, id) {
                if (isInBound(item, _this.selectorRect)) {
                    _this.nodeIdList.push(id);
                }
            });
            this.store.dispatch(setBorderedNodes(this.nodeIdList));
            this.store.dispatch(setSelectedNodes(this.nodeIdList));
        };
        AngularEditorLibComponent.prototype.selectorEnd = function () {
            this.nodeIdList = [];
            this.selectorRect = null;
            this.nodesRectSnapshot = null;
        };
        AngularEditorLibComponent.prototype.clearSelectAndBorder = function () {
            this.store.dispatch(clearBordered());
            this.store.dispatch(clearSelected());
        };
        return AngularEditorLibComponent;
    }());
    AngularEditorLibComponent.ɵfac = function AngularEditorLibComponent_Factory(t) { return new (t || AngularEditorLibComponent)(i0.ɵɵdirectiveInject(EditorStore)); };
    AngularEditorLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AngularEditorLibComponent, selectors: [["ce-editor"]], viewQuery: function AngularEditorLibComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0$4, true, i0.ElementRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containerEleRef = _t.first);
            }
        }, inputs: { state: "state" }, exportAs: ["ceEditor"], features: [i0.ɵɵProvidersFeature([EditorStore])], ngContentSelectors: _c2$1, decls: 35, vars: 60, consts: [[1, "col", "p-0", "d-flex"], ["ceDraggable", "", "ceUseSpace", "", "ceSelector", "", 1, "canvas-container", 3, "ceSelectorDisabled", "ceOnStart", "ceOnMove", "ceOnStop", "ceOnSelectorStart", "ceOnSelectorMoving", "ceOnSelectorStop"], ["ceDrag", "ceDraggable", "container", ""], [1, "canvas-content"], ["ceNoZoomArea", ""], ["ceZoomArea", ""], ["cx", "", 1, "ref-line", "y"], ["cy", "", 1, "ref-line", "x"], ["tx", "", 1, "ref-line", "y"], ["bx", "", 1, "ref-line", "y"], ["ly", "", 1, "ref-line", "x"], ["ry", "", 1, "ref-line", "x"], ["class", "selector", 3, "left", "top", "width", "height", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "selector"], [3, "panel", 4, "ngIf"], [3, "panel"]], template: function AngularEditorLibComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c1$2);
                i0.ɵɵprojection(0);
                i0.ɵɵelementStart(1, "div", 0);
                i0.ɵɵelementStart(2, "div", 1, 2);
                i0.ɵɵlistener("ceOnStart", function AngularEditorLibComponent_Template_div_ceOnStart_2_listener($event) { return ctx.dragStart($event); })("ceOnMove", function AngularEditorLibComponent_Template_div_ceOnMove_2_listener($event) { return ctx.dragging($event); })("ceOnStop", function AngularEditorLibComponent_Template_div_ceOnStop_2_listener() { return ctx.dragEnd(); })("ceOnSelectorStart", function AngularEditorLibComponent_Template_div_ceOnSelectorStart_2_listener() { return ctx.selectorStart(); })("ceOnSelectorMoving", function AngularEditorLibComponent_Template_div_ceOnSelectorMoving_2_listener($event) { return ctx.selectorMoving($event); })("ceOnSelectorStop", function AngularEditorLibComponent_Template_div_ceOnSelectorStop_2_listener() { return ctx.selectorEnd(); });
                i0.ɵɵelementStart(5, "div", 3);
                i0.ɵɵelementStart(6, "div", 4);
                i0.ɵɵelement(7, "ce-canvas-background");
                i0.ɵɵelement(8, "ce-canvas-grid");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 5);
                i0.ɵɵelement(10, "ce-canvas");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "div", 4);
                i0.ɵɵelement(12, "ce-bordered-area");
                i0.ɵɵelement(13, "ce-resize-handle");
                i0.ɵɵelement(14, "div", 6);
                i0.ɵɵpipe(15, "async");
                i0.ɵɵpipe(16, "async");
                i0.ɵɵelement(17, "div", 7);
                i0.ɵɵpipe(18, "async");
                i0.ɵɵpipe(19, "async");
                i0.ɵɵelement(20, "div", 8);
                i0.ɵɵpipe(21, "async");
                i0.ɵɵpipe(22, "async");
                i0.ɵɵelement(23, "div", 9);
                i0.ɵɵpipe(24, "async");
                i0.ɵɵpipe(25, "async");
                i0.ɵɵelement(26, "div", 10);
                i0.ɵɵpipe(27, "async");
                i0.ɵɵpipe(28, "async");
                i0.ɵɵelement(29, "div", 11);
                i0.ɵɵpipe(30, "async");
                i0.ɵɵpipe(31, "async");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(32, AngularEditorLibComponent_div_32_Template, 1, 8, "div", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(33, AngularEditorLibComponent_ng_container_33_Template, 2, 1, "ng-container", 13);
                i0.ɵɵpipe(34, "async");
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(3);
                var tmp_4_0 = null;
                var tmp_5_0 = null;
                var tmp_6_0 = null;
                var tmp_7_0 = null;
                var tmp_8_0 = null;
                var tmp_9_0 = null;
                var tmp_10_0 = null;
                var tmp_11_0 = null;
                var tmp_12_0 = null;
                var tmp_13_0 = null;
                var tmp_14_0 = null;
                var tmp_15_0 = null;
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("start-drag", _r0.spaceKeyDown)("dragging", ctx.startPoints);
                i0.ɵɵproperty("ceSelectorDisabled", _r0.spaceKeyDown);
                i0.ɵɵadvance(3);
                i0.ɵɵstyleProp("transform", ctx.matrix);
                i0.ɵɵadvance(9);
                i0.ɵɵstyleProp("top", ((tmp_4_0 = i0.ɵɵpipeBind1(15, 34, ctx.refLineState$)) == null ? null : tmp_4_0.cx == null ? null : tmp_4_0.cx.position) * ctx.canvasPosition.scale, "px");
                i0.ɵɵclassProp("active", (tmp_5_0 = i0.ɵɵpipeBind1(16, 36, ctx.refLineState$)) == null ? null : tmp_5_0.cx == null ? null : tmp_5_0.cx.state);
                i0.ɵɵadvance(3);
                i0.ɵɵstyleProp("left", ((tmp_6_0 = i0.ɵɵpipeBind1(18, 38, ctx.refLineState$)) == null ? null : tmp_6_0.cy == null ? null : tmp_6_0.cy.position) * ctx.canvasPosition.scale, "px");
                i0.ɵɵclassProp("active", (tmp_7_0 = i0.ɵɵpipeBind1(19, 40, ctx.refLineState$)) == null ? null : tmp_7_0.cy == null ? null : tmp_7_0.cy.state);
                i0.ɵɵadvance(3);
                i0.ɵɵstyleProp("top", ((tmp_8_0 = i0.ɵɵpipeBind1(21, 42, ctx.refLineState$)) == null ? null : tmp_8_0.tx == null ? null : tmp_8_0.tx.position) * ctx.canvasPosition.scale, "px");
                i0.ɵɵclassProp("active", (tmp_9_0 = i0.ɵɵpipeBind1(22, 44, ctx.refLineState$)) == null ? null : tmp_9_0.tx == null ? null : tmp_9_0.tx.state);
                i0.ɵɵadvance(3);
                i0.ɵɵstyleProp("top", ((tmp_10_0 = i0.ɵɵpipeBind1(24, 46, ctx.refLineState$)) == null ? null : tmp_10_0.bx == null ? null : tmp_10_0.bx.position) * ctx.canvasPosition.scale, "px");
                i0.ɵɵclassProp("active", (tmp_11_0 = i0.ɵɵpipeBind1(25, 48, ctx.refLineState$)) == null ? null : tmp_11_0.bx == null ? null : tmp_11_0.bx.state);
                i0.ɵɵadvance(3);
                i0.ɵɵstyleProp("left", ((tmp_12_0 = i0.ɵɵpipeBind1(27, 50, ctx.refLineState$)) == null ? null : tmp_12_0.ly == null ? null : tmp_12_0.ly.position) * ctx.canvasPosition.scale, "px");
                i0.ɵɵclassProp("active", (tmp_13_0 = i0.ɵɵpipeBind1(28, 52, ctx.refLineState$)) == null ? null : tmp_13_0.ly == null ? null : tmp_13_0.ly.state);
                i0.ɵɵadvance(3);
                i0.ɵɵstyleProp("left", ((tmp_14_0 = i0.ɵɵpipeBind1(30, 54, ctx.refLineState$)) == null ? null : tmp_14_0.ry == null ? null : tmp_14_0.ry.position) * ctx.canvasPosition.scale, "px");
                i0.ɵɵclassProp("active", (tmp_15_0 = i0.ɵɵpipeBind1(31, 56, ctx.refLineState$)) == null ? null : tmp_15_0.ry == null ? null : tmp_15_0.ry.state);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.selectorRect);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(34, 58, ctx.store.panels$))("ngForTrackBy", ctx.panelsTrackByFn);
            }
        }, directives: [DraggableDirective, SelectorDirective, NoZoomAreaDirective, CanvasBackgroundComponent, CanvasGridComponent, ZoomAreaDirective, CanvasComponent, BorderedAreaComponent, ResizeHandleComponent, i2.NgIf, i2.NgForOf, PanelComponent], pipes: [i2.AsyncPipe], styles: ["@import \"styles/bootstrap.css\";[nz-button]~[nz-button],[nz-icon]~[nz-icon]{margin-left:.5rem}.svg-icon{width:80px}.svg-icon>*{fill:currentColor}[ceNoZoomArea]{display:block;pointer-events:none}[ceNoZoomArea],[ceZoomArea]{position:absolute}.ant-tree .ant-tree-treenode{align-items:center}ce-editor{bottom:0;display:flex;flex-direction:column;height:100vh;left:0;overflow:hidden;position:absolute;right:0;top:0;width:100vw}ce-editor .left-side{width:300px}ce-editor .canvas-container{background-color:#f0f0f0;flex:1;overflow:hidden;position:relative}ce-editor .canvas-container.start-drag{cursor:grab}ce-editor .canvas-container.start-drag>*{pointer-events:none}ce-editor .canvas-container.start-drag.dragging{cursor:grabbing}ce-editor .canvas-container .canvas-content{position:absolute}ce-editor .canvas-container .selector{background-color:rgba(24,144,255,.3);border:1px solid #1890ff;box-sizing:border-box;position:absolute}ce-editor .canvas-container .ref-line{background-color:#fa8c16;display:none;opacity:.8;position:absolute;z-index:999999999999}ce-editor .canvas-container .ref-line.active{display:inline-block}ce-editor .canvas-container .ref-line.x{bottom:0;height:100%;top:0;width:1px}ce-editor .canvas-container .ref-line.y{height:1px;left:0;right:0;width:100%}ce-editor .aside{border:solid #f0f0f0;border-width:0 1px 0 0;display:flex}ce-editor .aside ul{list-style:none;margin:0;padding:0}ce-editor .aside ul li{align-items:center;border-bottom:1px solid #f0f0f0;display:flex;justify-content:center;margin:0;padding:3px 0;width:100%}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AngularEditorLibComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ce-editor',
                        templateUrl: 'angular-editor-lib.component.html',
                        styleUrls: ['angular-editor-lib.less'],
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [EditorStore],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        exportAs: 'ceEditor',
                    }]
            }], function () { return [{ type: EditorStore }]; }, { state: [{
                    type: i0.Input
                }], containerEleRef: [{
                    type: i0.ViewChild,
                    args: ['container', { read: i0.ElementRef, static: true }]
                }] });
    })();
    function isInBound(rect, bound) {
        return (rect.left >= bound.x && rect.top >= bound.y && rect.left + rect.width <= bound.x + bound.width && rect.top + rect.height <= bound.y + bound.height);
    }

    var antDesignIcons = AllIcons__namespace;
    var ICONS = Object.keys(antDesignIcons).map(function (key) { return antDesignIcons[key]; });
    var ANTD_MODULES = [
        i2$1.NzCardModule,
        i6.NzIconModule.forRoot(ICONS),
        i5.NzButtonModule,
        i7.NzInputNumberModule,
        tabs.NzTabsModule,
        i4.NzTreeModule,
        i3$1.NzDropDownModule,
        i3.NzPipesModule,
        tooltip.NzToolTipModule,
        i3$3.NzFormModule,
        i8$1.NzInputModule,
        i8$2.NzTagModule,
        divider.NzDividerModule,
        i3$4.NzCollapseModule,
        i9.NzSwitchModule,
        i10.NzSelectModule,
    ];
    var CDK_MODULES = [i3$2.DragDropModule];
    var FORMS_COMPONENT = [CanvasFormsComponent, WidgetFormComponent];
    var COMPONENTS = [
        ToolbarComponent,
        LayerTreeComponent,
        WidgetListComponent,
        CanvasComponent,
        CanvasGridComponent,
        CanvasBackgroundComponent,
        BoxItemComponent,
        ResizeHandleComponent,
        RotateHandleComponent,
        BorderedAreaComponent,
        AngularEditorLibComponent,
        PanelComponent,
        PropertyFormComponent,
    ];
    var DIRECTIVES = [NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective, CeToolbarDirective];
    var AngularEditorLibModule = /** @class */ (function () {
        function AngularEditorLibModule(injector) {
            this.injector = injector;
            this.injector.get(i6.NzIconService).fetchFromIconfont({ scriptUrl: 'https://at.alicdn.com/t/font_1310204_lmnttxhl5lk.js' });
        }
        return AngularEditorLibModule;
    }());
    AngularEditorLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: AngularEditorLibModule });
    AngularEditorLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AngularEditorLibModule_Factory(t) { return new (t || AngularEditorLibModule)(i0.ɵɵinject(i0.Injector)); }, imports: [__spread([i2.CommonModule, animations.BrowserAnimationsModule, http.HttpClientModule, i1.FormsModule, i1.ReactiveFormsModule], ANTD_MODULES, CDK_MODULES)] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularEditorLibModule, { declarations: [ToolbarComponent,
                LayerTreeComponent,
                WidgetListComponent,
                CanvasComponent,
                CanvasGridComponent,
                CanvasBackgroundComponent,
                BoxItemComponent,
                ResizeHandleComponent,
                RotateHandleComponent,
                BorderedAreaComponent,
                AngularEditorLibComponent,
                PanelComponent,
                PropertyFormComponent, NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective, CeToolbarDirective, CanvasFormsComponent, WidgetFormComponent], imports: [i2.CommonModule, animations.BrowserAnimationsModule, http.HttpClientModule, i1.FormsModule, i1.ReactiveFormsModule, i2$1.NzCardModule, i6.NzIconModule, i5.NzButtonModule,
                i7.NzInputNumberModule,
                tabs.NzTabsModule,
                i4.NzTreeModule,
                i3$1.NzDropDownModule,
                i3.NzPipesModule,
                tooltip.NzToolTipModule,
                i3$3.NzFormModule,
                i8$1.NzInputModule,
                i8$2.NzTagModule,
                divider.NzDividerModule,
                i3$4.NzCollapseModule,
                i9.NzSwitchModule,
                i10.NzSelectModule, i3$2.DragDropModule], exports: [ToolbarComponent,
                LayerTreeComponent,
                WidgetListComponent,
                CanvasComponent,
                CanvasGridComponent,
                CanvasBackgroundComponent,
                BoxItemComponent,
                ResizeHandleComponent,
                RotateHandleComponent,
                BorderedAreaComponent,
                AngularEditorLibComponent,
                PanelComponent,
                PropertyFormComponent, NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective, CeToolbarDirective] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AngularEditorLibModule, [{
                type: i0.NgModule,
                args: [{
                        imports: __spread([i2.CommonModule, animations.BrowserAnimationsModule, http.HttpClientModule, i1.FormsModule, i1.ReactiveFormsModule], ANTD_MODULES, CDK_MODULES),
                        declarations: __spread(COMPONENTS, DIRECTIVES, FORMS_COMPONENT),
                        exports: __spread(COMPONENTS, DIRECTIVES),
                    }]
            }], function () { return [{ type: i0.Injector }]; }, null);
    })();
    i0.ɵɵsetComponentScope(ResizeHandleComponent, [i2.NgIf, RotateHandleComponent, DraggableDirective], [i2.AsyncPipe]);

    /*
     * Public API Surface of angular-editor-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AngularEditorLibComponent = AngularEditorLibComponent;
    exports.AngularEditorLibModule = AngularEditorLibModule;
    exports.BorderedAreaComponent = BorderedAreaComponent;
    exports.BoxItemComponent = BoxItemComponent;
    exports.CanvasBackgroundComponent = CanvasBackgroundComponent;
    exports.CanvasComponent = CanvasComponent;
    exports.CanvasGridComponent = CanvasGridComponent;
    exports.CeToolbarDirective = CeToolbarDirective;
    exports.CeUtilsService = CeUtilsService;
    exports.DEFAULT_STORE = DEFAULT_STORE;
    exports.DraggableDirective = DraggableDirective;
    exports.EditorStore = EditorStore;
    exports.LayerTreeComponent = LayerTreeComponent;
    exports.NoZoomAreaDirective = NoZoomAreaDirective;
    exports.PanelComponent = PanelComponent;
    exports.PropertyFormComponent = PropertyFormComponent;
    exports.ResizeHandleComponent = ResizeHandleComponent;
    exports.RotateHandleComponent = RotateHandleComponent;
    exports.SelectorDirective = SelectorDirective;
    exports.ToolbarComponent = ToolbarComponent;
    exports.WidgetListComponent = WidgetListComponent;
    exports.ZoomAreaDirective = ZoomAreaDirective;
    exports.genNodeId = genNodeId;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-editor-lib.umd.js.map
