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
var reactive_how_view_component_1 = require("./what/reactive.how.view.component");
var reactive_why_view_component_1 = require("./what/reactive.why.view.component");
var demultiplex_view_component_1 = require("./concepts/demultiplex.view.component");
var hot_sequence_view_component_1 = require("./concepts/hot-sequence-view.component");
var complete_hot_observable_component_1 = require("./components/complete.hot.observable.component");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var cold_sequence_view_component_1 = require("./concepts/cold-sequence-view.component");
var complete_cold_observable_component_1 = require("./components/complete.cold.observable.component");
var zip_with_view_component_1 = require("./reactor/zip.with.view.component");
var reactive_landing_view_component_1 = require("./reactive.landing.view.component");
var reactive_concepts_view_component_1 = require("./reactive.concepts.view.component");
var reactive_visualisations_view_component_1 = require("./reactive.visualisations.view.component");
var ReactiveModule = /** @class */ (function () {
    function ReactiveModule() {
    }
    ReactiveModule = __decorate([
        core_1.NgModule({
            imports: [
                stream_module_1.StreamModule,
                router_1.RouterModule,
                util_module_1.UtilModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                angular2_markdown_1.MarkdownModule,
            ],
            exports: [],
            declarations: [
                reactive_view_component_1.ReactiveViewComponent,
                reactive_what_view_component_1.ReactiveWhatViewComponent,
                reactive_how_view_component_1.ReactiveHowViewComponent,
                reactive_why_view_component_1.ReactiveWhyViewComponent,
                demultiplex_view_component_1.DemultiplexViewComponent,
                hot_sequence_view_component_1.HotSequenceViewComponent,
                reactive_landing_view_component_1.ReactiveLandingViewComponent,
                reactive_concepts_view_component_1.ReactiveConceptsViewComponent,
                reactive_visualisations_view_component_1.ReactiveVisualisationsViewComponent,
                cold_sequence_view_component_1.ColdSequenceViewComponent,
                zip_with_view_component_1.ZipWithViewComponent,
                complete_hot_observable_component_1.CompleteHotObservableComponent,
                complete_cold_observable_component_1.CompleteColdObservableComponent,
            ],
            providers: []
        })
    ], ReactiveModule);
    return ReactiveModule;
}());
exports.ReactiveModule = ReactiveModule;
//# sourceMappingURL=reactive.module.js.map