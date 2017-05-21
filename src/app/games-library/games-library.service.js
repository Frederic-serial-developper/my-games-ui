"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var GameLibraryService = (function () {
    function GameLibraryService(http) {
        this.http = http;
    }
    GameLibraryService.prototype.getGamesFromFile = function () {
        return this.http.get("app/games-library/games.json").map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    GameLibraryService.prototype.getGames = function (bggUser, service, includeExpansions, includePreviouslyOwned) {
        return this.http.get(service + "/bgg/collection/" + bggUser + "?includeExpansions=" + includeExpansions + "&includePreviouslyOwned=" + includePreviouslyOwned).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    GameLibraryService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.json());
    };
    return GameLibraryService;
}());
GameLibraryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GameLibraryService);
exports.GameLibraryService = GameLibraryService;
//# sourceMappingURL=games-library.service.js.map