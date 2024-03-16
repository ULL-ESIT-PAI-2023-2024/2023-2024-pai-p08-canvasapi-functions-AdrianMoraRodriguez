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


export interface Function {
  evaluate(x: number): number;
  toString(): string;
  draw(context: CanvasRenderingContext2D): void;
}