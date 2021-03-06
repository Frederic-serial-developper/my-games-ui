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
var games_statistics_service_1 = require("./games-statistics.service");
var GamesStatisticsComponent = (function () {
    function GamesStatisticsComponent(statsService) {
        this.statsService = statsService;
    }
    GamesStatisticsComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.reload(null);
    };
    GamesStatisticsComponent.prototype.onReceiveData = function (receivedStats) {
        this.stats = receivedStats;
        this.loading = false;
    };
    GamesStatisticsComponent.prototype.reload = function (parameter) {
        var _this = this;
        this.loading = true;
        if (parameter && parameter.bggUser && parameter.service) {
            this.statsService.getCollectionStatistics(parameter.bggUser, parameter.service, parameter.includeExpansion, parameter.includePreviouslyOwned).subscribe(function (receivedStats) { return _this.onReceiveData(receivedStats); });
        }
        else {
            this.statsService.getCollectionStatisticsFromFile().subscribe(function (receivedStats) { return _this.onReceiveData(receivedStats); });
        }
    };
    return GamesStatisticsComponent;
}());
GamesStatisticsComponent = __decorate([
    core_1.Component({
        selector: 'games-statistics',
        templateUrl: 'app/games-statistics/games-statistics.component.html'
    }),
    __metadata("design:paramtypes", [games_statistics_service_1.CollectionStatisticsService])
], GamesStatisticsComponent);
exports.GamesStatisticsComponent = GamesStatisticsComponent;
//# sourceMappingURL=games-statistics.component.js.map