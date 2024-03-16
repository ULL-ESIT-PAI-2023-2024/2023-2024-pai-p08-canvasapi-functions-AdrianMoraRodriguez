import { Function } from './function.js';
export declare class View {
    private scale;
    private canvas;
    private context;
    /**
     * @desc Constructor de la clase View
     * @param {HTMLCanvasElement} canvas Canvas del documento
     */
    constructor(scale: number, canvas?: HTMLCanvasElement, context?: CanvasRenderingContext2D);
    /**
     * @desc Dibuja una forma en el canvas
     * @param {Function} functionToDraw Forma a dibujar
     */
    drawFunction(functionToDraw: Function): void;
    drawAxis(): void;
}
