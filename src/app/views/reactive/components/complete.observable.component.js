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
require("./complete.observable.component.htm");
var SingleStreamItem_1 = require("../../../stream/SingleStreamItem");
var Observable_1 = require("rxjs/Observable");
var Rx_1 = require("rxjs/Rx");
var SquareStreamItemService_1 = require("../../../stream/SquareStreamItemService");
var CircleStreamItemService_1 = require("../../../stream/CircleStreamItemService");
var TriangleStreamItemService_1 = require("../../../stream/TriangleStreamItemService");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var RanboShapeOptionsService_1 = require("../../../stream/RanboShapeOptionsService");
var ImageUtility_1 = require("../../../utilities/ImageUtility");
var CompleteObservableComponent = /** @class */ (function () {
    function CompleteObservableComponent(triangleFactory, hip2B, circleService) {
        var _this = this;
        this.triangleFactory = triangleFactory;
        this.hip2B = hip2B;
        this.circleService = circleService;
        this.mapOne = {
            apply: function (streamItem) { return new SingleStreamItem_1.SingleStreamItem(streamItem.element.map(function (element) { return _this.hip2B.createShape(function () {
                return {
                    fill: element.options.get('fill'),
                    stroke: element.options.get('stroke'),
                };
            }); })); }
        };
        this.flatMapOne = {
            apply: function (streamItem) { return Observable_1.Observable.create(function (observer) {
                streamItem.element.forEach(function (element) {
                    var triangle = function () {
                        return _this.triangleFactory.createStreamItem(function () {
                            return {
                                fill: element.options.get('fill'),
                                stroke: element.options.get('stroke'),
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
                    var color = shape.options.get('fill').color;
                    return allMatch && !(color === 'purple' ||
                        color === 'violet' ||
                        color === 'indigo');
                }, true);
            }
        };
        this.itemsToMoveAlong = [];
        this.listIndex = -1;
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
    CompleteObservableComponent_1 = CompleteObservableComponent;
    Object.defineProperty(CompleteObservableComponent.prototype, "sourceOutput", {
        get: function () {
            return this._sourceOutput;
        },
        set: function (value) {
            this._sourceOutput = value;
        },
        enumerable: true,
        configurable: true
    });
    CompleteObservableComponent.prototype.sourceComplete = function (item) {
    };
    CompleteObservableComponent.prototype.flatMapOneComplete = function (steamItem) {
        this.flatMapSubject.next(steamItem);
    };
    CompleteObservableComponent.prototype.mapOneComplete = function (steamItem) {
        this.mapSubject.next(steamItem);
    };
    CompleteObservableComponent.prototype.filterOneComplete = function (streamItem) {
        this.filterSubject.next(streamItem);
    };
    CompleteObservableComponent.prototype.startStreamOne = function () {
        var itemIndex = this.listIndex = ++this.listIndex % CompleteObservableComponent_1.numItems;
        this.streamSourceInputSubject.next(this.itemsToMoveAlong[itemIndex]);
    };
    CompleteObservableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = this.circleService.createStreamItems(CompleteObservableComponent_1.numItems, RanboShapeOptionsService_1.RanboShapeOptionsService.createStreamOption);
        this.list.element
            .map(function (el) { return [el]; })
            .map(function (element) { return new SingleStreamItem_1.SingleStreamItem(element); })
            .forEach(function (item) { return _this.itemsToMoveAlong.push(item); });
        this.startStreamOne();
    };
    CompleteObservableComponent.numItems = 6;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Observable_1.Observable),
        __metadata("design:paramtypes", [Observable_1.Observable])
    ], CompleteObservableComponent.prototype, "sourceOutput", null);
    CompleteObservableComponent = CompleteObservableComponent_1 = __decorate([
        core_1.Component({
            selector: 'complete-view',
            template: require('./complete.observable.component.htm')
        }),
        __metadata("design:paramtypes", [TriangleStreamItemService_1.TriangleStreamItemService,
            SquareStreamItemService_1.SquareStreamItemService,
            CircleStreamItemService_1.CircleStreamItemService])
    ], CompleteObservableComponent);
    return CompleteObservableComponent;
    var CompleteObservableComponent_1;
}());
exports.CompleteObservableComponent = CompleteObservableComponent;
//# sourceMappingURL=complete.observable.component.js.map