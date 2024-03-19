/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez
 * @since Mar 16 2024
 * @desc Implementación de la vista del programa
 */
import { Function } from './function.js';
export declare class View {
    private scale;
    private canvas;
    private context;
    private axis;
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
    drawMoreThanOneFunction(functionsToDraw: Function[], grade: number): void;
    drawAxis(): void;
}
