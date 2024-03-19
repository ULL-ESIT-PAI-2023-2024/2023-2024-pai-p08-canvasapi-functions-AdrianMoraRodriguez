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
function factorial(numberToCalculate) {
    let factorial = 1;
    for (let actualNuber = 1; actualNuber <= numberToCalculate; actualNuber++) {
        factorial *= actualNuber;
    }
    return factorial;
}
export class ExponentialFunction {
    constructor(color, scale, base = 1, exponent = 1, constant = 0) {
        this.color = color;
        this.scale = scale;
        this.base = base;
        this.exponent = exponent;
        this.constant = constant;
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
    evaluate(pointToEvaluate) {
        return Math.pow(this.base, this.exponent * pointToEvaluate) + this.constant;
    }
    /**
     * @returns the string representation of the function
     */
    toString() {
        return `${this.base}^(${this.exponent}x) + ${this.constant}`;
    }
    evaluateAproxByTaylor(pointToEvaluate, gradeToEvaluate) {
        let aproximateSum = 1 + pointToEvaluate;
        for (let grade = 2; grade <= gradeToEvaluate; grade++) {
            aproximateSum += Math.pow(pointToEvaluate, grade) / factorial(grade);
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
            let actualY = -this.evaluateAproxByTaylor(actualX / this.scale, grade) * this.scale;
            if (actualY < -context.canvas.height) {
                continue;
            }
            context.lineTo(actualX, this.evaluateAproxByTaylor(actualX / this.scale, grade) * this.scale);
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
        let canvasWidth = context.canvas.width;
        for (let actualX = -canvasWidth; actualX < canvasWidth; actualX++) {
            console.log(this.evaluate(actualX / this.scale) * this.scale);
            let actualY = -this.evaluate(actualX / this.scale) * this.scale;
            if (actualY < -context.canvas.height) {
                continue;
            }
            context.lineTo(actualX, actualY);
        }
        context.stroke();
    }
}
