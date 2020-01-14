"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var Product = /** @class */ (function () {
    function Product(id, name, description, image, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.discontPrice = Math.round((this.price * .9) / 100) * 100 - 1;
    }
    Product.prototype.getActualPrice = function () {
        return 1;
    };
    return Product;
}());
exports.Product = Product;
var ProductService = /** @class */ (function () {
    // private static http: HttpClient;
    function ProductService(http) {
        this.http = http;
        this.kartSubject = new rxjs_1.Subject();
    }
    ProductService_1 = ProductService;
    ProductService.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!ProductService_1.products.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.get('/assets/products.json').toPromise()];
                    case 1:
                        body = _a.sent();
                        body.forEach((function (product) {
                            ProductService_1.products.push(new Product(product[0], product[1], product[2], product[3], product[4]));
                        }));
                        _a.label = 2;
                    case 2: return [2 /*return*/, ProductService_1.products];
                }
            });
        });
    };
    ProductService.prototype.shoppingKartChange = function () {
        return this.kartSubject.asObservable();
    };
    ProductService.prototype.onKartUpdate = function (kartItem) {
        this.kartSubject.next();
    };
    ProductService.prototype.getPrice = function () {
        var sum;
        ProductService_1.products.forEach(function (element) {
            sum += element.price;
        });
    };
    ProductService.prototype.getProductByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, kartItem;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0;
                        return [4 /*yield*/, this.getProducts()];
                    case 1:
                        _a = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        kartItem = _a[_i];
                        if (+kartItem.id === +id) {
                            return [2 /*return*/, kartItem];
                        }
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/, null];
                }
            });
        });
    };
    ProductService.prototype.getShoppingKart = function (full) {
        if (full === void 0) { full = false; }
        return __awaiter(this, void 0, void 0, function () {
            var kart, body, _i, body_1, product, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        kart = [];
                        return [4 /*yield*/, this.http.get('/api/shoppingKart').toPromise()];
                    case 1:
                        body = _b.sent();
                        _i = 0, body_1 = body;
                        _b.label = 2;
                    case 2:
                        if (!(_i < body_1.length)) return [3 /*break*/, 5];
                        product = body_1[_i];
                        _a = product;
                        return [4 /*yield*/, this.getProductByID(product.productId)];
                    case 3:
                        _a.product = _b.sent();
                        kart.push(product);
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, kart];
                }
            });
        });
    };
    ProductService.prototype.getShoppingKartLength = function () {
        return __awaiter(this, void 0, void 0, function () {
            var count, _i, _a, kartItem;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        count = 0;
                        _i = 0;
                        return [4 /*yield*/, this.getShoppingKart()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        kartItem = _a[_i];
                        count += kartItem.count;
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/, count];
                }
            });
        });
    };
    ProductService.prototype.getProductTotal = function (kartItem) {
        return kartItem.product.discontPrice * kartItem.count;
    };
    ProductService.prototype.getGrandTotal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var kart, total, _i, kart_1, kartItem, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getShoppingKart()];
                    case 1:
                        kart = _b.sent();
                        total = 0;
                        _i = 0, kart_1 = kart;
                        _b.label = 2;
                    case 2:
                        if (!(_i < kart_1.length)) return [3 /*break*/, 5];
                        kartItem = kart_1[_i];
                        _a = total;
                        return [4 /*yield*/, this.getProductTotal(kartItem)];
                    case 3:
                        total = _a + _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, total];
                }
            });
        });
    };
    ProductService.prototype.addProduct = function (newProduct) {
        return __awaiter(this, void 0, void 0, function () {
            var alreadyIsInKart, productToAdd;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('/api/shoppingKart/add/' + newProduct.id).toPromise()];
                    case 1:
                        _a.sent();
                        alreadyIsInKart = false;
                        ProductService_1.shoppingKart.forEach(function (kartItem) {
                            if (kartItem.product === newProduct) {
                                kartItem.count += 1;
                                alreadyIsInKart = true;
                            }
                        });
                        if (!alreadyIsInKart) {
                            productToAdd = {
                                count: 1,
                                productId: newProduct.id,
                                product: newProduct
                            };
                            ProductService_1.shoppingKart.push(productToAdd);
                        }
                        this.onKartUpdate();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductService.prototype.removeProduct = function (oldProduct) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('/api/shoppingKart/remove/' + oldProduct.id).toPromise()];
                    case 1:
                        _a.sent();
                        ProductService_1.shoppingKart.forEach(function (kartItem, index, array) {
                            if (kartItem.product === oldProduct) {
                                kartItem.count -= 1;
                                if (kartItem.count < 1) {
                                    console.log(kartItem.count, index, array);
                                    array.splice(index, 1);
                                }
                            }
                        });
                        this.onKartUpdate();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductService.prototype.clearKart = function () {
        ProductService_1.shoppingKart = [];
    };
    var ProductService_1;
    ProductService.products = [];
    ProductService.shoppingKart = [];
    ProductService = ProductService_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
        // https://itnext.io/how-to-create-a-service-with-httpclient-and-injectable-in-angular-9-8-e3cc50c24c83
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
