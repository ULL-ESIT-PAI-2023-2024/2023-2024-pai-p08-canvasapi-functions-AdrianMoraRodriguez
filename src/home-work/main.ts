/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez
 * @since Mar 16 2024
 * @desc Implementación del main del programa
 */

import { FirstGradeFunction } from './first_grade_function.js';
import { SecondGradeFunction } from './second_grade_function.js';
import { SinFunction } from './sin_function.js';
import { ExponentialFunction } from './exponential_function.js';
import { SquareRootFunction } from './squareroot_function.js';
import { View } from './view.js';

function main() {
  let scale = 30;
  let view: View = new View(scale);
  let firstGradeFunction = new SquareRootFunction(scale, 1);
  view.drawAxis();
  view.drawFunction(firstGradeFunction);
}

main()