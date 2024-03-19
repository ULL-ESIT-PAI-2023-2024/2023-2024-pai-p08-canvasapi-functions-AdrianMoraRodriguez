/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez
 * @since Mar 16 2024
 * @desc Implementación de la función seno
 */

import { Function } from './function.js';

/**
 * 
 * @param numberToCalculate the number to calculate the factorial of
 * @returns the factorial of the given number
 */
function factorial(numberToCalculate: number): number {
  let factorial = 1;
  for (let actualNuber = 1; actualNuber <= numberToCalculate; actualNuber++) {
    factorial *= actualNuber;
  }
  return factorial;  
}

export class SinFunction implements Function {
  constructor(private color: string,private scale: number,private slope: number = 1, private coeficent: number = 1,private constant: number = 0) {
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
    return this.slope * Math.sin(this.coeficent * pointToEvaluate) + this.constant;
  }

  /**
   * @param pointToEvaluate the point at which the function will be evaluated
   * @returns the result of evaluating the function at the given point 
   */
  evaluateAproxByTaylor(pointToEvaluate: number, gradeToEvaluate: number): number {
    let aproximateSum = 0;
    aproximateSum += pointToEvaluate;
    let sing = -1;
    for (let grade = 3; grade <= gradeToEvaluate; grade = grade + 2) {
      aproximateSum += sing * Math.pow(pointToEvaluate, grade) / factorial(grade);
      sing *= -1;
    }
    return aproximateSum;
  }

  /**
   * 
   * @param grade The grade that is going to be aproximated
   * @param context The canvas context in which the function will be drawn
   */
  drawAprox(grade: number, context:CanvasRenderingContext2D): void {
    context.moveTo(0, this.evaluateAproxByTaylor(0, grade));
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;
    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX++) {
      let actualY = this.evaluateAproxByTaylor(actualX / this.scale, grade) * this.scale;
      if (actualY < - context.canvas.height ) {
        continue;
      }
      context.lineTo(actualX, this.evaluateAproxByTaylor(actualX/this.scale, grade)* this.scale);
    }
    context.stroke();
  }

  /**
   * @returns the string representation of the function
   */
  toString(): string {
    return `${this.slope} * sin(${this.coeficent}x) + + ${this.constant}`;
  }

  /**
   * @param context the canvas context in which the function will be drawn
   */
  draw(context: CanvasRenderingContext2D): void {
    context.moveTo(0, this.evaluate(0));
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;
    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX++) {
      let actualY = this.evaluate(actualX / this.scale) * this.scale;
      if (actualY < - context.canvas.height ) {
        continue;
      }
      context.lineTo(actualX, this.evaluate(actualX/this.scale)* this.scale);
    }
    context.stroke();
  }
}