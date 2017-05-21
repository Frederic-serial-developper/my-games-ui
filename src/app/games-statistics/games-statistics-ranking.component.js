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
var collectionStatistics_1 = require("../model/collectionStatistics");
var GamesStatisticsRankingComponent = (function () {
    function GamesStatisticsRankingComponent() {
        // ng2-charts
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
    }
    GamesStatisticsRankingComponent.prototype.ngOnInit = function () {
        this.barChartData = [{ data: [
                    this.stats.gamesByRatingLevel.LEVEL_0,
                    this.stats.gamesByRatingLevel.LEVEL_1,
                    this.stats.gamesByRatingLevel.LEVEL_2,
                    this.stats.gamesByRatingLevel.LEVEL_3,
                    this.stats.gamesByRatingLevel.LEVEL_4,
                    this.stats.gamesByRatingLevel.LEVEL_5,
                    this.stats.gamesByRatingLevel.LEVEL_6,
                    this.stats.gamesByRatingLevel.LEVEL_7,
                    this.stats.gamesByRatingLevel.LEVEL_8,
                    this.stats.gamesByRatingLevel.LEVEL_9
                ], label: 'Game count by ranking' }];
    };
    return GamesStatisticsRankingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", collectionStatistics_1.CollectionStatistics)
], GamesStatisticsRankingComponent.prototype, "stats", void 0);
GamesStatisticsRankingComponent = __decorate([
    core_1.Component({
        selector: 'games-statistics-ranking',
        templateUrl: 'app/games-statistics/games-statistics-ranking.component.html'
    })
], GamesStatisticsRankingComponent);
exports.GamesStatisticsRankingComponent = GamesStatisticsRankingComponent;
//# sourceMappingURL=games-statistics-ranking.component.js.map