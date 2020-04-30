import {Component, OnInit} from '@angular/core';
import './map.view.component.htm';
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
import {StreamElement} from '../../../stream/Types';

@Component({
    selector: 'map-view',
    template: require('./map.view.component.htm')
})
export class MapViewComponent implements OnInit {

    private static numItems = 6;

    list: StreamItem;
    mapOne: Function<StreamItem, StreamItem> = {
        apply: (streamItem: StreamItem) => new SingleStreamItem(
            streamItem.element.map((element: StreamElement) => this.hip2B.createShape(() => {
                    return {
                        fill: element.options.fill,
                        stroke: element.options.stroke,
                    };
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
        this.list = this.circleService.createStreamItems(MapViewComponent.numItems, RanboShapeOptionsService.createStreamOption)
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
        this.startStreamOne();
    }

    startStreamOne(): void {
        let itemIndex = this.listIndex = ++this.listIndex % MapViewComponent.numItems;
        this.streamSourceInputSubject.next(this.itemsToMoveAlong[itemIndex]);
    }

}
