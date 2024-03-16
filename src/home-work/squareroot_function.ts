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

export class SquareRootFunction implements Function {
  constructor(private scale: number,private slope: number = 1, private constant: number = 0) {
    this.scale = scale;
    this.slope = slope;
    this.constant = constant;
  }

  /**
   * @param pointToEvaluate the point at which the function will be evaluated
   * @returns the result of evaluating the function at the given point 
   */
  evaluate(pointToEvaluate: number): number {
    return -this.slope * Math.sqrt(pointToEvaluate) + this.constant;
  }

  /**
   * @returns the string representation of the function
   */
  toString(): string {
    return `${this.slope} * sqrt(x) + ${this.constant}`;
  }

  /**
   * @param context the canvas context in which the function will be drawn
   */
  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;
    for (let actualX = 0; actualX < canvasWidth; actualX= actualX + this.scale) {
      context.lineTo(actualX, this.evaluate(actualX/ this.scale) * this.scale);
    }
    context.stroke();
  }
}