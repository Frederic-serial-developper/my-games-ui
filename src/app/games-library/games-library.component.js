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
var core_1 = require("@angular/core");
var games_library_service_1 = require("./games-library.service");
var GamesLibraryComponent = (function () {
    function GamesLibraryComponent(gameLibrayService) {
        this.gameLibrayService = gameLibrayService;
    }
    GamesLibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rankOrderAsc = 1;
        this.nameOrderAsc = 1;
        this.playsOrderAsc = 1;
        this.gameLibrayService.getGames().subscribe(function (result) { return _this.games = result; });
    };
    GamesLibraryComponent.prototype.onSelect = function (game) {
        this.selectedGame = game;
    };
    /*
    * sort the game list by name. Revert order each time it is called. On first call, games will be asc sorted.
    */
    GamesLibraryComponent.prototype.sortByName = function () {
        var _this = this;
        this.games.sort(function (g1, g2) { return (g1.name.localeCompare(g2.name)) * _this.nameOrderAsc; });
        this.nameOrderAsc = this.nameOrderAsc * -1;
    };
    /*
    * sort the game list by rank. Revert order each time it is called. On first call, games will be desc sorted.
    */
    GamesLibraryComponent.prototype.sortByRank = function () {
        var _this = this;
        this.games.sort(function (g1, g2) { return (g2.rank - g1.rank) * _this.rankOrderAsc; });
        this.rankOrderAsc = this.rankOrderAsc * -1;
    };
    /*
    * sort the game list by plays. Revert order each time it is called. On first call, games will be desc sorted.
    */
    GamesLibraryComponent.prototype.sortByPlays = function () {
        var _this = this;
        this.games.sort(function (g1, g2) { return (((g2.playsCount === undefined ? 0 : g2.playsCount) - (g1.playsCount === undefined ? 0 : g1.playsCount)) * _this.playsOrderAsc); });
        this.playsOrderAsc = this.playsOrderAsc * -1;
    };
    return GamesLibraryComponent;
}());
GamesLibraryComponent = __decorate([
    core_1.Component({
        selector: 'games-library',
        templateUrl: 'app/games-library/games-library.component.html'
    }),
    __metadata("design:paramtypes", [games_library_service_1.GameLibraryService])
], GamesLibraryComponent);
exports.GamesLibraryComponent = GamesLibraryComponent;
//# sourceMappingURL=games-library.component.js.map