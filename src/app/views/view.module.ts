import {NgModule} from "@angular/core";
import {BasicsViewComponent} from "./basic/basics.view.component";
import {ListComponent} from "./basic/list.component";
import {GenerativeSourceComponent} from "./basic/source/generative.source.component";
import {CollectionSourceComponent} from "./basic/source/collection-source.component";
import {StreamModule} from "../stream/stream.module";
import {RouterModule} from "@angular/router";
import {MapViewComponent} from "./basic/intermediates/map.view.component";
import {FilterViewComponent} from "./basic/intermediates/filter.view.component";
import {UtilModule} from "../utilities/util.module";
import {Flatmap101Component} from "./basic/intermediates/flatmap.101.component";
import {MultimapComponent} from "./basic/intermediates/multimap.component";
import {CompleteComponent} from "./basic/intermediates/complete.component";
import {ReactiveModule} from './reactive/reactive.module';


@NgModule({
    imports: [
        StreamModule,
        RouterModule,
        UtilModule,
        ReactiveModule
    ],
    exports: [],
    declarations: [
        ListComponent,
        BasicsViewComponent,
        GenerativeSourceComponent,
        CollectionSourceComponent,
        MapViewComponent,
        FilterViewComponent,
        Flatmap101Component,
        MultimapComponent,
        CompleteComponent,
    ],
    providers: []
})
export class ViewModule {
}
