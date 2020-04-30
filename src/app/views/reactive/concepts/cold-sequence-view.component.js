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
var ColdSequenceViewComponent = /** @class */ (function () {
    function ColdSequenceViewComponent(triangleFactory, hip2B, circleService, router) {
        var _this = this;
        this.triangleFactory = triangleFactory;
        this.hip2B = hip2B;
        this.circleService = circleService;
        this.router = router;
        this.mapOne = {
            apply: function (streamItem) { return new SingleStreamItem_1.SingleStreamItem(streamItem.element.map(function (element) { return _this.hip2B.createShape(function () {
                return {
                    fill: element.options.fill,
                    stroke: element.options.stroke,
                };
            }); })); }
        };
        this.sourcePicture = ImageUtility_1.ImageUtility.circleSource;
        this.mapPicture = ImageUtility_1.ImageUtility.circleSquare;
        this.subscribers = [1];
        this.sourceOutputSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.sourceOutput = this.sourceOutputSubject.filter(function (item) { return !!item; });
        this.streamSourceInputSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.streamSourceInput = this.streamSourceInputSubject.filter(function (item) { return !!item; });
        this.listIndex = -1;
        this._itemsToMoveAlong = [];
    }
    ColdSequenceViewComponent_1 = ColdSequenceViewComponent;
    Object.defineProperty(ColdSequenceViewComponent.prototype, "itemsToMoveAlong", {
        get: function () {
            return this._itemsToMoveAlong;
        },
        set: function (value) {
            this._itemsToMoveAlong = value;
        },
        enumerable: true,
        configurable: true
    });
    ColdSequenceViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = this.circleService.createStreamItems(ColdSequenceViewComponent_1.numItems, RanboShapeOptionsService_1.RanboShapeOptionsService.createStreamOption);
        this.list.element
            .map(function (el) { return [el]; })
            .map(function (element) { return new SingleStreamItem_1.SingleStreamItem(element); })
            .forEach(function (item) { return _this._itemsToMoveAlong.push(item); });
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ColdSequenceViewComponent.prototype.sourceComplete = function (item) {
        this.sourceOutputSubject.next(item);
    };
    ColdSequenceViewComponent.prototype.mapOneComplete = function (steamItem) {
        this.startStreamOne();
    };
    ColdSequenceViewComponent.prototype.addSubscriber = function () {
        this.subscribers.push(1);
    };
    ColdSequenceViewComponent.prototype.startStreamOne = function () {
        var itemIndex = this.listIndex = ++this.listIndex % ColdSequenceViewComponent_1.numItems;
        this.streamSourceInputSubject.next(this._itemsToMoveAlong[itemIndex]);
    };
    ColdSequenceViewComponent.numItems = 6;
    ColdSequenceViewComponent = ColdSequenceViewComponent_1 = __decorate([
        core_1.Component({
            selector: 'cold-sequence-view',
            template: require('./cold-sequence.view.component.htm')
        }),
        __metadata("design:paramtypes", [TriangleStreamItemService_1.TriangleStreamItemService,
            SquareStreamItemService_1.SquareStreamItemService,
            CircleStreamItemService_1.CircleStreamItemService,
            router_1.Router])
    ], ColdSequenceViewComponent);
    return ColdSequenceViewComponent;
    var ColdSequenceViewComponent_1;
}());
exports.ColdSequenceViewComponent = ColdSequenceViewComponent;
//# sourceMappingURL=cold-sequence-view.component.js.map