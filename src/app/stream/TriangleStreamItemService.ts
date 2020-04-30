import {Injectable} from '@angular/core';
import {ShapeOptions} from '@progress/kendo-drawing';
import {RanboShapeOptionsService} from './RanboShapeOptionsService';
import {BaseStreamItemService} from './BaseStreamItemService';
import {StreamElement} from './Types';

@Injectable()
export class TriangleStreamItemService extends BaseStreamItemService {

    createShape(options: () => ShapeOptions): StreamElement {
        // path.moveTo(25, 0)
        //     .lineTo(50, 50)
        //     .lineTo(0, 50)
        //     .close();
        const circleSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        circleSvg.setAttribute('viewbox', '0 0 100 100');
        circleSvg.setAttribute('width', '50px');
        circleSvg.setAttribute('height', '50px');

        const circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circleElement.setAttribute('cx', '25');
        circleElement.setAttribute('cy', '25');
        circleElement.setAttribute('r', '20');
        circleElement.setAttribute('fill', 'red');
        circleSvg.appendChild(circleElement);

        return {
            element: circleSvg,
            options: (options && options()) ||
                RanboShapeOptionsService.createStreamOption(),
        };
    }
}
