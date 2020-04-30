import {BaseStreamItem} from "./BaseStreamItem";
import {StreamElement} from './Types';

export class MultiStreamItem extends BaseStreamItem {

    //Sure would be nice to have a Mono or Flux :)
    constructor(_element: StreamElement[]) {
        super(_element);
    }
}
