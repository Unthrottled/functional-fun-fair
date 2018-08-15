import {Component, EventEmitter, Input, Output} from "@angular/core";
import {StreamItem} from "./StreamItem";
import {Observable} from "rxjs/Observable";
import {BiFunction, Function} from './Function';

@Component({
    selector: 'zip-stream',
    template: require('./zip.stream.component.htm'),
    animations: []
})
export class ZipStreamComponent {

    @Output()
    public outputStream = new EventEmitter<StreamItem>();

    //should have made a binary operator instead  ¯\_(ツ)_/¯
    private _zippingFunction: BiFunction<StreamItem, StreamItem, StreamItem>;

    @Input()
    get zippingFunction(): BiFunction<StreamItem, StreamItem, StreamItem> {
        return this._zippingFunction;
    }

    set zippingFunction(value: BiFunction<StreamItem, StreamItem, StreamItem>) {
        this._zippingFunction = value;
    }

    private _inputStream: Observable<StreamItem>;

    @Input()
    get inputStream(): Observable<StreamItem> {
        return this._inputStream;
    }

    set inputStream(value: Observable<StreamItem>) {
        this._inputStream = value;
        tryToCombine();
    }
    private _otherInputStream: Observable<StreamItem>;

    @Input()
    get otherInputStream(): Observable<StreamItem> {
        return this._otherInputStream;
    }

    set otherInputStream(value: Observable<StreamItem>) {
        this._otherInputStream = value;
        this.tryToCombine();
    }

    private _zippedOutputStream: Observable<StreamItem> = Observable.empty();


    get zippedOutputStream(): Observable<StreamItem> {
        return this._zippedOutputStream;
    }

    set zippedOutputStream(value: Observable<StreamItem>) {
        this._zippedOutputStream = value;
    }

    private tryToCombine(): void {
        if(this._inputStream && this._otherInputStream){
            this.zippedOutputStream = this._inputStream.zip(this._otherInputStream, (streamItems: StreamItem[]) => {

            })
        }
    }



    complete(streamItemAtEnd: StreamItem) {
        this.outputStream.emit(streamItemAtEnd);
    }

}