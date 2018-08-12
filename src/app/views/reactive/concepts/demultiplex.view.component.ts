import {Component, OnInit} from '@angular/core';
import {SingleStreamItem} from '../../../stream/SingleStreamItem';
import {StreamItem} from '../../../stream/StreamItem';
import {Function} from '../../../stream/Function';
import {Element} from '@progress/kendo-drawing';
import {SquareStreamItemService} from '../../../stream/SquareStreamItemService';
import {CircleStreamItemService} from '../../../stream/CircleStreamItemService';
import {TriangleStreamItemService} from '../../../stream/TriangleStreamItemService';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {RanboShapeOptionsService} from '../../../stream/RanboShapeOptionsService';
import {ImageUtility} from '../../../utilities/ImageUtility';

@Component({
    selector: 'demultiplex-view',
    template: require('./demultiplex.view.component.htm')
})
export class DemultiplexViewComponent implements OnInit {

    private static numItems = 6;

    list: StreamItem;
    mapOne: Function<StreamItem, StreamItem> = {
        apply: (streamItem: StreamItem) => new SingleStreamItem(
            streamItem.element.map((element: Element) => this.hip2B.createShape(() => {
                    return {
                        fill: element.options.get('fill'),
                        stroke: element.options.get('stroke'),
                    }
                })
            ))
    };

    sourcePicture = ImageUtility.circleSource;
    mapPicture = ImageUtility.circleSquare;
    private itemsToMoveAlong: StreamItem[] = [];
    private sourceOutputSubject = new BehaviorSubject(null);
    sourceOutput = this.sourceOutputSubject.filter(item => !!item);
    private streamSourceInputSubject = new BehaviorSubject<StreamItem>(null);
    streamSourceInput = this.streamSourceInputSubject.filter(item => !!item);
    private listIndex = -1;

    constructor(private triangleFactory: TriangleStreamItemService,
                private hip2B: SquareStreamItemService,
                private circleService: CircleStreamItemService) {
    }

    ngOnInit(): void {
        this.list = this.circleService.createStreamItems(DemultiplexViewComponent.numItems, RanboShapeOptionsService.createStreamOption)
        this.list.element
            .map(el => [el])
            .map(element => new SingleStreamItem(element))
            .forEach(item => this.itemsToMoveAlong.push(item));
        this.startStreamOne();
    }

    sourceComplete(item: StreamItem) {
        this.sourceOutputSubject.next(item);
    }

    mapOneComplete(steamItem: StreamItem) {
        this.startStreamOne()
    }
    mapOneCompleteNoStart(steamItem: StreamItem) {
    }

    startStreamOne(): void {
        let itemIndex = this.listIndex = ++this.listIndex % DemultiplexViewComponent.numItems;
        this.streamSourceInputSubject.next(this.itemsToMoveAlong[itemIndex]);
    }

}