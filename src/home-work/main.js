import { SquareRootFunction } from './squareroot_function.js';
import { View } from './view.js';
function main() {
    let scale = 30;
    let view = new View(scale);
    let firstGradeFunction = new SquareRootFunction(scale, 1);
    view.drawAxis();
    view.drawFunction(firstGradeFunction);
}
main();
