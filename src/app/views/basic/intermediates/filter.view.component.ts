import {Component, OnInit} from "@angular/core";
import './filter.view.component.htm';
import {SingleStreamItem} from "../../../stream/SingleStreamItem";
import {StreamItem} from "../../../stream/StreamItem";
import {Predicate} from "../../../stream/Predicate";
import {SquareStreamItemService} from "../../../stream/SquareStreamItemService";
import {CircleStreamItemService} from "../../../stream/CircleStreamItemService";
import {TriangleStreamItemService} from "../../../stream/TriangleStreamItemService";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {RanboShapeOptionsService} from "../../../stream/RanboShapeOptionsService";
import {ImageUtility} from "../../../utilities/ImageUtility";

@Component({
    selector: 'filter-view',
    template: require('./filter.view.component.htm')
})
export class FilterViewComponent implements OnInit {


    private static numItems = 10;

    list: StreamItem;
    filterOne: Predicate<StreamItem> = {
        test: (item: StreamItem) => {
            return item.element.reduce((allMatch, shape) => {
                let color = shape.options.fill.color;
                return allMatch && !(color === 'purple' ||
                    color === 'violet' ||
                    color === 'indigo')
            }, true);
        }
    };
    private itemsToMoveAlong: StreamItem[] = [];
    private sourceOutputSubject = new BehaviorSubject(null);
    sourceOutput = this.sourceOutputSubject.filter(item => !!item);
    private streamSourceInputSubject = new BehaviorSubject<StreamItem>(null);
    streamSourceInput = this.streamSourceInputSubject.filter(item => !!item);
    private listIndex = -1;
    sourcePicture = ImageUtility.circleSource;
    filterPicture = ImageUtility.filterCircle;

    constructor(private triangleFactory: TriangleStreamItemService,
                private hip2B: SquareStreamItemService,
                private circleService: CircleStreamItemService) {
    }

    ngOnInit(): void {
        this.list = this.circleService.createStreamItems(FilterViewComponent.numItems, RanboShapeOptionsService.createStreamOption);
        this.list.element
            .map(el => [el])
            .map(element => new SingleStreamItem(element))
            .forEach(item => this.itemsToMoveAlong.push(item));
        this.startStreamOne();
    }

    sourceComplete(item: StreamItem) {
        this.sourceOutputSubject.next(item);
    }

    filterOneComplete(steamItem: StreamItem) {
        this.startStreamOne();
    }

    startStreamOne(): void {
        let itemIndex = this.listIndex = ++this.listIndex % FilterViewComponent.numItems;
        this.streamSourceInputSubject.next(this.itemsToMoveAlong[itemIndex]);
    }

}
