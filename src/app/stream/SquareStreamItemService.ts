import {Injectable} from '@angular/core';
import {ShapeOptions} from '@progress/kendo-drawing';
import {RanboShapeOptionsService} from './RanboShapeOptionsService';
import {BaseStreamItemService} from './BaseStreamItemService';
import {StreamElement} from './Types';

@Injectable()
export class SquareStreamItemService extends BaseStreamItemService {

    createShape(options: () => ShapeOptions): StreamElement {
        const rectSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        rectSvg.setAttribute('viewbox', '0 0 100 100');
        rectSvg.setAttribute('width', '50px');
        rectSvg.setAttribute('height', '50px');

        const shapeOptions: ShapeOptions = (options && options()) ||
            RanboShapeOptionsService.createStreamOption();
        const getRectKid = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        getRectKid.setAttribute('width', '50');
        getRectKid.setAttribute('height', '50');
        getRectKid.setAttribute('fill', shapeOptions.fill.color);
        getRectKid.setAttribute('stroke', shapeOptions.stroke.color);
        getRectKid.setAttribute('stroke-width', shapeOptions.stroke.width.toString());
        rectSvg.appendChild(getRectKid);

        return {
            element: rectSvg,
            options: shapeOptions,
        };
    }
}
