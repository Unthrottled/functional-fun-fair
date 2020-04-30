import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StreamItem} from './StreamItem';
import {SingleStreamItem} from './SingleStreamItem';
import {MultiStreamItem} from './MultiStreamItem';
import {StreamElement} from './Types';

@Component({
    selector: 'stream-item',
    template: `
        <div>
            <div *ngIf="heyGurlYouSingle" class="single-item-stream">
                <div *ngFor="let element of elements">
                    <draw-stream-item [element]="element"
                                      (drawn)="itemDrawn()"></draw-stream-item>
                </div>
            </div>
            <div *ngIf="heyGurlYouAFreak" class="multi-item-stream">
                <div *ngFor="let element of elements">
                    <draw-stream-item [element]="element"
                                      (drawn)="itemDrawn()"></draw-stream-item>
                </div>
            </div>
        </div>
    `
})
export class StreamItemComponent implements OnInit {
    @Output()
    private drawn = new EventEmitter<void>();
    private elements: StreamElement[] = [];
    private allElementsAdded = false;
    private numDrawn = 0;

    constructor(private myElement: ElementRef) {
    }

    private _streamItem: StreamItem;

    @Input()
    get streamItem(): StreamItem {
        return this._streamItem;
    }

    set streamItem(value: StreamItem) {
        this._streamItem = value;
    }

    get heyGurlYouSingle(): boolean {
        return this.streamItem instanceof SingleStreamItem;
    }

    get heyGurlYouAFreak(): boolean {
        return this.streamItem instanceof MultiStreamItem;
    }

    ngOnInit(): void {
        this.streamItem.element
            .forEach(element => this.elements.push(element));
        this.allElementsReceived()
    }

    itemDrawn() {
        this.numDrawn++;
        this.tryToComplete();
    }

    private allElementsReceived() {
        this.allElementsAdded = true;
        this.tryToComplete();
    }

    private tryToComplete() {
        if (this.isComplete()) {
            this.drawn.emit();
        }
    }

    private isComplete(): boolean {
        return this.allElementsAdded &&
            this.numDrawn === this.elements.length;
    }
}
