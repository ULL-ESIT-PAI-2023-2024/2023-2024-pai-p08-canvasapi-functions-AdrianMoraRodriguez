/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez
 * @since Mar 15 2024
 * @desc Implementación de la interfaz Function
 */

/**
 * Interfaz que representa una función matemática
 */
export interface Function {
  evaluate(pointToEvaluate: number): number;
  toString(): string;
  draw(context: CanvasRenderingContext2D): void;
  drawAprox(grade: number, context:CanvasRenderingContext2D): void;
}