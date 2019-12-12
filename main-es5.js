var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"slider-box\">\n    <mat-slide-toggle (change)=\"toggle($event)\" [checked]=\"isImperial\">\n        <span *ngIf=!isImperial>°C</span>\n        <span *ngIf=isImperial>°F</span>\n    </mat-slide-toggle>\n</div>\n\n\n<div class=\"container\" *ngIf=\"favoritedCitiesForecasts\">\n    <mat-card class=\"card\" fxFlexAlign=\"center\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\"\n        *ngFor=\"let currentForecast of favoritedCitiesForecasts; let i = index\">\n\n        <mat-card-title>\n            {{favoritedCities[i].LocalizedName}}\n        </mat-card-title>\n\n        <mat-card-content fxFlexAlign=\"center\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\" *ngIf=!isImperial\n            class=\"temp-text-fav\">\n            <img src=\"https://tamirbalva.github.io/tamir-bar-12-12-2019.github.io/assets/AccuWeatherImages/{{currentForecast.WeatherIcon}}.png\">\n            {{currentForecast.Temperature.Metric.Value}}°C\n        </mat-card-content>\n\n        <mat-card-content fxFlexAlign=\"center\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\" *ngIf=isImperial\n            class=\"temp-text-fav\">\n            <img class=\"weather-icon\" src=\"https://tamirbalva.github.io/tamir-bar-12-12-2019.github.io/assets/AccuWeatherImages/{{currentForecast.WeatherIcon}}.png\">\n            {{currentForecast.Temperature.Imperial.Value | number:'1.0-2'}}°F\n        </mat-card-content>\n\n        <mat-card-title class=\"subtitle-text\">\n            {{currentForecast.WeatherText}}\n        </mat-card-title>\n        <mat-card-actions fxFlexAlign=\"center\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <button mat-icon-button (click)=\"toggeleFavorite(favoritedCities[i])\">\n                <svg-icon src=\"https://tamirbalva.github.io/tamir-bar-12-12-2019.github.io/assets/heart.svg\"\n                    [svgStyle]=\"{'width.rem':2,'padding.px':1,'margin.px':3 , 'height.rem': 2}\"\n                    [style.fill]=\"color ? 'red' : 'grey'\">\n                </svg-icon>\n            </button>\n            <a routerLink=\"/home\"><button (click)=goToHome(i) mat-stroked-button>Home</button></a>\n        </mat-card-actions>\n    </mat-card>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div>\n        <svg-icon class=\"logo-icon\" src=\"https://tamirbalva.github.io/tamir-bar-12-12-2019.github.io/assets/cloud.svg\"\n            [svgStyle]=\"{'width.rem':6,'padding.px':1,'margin.px':3 , 'height.rem':6}\">\n        </svg-icon>\n    </div>\n\n    <form action=\"#\" class=\"nav\">\n        <button mat-button (click)=\"toggleTheme()\">\n            <svg-icon  src=\"https://tamirbalva.github.io/tamir-bar-12-12-2019.github.io/assets/{{vision}}.svg\"\n                [svgStyle]=\"{'width.rem':4,'padding.px':1,'margin.px':3 , 'height.rem': 4}\">\n            </svg-icon>\n        </button>\n        <a routerLink=\"/home\">\n            <button mat-button>\n                <svg-icon  src=\"https://tamirbalva.github.io/tamir-bar-12-12-2019.github.io/assets/home.svg\"\n                    [svgStyle]=\"{'width.rem':4,'padding.px':1,'margin.px':3 , 'height.rem': 4}\">\n                </svg-icon>\n            </button>\n        </a>\n        <a routerLink=\"/favorites\">\n            <button mat-button>\n                <svg-icon src=\"https://tamirbalva.github.io/tamir-bar-12-12-2019.github.io/assets/star.svg\"\n                    [svgStyle]=\"{'width.rem':4,'padding.px':1,'margin.px':3 , 'height.rem': 4}\">\n                </svg-icon>\n            </button>\n        </a>\n    </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n    <app-header></app-header>\n</header>\n\n<div class=\"forecast-box\">\n    <router-outlet></router-outlet>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-forecast/weather-forecast.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-forecast/weather-forecast.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-head\">\n    <div class=\"city-cur-temp\">\n        <span>{{headerCity}}</span>\n        <span *ngIf=!isImperial>{{headerTemp}}°C</span>\n        <span *ngIf=isImperial>{{(headerTemp * 9/5)+32 | number:'1.0-2'}}°F</span>\n    </div>\n   \n    <div class=\"toggles\">\n        <mat-slide-toggle class=\"slider\" (change)=\"toggle($event)\" [checked]=\"isImperial\">\n            <span *ngIf=!isImperial>°C</span>\n            <span *ngIf=isImperial>°F</span>\n        </mat-slide-toggle>\n        <button mat-icon-button (click)=\"toggeleFavorite()\">\n            <svg-icon src=\"https://tamirbalva.github.io/tamir-bar-12-12-2019.github.io/assets/heart.svg\"\n                [svgStyle]=\"{'width.rem':2,'padding.px':1,'margin.px':3 , 'height.rem': 2}\"\n                [style.fill]=\"color ? 'red' : 'grey'\">\n            </svg-icon>\n        </button>\n    </div>\n</div>\n<form class=\"search container-head\">\n        <button (click)=\"findLocation()\" mat-raised-button color=\"primary\">FIND ME</button>\n        <input matInput class=\"search-input autoComplete\" placeholder=\"Search city\"\n            [formControl]=\"cityForm\" [matAutocomplete]=\"auto\" (ngModelChange)=\"autoComplete($event)\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let city of cities\" (click)=\"onOptionSelected(city)\" [value]=\"city.LocalizedName\">\n                {{city.LocalizedName}}, {{city.Country.LocalizedName}}, {{city.Country.ID}}\n            </mat-option>\n        </mat-autocomplete>\n\n        <button (click)=onSearchInvoke() class=\"search-button\">\n            <svg-icon class=\"search-icon \" src=\"https://tamirbalva.github.io/tamir-bar-12-12-2019.github.io/assets\\search_fill.svg\"\n                [svgStyle]=\"{'width.rem':1.5,'padding.px':1,'margin.px':3 , 'height.rem': 1.5}\">\n            </svg-icon>\n        </button>\n    </form>\n\n<div class=\"container\">\n    <mat-card class=\"card\" fxFlexAlign=\"stretch\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\"\n        *ngFor=\"let forecast of forecastCards; let i = index\">\n        <mat-card-title>\n            {{forecast.Date | date : 'EEEE'}}\n        </mat-card-title>\n        <mat-card-subtitle class=\"subtitle-text\">\n            {{forecast.Day.IconPhrase}}\n        </mat-card-subtitle>\n\n        <img src=\"https://tamirbalva.github.io/tamir-bar-12-12-2019.github.io/assets/AccuWeatherImages/{{forecast.Day.Icon}}.png\">\n\n        <mat-divider [inset]=\"true\"></mat-divider>\n\n        <mat-card-content *ngIf=!isImperial class=\"temp-text-1\">\n            {{forecast.Temperature.Maximum.Value}}°C\n        </mat-card-content>\n        <mat-card-content *ngIf=!isImperial class=\"temp-text-2\">\n            {{forecast.Temperature.Minimum.Value}}°C\n        </mat-card-content>\n\n        <mat-card-content *ngIf=isImperial class=\"temp-text-1\">\n            {{(forecast.Temperature.Maximum.Value * 9/5) +32 | number:'1.0-2'}}°F\n        </mat-card-content>\n        <mat-card-content *ngIf=isImperial class=\"temp-text-2\">\n            {{(forecast.Temperature.Minimum.Value * 9/5) +32 | number:'1.0-2'}}°F\n        </mat-card-content>\n\n\n    </mat-card>\n\n\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
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
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
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
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/actions/favorite.actions.ts": 
        /*!*********************************************!*\
          !*** ./src/app/actions/favorite.actions.ts ***!
          \*********************************************/
        /*! exports provided: ADD_FAVORITE, REMOVE_FAVORITE, AddFavorite, RemoveFavorite */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FAVORITE", function () { return ADD_FAVORITE; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FAVORITE", function () { return REMOVE_FAVORITE; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFavorite", function () { return AddFavorite; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFavorite", function () { return RemoveFavorite; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _models_city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/city */ "./src/app/models/city.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ADD_FAVORITE = '[FAVORITE] Add';
            var REMOVE_FAVORITE = '[FAVORITE] Remove';
            var AddFavorite = /** @class */ (function () {
                function AddFavorite(payload) {
                    this.payload = payload;
                    this.type = ADD_FAVORITE;
                }
                return AddFavorite;
            }());
            AddFavorite.ctorParameters = function () { return [
                { type: _models_city__WEBPACK_IMPORTED_MODULE_1__["City"] }
            ]; };
            AddFavorite = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
                    providedIn: 'root'
                })
            ], AddFavorite);
            var RemoveFavorite = /** @class */ (function () {
                function RemoveFavorite(payload) {
                    this.payload = payload;
                    this.type = REMOVE_FAVORITE;
                }
                return RemoveFavorite;
            }());
            RemoveFavorite.ctorParameters = function () { return [
                { type: _models_city__WEBPACK_IMPORTED_MODULE_1__["City"] }
            ]; };
            RemoveFavorite = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
                    providedIn: 'root'
                })
            ], RemoveFavorite);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/weather-forecast/weather-forecast.component */ "./src/app/components/weather-forecast/weather-forecast.component.ts");
            /* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
            var routes = [
                { path: "home", component: _components_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_3__["WeatherForecastComponent"] },
                { path: "favorites", component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"] },
                { path: "", redirectTo: "home", pathMatch: "full" },
                { path: "**", component: _components_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_3__["WeatherForecastComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/fesm2015/angular-svg-icon.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
            /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _components_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/weather-forecast/weather-forecast.component */ "./src/app/components/weather-forecast/weather-forecast.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _reducers_favorite_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reducers/favorite.reducer */ "./src/app/reducers/favorite.reducer.ts");
            /* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _components_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_16__["WeatherForecastComponent"],
                        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_18__["LayoutComponent"],
                        _components_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                        _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_22__["FavoritesComponent"]
                    ],
                    imports: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                        angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__["AngularSvgIconModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_20__["StoreModule"].forRoot({
                            city: _reducers_favorite_reducer__WEBPACK_IMPORTED_MODULE_21__["favoritesReducer"]
                        }),
                    ],
                    providers: [],
                    bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_18__["LayoutComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/favorites/favorites.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/favorites/favorites.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container{\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  padding-top: 5rem;\r\n}\r\n\r\n.card{\r\n  width: 16rem;\r\n  height: 20rem;\r\n  background-color: var(--background-mat-card);\r\n  color: var(--text-primary);\r\n}\r\n\r\n.temp-text-fav{\r\n  line-height: 1.8;\r\n  font-family: sans-serif;\r\n  font-style: oblique;\r\n  font-size: 2rem;\r\n}\r\n\r\n.mat-stroked-button{\r\n  color:var(--primary-default);\r\n}\r\n\r\n.slider-box{\r\n  padding-top: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\r\n  background-color: var(--slider-thumb); \r\n}\r\n\r\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\r\nbackground-color: var(--slider-bar);  \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBwYWRkaW5nLXRvcDogNXJlbTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgd2lkdGg6IDE2cmVtO1xyXG4gIGhlaWdodDogMjByZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYXQtY2FyZCk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50ZW1wLXRleHQtZmF2e1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5tYXQtc3Ryb2tlZC1idXR0b257XHJcbiAgY29sb3I6dmFyKC0tcHJpbWFyeS1kZWZhdWx0KTtcclxufVxyXG4uc2xpZGVyLWJveHtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xpZGVyLXRodW1iKTsgXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xpZGVyLWJhcik7ICBcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/favorites/favorites.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/favorites/favorites.component.ts ***!
          \*************************************************************/
        /*! exports provided: FavoritesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () { return FavoritesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_city__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/city */ "./src/app/models/city.ts");
            /* harmony import */ var src_app_services_forecast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/forecast.service */ "./src/app/services/forecast.service.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_actions_favorite_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/actions/favorite.actions */ "./src/app/actions/favorite.actions.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var FavoritesComponent = /** @class */ (function () {
                function FavoritesComponent(forecastForFavorite, store, router, snack) {
                    this.forecastForFavorite = forecastForFavorite;
                    this.store = store;
                    this.router = router;
                    this.snack = snack;
                    this.temp = new src_app_models_city__WEBPACK_IMPORTED_MODULE_2__["City"]();
                    this.favoritedCities = [];
                    this.favoritedCitiesForecasts = [];
                    this.color = true;
                    this.isImperial = false;
                }
                FavoritesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    for (var i = 0, len = localStorage.length; i < len; ++i) {
                        this.temp = new src_app_models_city__WEBPACK_IMPORTED_MODULE_2__["City"]();
                        this.temp.Key = (+localStorage.key(i)).toString();
                        this.temp.LocalizedName = localStorage.getItem(localStorage.key(i));
                        this.favoritedCities.push(this.temp);
                        this.forecastForFavorite.getCurrentForecast(this.temp.Key).subscribe(function (res) {
                            _this.favoritedCitiesForecasts.push(res[0]);
                        }, function (err) {
                            _this.callSnackBar(err.message);
                        });
                    }
                };
                FavoritesComponent.prototype.toggle = function (event) {
                    this.isImperial = event.checked;
                };
                FavoritesComponent.prototype.toggeleFavorite = function (city) {
                    var _this = this;
                    if (localStorage.getItem(city.Key) !== null) {
                        if (confirm("Remove " + city.LocalizedName + " from favorites?")) {
                            this.store.dispatch(new src_app_actions_favorite_actions__WEBPACK_IMPORTED_MODULE_6__["RemoveFavorite"](city));
                            this.callSnackBar(city.LocalizedName + " has been removed from favorites.");
                            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(function () {
                                _this.router.navigate(['favorites']);
                            });
                            this.color = false;
                        }
                    }
                    else {
                        this.store.dispatch(new src_app_actions_favorite_actions__WEBPACK_IMPORTED_MODULE_6__["AddFavorite"](city));
                        this.callSnackBar(city.LocalizedName + " has been added to favorites.");
                        this.color = true;
                    }
                };
                FavoritesComponent.prototype.callSnackBar = function (message, action) {
                    if (action === void 0) { action = ''; }
                    this.snack.open(message, action, {
                        duration: 2500,
                        panelClass: ['my-snack-bar']
                    });
                };
                FavoritesComponent.prototype.goToHome = function (i) {
                    sessionStorage.setItem("searched-city-key", this.favoritedCities[i].Key);
                    sessionStorage.setItem("searched-city-name", this.favoritedCities[i].LocalizedName);
                };
                return FavoritesComponent;
            }());
            FavoritesComponent.ctorParameters = function () { return [
                { type: src_app_services_forecast_service__WEBPACK_IMPORTED_MODULE_3__["Forecast"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
            ]; };
            FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-favorites',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.css */ "./src/app/components/favorites/favorites.component.css")).default]
                })
            ], FavoritesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/header/header.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-flow: row;\r\n    background-color: var(--primary-light);\r\n\r\n}\r\n\r\n.logo-icon{\r\nmargin-left: 3rem;    \r\n}\r\n\r\n.nav{\r\n    margin-right: 3rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsc0NBQXNDOztBQUUxQzs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcclxuXHJcbn1cclxuXHJcbi5sb2dvLWljb257XHJcbm1hcmdpbi1sZWZ0OiAzcmVtOyAgICBcclxufVxyXG5cclxuLm5hdntcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/header/header.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/theme.service */ "./src/app/services/theme.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(themeService) {
                    this.themeService = themeService;
                    this.vision = "vision_clear";
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                HeaderComponent.prototype.toggleTheme = function () {
                    if (this.themeService.isDarkTheme()) {
                        this.themeService.setLightTheme();
                        this.vision = "vision_clear";
                    }
                    else {
                        this.themeService.setDarkTheme();
                        this.vision = "vision_tinted";
                    }
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/layout/layout.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/layout/layout.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".forecast-box{\r\n    max-width: 120rem;\r\n    margin: 8rem auto;\r\n    box-shadow:var(--background-tertiary-shadow);\r\n    background-color: var(--background-secondary);\r\n    border-radius: 10px;\r\n    min-height: 50rem;\r\n    background-image: url('clouds-background.png');\r\n    background-blend-mode: overlay;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.header{\r\n    width: 100%;\r\n    margin-bottom: 2rem auto;    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDRDQUE0QztJQUM1Qyw2Q0FBNkM7SUFDN0MsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw4Q0FBeUQ7SUFDekQsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmVjYXN0LWJveHtcclxuICAgIG1heC13aWR0aDogMTIwcmVtO1xyXG4gICAgbWFyZ2luOiA4cmVtIGF1dG87XHJcbiAgICBib3gtc2hhZG93OnZhcigtLWJhY2tncm91bmQtdGVydGlhcnktc2hhZG93KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvY2xvdWRzLWJhY2tncm91bmQucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW0gYXV0bzsgICAgXHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/layout/layout.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/layout/layout.component.ts ***!
          \*******************************************************/
        /*! exports provided: LayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () { return LayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LayoutComponent = /** @class */ (function () {
                function LayoutComponent() {
                }
                LayoutComponent.prototype.ngOnInit = function () {
                };
                return LayoutComponent;
            }());
            LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/components/layout/layout.component.css")).default]
                })
            ], LayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/weather-forecast/weather-forecast.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/weather-forecast/weather-forecast.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n.container{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n.city-cur-temp{\r\n    display: flex;\r\n    flex-flow: column;\r\n    font-size: 4rem;\r\n    font-family: sans-serif;\r\n    margin-left: 2rem;\r\n    align-items: flex-start;\r\n}\r\n.container-head{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: baseline;\r\n}\r\n.favorite{\r\n    margin-right: 3rem;\r\n}\r\n.card{\r\n    width: 16rem;\r\n    height: 20rem;\r\n    background-color: var(--background-mat-card);\r\n    color: var(--text-primary);\r\n}\r\n.search{\r\n    margin-top: 5rem;\r\n    margin-bottom: 10rem;\r\n    flex: 0 0 40%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.mat-raised-button{\r\n    margin-right: 4rem;\r\n}\r\n::-webkit-input-placeholder{\r\n    color:var(--primary-light)\r\n}\r\n::-moz-placeholder{\r\n    color:var(--primary-light)\r\n}\r\n::-ms-input-placeholder{\r\n    color:var(--primary-light)\r\n}\r\n::placeholder{\r\n    color:var(--primary-light)\r\n}\r\n.search-input{\r\n    font-family: inherit;\r\n    font-size: 1.5rem;\r\n    color: var(--primary-dark);\r\n    background-color: var(--background-inputs);\r\n    border: none;\r\n    padding: .7rem 2rem;\r\n    border-radius: 4rem;\r\n    width: 65%  ;\r\n\r\n    margin-right: -3.25rem;\r\n\r\n   \r\n}\r\n.search-input:focus{\r\n\r\n    outline: none;\r\n\r\n}\r\n.search-button{\r\n    border: none;\r\n    border-radius: 100px;\r\n    background-color: var(--background-inputs);\r\n}\r\n.search-button:focus{\r\n    outline: none;\r\n}\r\n.search-button:active{\r\n    transform: translateY(2px);\r\n}\r\n.search-icon{\r\n    fill: var(--icon-search);\r\n}\r\n.toggles{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-right: 4rem;\r\n}\r\n.slider{\r\n    margin-right: 2rem;\r\n}\r\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\r\n    background-color: var(--slider-thumb); \r\n}\r\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\r\nbackground-color: var(--slider-bar);  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyLWZvcmVjYXN0L3dlYXRoZXItZm9yZWNhc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtBQUNKO0FBRkE7SUFDSTtBQUNKO0FBRkE7SUFDSTtBQUNKO0FBRkE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTs7SUFFWixzQkFBc0I7OztBQUcxQjtBQUNBOztJQUVJLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7QUFFQTtBQUNBLG1DQUFtQztBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci1mb3JlY2FzdC93ZWF0aGVyLWZvcmVjYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmNpdHktY3VyLXRlbXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItaGVhZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5mYXZvcml0ZXtcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogMTZyZW07XHJcbiAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYXQtY2FyZCk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxufVxyXG5cclxuLnNlYXJjaHtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcclxuICAgIGZsZXg6IDAgMCA0MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1saWdodClcclxufVxyXG4uc2VhcmNoLWlucHV0e1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1pbnB1dHMpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogLjdyZW0gMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XHJcbiAgICB3aWR0aDogNjUlICA7XHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMy4yNXJlbTtcclxuXHJcbiAgIFxyXG59XHJcbi5zZWFyY2gtaW5wdXQ6Zm9jdXN7XHJcblxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbn1cclxuLnNlYXJjaC1idXR0b257XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtaW5wdXRzKTtcclxufVxyXG4uc2VhcmNoLWJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnNlYXJjaC1idXR0b246YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbntcclxuICAgIGZpbGw6IHZhcigtLWljb24tc2VhcmNoKTtcclxufVxyXG5cclxuLnRvZ2dsZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG4uc2xpZGVye1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsaWRlci10aHVtYik7IFxyXG59XHJcbiAgXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xpZGVyLWJhcik7ICBcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/weather-forecast/weather-forecast.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/weather-forecast/weather-forecast.component.ts ***!
          \***************************************************************************/
        /*! exports provided: WeatherForecastComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherForecastComponent", function () { return WeatherForecastComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_forecast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/forecast.service */ "./src/app/services/forecast.service.ts");
            /* harmony import */ var src_app_services_city_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/city-search.service */ "./src/app/services/city-search.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_models_city__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/city */ "./src/app/models/city.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var src_app_actions_favorite_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/actions/favorite.actions */ "./src/app/actions/favorite.actions.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var WeatherForecastComponent = /** @class */ (function () {
                function WeatherForecastComponent(forecast, citySearchService, store, snack, titleService) {
                    this.forecast = forecast;
                    this.citySearchService = citySearchService;
                    this.store = store;
                    this.snack = snack;
                    this.titleService = titleService;
                    this.cityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
                    this.city = new src_app_models_city__WEBPACK_IMPORTED_MODULE_5__["City"]();
                    this.forecastCards = [];
                    this.defaultForecast = "215854";
                    this.color = false;
                    this.isImperial = false;
                }
                WeatherForecastComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle("Herolo Weather App Task");
                    if (sessionStorage.getItem("searched-city-key") === null) {
                        this.findLocation();
                    }
                    setTimeout(function () {
                        if (sessionStorage.getItem("searched-city-key") === null) { // this will fire as default only if 'findLocation' has been turned down, or has not worked properly
                            _this.forecast.getFiveDayForecast(_this.defaultForecast).subscribe(function (res) {
                                _this.forecastCards = res.DailyForecasts;
                                _this.headerCity = "Tel-Aviv";
                                _this.city.Key = _this.defaultForecast;
                                _this.city.LocalizedName = _this.headerCity;
                                _this.headerTemp = res.DailyForecasts[0].Temperature.Maximum.Value;
                                if (localStorage.getItem(_this.city.Key) !== null) {
                                    _this.color = true;
                                }
                                else {
                                    _this.color = false;
                                }
                            }, function (err) {
                                _this.callSnackBar(err.message, 'Dismiss');
                            });
                        }
                        else {
                            _this.forecast.getFiveDayForecast(sessionStorage.getItem("searched-city-key")).subscribe(function (res) {
                                _this.forecastCards = res.DailyForecasts;
                                _this.headerCity = sessionStorage.getItem("searched-city-name");
                                _this.city.Key = sessionStorage.getItem("searched-city-key");
                                _this.city.LocalizedName = _this.headerCity;
                                _this.headerTemp = res.DailyForecasts[0].Temperature.Maximum.Value;
                                if (localStorage.getItem(_this.city.Key) !== null) {
                                    _this.color = true;
                                }
                                else {
                                    _this.color = false;
                                }
                            }, function (err) {
                                _this.callSnackBar(err.message, 'Dismiss');
                            });
                        }
                    }, 1000);
                };
                WeatherForecastComponent.prototype.onSearchInvoke = function () {
                    var _this = this;
                    this.callSnackBar("Finding the weather forecast for " + sessionStorage.getItem("searched-city-name"), 'Dismiss');
                    setTimeout(function () {
                        _this.forecast.getFiveDayForecast(sessionStorage.getItem("searched-city-key")).subscribe(function (res) {
                            _this.forecastCards = res.DailyForecasts;
                            _this.headerCity = sessionStorage.getItem("searched-city-name");
                            _this.headerTemp = res.DailyForecasts[0].Temperature.Maximum.Value;
                            if (localStorage.getItem(_this.city.Key) !== null) {
                                _this.color = true;
                            }
                            else {
                                _this.color = false;
                            }
                        }, function (err) {
                            _this.callSnackBar(err.message, 'Dismiss');
                        });
                    }, 2000);
                };
                // area autocomplete start
                WeatherForecastComponent.prototype.autoComplete = function (value) {
                    var _this = this;
                    this.citySearchService.getCityKey(value).subscribe(function (res) {
                        _this.cities = res;
                    }, function (err) {
                        _this.callSnackBar(err.error.Message, 'Dismiss');
                    });
                };
                WeatherForecastComponent.prototype.onOptionSelected = function (selectedCity) {
                    this.city = selectedCity;
                    sessionStorage.setItem("searched-city-key", this.city.Key);
                    sessionStorage.setItem("searched-city-name", this.city.LocalizedName);
                };
                // area autocomplete end
                WeatherForecastComponent.prototype.toggle = function (event) {
                    this.isImperial = event.checked;
                };
                WeatherForecastComponent.prototype.toggeleFavorite = function () {
                    if (localStorage.getItem(this.city.Key) !== null) {
                        if (confirm("Remove " + this.city.LocalizedName + " from favorites?")) {
                            this.store.dispatch(new src_app_actions_favorite_actions__WEBPACK_IMPORTED_MODULE_7__["RemoveFavorite"](this.city));
                            this.callSnackBar(this.city.LocalizedName + " has been removed from favorites.", 'Dismiss');
                            this.color = false;
                        }
                    }
                    else {
                        this.store.dispatch(new src_app_actions_favorite_actions__WEBPACK_IMPORTED_MODULE_7__["AddFavorite"](this.city));
                        this.callSnackBar(this.city.LocalizedName + " has been added to favorites.", 'Dismiss');
                        this.color = true;
                    }
                };
                WeatherForecastComponent.prototype.findLocation = function () {
                    var _this = this;
                    this.forecastCards = [];
                    try {
                        if (!navigator.geolocation) {
                            alert('Geolocation is not supported by your browser');
                        }
                        else {
                            navigator.geolocation.getCurrentPosition(function (position) {
                                _this.callSnackBar("Locating...", 'Dismiss');
                                setTimeout(function () {
                                    _this.forecast.getGeoLocation(position.coords.latitude, position.coords.longitude).subscribe(function (resMain) {
                                        _this.city.LocalizedName = resMain.LocalizedName;
                                        _this.city.Key = resMain.Key;
                                        sessionStorage.setItem("searched-city-key", resMain.Key);
                                        sessionStorage.setItem("searched-city-name", resMain.LocalizedName);
                                        if (localStorage.getItem(resMain.Key) !== null) {
                                            _this.color = true;
                                        }
                                        else {
                                            _this.color = false;
                                        }
                                        _this.forecast.getFiveDayForecast(resMain.Key).subscribe(function (resSecondary) {
                                            _this.forecastCards = resSecondary.DailyForecasts;
                                            _this.headerTemp = resSecondary.DailyForecasts[0].Temperature.Maximum.Value;
                                            _this.headerCity = resMain.LocalizedName;
                                        }, function (err) {
                                            _this.callSnackBar(err.error.Message, 'Dismiss');
                                        });
                                    }, function (err) {
                                        _this.callSnackBar(err.error.Message, 'Dismiss');
                                    });
                                }, 1000);
                            }, function (err) {
                                _this.callSnackBar('Unable to retrieve your location without permission', 'Dismiss');
                            });
                        }
                    }
                    catch (err) {
                        console.log("got to catch");
                        this.callSnackBar(err.error.Message, 'Dismiss');
                    }
                };
                WeatherForecastComponent.prototype.callSnackBar = function (message, action) {
                    if (action === void 0) { action = ''; }
                    this.snack.open(message, action, {
                        duration: 2500,
                        panelClass: ['my-snack-bar']
                    });
                };
                return WeatherForecastComponent;
            }());
            WeatherForecastComponent.ctorParameters = function () { return [
                { type: src_app_services_forecast_service__WEBPACK_IMPORTED_MODULE_2__["Forecast"] },
                { type: src_app_services_city_search_service__WEBPACK_IMPORTED_MODULE_3__["CitySearchService"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] }
            ]; };
            WeatherForecastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-forecast',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather-forecast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-forecast/weather-forecast.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather-forecast.component.css */ "./src/app/components/weather-forecast/weather-forecast.component.css")).default]
                })
            ], WeatherForecastComponent);
            /***/ 
        }),
        /***/ "./src/app/models/city.ts": 
        /*!********************************!*\
          !*** ./src/app/models/city.ts ***!
          \********************************/
        /*! exports provided: City */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function () { return City; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var City = /** @class */ (function () {
                function City(Version, Key, Type, Rank, LocalizedName, Country, AdministrativeArea) {
                    this.Version = Version;
                    this.Key = Key;
                    this.Type = Type;
                    this.Rank = Rank;
                    this.LocalizedName = LocalizedName;
                    this.Country = Country;
                    this.AdministrativeArea = AdministrativeArea;
                }
                return City;
            }());
            /***/ 
        }),
        /***/ "./src/app/reducers/favorite.reducer.ts": 
        /*!**********************************************!*\
          !*** ./src/app/reducers/favorite.reducer.ts ***!
          \**********************************************/
        /*! exports provided: favoritesReducer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoritesReducer", function () { return favoritesReducer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _actions_favorite_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/favorite.actions */ "./src/app/actions/favorite.actions.ts");
            function favoritesReducer(state, action) {
                if (state === void 0) { state = []; }
                switch (action.type) {
                    case _actions_favorite_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_FAVORITE"]:
                        localStorage.setItem(action.payload.Key, action.payload.LocalizedName);
                        return __spread(state, [action.payload]);
                    case _actions_favorite_actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FAVORITE"]:
                        localStorage.removeItem(action.payload.Key);
                        return state.filter(function (city) { return city !== action.payload; });
                    default:
                        return state;
                }
            }
            /***/ 
        }),
        /***/ "./src/app/services/city-search.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/city-search.service.ts ***!
          \*************************************************/
        /*! exports provided: CitySearchService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitySearchService", function () { return CitySearchService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var CitySearchService = /** @class */ (function () {
                function CitySearchService(httpClient) {
                    this.httpClient = httpClient;
                    this.apikeys = [
                        "6GWhdwqk8zRrfrNBjGUkiVBzxjfVN3FB"
                    ];
                }
                CitySearchService.prototype.getCityKey = function (city) {
                    return this.httpClient.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + this.apikeys[0] + "&q=" + city + "&language=en-us");
                };
                return CitySearchService;
            }());
            CitySearchService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CitySearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CitySearchService);
            /***/ 
        }),
        /***/ "./src/app/services/forecast.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/forecast.service.ts ***!
          \**********************************************/
        /*! exports provided: Forecast */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forecast", function () { return Forecast; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var Forecast = /** @class */ (function () {
                function Forecast(httpClient) {
                    this.httpClient = httpClient;
                    this.apikeys = [
                        "6GWhdwqk8zRrfrNBjGUkiVBzxjfVN3FB"
                    ];
                }
                Forecast.prototype.getFiveDayForecast = function (cityKey) {
                    return this.httpClient.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + cityKey + "?apikey=" + this.apikeys[0] + "&metric=true");
                };
                Forecast.prototype.getCurrentForecast = function (cityKey) {
                    return this.httpClient.get("https://dataservice.accuweather.com/currentconditions/v1/" + cityKey + "?apikey=" + this.apikeys[0]);
                };
                Forecast.prototype.getGeoLocation = function (lat, lon) {
                    return this.httpClient.get("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + this.apikeys[0] + "&q=" + lat + "," + lon);
                };
                return Forecast;
            }());
            Forecast.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            Forecast = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], Forecast);
            /***/ 
        }),
        /***/ "./src/app/services/theme.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/theme.service.ts ***!
          \*******************************************/
        /*! exports provided: ThemeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function () { return ThemeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_theme_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/theme */ "./src/app/theme/theme.ts");
            var ThemeService = /** @class */ (function () {
                function ThemeService() {
                    this.active = src_app_theme_theme__WEBPACK_IMPORTED_MODULE_2__["light"];
                    this.availableThemes = [src_app_theme_theme__WEBPACK_IMPORTED_MODULE_2__["light"], src_app_theme_theme__WEBPACK_IMPORTED_MODULE_2__["dark"]];
                }
                ThemeService.prototype.getAvailableThemes = function () {
                    return this.availableThemes;
                };
                ThemeService.prototype.getActiveTheme = function () {
                    return this.active;
                };
                ThemeService.prototype.isDarkTheme = function () {
                    return this.active.name === src_app_theme_theme__WEBPACK_IMPORTED_MODULE_2__["dark"].name;
                };
                ThemeService.prototype.setDarkTheme = function () {
                    this.setActiveTheme(src_app_theme_theme__WEBPACK_IMPORTED_MODULE_2__["dark"]);
                };
                ThemeService.prototype.setLightTheme = function () {
                    this.setActiveTheme(src_app_theme_theme__WEBPACK_IMPORTED_MODULE_2__["light"]);
                };
                ThemeService.prototype.setActiveTheme = function (theme) {
                    var _this = this;
                    this.active = theme;
                    Object.keys(this.active.properties).forEach(function (property) {
                        document.documentElement.style.setProperty(property, _this.active.properties[property]);
                    });
                };
                return ThemeService;
            }());
            ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], ThemeService);
            /***/ 
        }),
        /***/ "./src/app/theme/theme.ts": 
        /*!********************************!*\
          !*** ./src/app/theme/theme.ts ***!
          \********************************/
        /*! exports provided: light, dark */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light", function () { return light; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dark", function () { return dark; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var light = {
                name: "light",
                properties: {
                    "--foreground-default": "#090a08",
                    "--foreground-secondary": "#41474D",
                    "--foreground-tertiary": "#7c8079",
                    "--foreground-quaternary": "#f9fff4",
                    "--foreground-light": "#484d41",
                    "--background-default": "#FFFFFF",
                    "--background-secondary": "#d3e2c7",
                    "--background-tertiary": "#5c9966",
                    "--background-mat-card": "#FFFFFF",
                    "--primary-default": "#7846a1",
                    "--primary-dark": "#603880",
                    "--primary-light": "#936ab3",
                    "--accent-default": "#5dfdcb",
                    "--accent-dark": "#24b286",
                    "--accent-light": "#b2ffe7",
                    "--text-primary": "#000000",
                    "--text-sub": "#777",
                    "--icon-search": "#8bb36a",
                    "--slider-thumb": "#603880",
                    "--slider-bar": "#a378c4",
                    "--error-default": "#EF3E36",
                    "--error-dark": "#800600",
                    "--error-light": "#FFCECC",
                    "--background-tertiary-shadow": "0 2rem 6rem rgba(0,0,0,.3)"
                }
            };
            var dark = {
                name: "dark",
                properties: {
                    "--foreground-default": "#5C7D99",
                    "--foreground-secondary": "#A3B9CC",
                    "--foreground-tertiary": "#F4FAFF",
                    "--foreground-quaternary": "#E5E5E5",
                    "--foreground-light": "#FFFFFF",
                    "--background-default": "#41474D",
                    "--background-secondary": "#41474D",
                    "--background-tertiary": "#08090A",
                    "--background-mat-card": "#666b70",
                    "--primary-default": "#5dfdcb",
                    "--primary-dark": "#24b286",
                    "--primary-light": "#603880",
                    "--accent-default": "#7846a1",
                    "--accent-dark": "#603880",
                    "--accent-light": "#936ab3",
                    "--text-primary": "#FFFFFF",
                    "--text-sub": "#d9dadb",
                    "--icon-search": "#8bb36a",
                    "--slider-thumb": "#24b286",
                    "--slider-bar": "#b2ffe7",
                    "--error-default": "#EF3E36",
                    "--error-dark": "#800600",
                    "--error-light": "#FFCECC",
                    "--background-tertiary-shadow": " 0 2rem 5rem rgba(0,0,0,.06)"
                }
            };
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Angular\WeatherApp\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map