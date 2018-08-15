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
var Observable_1 = require("rxjs/Observable");
var ZipStreamComponent = /** @class */ (function () {
    function ZipStreamComponent() {
        this.outputStream = new core_1.EventEmitter();
        this._zippedOutputStream = Observable_1.Observable.empty();
    }
    Object.defineProperty(ZipStreamComponent.prototype, "zippingFunction", {
        get: function () {
            return this._zippingFunction;
        },
        set: function (value) {
            this._zippingFunction = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZipStreamComponent.prototype, "inputStream", {
        get: function () {
            return this._inputStream;
        },
        set: function (value) {
            this._inputStream = value;
            this.tryToCombine();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZipStreamComponent.prototype, "otherInputStream", {
        get: function () {
            return this._otherInputStream;
        },
        set: function (value) {
            this._otherInputStream = value;
            this.tryToCombine();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZipStreamComponent.prototype, "zippedOutputStream", {
        get: function () {
            return this._zippedOutputStream;
        },
        set: function (value) {
            this._zippedOutputStream = value;
        },
        enumerable: true,
        configurable: true
    });
    ZipStreamComponent.prototype.complete = function (streamItemAtEnd) {
        this.outputStream.emit(streamItemAtEnd);
    };
    ZipStreamComponent.prototype.tryToCombine = function () {
        var _this = this;
        if (this._inputStream && this._otherInputStream) {
            this.zippedOutputStream = this._inputStream.zip(this._otherInputStream, function (a, b) {
                return _this.zippingFunction.apply(a, b);
            });
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ZipStreamComponent.prototype, "outputStream", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ZipStreamComponent.prototype, "zippingFunction", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Observable_1.Observable),
        __metadata("design:paramtypes", [Observable_1.Observable])
    ], ZipStreamComponent.prototype, "inputStream", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Observable_1.Observable),
        __metadata("design:paramtypes", [Observable_1.Observable])
    ], ZipStreamComponent.prototype, "otherInputStream", null);
    ZipStreamComponent = __decorate([
        core_1.Component({
            selector: 'zip-stream',
            template: require('./zip.stream.component.htm'),
            animations: []
        })
    ], ZipStreamComponent);
    return ZipStreamComponent;
}());
exports.ZipStreamComponent = ZipStreamComponent;
//# sourceMappingURL=zip.stream.component.js.map