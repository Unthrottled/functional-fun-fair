import {Component} from "@angular/core";
import {ImageUtility} from '../../utilities/ImageUtility';

@Component({
    selector: 'reactive-landing-view',
    template: require('./reactive.landing.view.component.htm')
})
export class ReactiveLandingViewComponent {
    oneOhOne = ImageUtility.easyStreet;
    concept = ImageUtility.circleToMany;
}
