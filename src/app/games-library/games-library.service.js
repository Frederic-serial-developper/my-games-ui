"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var GameLibraryService = (function () {
    function GameLibraryService() {
        this.GAMES = [
            { id: 1, name: 'Abyss', rank: 3, source: 'boardgamegeek' },
            { id: 2, name: 'Scythe', rank: 5, source: 'boardgamegeek' },
            { id: 3, name: 'Mr. Jack', rank: 5, source: 'boardgamegeek' },
            { id: 4, name: 'Cyclades', rank: 4, source: 'boardgamegeek' },
            { id: 5, name: 'Sbires', rank: 3, source: 'boardgamegeek' },
            { id: 5, name: 'Mare Nostrum', rank: 3, source: 'boardgamegeek' }
        ];
    }
    GameLibraryService.prototype.getGames = function () {
        return Promise.resolve(this.GAMES);
    };
    GameLibraryService.prototype.getGamesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getGames()); }, 2000);
        });
    };
    return GameLibraryService;
}());
GameLibraryService = __decorate([
    core_1.Injectable()
], GameLibraryService);
exports.GameLibraryService = GameLibraryService;
//# sourceMappingURL=games-library.service.js.map