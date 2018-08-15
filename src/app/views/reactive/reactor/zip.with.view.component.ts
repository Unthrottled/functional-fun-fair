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

    list: StreamItem;
    mapOne: BiFunction<StreamItem, StreamItem, StreamItem> = {
        apply: (streamItem: StreamItem, otherStreamItem: StreamItem) =>
            new SingleStreamItem(
                streamItem.element.map(() => this.hip2B.createShape(() => {
                        return {
                            fill: otherStreamItem.element[0].options.get('fill'),
                            stroke: otherStreamItem.element[0].options.get('stroke'),
                        }
                    })
                ))
    };

    sourcePicture = ImageUtility.circleSource;
    mapPicture = ImageUtility.circleSquare;
    private itemsToMoveAlong: StreamItem[] = [];
    private sourceOutputSubject = new BehaviorSubject(null);
    sourceOutput = this.sourceOutputSubject.filter(item => !!item);
    private sourceOutputOtherSubject = new BehaviorSubject(null);
    sourceOutputOther = this.sourceOutputOtherSubject.filter(item => !!item);
    private streamSourceInputSubject = new BehaviorSubject<StreamItem>(null);
    streamSourceInput = this.streamSourceInputSubject.filter(item => !!item);
    private streamSourceInputOtherSubject = new BehaviorSubject<StreamItem>(null);
    streamSourceInputOther = this.streamSourceInputOtherSubject.filter(item => !!item);
    private listIndex = -1;
    private listIndexOther = -1;

    constructor(private triangleFactory: TriangleStreamItemService,
                private hip2B: SquareStreamItemService,
                private circleService: CircleStreamItemService) {
    }

    ngOnInit(): void {
        this.list = this.circleService.createStreamItems(ZipWithViewComponent.numItems, RanboShapeOptionsService.createStreamOption)
        this.list.element
            .map(el => [el])
            .map(element => new SingleStreamItem(element))
            .forEach(item => this.itemsToMoveAlong.push(item));
        Observable.interval(1000).subscribe(() => this.startStreamOne());
        Observable.interval(1750).subscribe(() => this.startStreamTwo());
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
        let itemIndex = this.listIndex = ++this.listIndex % ZipWithViewComponent.numItems;
        this.streamSourceInputSubject.next(this.itemsToMoveAlong[itemIndex]);
    }

    startStreamTwo(): void {
        let itemIndex = this.listIndexOther = ++this.listIndexOther % ZipWithViewComponent.numItems;
        this.streamSourceInputOtherSubject.next(this.itemsToMoveAlong[itemIndex]);
    }

}