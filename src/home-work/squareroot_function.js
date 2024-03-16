export class SquareRootFunction {
    constructor(scale, slope = 1, constant = 0) {
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
        return -this.slope * Math.sqrt(pointToEvaluate) + this.constant;
    }
    /**
     * @returns the string representation of the function
     */
    toString() {
        return `${this.slope} * sqrt(x) + ${this.constant}`;
    }
    /**
     * @param context the canvas context in which the function will be drawn
     */
    draw(context) {
        context.beginPath();
        context.strokeStyle = 'blue';
        context.lineWidth = 2;
        let canvasWidth = context.canvas.width;
        for (let actualX = 0; actualX < canvasWidth; actualX = actualX + this.scale) {
            context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
        }
        context.stroke();
    }
}
