import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {StreamElement} from './Types';

@Component({
    selector: 'draw-stream-item',
    template: `
        <div class="draw-stream-item"></div>
    `
})
export class DrawStreamItemComponent implements AfterViewInit, OnDestroy {

    @Output()
    private drawn = new EventEmitter<void>();

    constructor(private myElement: ElementRef) {
    }

    private _element: StreamElement;

    @Input()
    get element(): StreamElement {
        return this._element;
    }

    set element(value: StreamElement) {
        this._element = value;
    }


    public ngAfterViewInit(): void {
        this.createSurface().draw(this.element);
        this.drawn.emit();
    }

    public ngOnDestroy() {
    }

    private createSurface(): { draw: (element: StreamElement) => void } {
        return {
            draw: el => this.myElement.nativeElement.append(el.element)
        };
    }
}
