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
var TriangleStreamItemService = /** @class */ (function (_super) {
    __extends(TriangleStreamItemService, _super);
    function TriangleStreamItemService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleStreamItemService.prototype.createShape = function (options) {
        var triangleSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        triangleSvg.setAttribute('viewbox', '0 0 100 100');
        triangleSvg.setAttribute('width', '50px');
        triangleSvg.setAttribute('height', '50px');
        var shapeOptions = (options && options()) ||
            RanboShapeOptionsService_1.RanboShapeOptionsService.createStreamOption();
        var triangeElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        triangeElement.setAttribute('points', '25,0 50,50 0,50');
        triangeElement.setAttribute('fill', shapeOptions.fill.color);
        triangeElement.setAttribute('stroke', shapeOptions.stroke.color);
        triangeElement.setAttribute('stroke-width', shapeOptions.stroke.width.toString());
        triangleSvg.appendChild(triangeElement);
        return {
            element: triangleSvg,
            options: shapeOptions,
        };
    };
    TriangleStreamItemService = __decorate([
        core_1.Injectable()
    ], TriangleStreamItemService);
    return TriangleStreamItemService;
}(BaseStreamItemService_1.BaseStreamItemService));
exports.TriangleStreamItemService = TriangleStreamItemService;
//# sourceMappingURL=TriangleStreamItemService.js.map