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
var GamesStatisticsYearComponent = (function () {
    function GamesStatisticsYearComponent() {
        // ng2-charts
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
    }
    GamesStatisticsYearComponent.prototype.ngOnInit = function () {
        var data = [];
        var currentYear = new Date().getFullYear();
        for (var year = 1990; year <= currentYear; year++) {
            this.barChartLabels.push(year.toString());
            data.push(this.stats.gamesByYear[year]);
        }
        this.barChartData = [{ data: data, label: 'Game count by year' }];
    };
    return GamesStatisticsYearComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", collectionStatistics_1.CollectionStatistics)
], GamesStatisticsYearComponent.prototype, "stats", void 0);
GamesStatisticsYearComponent = __decorate([
    core_1.Component({
        selector: 'games-statistics-year',
        templateUrl: 'app/games-statistics/games-statistics-year.component.html'
    })
], GamesStatisticsYearComponent);
exports.GamesStatisticsYearComponent = GamesStatisticsYearComponent;
//# sourceMappingURL=games-statistics-year.component.js.map