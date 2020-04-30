import {Injectable} from '@angular/core';
import {ShapeOptions} from '@progress/kendo-drawing';
import {RanboShapeOptionsService} from './RanboShapeOptionsService';
import {BaseStreamItemService} from './BaseStreamItemService';
import {StreamElement} from './Types';

@Injectable()
export class TriangleStreamItemService extends BaseStreamItemService {

    createShape(options: () => ShapeOptions): StreamElement {
        const triangleSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        triangleSvg.setAttribute('viewbox', '0 0 100 100');
        triangleSvg.setAttribute('width', '50px');
        triangleSvg.setAttribute('height', '50px');

        const shapeOptions: ShapeOptions = (options && options()) ||
            RanboShapeOptionsService.createStreamOption();
        const triangeElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        triangeElement.setAttribute('points', '25,0 50,50 0,50');
        triangeElement.setAttribute('fill', shapeOptions.fill.color);
        triangeElement.setAttribute('stroke', shapeOptions.stroke.color);
        triangeElement.setAttribute('stroke-width', shapeOptions.stroke.width.toString());

        triangleSvg.appendChild(triangeElement);
        return {
            element: triangleSvg,
            options: shapeOptions,
        };
    }
}
