import { Function } from './function.js';
export declare class SinFunction implements Function {
    private scale;
    private slope;
    private coeficent;
    private constant;
    constructor(scale: number, slope?: number, coeficent?: number, constant?: number);
    /**
     * @param pointToEvaluate the point at which the function will be evaluated
     * @returns the result of evaluating the function at the given point
     */
    evaluate(pointToEvaluate: number): number;
    /**
     * @returns the string representation of the function
     */
    toString(): string;
    /**
     * @param context the canvas context in which the function will be drawn
     */
    draw(context: CanvasRenderingContext2D): void;
}
