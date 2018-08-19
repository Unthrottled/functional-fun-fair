import {Component} from "@angular/core";
import {ImageUtility} from '../../utilities/ImageUtility';

@Component({
    selector: 'reactive-concepts',
    template: require('./reactive.concepts.view.component.htm')
})
export class ReactiveConceptsViewComponent {

    reactor = ImageUtility.reactor;
    fundie = ImageUtility.fundie;

}
