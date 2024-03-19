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

export class SecondGradeFunction implements Function {
  constructor(private color: string,private scale: number,private slope: number = 1, private coeficent: number = 0,private constant: number = 0) {
    this.color = color;
    this.scale = scale;
    this.slope = slope;
    this.coeficent = coeficent;
    this.constant = constant;
  }

  /**
   * @param pointToEvaluate the point at which the function will be evaluated
   * @returns the result of evaluating the function at the given point 
   */
  evaluate(pointToEvaluate: number): number {
    return this.slope * pointToEvaluate * pointToEvaluate + pointToEvaluate * this.coeficent + this.constant;
  }

  /**
   * @returns the string representation of the function
   */
  toString(): string {
    return `${this.slope}x^2 + ${this.coeficent}x + ${this.constant}`;
  }

  drawAprox(grade: number, context:CanvasRenderingContext2D): void {
    context.moveTo(0, this.evaluate(0));
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;
    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX++) {
      let actualY = -this.evaluate(actualX / this.scale) * this.scale;
      if (actualY < - context.canvas.height ) {
        continue;
      }
      context.lineTo(actualX, this.evaluate(actualX/this.scale)* this.scale);
    }
    context.stroke();
  }

  /**
   * @param context the canvas context in which the function will be drawn
   */
  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;
    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX++) {
      let actualY = -this.evaluate(actualX / this.scale) * this.scale;
      if (actualY < - context.canvas.height ) {
        continue;
      }
      context.lineTo(actualX, this.evaluate(actualX/ this.scale) * this.scale);
    }
    context.stroke();
  }
}