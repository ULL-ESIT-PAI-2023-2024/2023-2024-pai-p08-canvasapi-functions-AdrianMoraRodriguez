/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez
 * @since Mar 16 2024
 * @desc Implementación de la función raíz cuadrada
 */
import { Function } from "./function";
export declare class SquareRootFunction implements Function {
    private color;
    private scale;
    private slope;
    private constant;
    constructor(color: string, scale: number, slope?: number, constant?: number);
    /**
     * @param pointToEvaluate the point at which the function will be evaluated
     * @returns the result of evaluating the function at the given point
     */
    evaluate(pointToEvaluate: number): number;
    /**
     * @returns the string representation of the function
     */
    toString(): string;
    drawAprox(grade: number, context: CanvasRenderingContext2D): void;
    /**
     * @param context the canvas context in which the function will be drawn
     */
    draw(context: CanvasRenderingContext2D): void;
}
