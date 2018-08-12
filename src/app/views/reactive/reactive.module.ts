import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveViewComponent} from './reactive.view.component';
import {StreamModule} from '../../stream/stream.module';
import {UtilModule} from '../../utilities/util.module';
import {ReactiveWhatViewComponent} from './what/reactive.what.view.component';
import {MarkdownModule} from 'angular2-markdown';
import {ReactiveHowViewComponent} from './what/reactive.how.view.component';
import {ReactiveWhyViewComponent} from './what/reactive.why.view.component';
import {DemultiplexViewComponent} from './concepts/demultiplex.view.component';
import {HotSequenceViewComponent} from './concepts/hot-sequence-view.component';
import {CompleteObservableComponent} from './components/complete.observable.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [
        StreamModule,
        RouterModule,
        UtilModule,
        BrowserModule,
        FormsModule,
        MarkdownModule,
    ],
    exports: [],
    declarations: [
        ReactiveViewComponent,
        ReactiveWhatViewComponent,
        ReactiveHowViewComponent,
        ReactiveWhyViewComponent,
        DemultiplexViewComponent,
        HotSequenceViewComponent,
        CompleteObservableComponent,
    ],
    providers: []
})
export class ReactiveModule {
}
