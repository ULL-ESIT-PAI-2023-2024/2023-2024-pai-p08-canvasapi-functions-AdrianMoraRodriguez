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
export class Axis {
    constructor(scale) {
        this.scale = scale;
        this.scale = scale;
    }
    drawAxis(context) {
        context.beginPath();
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.moveTo(0, 0);
        context.lineTo(0, context.canvas.height);
        context.moveTo(0, 0);
        context.lineTo(context.canvas.width, 0);
        context.moveTo(0, 0);
        context.lineTo(0, -context.canvas.height);
        context.moveTo(0, 0);
        context.lineTo(-context.canvas.width, 0);
        context.stroke();
    }
    drawNumberUnits(context) {
        let canvasWidth = context.canvas.width;
        let canvasHeight = context.canvas.height;
        context.font = '10px Arial';
        context.fillStyle = 'black';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        let yPositionOfNumbers = 6;
        let xPositionOfNumbers = -10;
        for (let actualX = 0; actualX < canvasWidth; actualX += this.scale) {
            context.fillText((actualX / this.scale).toString(), actualX, yPositionOfNumbers);
        }
        for (let actualX = 0; actualX > 0 - (canvasWidth / 2); actualX -= this.scale) {
            context.fillText((actualX / this.scale).toString(), actualX, yPositionOfNumbers);
        }
        for (let actualY = 0; actualY < canvasHeight; actualY += this.scale) {
            context.fillText((-actualY / this.scale).toString(), xPositionOfNumbers, actualY);
        }
        for (let actualY = 0; actualY > 0 - (canvasHeight / 2); actualY -= this.scale) {
            context.fillText((-actualY / this.scale).toString(), xPositionOfNumbers, actualY);
        }
    }
    drawVerticalLines(context) {
        context.beginPath();
        context.strokeStyle = 'grey';
        context.lineWidth = 1;
        let separation = 10;
        let canvasWidth = context.canvas.width;
        for (let actualX = 0; actualX < canvasWidth; actualX += this.scale) {
            context.moveTo(actualX, -context.canvas.height);
            for (let height = 5 - context.canvas.height; height < context.canvas.height; height += separation) {
                context.lineTo(actualX, height);
                context.moveTo(actualX, height + 5);
                height += 5;
            }
        }
        context.stroke();
        context.beginPath();
        context.moveTo(0, 0);
        for (let actualX = 0; actualX > 0 - (canvasWidth / 2); actualX -= this.scale) {
            context.moveTo(actualX, -context.canvas.height);
            for (let height = -context.canvas.height; height < context.canvas.height; height += separation) {
                context.lineTo(actualX, height);
                context.moveTo(actualX, height + 5);
                height += 5;
            }
        }
        context.stroke();
    }
    drawHorizontalLines(context) {
        context.beginPath();
        context.strokeStyle = 'grey';
        context.lineWidth = 1;
        let canvasHeight = context.canvas.height;
        for (let actualY = 0; actualY < canvasHeight; actualY += this.scale) {
            context.moveTo(-context.canvas.width, actualY);
            for (let width = 5 - context.canvas.width; width < context.canvas.width; width += 10) {
                context.lineTo(width, actualY);
                context.moveTo(width + 5, actualY);
                width += 5;
            }
        }
        context.stroke();
        context.beginPath();
        context.moveTo(0, 0);
        for (let actualY = 0; actualY > 0 - (canvasHeight / 2); actualY -= this.scale) {
            context.moveTo(-context.canvas.width, actualY);
            for (let width = -context.canvas.width; width < context.canvas.width; width += 10) {
                context.lineTo(width, actualY);
                context.moveTo(width + 5, actualY);
                width += 5;
            }
        }
        context.stroke();
    }
    draw(context) {
        this.drawAxis(context);
        this.drawNumberUnits(context);
        this.drawVerticalLines(context);
        this.drawHorizontalLines(context);
    }
}
