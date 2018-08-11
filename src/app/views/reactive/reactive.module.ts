import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveViewComponent} from './reactive.view.component';
import {StreamModule} from '../../stream/stream.module';
import {UtilModule} from '../../utilities/util.module';
import {ReactiveWhatViewComponent} from './what/reactive.what.view.component';
import {MarkdownModule} from 'angular2-markdown';


@NgModule({
    imports: [
        StreamModule,
        RouterModule,
        UtilModule,
        MarkdownModule,
    ],
    exports: [],
    declarations: [
        ReactiveViewComponent,
        ReactiveWhatViewComponent
    ],
    providers: []
})
export class ReactiveModule {
}
