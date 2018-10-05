"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    /**
     * Send GET request to given api endpoint
     * @param url
     */
    ApiService.prototype.Get = function (url) {
        return this.http
            .get(url)
            .pipe(operators_1.map(function (response) {
            var json = response.json();
            return json;
        }))
            .pipe(operators_1.catchError(this.handleError));
    };
    /**
     *
     * @param url Send post request to given api endpoint with data
     * @param data
     */
    ApiService.prototype.Post = function (url, data) {
        return this.http
            .post(url, data)
            .pipe(operators_1.catchError(this.handleError));
    };
    /**
     * Handle errors that arise during api requests
     * @param error
     */
    ApiService.prototype.handleError = function (error) {
        console.error('ApiService::handleError', error);
        return rxjs_1.throwError(error);
    };
    ApiService = __decorate([
        core_1.Injectable()
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
