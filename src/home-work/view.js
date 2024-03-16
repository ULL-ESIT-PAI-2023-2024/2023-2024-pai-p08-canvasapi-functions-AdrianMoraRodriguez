import { Axis } from './axis.js';
export class View {
    /**
     * @desc Constructor de la clase View
     * @param {HTMLCanvasElement} canvas Canvas del documento
     */
    constructor(scale, canvas = document.getElementById('canvas'), context = canvas.getContext('2d')) {
        this.scale = scale;
        this.canvas = canvas;
        this.context = context;
        this.scale = scale;
        context.translate(canvas.width / 2, canvas.height / 2);
    }
    /**
     * @desc Dibuja una forma en el canvas
     * @param {Function} functionToDraw Forma a dibujar
     */
    drawFunction(functionToDraw) {
        functionToDraw.draw(this.context);
    }
    drawAxis() {
        let axis = new Axis(this.scale);
        axis.drawAxis(this.context);
        axis.drawNumberUnits(this.context);
        axis.drawVerticalLines(this.context);
        axis.drawHorizontalLines(this.context);
    }
}
