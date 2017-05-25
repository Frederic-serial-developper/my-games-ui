"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
// ng bootstrap
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// ng2-charts
var ng2_charts_1 = require("ng2-charts");
// material2
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
require("hammerjs");
// flex layout
var flex_layout_1 = require("@angular/flex-layout");
// app
var app_component_1 = require("./app.component");
// app components & services for library
var games_library_component_1 = require("./games-library/games-library.component");
var games_library_thumbnail_component_1 = require("./games-library/games-library-thumbnail.component");
var game_detail_component_1 = require("./games-library/game-detail.component");
var games_library_service_1 = require("./games-library/games-library.service");
// app components & services for statistics
var games_statistics_component_1 = require("./games-statistics/games-statistics.component");
var games_statistics_ranking_component_1 = require("./games-statistics/games-statistics-ranking.component");
var games_statistics_year_component_1 = require("./games-statistics/games-statistics-year.component");
var games_statistics_global_component_1 = require("./games-statistics/games-statistics-global.component");
var games_statistics_service_1 = require("./games-statistics/games-statistics.service");
// menu component
var online_menu_component_1 = require("./online-menu/online-menu.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            router_1.RouterModule.forRoot([
                {
                    path: 'library',
                    component: games_library_component_1.GamesLibraryComponent
                },
                {
                    path: 'statistics',
                    component: games_statistics_component_1.GamesStatisticsComponent
                },
                {
                    path: '',
                    redirectTo: '/library',
                    pathMatch: 'full'
                },
            ]),
            animations_1.BrowserAnimationsModule,
            material_1.MdButtonModule, material_1.MdCheckboxModule, material_1.MdSliderModule, material_1.MdSelectModule,
            material_1.MdTooltipModule, material_1.MdProgressSpinnerModule, material_1.MdSlideToggleModule,
            ng2_charts_1.ChartsModule, flex_layout_1.FlexLayoutModule, material_1.MdToolbarModule],
        declarations: [app_component_1.AppComponent,
            games_library_component_1.GamesLibraryComponent,
            games_library_thumbnail_component_1.GamesLibraryThumbnailComponent,
            game_detail_component_1.GameDetailComponent,
            games_statistics_component_1.GamesStatisticsComponent,
            games_statistics_ranking_component_1.GamesStatisticsRankingComponent,
            games_statistics_global_component_1.GamesStatisticsGlobalComponent,
            games_statistics_year_component_1.GamesStatisticsYearComponent,
            online_menu_component_1.OnlineMenuComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [games_library_service_1.GameLibraryService, games_statistics_service_1.CollectionStatisticsService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map