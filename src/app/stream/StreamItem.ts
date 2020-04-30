import {Element} from "@progress/kendo-drawing";
import {Observable} from "rxjs/Observable";
import {StreamElement} from './Types';

export interface StreamItem {

    element: StreamElement[];

    identifier: number;
}
