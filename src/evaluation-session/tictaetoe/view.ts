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



export class View {
  /**
   * @desc Constructor de la clase View
   * @param {HTMLCanvasElement} canvas Canvas del documento
   */
  constructor(
    private table: Transferable,  
    private canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement,
    private context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D) {
      this.table = table;
    }

  /**
   * @desc Dibuja una forma en el canvas
   * @param {Function} functionToDraw Forma a dibujar
   */
  public drawFigureAtPoint(player: Player, positon: number[]): void {
    
  }

  public drawTable(): void {
    
  }
}