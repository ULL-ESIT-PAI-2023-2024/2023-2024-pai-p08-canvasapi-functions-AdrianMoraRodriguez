/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez
 * @since Mar 16 2024
 * @desc Implementación dela función polinomial de segundo grado
 */
import { Function } from './function.js';
export declare class SecondGradeFunction implements Function {
    private color;
    private scale;
    private slope;
    private coeficent;
    private constant;
    constructor(color: string, scale: number, slope?: number, coeficent?: number, constant?: number);
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
