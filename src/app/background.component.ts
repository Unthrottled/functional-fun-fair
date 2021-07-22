import {AfterViewChecked, AfterViewInit, Component, OnDestroy} from '@angular/core';
import './landing.component.htm';

@Component({
    selector: 'fancy-background',
    template: `
        <div id="main">
            <div>
                <canvas
                        id="backgroundImage"
                        [width]="backgroundWidth"
                        [height]="backgroundHeight"
                >

                </canvas>
            </div>
        </div>
    `
})
export class BackgroundComponent implements AfterViewInit, OnDestroy, AfterViewChecked {
    backgroundWidth: number = 150;
    backgroundHeight: number = 150;


    onResize() {
        this.performBackgroundUpdate();
    }

    ngOnDestroy(): void {
        window.removeEventListener('resize', this.onResize.bind(this));
    }

    ngAfterViewChecked() {
        this.drawBackground();
    }

    ngAfterViewInit(): void {
        this.performBackgroundUpdate();
        window.addEventListener('resize', this.onResize.bind(this));
    }

    private performBackgroundUpdate() {
        this.updateSize();
    }

    private updateSize() {
        const mainCanvas = document.getElementById('main');
        if (mainCanvas) {
            const boundingRect = mainCanvas.getBoundingClientRect();
            this.backgroundHeight = boundingRect.height;
            this.backgroundWidth = boundingRect.width;
        }
    }

    private drawBackground() {
        const backgroundCanvas = document.getElementById(
            'backgroundImage'
        ) as HTMLCanvasElement;
        const ctx = backgroundCanvas.getContext('2d');
        if (!ctx) {
            return;
        }

        const w = this.backgroundWidth;
        const h = this.backgroundHeight;
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.moveTo(0, h * 0.85);
        ctx.quadraticCurveTo(w / 1.85, h, w, h / 2);
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.fillStyle = '#EEEEEE';
        ctx.strokeStyle = '#EEEEEE';
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }
}
