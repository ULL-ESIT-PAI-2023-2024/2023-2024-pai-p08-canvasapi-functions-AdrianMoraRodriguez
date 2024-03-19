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

import {Function} from './function.js';
import { Axis } from './axis.js';

export class View {
  private axis: Axis;
  /**
   * @desc Constructor de la clase View
   * @param {HTMLCanvasElement} canvas Canvas del documento
   */
  constructor(
    private scale: number,    
    private canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement,
    private context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D) {
      this.scale = scale;
      context.translate(canvas.width / 2, canvas.height / 2);
      this.axis = new Axis(this.scale)
    }

  /**
   * @desc Dibuja una forma en el canvas
   * @param {Function} functionToDraw Forma a dibujar
   */
  public drawFunction(functionToDraw: Function): void {
    functionToDraw.draw(this.context);
  }

  public drawMoreThanOneFunction(functionsToDraw: Function[],grade: number): void {
    for (let functionToDraw of functionsToDraw) {
      functionToDraw.draw(this.context);
      functionToDraw.drawAprox(grade, this.context)

    }
  }

  public drawAxis(): void {
    let axis = new Axis(this.scale);
    axis.drawAxis(this.context);
    axis.drawNumberUnits(this.context);
    axis.drawVerticalLines(this.context);
    axis.drawHorizontalLines(this.context);
  }
}