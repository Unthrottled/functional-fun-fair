"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var reactive_view_component_1 = require("./reactive.view.component");
var stream_module_1 = require("../../stream/stream.module");
var util_module_1 = require("../../utilities/util.module");
var reactive_what_view_component_1 = require("./what/reactive.what.view.component");
var angular2_markdown_1 = require("angular2-markdown");
var ReactiveModule = /** @class */ (function () {
    function ReactiveModule() {
    }
    ReactiveModule = __decorate([
        core_1.NgModule({
            imports: [
                stream_module_1.StreamModule,
                router_1.RouterModule,
                util_module_1.UtilModule,
                angular2_markdown_1.MarkdownModule,
            ],
            exports: [],
            declarations: [
                reactive_view_component_1.ReactiveViewComponent,
                reactive_what_view_component_1.ReactiveWhatViewComponent
            ],
            providers: []
        })
    ], ReactiveModule);
    return ReactiveModule;
}());
exports.ReactiveModule = ReactiveModule;
//# sourceMappingURL=reactive.module.js.map