export class ExponentialFunction {
    constructor(scale, base = 1, exponent = 1, constant = 0) {
        this.scale = scale;
        this.base = base;
        this.exponent = exponent;
        this.constant = constant;
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
        return -Math.pow(this.base, this.exponent * pointToEvaluate) + this.constant;
    }
    /**
     * @returns the string representation of the function
     */
    toString() {
        return `${this.base}^(${this.exponent}x) + ${this.constant}`;
    }
    /**
     * @param context the canvas context in which the function will be drawn
     */
    draw(context) {
        context.beginPath();
        context.moveTo(0, this.evaluate(0));
        context.strokeStyle = "blue";
        context.lineWidth = 2;
        let canvasWidth = context.canvas.width;
        for (let actualX = 0; actualX < canvasWidth; actualX = actualX + this.scale) {
            context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale); //Esta linea falla
        }
        context.stroke();
        context.beginPath();
        for (let actualX = 0; actualX > 0 - canvasWidth / 2; actualX = actualX - this.scale) {
            context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
        }
        context.stroke();
    }
}
