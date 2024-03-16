export declare class Axis {
    private scale;
    constructor(scale: number);
    drawAxis(context: CanvasRenderingContext2D): void;
    drawNumberUnits(context: CanvasRenderingContext2D): void;
    drawVerticalLines(context: CanvasRenderingContext2D): void;
    drawHorizontalLines(context: CanvasRenderingContext2D): void;
}
