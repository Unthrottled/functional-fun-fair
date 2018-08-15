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
import {CompleteHotObservableComponent} from './components/complete.hot.observable.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ColdSequenceViewComponent} from './concepts/cold-sequence-view.component';
import {CompleteColdObservableComponent} from './components/complete.cold.observable.component';
import {ZipWithViewComponent} from './reactor/zip.with.view.component';


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
        ColdSequenceViewComponent,
        ZipWithViewComponent,
        CompleteHotObservableComponent,
        CompleteColdObservableComponent,
    ],
    providers: []
})
export class ReactiveModule {
}
