"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var stream_module_1 = require("./stream/stream.module");
var complete_component_1 = require("./views/basic/intermediates/complete.component");
var landing_component_1 = require("./landing.component");
var basics_view_component_1 = require("./views/basic/basics.view.component");
var view_module_1 = require("./views/view.module");
var generative_source_component_1 = require("./views/basic/source/generative.source.component");
var collection_source_component_1 = require("./views/basic/source/collection-source.component");
var map_view_component_1 = require("./views/basic/intermediates/map.view.component");
var filter_view_component_1 = require("./views/basic/intermediates/filter.view.component");
var flatmap_101_component_1 = require("./views/basic/intermediates/flatmap.101.component");
var multimap_component_1 = require("./views/basic/intermediates/multimap.component");
var reactive_view_component_1 = require("./views/reactive/reactive.view.component");
var reactive_what_view_component_1 = require("./views/reactive/what/reactive.what.view.component");
var reactive_how_view_component_1 = require("./views/reactive/what/reactive.how.view.component");
var reactive_why_view_component_1 = require("./views/reactive/what/reactive.why.view.component");
var demultiplex_view_component_1 = require("./views/reactive/concepts/demultiplex.view.component");
var hot_sequence_view_component_1 = require("./views/reactive/concepts/hot-sequence-view.component");
var cold_sequence_view_component_1 = require("./views/reactive/concepts/cold-sequence-view.component");
var zip_with_view_component_1 = require("./views/reactive/reactor/zip.with.view.component");
var reactive_landing_view_component_1 = require("./views/reactive/reactive.landing.view.component");
var reactive_concepts_view_component_1 = require("./views/reactive/reactive.concepts.view.component");
var reactive_visualisations_view_component_1 = require("./views/reactive/reactive.visualisations.view.component");
var reactive_reactor_view_component_1 = require("./views/reactive/reactive.reactor.view.component");
var background_component_1 = require("./background.component");
var appRoutes = [
    { path: 'streams', component: basics_view_component_1.BasicsViewComponent },
    { path: 'reactive', component: reactive_landing_view_component_1.ReactiveLandingViewComponent },
    { path: 'reactive/explanations', component: reactive_view_component_1.ReactiveViewComponent },
    { path: 'reactive/explanations/what', component: reactive_what_view_component_1.ReactiveWhatViewComponent },
    { path: 'reactive/explanations/how', component: reactive_how_view_component_1.ReactiveHowViewComponent },
    { path: 'reactive/explanations/why', component: reactive_why_view_component_1.ReactiveWhyViewComponent },
    { path: 'reactive/concepts', component: reactive_concepts_view_component_1.ReactiveConceptsViewComponent },
    { path: 'reactive/concepts/visualisations', component: reactive_visualisations_view_component_1.ReactiveVisualisationsViewComponent },
    { path: 'reactive/concepts/visualisations/demultiplex', component: demultiplex_view_component_1.DemultiplexViewComponent },
    { path: 'reactive/concepts/visualisations/sequences/hot', component: hot_sequence_view_component_1.HotSequenceViewComponent },
    { path: 'reactive/concepts/visualisations/sequences/cold', component: cold_sequence_view_component_1.ColdSequenceViewComponent },
    { path: 'reactive/concepts/reactor', component: reactive_reactor_view_component_1.ReactiveReactorViewComponent },
    { path: 'reactive/concepts/reactor/visualisations/intermediate/zipWith', component: zip_with_view_component_1.ZipWithViewComponent },
    { path: 'streams/source/generate', component: generative_source_component_1.GenerativeSourceComponent },
    { path: 'streams/source/collection', component: collection_source_component_1.CollectionSourceComponent },
    { path: 'streams/intermediate/map', component: map_view_component_1.MapViewComponent },
    { path: 'streams/intermediate/filter', component: filter_view_component_1.FilterViewComponent },
    { path: 'streams/intermediate/flatmap', component: flatmap_101_component_1.Flatmap101Component },
    { path: 'streams/intermediate/flatmap2', component: multimap_component_1.MultimapComponent },
    { path: 'streams/intermediate/complete', component: complete_component_1.CompleteComponent },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: '**', component: landing_component_1.LandingComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                stream_module_1.StreamModule,
                view_module_1.ViewModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ],
            declarations: [
                app_component_1.AppComponent,
                landing_component_1.LandingComponent,
                background_component_1.BackgroundComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map