/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez
 * @since Mar 16 2024
 * @desc Implementación dela función exponencial
 */

import { Function } from "./function";

function factorial(numberToCalculate: number): number {
  let factorial = 1;
  for (let actualNuber = 1; actualNuber <= numberToCalculate; actualNuber++) {
    factorial *= actualNuber;
  }
  return factorial;  
}

export class ExponentialFunction implements Function {
  constructor(
    private color: string,
    private scale: number,
    private base: number = 1,
    private exponent: number = 1,
    private constant: number = 0
  ) {
    this.color = color;
    this.scale = scale;
    this.base = base;
    this.exponent = exponent;
    this.constant = constant;
  }

  /**
   * @param pointToEvaluate the point at which the function will be evaluated
   * @returns the result of evaluating the function at the given point
   */
  evaluate(pointToEvaluate: number): number {
    return Math.pow(this.base, this.exponent * pointToEvaluate) + this.constant;
  }

  /**
   * @returns the string representation of the function
   */
  toString(): string {
    return `${this.base}^(${this.exponent}x) + ${this.constant}`;
  }

  evaluateAproxByTaylor(pointToEvaluate: number, gradeToEvaluate: number): number {
    let aproximateSum = 1 + pointToEvaluate;
    for (let grade = 2; grade <= gradeToEvaluate; grade++) {
      aproximateSum += Math.pow(pointToEvaluate, grade) / factorial(grade);
    }
    return aproximateSum;
  }

  drawAprox(grade: number, context:CanvasRenderingContext2D): void {
    context.moveTo(0, this.evaluateAproxByTaylor(0, grade));
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;
    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX++) {
      let actualY = -this.evaluateAproxByTaylor(actualX / this.scale, grade) * this.scale;
      if (actualY < - context.canvas.height ) {
        continue;
      }
      context.lineTo(actualX, this.evaluateAproxByTaylor(actualX/this.scale, grade)* this.scale);
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
    for (let actualX =-canvasWidth; actualX < canvasWidth; actualX++) {
      console.log(this.evaluate(actualX / this.scale) * this.scale);
      let actualY = -this.evaluate(actualX / this.scale) * this.scale;
      if (actualY < - context.canvas.height ) {
        continue;
      }
      context.lineTo(actualX,actualY);
    }
    context.stroke()
  }
}