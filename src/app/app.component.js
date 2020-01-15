"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var products_service_1 = require("./products.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(productService) {
        this.productService = productService;
        this.title = 'BBZW Gucci Store';
        this.isMenuCollapsed = true;
        this.kart = productService.shoppingKartChange().subscribe(this.refreshGrandTotal.bind(this));
    }
    AppComponent_1 = AppComponent;
    AppComponent.forRoot = function (config) {
        return {
            ngModule: AppComponent_1,
            providers: [
                { provide: products_service_1.ProductService, useValue: config }
            ]
        };
    };
    AppComponent.prototype.ngOnInit = function () {
        this.refreshGrandTotal();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.kart.unsubscribe();
    };
    AppComponent.prototype.refreshGrandTotal = function () {
        this.grandTotal = this.productService.getGrandTotal();
    };
    var AppComponent_1;
    AppComponent = AppComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
