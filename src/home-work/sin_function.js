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
function factorial(numberToCalculate) {
    let factorial = 1;
    for (let actualNuber = 1; actualNuber <= numberToCalculate; actualNuber++) {
        factorial *= actualNuber;
    }
    return factorial;
}
export class SinFunction {
    constructor(color, scale, slope = 1, coeficent = 1, constant = 0) {
        this.color = color;
        this.scale = scale;
        this.slope = slope;
        this.coeficent = coeficent;
        this.constant = constant;
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
    evaluate(pointToEvaluate) {
        return this.slope * Math.sin(this.coeficent * pointToEvaluate) + this.constant;
    }
    /**
     * @param pointToEvaluate the point at which the function will be evaluated
     * @returns the result of evaluating the function at the given point
     */
    evaluateAproxByTaylor(pointToEvaluate, gradeToEvaluate) {
        let aproximateSum = 0;
        aproximateSum += pointToEvaluate;
        let multiplicate = -1;
        for (let grade = 3; grade <= gradeToEvaluate; grade = grade + 2) {
            aproximateSum += multiplicate * Math.pow(pointToEvaluate, grade) / factorial(grade);
            multiplicate *= -1;
        }
        return aproximateSum;
    }
    drawAprox(grade, context) {
        context.moveTo(0, this.evaluateAproxByTaylor(0, grade));
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = 2;
        let canvasWidth = context.canvas.width;
        for (let actualX = -canvasWidth; actualX < canvasWidth; actualX++) {
            let actualY = this.evaluateAproxByTaylor(actualX / this.scale, grade) * this.scale;
            if (actualY < -context.canvas.height) {
                continue;
            }
            context.lineTo(actualX, this.evaluateAproxByTaylor(actualX / this.scale, grade) * this.scale);
        }
        context.stroke();
    }
    /**
     * @returns the string representation of the function
     */
    toString() {
        return `${this.slope} * sin(${this.coeficent}x) + + ${this.constant}`;
    }
    /**
     * @param context the canvas context in which the function will be drawn
     */
    draw(context) {
        context.moveTo(0, this.evaluate(0));
        context.beginPath();
        context.strokeStyle = 'blue';
        context.lineWidth = 2;
        let canvasWidth = context.canvas.width;
        for (let actualX = -canvasWidth; actualX < canvasWidth; actualX++) {
            let actualY = this.evaluate(actualX / this.scale) * this.scale;
            if (actualY < -context.canvas.height) {
                continue;
            }
            context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
        }
        context.stroke();
    }
}
