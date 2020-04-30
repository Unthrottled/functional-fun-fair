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
require("./complete.cold.observable.component.htm");
var SingleStreamItem_1 = require("../../../stream/SingleStreamItem");
var Observable_1 = require("rxjs/Observable");
var Rx_1 = require("rxjs/Rx");
var SquareStreamItemService_1 = require("../../../stream/SquareStreamItemService");
var CircleStreamItemService_1 = require("../../../stream/CircleStreamItemService");
var TriangleStreamItemService_1 = require("../../../stream/TriangleStreamItemService");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ImageUtility_1 = require("../../../utilities/ImageUtility");
var CompleteColdObservableComponent = /** @class */ (function () {
    function CompleteColdObservableComponent(triangleFactory, hip2B, circleService) {
        var _this = this;
        this.triangleFactory = triangleFactory;
        this.hip2B = hip2B;
        this.circleService = circleService;
        this.mapOne = {
            apply: function (streamItem) { return new SingleStreamItem_1.SingleStreamItem(streamItem.element.map(function (element) { return _this.hip2B.createShape(function () {
                return {
                    fill: element.options.fill,
                    stroke: element.options.stroke,
                };
            }); })); }
        };
        this.flatMapOne = {
            apply: function (streamItem) { return Observable_1.Observable.create(function (observer) {
                streamItem.element.forEach(function (element) {
                    var triangle = function () {
                        return _this.triangleFactory.createStreamItem(function () {
                            return {
                                fill: element.options.fill,
                                stroke: element.options.stroke,
                            };
                        });
                    };
                    observer.next(triangle());
                    Observable_1.Observable.interval(750, Rx_1.Scheduler.async)
                        .take(2)
                        .subscribe(function (_) { return observer.next(triangle()); }, observer.error, observer.complete);
                });
            }); }
        };
        this.filterOne = {
            test: function (item) {
                return item.element.reduce(function (allMatch, shape) {
                    var color = shape.options.fill.color;
                    return allMatch && !(color === 'purple' ||
                        color === 'violet' ||
                        color === 'indigo');
                }, true);
            }
        };
        this._itemsToMoveAlong = [];
        this.listIndex = -1;
        this.sourceOutputSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.sourceOutput = this.sourceOutputSubject.filter(function (item) { return !!item; });
        this.mapSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.flatMapSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.flatMapOutputStream = this.flatMapSubject.filter(function (item) { return !!item; });
        this.filterSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.filterOutputStream = this.filterSubject.filter(function (item) { return !!item; });
        this.streamSourceInputSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.streamSourceInput = this.streamSourceInputSubject.filter(function (item) { return !!item; });
        this.sourcePicture = ImageUtility_1.ImageUtility.circleSource;
        this.filterPicture = ImageUtility_1.ImageUtility.filterCircle;
        this.flatmapPicture = ImageUtility_1.ImageUtility.circleTriangle;
        this.mapPicture = ImageUtility_1.ImageUtility.triangeSquare;
    }
    CompleteColdObservableComponent_1 = CompleteColdObservableComponent;
    Object.defineProperty(CompleteColdObservableComponent.prototype, "itemsToMoveAlong", {
        get: function () {
            return this._itemsToMoveAlong;
        },
        set: function (value) {
            this._itemsToMoveAlong = value;
        },
        enumerable: true,
        configurable: true
    });
    CompleteColdObservableComponent.prototype.sourceComplete = function (item) {
        this.sourceOutputSubject.next(item);
    };
    CompleteColdObservableComponent.prototype.flatMapOneComplete = function (steamItem) {
        this.flatMapSubject.next(steamItem);
    };
    CompleteColdObservableComponent.prototype.mapOneComplete = function (steamItem) {
        this.mapSubject.next(steamItem);
    };
    CompleteColdObservableComponent.prototype.filterOneComplete = function (streamItem) {
        this.filterSubject.next(streamItem);
    };
    CompleteColdObservableComponent.prototype.startStreamOne = function () {
        var itemIndex = this.listIndex = ++this.listIndex % CompleteColdObservableComponent_1.numItems;
        this.streamSourceInputSubject.next(this._itemsToMoveAlong[itemIndex]);
    };
    CompleteColdObservableComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable_1.Observable.interval(2000).subscribe(function () { return _this.startStreamOne(); });
    };
    CompleteColdObservableComponent.prototype.ngAfterViewInit = function () {
    };
    CompleteColdObservableComponent.numItems = 6;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], CompleteColdObservableComponent.prototype, "itemsToMoveAlong", null);
    CompleteColdObservableComponent = CompleteColdObservableComponent_1 = __decorate([
        core_1.Component({
            selector: 'complete-cold-view',
            template: require('./complete.cold.observable.component.htm')
        }),
        __metadata("design:paramtypes", [TriangleStreamItemService_1.TriangleStreamItemService,
            SquareStreamItemService_1.SquareStreamItemService,
            CircleStreamItemService_1.CircleStreamItemService])
    ], CompleteColdObservableComponent);
    return CompleteColdObservableComponent;
    var CompleteColdObservableComponent_1;
}());
exports.CompleteColdObservableComponent = CompleteColdObservableComponent;
//# sourceMappingURL=complete.cold.observable.component.js.map