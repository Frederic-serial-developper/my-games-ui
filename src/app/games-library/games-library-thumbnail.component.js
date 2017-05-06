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
var game_1 = require("../model/game");
var GamesLibraryThumbnailComponent = (function () {
    function GamesLibraryThumbnailComponent() {
    }
    GamesLibraryThumbnailComponent.prototype.ngOnInit = function () {
        this.displayDetails = false;
    };
    GamesLibraryThumbnailComponent.prototype.onClickImage = function () {
        this.displayDetails = !this.displayDetails;
    };
    return GamesLibraryThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", game_1.Game)
], GamesLibraryThumbnailComponent.prototype, "game", void 0);
GamesLibraryThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'games-library-thumbnail',
        templateUrl: 'app/games-library/games-library-thumbnail.component.html'
    })
], GamesLibraryThumbnailComponent);
exports.GamesLibraryThumbnailComponent = GamesLibraryThumbnailComponent;
//# sourceMappingURL=games-library-thumbnail.component.js.map