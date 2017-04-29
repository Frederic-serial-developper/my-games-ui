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
            { id: 1, name: 'Abyss', rank: 3, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic1965255_md.jpg' },
            { id: 2, name: 'Scythe', rank: 5, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic3163924_md.jpg' },
            { id: 3, name: 'Mr. Jack', rank: 5, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic3066125_md.jpg' },
            { id: 4, name: 'Cyclades', rank: 4, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic584779_md.jpg' },
            { id: 5, name: 'Sbires', rank: 3, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic3286351.jpg' },
            { id: 6, name: 'Mare Nostrum : Empires', rank: 3, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic2648963_md.jpg' },
            { id: 7, name: 'Mafia de Cuba', rank: 6, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic2519675_md.jpg' },
            { id: 8, name: 'Magic Maze', rank: 4, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic3268473_md.jpg' },
            { id: 9, name: 'Dragon Keeper', rank: 9, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic2695875_md.jpg' },
            { id: 10, name: 'Village of Valeria', rank: 1, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic3503838_md.jpg' },
            { id: 11, name: 'Quantum', rank: 3, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic1727619_md.jpg' },
            { id: 12, name: 'Meeple War', rank: 5, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic2862447_md.png' },
            { id: 13, name: 'Trickerion : Legends of Illusion', rank: 8, source: 'boardgamegeek', image: 'https://cf.geekdo-images.com/images/pic2585510_md.png' }
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