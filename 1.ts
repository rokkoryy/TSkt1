"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Visa = /** @class */ (function () {
    function Visa() {
        this._country = ["Арстоцка", "Колечия", "Орбистан"][~~(Math.random() * 3)];
        this._isValid = Math.random() < 0.5;
        this._year = ~~(Math.random() * (2050 - 2000) + 2000);
    }
    Object.defineProperty(Visa.prototype, "country", {
        get: function () {
            return this._country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Visa.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Visa.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Visa.prototype.showInfo = function () {
        console.log("Страна:", this._country, "\nВалидность:", this._isValid, "\nГод выдачи", this._year);
    };
    return Visa;
}());
exports.default = Visa;