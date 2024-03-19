/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez
 * @since Mar 16 2024
 * @desc Implementación de la función polinomial de primer grado
 */
export class FirstGradeFunction {
    constructor(color, scale, slope = 1, constant = 0) {
        this.color = color;
        this.scale = scale;
        this.slope = slope;
        this.constant = constant;
        this.scale = scale;
        this.slope = slope;
        this.constant = constant;
    }
    /**
     * @param pointToEvaluate the point at which the function will be evaluated
     * @returns the result of evaluating the function at the given point
     */
    evaluate(pointToEvaluate) {
        return this.slope * pointToEvaluate + this.constant;
    }
    /**
     * @returns the string representation of the function
     */
    toString() {
        return `${this.slope}x + ${this.constant}`;
    }
    drawAprox(grade, context) {
        context.moveTo(0, this.evaluate(0));
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = 2;
        let canvasWidth = context.canvas.width;
        for (let actualX = -canvasWidth; actualX < canvasWidth; actualX++) {
            let actualY = -this.evaluate(actualX / this.scale) * this.scale;
            if (actualY < -context.canvas.height) {
                continue;
            }
            context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
        }
        context.stroke();
    }
    /**
     * @param context the canvas context in which the function will be drawn
     */
    draw(context) {
        context.beginPath();
        context.strokeStyle = 'blue';
        context.lineWidth = 2;
        context.moveTo(0, this.evaluate(0));
        let canvasWidth = context.canvas.width;
        for (let actualX = -canvasWidth; actualX < canvasWidth; actualX++) {
            let actualY = -this.evaluate(actualX / this.scale) * this.scale;
            if (actualY < -context.canvas.height) {
                continue;
            }
            context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
        }
        context.stroke();
    }
}
