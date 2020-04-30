import {Component, OnInit} from '@angular/core';
import {SingleStreamItem} from '../../../stream/SingleStreamItem';
import {StreamItem} from '../../../stream/StreamItem';
import {BiFunction} from '../../../stream/Function';
import {SquareStreamItemService} from '../../../stream/SquareStreamItemService';
import {CircleStreamItemService} from '../../../stream/CircleStreamItemService';
import {TriangleStreamItemService} from '../../../stream/TriangleStreamItemService';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {RanboShapeOptionsService} from '../../../stream/RanboShapeOptionsService';
import {ImageUtility} from '../../../utilities/ImageUtility';
import {Observable} from 'rxjs';

@Component({
    selector: 'zip-with-view',
    template: require('./zip.with.view.component.htm')
})
export class ZipWithViewComponent implements OnInit {

    private static numItems = 6;

    mapOne: BiFunction<StreamItem, StreamItem, StreamItem> = {
        apply: (streamItem: StreamItem, otherStreamItem: StreamItem) =>
            new SingleStreamItem(
                streamItem.element.map(() => this.hip2B.createShape(() => {
                        return {
                            fill: otherStreamItem.element[0].options.fill,
                            stroke: otherStreamItem.element[0].options.stroke,
                        }
                    })
                ))
    };

    sourcePicture = ImageUtility.circleSource;
    triangleSource = ImageUtility.triangleSource;
    trianglePlusCircleToSquare = ImageUtility.trianglePlusCircleToSquare;
    mapPicture = ImageUtility.circleSquare;
    private sourceOutputSubject = new BehaviorSubject(null);
    sourceOutput = this.sourceOutputSubject.filter(item => !!item);
    private sourceOutputOtherSubject = new BehaviorSubject(null);
    sourceOutputOther = this.sourceOutputOtherSubject.filter(item => !!item);
    private streamSourceInputSubject = new BehaviorSubject<StreamItem>(null);
    streamSourceInput = this.streamSourceInputSubject.filter(item => !!item);
    private streamSourceInputOtherSubject = new BehaviorSubject<StreamItem>(null);
    streamSourceInputOther = this.streamSourceInputOtherSubject.filter(item => !!item);

    private continueOne: boolean = true;
    constructor(private triangleFactory: TriangleStreamItemService,
                private hip2B: SquareStreamItemService,
                private circleService: CircleStreamItemService) {
    }

    ngOnInit(): void {
        Observable.interval(1000).filter(_ => this.continueOne).subscribe(() => this.startStreamOne());
        Observable.interval(1850).subscribe(() => this.startStreamTwo());
    }
    toggleStreamOne() {
        this.continueOne = !this.continueOne;
    }

    sourceComplete(item: StreamItem) {
        this.sourceOutputSubject.next(item);
    }

    sourceCompleteOther(item: StreamItem) {
        this.sourceOutputOtherSubject.next(item);
    }

    mapOneComplete(steamItem: StreamItem) {

    }

    startStreamOne(): void {
        this.streamSourceInputSubject.next(this.triangleFactory.createStreamItem(RanboShapeOptionsService.createStreamOption));
    }

    startStreamTwo(): void {
        this.streamSourceInputOtherSubject.next(this.circleService.createStreamItem(RanboShapeOptionsService.createStreamOption));
    }

}
