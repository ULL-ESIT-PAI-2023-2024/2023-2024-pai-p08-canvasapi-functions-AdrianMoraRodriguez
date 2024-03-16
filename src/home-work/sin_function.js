export class SinFunction {
    constructor(scale, slope = 1, coeficent = 1, constant = 0) {
        this.scale = scale;
        this.slope = slope;
        this.coeficent = coeficent;
        this.constant = constant;
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
        return -this.slope * Math.sin(this.coeficent * pointToEvaluate) + this.constant;
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
        for (let actualX = 0; actualX < canvasWidth; actualX = actualX + this.scale) {
            context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
        }
        context.moveTo(0, this.evaluate(0));
        for (let actualX = 0; actualX > 0 - (canvasWidth / 2); actualX = actualX - this.scale) {
            context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
        }
        context.stroke();
    }
}
