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
var onlineMenuParameters_1 = require("./onlineMenuParameters");
var OnlineMenuComponent = (function () {
    function OnlineMenuComponent() {
        this.reloadAction = new core_1.EventEmitter();
        this.availableServices = [
            { value: 'https://my-games-services.herokuapp.com', viewValue: 'Heroku' },
            { value: 'http://localhost:8080/my-games-services', viewValue: 'Local' }
        ];
    }
    OnlineMenuComponent.prototype.ngOnInit = function () {
        this.online = false;
        this.bggUser = "fredericdib";
        this.includeExpansion = true;
        this.includePreviouslyOwned = false;
        this.selectedService = 'https://my-games-services.herokuapp.com';
    };
    OnlineMenuComponent.prototype.reload = function (bggUser, service) {
        var parameters = new onlineMenuParameters_1.OnlineMenuParameters();
        parameters.bggUser = bggUser;
        parameters.service = service;
        parameters.includeExpansion = this.includeExpansion;
        parameters.includePreviouslyOwned = this.includePreviouslyOwned;
        this.reloadAction.emit(parameters);
    };
    return OnlineMenuComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OnlineMenuComponent.prototype, "reloadAction", void 0);
OnlineMenuComponent = __decorate([
    core_1.Component({
        selector: 'online-menu',
        templateUrl: 'app/online-menu/online-menu.component.html'
    })
], OnlineMenuComponent);
exports.OnlineMenuComponent = OnlineMenuComponent;
//# sourceMappingURL=online-menu.component.js.map