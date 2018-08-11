import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveViewComponent} from './reactive.view.component';
import {StreamModule} from '../../stream/stream.module';
import {UtilModule} from '../../utilities/util.module';


@NgModule({
    imports: [
        StreamModule,
        RouterModule,
        UtilModule
    ],
    exports: [],
    declarations: [
        ReactiveViewComponent
    ],
    providers: []
})
export class ReactiveModule {
}
