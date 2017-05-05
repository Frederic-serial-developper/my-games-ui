"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
// ng bootstrap
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// material2
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
// app
var app_component_1 = require("./app.component");
// app components & services
var games_library_component_1 = require("./games-library/games-library.component");
var games_library_thumbnail_component_1 = require("./games-library/games-library-thumbnail.component");
var game_detail_component_1 = require("./games-library/game-detail.component");
var games_library_service_1 = require("./games-library/games-library.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            animations_1.BrowserAnimationsModule,
            material_1.MdButtonModule, material_1.MdCheckboxModule],
        declarations: [app_component_1.AppComponent,
            games_library_component_1.GamesLibraryComponent,
            games_library_thumbnail_component_1.GamesLibraryThumbnailComponent,
            game_detail_component_1.GameDetailComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [games_library_service_1.GameLibraryService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map