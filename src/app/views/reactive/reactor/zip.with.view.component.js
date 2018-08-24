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
var SingleStreamItem_1 = require("../../../stream/SingleStreamItem");
var SquareStreamItemService_1 = require("../../../stream/SquareStreamItemService");
var CircleStreamItemService_1 = require("../../../stream/CircleStreamItemService");
var TriangleStreamItemService_1 = require("../../../stream/TriangleStreamItemService");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var RanboShapeOptionsService_1 = require("../../../stream/RanboShapeOptionsService");
var ImageUtility_1 = require("../../../utilities/ImageUtility");
var rxjs_1 = require("rxjs");
var ZipWithViewComponent = /** @class */ (function () {
    function ZipWithViewComponent(triangleFactory, hip2B, circleService) {
        var _this = this;
        this.triangleFactory = triangleFactory;
        this.hip2B = hip2B;
        this.circleService = circleService;
        this.mapOne = {
            apply: function (streamItem, otherStreamItem) {
                return new SingleStreamItem_1.SingleStreamItem(streamItem.element.map(function () { return _this.hip2B.createShape(function () {
                    return {
                        fill: otherStreamItem.element[0].options.get('fill'),
                        stroke: otherStreamItem.element[0].options.get('stroke'),
                    };
                }); }));
            }
        };
        this.sourcePicture = ImageUtility_1.ImageUtility.circleSource;
        this.triangleSource = ImageUtility_1.ImageUtility.triangleSource;
        this.trianglePlusCircleToSquare = ImageUtility_1.ImageUtility.trianglePlusCircleToSquare;
        this.mapPicture = ImageUtility_1.ImageUtility.circleSquare;
        this.sourceOutputSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.sourceOutput = this.sourceOutputSubject.filter(function (item) { return !!item; });
        this.sourceOutputOtherSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.sourceOutputOther = this.sourceOutputOtherSubject.filter(function (item) { return !!item; });
        this.streamSourceInputSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.streamSourceInput = this.streamSourceInputSubject.filter(function (item) { return !!item; });
        this.streamSourceInputOtherSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.streamSourceInputOther = this.streamSourceInputOtherSubject.filter(function (item) { return !!item; });
        this.continueOne = true;
    }
    ZipWithViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        rxjs_1.Observable.interval(1000).filter(function (_) { return _this.continueOne; }).subscribe(function () { return _this.startStreamOne(); });
        rxjs_1.Observable.interval(1850).subscribe(function () { return _this.startStreamTwo(); });
    };
    ZipWithViewComponent.prototype.toggleStreamOne = function () {
        this.continueOne = !this.continueOne;
    };
    ZipWithViewComponent.prototype.sourceComplete = function (item) {
        this.sourceOutputSubject.next(item);
    };
    ZipWithViewComponent.prototype.sourceCompleteOther = function (item) {
        this.sourceOutputOtherSubject.next(item);
    };
    ZipWithViewComponent.prototype.mapOneComplete = function (steamItem) {
    };
    ZipWithViewComponent.prototype.startStreamOne = function () {
        this.streamSourceInputSubject.next(this.triangleFactory.createStreamItem(RanboShapeOptionsService_1.RanboShapeOptionsService.createStreamOption));
    };
    ZipWithViewComponent.prototype.startStreamTwo = function () {
        this.streamSourceInputOtherSubject.next(this.circleService.createStreamItem(RanboShapeOptionsService_1.RanboShapeOptionsService.createStreamOption));
    };
    ZipWithViewComponent.numItems = 6;
    ZipWithViewComponent = __decorate([
        core_1.Component({
            selector: 'zip-with-view',
            template: require('./zip.with.view.component.htm')
        }),
        __metadata("design:paramtypes", [TriangleStreamItemService_1.TriangleStreamItemService,
            SquareStreamItemService_1.SquareStreamItemService,
            CircleStreamItemService_1.CircleStreamItemService])
    ], ZipWithViewComponent);
    return ZipWithViewComponent;
}());
exports.ZipWithViewComponent = ZipWithViewComponent;
//# sourceMappingURL=zip.with.view.component.js.map