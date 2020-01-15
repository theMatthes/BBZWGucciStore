"use strict";
exports.__esModule = true;
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
