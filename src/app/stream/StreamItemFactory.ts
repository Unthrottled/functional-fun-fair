import { ShapeOptions} from "@progress/kendo-drawing";
import {StreamItem} from "./StreamItem";
import {StreamElement} from './Types';

export interface StreamItemFactory {

    createStreamItem(options?: ()=>ShapeOptions): StreamItem;

    createStreamItems(thisMany: number, options?: ()=>ShapeOptions): StreamItem;

    createShape(options: () => ShapeOptions): StreamElement;
}
