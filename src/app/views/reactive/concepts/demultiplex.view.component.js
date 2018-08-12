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
var router_1 = require("@angular/router");
var DemultiplexViewComponent = /** @class */ (function () {
    function DemultiplexViewComponent(triangleFactory, hip2B, circleService, router) {
        var _this = this;
        this.triangleFactory = triangleFactory;
        this.hip2B = hip2B;
        this.circleService = circleService;
        this.router = router;
        this.mapOne = {
            apply: function (streamItem) { return new SingleStreamItem_1.SingleStreamItem(streamItem.element.map(function (element) { return _this.hip2B.createShape(function () {
                return {
                    fill: element.options.get('fill'),
                    stroke: element.options.get('stroke'),
                };
            }); })); }
        };
        this.sourcePicture = ImageUtility_1.ImageUtility.circleSource;
        this.mapPicture = ImageUtility_1.ImageUtility.circleSquare;
        this.itemsToMoveAlong = [];
        this.sourceOutputSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.sourceOutput = this.sourceOutputSubject.filter(function (item) { return !!item; });
        this.streamSourceInputSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.streamSourceInput = this.streamSourceInputSubject.filter(function (item) { return !!item; });
        this.listIndex = -1;
    }
    DemultiplexViewComponent_1 = DemultiplexViewComponent;
    DemultiplexViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = this.circleService.createStreamItems(DemultiplexViewComponent_1.numItems, RanboShapeOptionsService_1.RanboShapeOptionsService.createStreamOption);
        this.list.element
            .map(function (el) { return [el]; })
            .map(function (element) { return new SingleStreamItem_1.SingleStreamItem(element); })
            .forEach(function (item) { return _this.itemsToMoveAlong.push(item); });
        this.startStreamOne();
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    DemultiplexViewComponent.prototype.sourceComplete = function (item) {
        this.sourceOutputSubject.next(item);
    };
    DemultiplexViewComponent.prototype.mapOneComplete = function (steamItem) {
        this.startStreamOne();
    };
    DemultiplexViewComponent.prototype.mapOneCompleteNoStart = function (steamItem) {
    };
    DemultiplexViewComponent.prototype.startStreamOne = function () {
        var itemIndex = this.listIndex = ++this.listIndex % DemultiplexViewComponent_1.numItems;
        this.streamSourceInputSubject.next(this.itemsToMoveAlong[itemIndex]);
    };
    DemultiplexViewComponent.numItems = 6;
    DemultiplexViewComponent = DemultiplexViewComponent_1 = __decorate([
        core_1.Component({
            selector: 'demultiplex-view',
            template: require('./demultiplex.view.component.htm')
        }),
        __metadata("design:paramtypes", [TriangleStreamItemService_1.TriangleStreamItemService,
            SquareStreamItemService_1.SquareStreamItemService,
            CircleStreamItemService_1.CircleStreamItemService,
            router_1.Router])
    ], DemultiplexViewComponent);
    return DemultiplexViewComponent;
    var DemultiplexViewComponent_1;
}());
exports.DemultiplexViewComponent = DemultiplexViewComponent;
//# sourceMappingURL=demultiplex.view.component.js.map