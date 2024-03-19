/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez
 * @since Mar 16 2024
 * @desc Implementación de la Clase encargada de dibujar el eje de coordenadas
 */
export declare class Axis {
    private scale;
    constructor(scale: number);
    drawAxis(context: CanvasRenderingContext2D): void;
    drawNumberUnits(context: CanvasRenderingContext2D): void;
    drawVerticalLines(context: CanvasRenderingContext2D): void;
    drawHorizontalLines(context: CanvasRenderingContext2D): void;
    draw(context: CanvasRenderingContext2D): void;
}
