"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RanboShapeOptionsService_1 = require("./RanboShapeOptionsService");
var BaseStreamItemService_1 = require("./BaseStreamItemService");
var SquareStreamItemService = /** @class */ (function (_super) {
    __extends(SquareStreamItemService, _super);
    function SquareStreamItemService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquareStreamItemService.prototype.createShape = function (options) {
        var rectSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        rectSvg.setAttribute('viewbox', '0 0 100 100');
        rectSvg.setAttribute('width', '50px');
        rectSvg.setAttribute('height', '50px');
        var shapeOptions = (options && options()) ||
            RanboShapeOptionsService_1.RanboShapeOptionsService.createStreamOption();
        var getRectKid = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        getRectKid.setAttribute('width', '50');
        getRectKid.setAttribute('height', '50');
        getRectKid.setAttribute('fill', shapeOptions.fill.color);
        getRectKid.setAttribute('stroke', shapeOptions.stroke.color);
        getRectKid.setAttribute('stroke-width', shapeOptions.stroke.width.toString());
        rectSvg.appendChild(getRectKid);
        return {
            element: rectSvg,
            options: shapeOptions,
        };
    };
    SquareStreamItemService = __decorate([
        core_1.Injectable()
    ], SquareStreamItemService);
    return SquareStreamItemService;
}(BaseStreamItemService_1.BaseStreamItemService));
exports.SquareStreamItemService = SquareStreamItemService;
//# sourceMappingURL=SquareStreamItemService.js.map