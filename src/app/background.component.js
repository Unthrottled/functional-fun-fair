"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("./landing.component.htm");
var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
        this.backgroundWidth = 150;
        this.backgroundHeight = 150;
    }
    BackgroundComponent.prototype.onResize = function () {
        this.performBackgroundUpdate();
    };
    BackgroundComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize.bind(this));
    };
    BackgroundComponent.prototype.ngAfterViewChecked = function () {
        this.drawBackground();
    };
    BackgroundComponent.prototype.ngAfterViewInit = function () {
        this.performBackgroundUpdate();
        window.addEventListener('resize', this.onResize.bind(this));
    };
    BackgroundComponent.prototype.performBackgroundUpdate = function () {
        this.updateSize();
    };
    BackgroundComponent.prototype.updateSize = function () {
        var mainCanvas = document.getElementById('main');
        if (mainCanvas) {
            var boundingRect = mainCanvas.getBoundingClientRect();
            this.backgroundHeight = boundingRect.height;
            this.backgroundWidth = boundingRect.width;
        }
    };
    BackgroundComponent.prototype.drawBackground = function () {
        var backgroundCanvas = document.getElementById('backgroundImage');
        var ctx = backgroundCanvas.getContext('2d');
        if (!ctx) {
            return;
        }
        var w = this.backgroundWidth;
        var h = this.backgroundHeight;
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.moveTo(0, h * 0.85);
        ctx.quadraticCurveTo(w / 1.85, h, w, h / 2);
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.fillStyle = '#EEEEEE';
        ctx.strokeStyle = '#EEEEEE';
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    };
    BackgroundComponent = __decorate([
        core_1.Component({
            selector: 'fancy-background',
            template: "\n        <div id=\"main\">\n            <div>\n                <canvas\n                        id=\"backgroundImage\"\n                        [width]=\"backgroundWidth\"\n                        [height]=\"backgroundHeight\"\n                >\n\n                </canvas>\n            </div>\n        </div>\n    "
        })
    ], BackgroundComponent);
    return BackgroundComponent;
}());
exports.BackgroundComponent = BackgroundComponent;
//# sourceMappingURL=background.component.js.map