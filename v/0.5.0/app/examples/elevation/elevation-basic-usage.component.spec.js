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
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var elevation_basic_usage_component_1 = require('./elevation-basic-usage.component');
testing_1.describe('Component: ElevationBasicUsage', function () {
    var builder;
    testing_1.beforeEachProviders(function () { return [elevation_basic_usage_component_1.ElevationBasicUsageComponent]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) { builder = tcb; }));
    testing_1.it('should inject the component', testing_1.inject([elevation_basic_usage_component_1.ElevationBasicUsageComponent], function (component) {
        testing_1.expect(component).toBeTruthy();
    }));
    testing_1.it('should create the component', testing_1.inject([], function () {
        return builder.createAsync(ElevationBasicUsageComponentTestController)
            .then(function (fixture) {
            var query = fixture.debugElement.query(platform_browser_1.By.directive(elevation_basic_usage_component_1.ElevationBasicUsageComponent));
            testing_1.expect(query).toBeTruthy();
            testing_1.expect(query.componentInstance).toBeTruthy();
        });
    }));
});
var ElevationBasicUsageComponentTestController = (function () {
    function ElevationBasicUsageComponentTestController() {
    }
    ElevationBasicUsageComponentTestController = __decorate([
        core_1.Component({
            selector: 'test',
            template: "\n    <elevation-basic-usage></elevation-basic-usage>\n  ",
            directives: [elevation_basic_usage_component_1.ElevationBasicUsageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ElevationBasicUsageComponentTestController);
    return ElevationBasicUsageComponentTestController;
}());
//# sourceMappingURL=elevation-basic-usage.component.spec.js.map