import {StreamItem} from "./StreamItem";
import {StreamElement} from './Types';

export class BaseStreamItem implements StreamItem {

    //Sure would be nice to have a Mono or Flux :)
    constructor(private _element: StreamElement[]) {
        this._identifier = new Date().getTime();
    }

    get element(): StreamElement[] {
        return this._element;
    }

    private _identifier: number;

    get identifier(): number {
        return this._identifier;
    }

    toString(): String {
        return this._identifier.toString();
    }
}
