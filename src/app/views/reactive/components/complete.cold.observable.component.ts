import {Component, Input, OnInit} from '@angular/core';
import './complete.cold.observable.component.htm';
import {SingleStreamItem} from '../../../stream/SingleStreamItem';
import {StreamItem} from '../../../stream/StreamItem';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';
import {Predicate} from '../../../stream/Predicate';
import {Function} from '../../../stream/Function';
import {Scheduler} from 'rxjs/Rx';
import {SquareStreamItemService} from '../../../stream/SquareStreamItemService';
import {CircleStreamItemService} from '../../../stream/CircleStreamItemService';
import {TriangleStreamItemService} from '../../../stream/TriangleStreamItemService';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ImageUtility} from '../../../utilities/ImageUtility';
import {StreamElement} from '../../../stream/Types';

@Component({
    selector: 'complete-cold-view',
    template: require('./complete.cold.observable.component.htm')
})
export class CompleteColdObservableComponent implements OnInit {

    private static numItems = 6;

    list: StreamItem;

    mapOne: Function<StreamItem, StreamItem> = {
        apply: (streamItem: StreamItem) => new SingleStreamItem(
            streamItem.element.map((element: StreamElement) => this.hip2B.createShape(() => {
                    return {
                        fill: element.options.fill,
                        stroke: element.options.stroke,
                    }
                })
            ))
    };

    flatMapOne: Function<StreamItem, Observable<StreamItem>> = {
        apply: (streamItem: StreamItem) => Observable.create((observer: Observer<StreamItem>) => {
            streamItem.element.forEach((element: StreamElement) => {
                let triangle = () =>
                    this.triangleFactory.createStreamItem(() => {
                        return {
                            fill: element.options.fill,
                            stroke: element.options.stroke,
                        }
                    });
                observer.next(triangle());
                Observable.interval(750, Scheduler.async)
                    .take(2)
                    .subscribe(_ => observer.next(triangle()),
                        observer.error,
                        observer.complete);
            });
        })
    };
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
    sourcePicture = ImageUtility.circleSource;
    filterPicture = ImageUtility.filterCircle;
    flatmapPicture = ImageUtility.circleTriangle;
    mapPicture = ImageUtility.triangeSquare;
    private listIndex = -1;
    private sourceOutputSubject = new BehaviorSubject(null);
    sourceOutput = this.sourceOutputSubject.filter(item => !!item);
    private mapSubject = new BehaviorSubject(null);
    private flatMapSubject = new BehaviorSubject(null);
    flatMapOutputStream = this.flatMapSubject.filter(item => !!item);
    private filterSubject = new BehaviorSubject(null);
    filterOutputStream = this.filterSubject.filter(item => !!item);
    private streamSourceInputSubject = new BehaviorSubject<StreamItem>(null);
    streamSourceInput = this.streamSourceInputSubject.filter(item => !!item);

    constructor(private triangleFactory: TriangleStreamItemService,
                private hip2B: SquareStreamItemService,
                private circleService: CircleStreamItemService) {
    }

    private _itemsToMoveAlong: StreamItem[] = [];

    @Input()
    get itemsToMoveAlong(): StreamItem[] {
        return this._itemsToMoveAlong;
    }

    set itemsToMoveAlong(value: StreamItem[]) {
        this._itemsToMoveAlong = value;
    }

    sourceComplete(item: StreamItem) {
        this.sourceOutputSubject.next(item);
    }

    flatMapOneComplete(steamItem: StreamItem) {
        this.flatMapSubject.next(steamItem)
    }

    mapOneComplete(steamItem: StreamItem) {
        this.mapSubject.next(steamItem)
    }

    filterOneComplete(streamItem: StreamItem) {
        this.filterSubject.next(streamItem);
    }

    startStreamOne(): void {
        const itemIndex = this.listIndex = ++this.listIndex % CompleteColdObservableComponent.numItems;
        this.streamSourceInputSubject.next(this._itemsToMoveAlong[itemIndex]);
    }


    ngOnInit(): void {
        Observable.interval(2000).subscribe(() => this.startStreamOne())

    }

    ngAfterViewInit(): void {
    }

}
