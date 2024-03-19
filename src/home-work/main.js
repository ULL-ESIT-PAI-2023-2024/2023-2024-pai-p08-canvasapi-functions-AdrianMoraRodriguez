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
import { SinFunction } from './sin_function.js';
import { View } from './view.js';
function main() {
    let scale = 35;
    let view = new View(scale);
    let functionToUse = new SinFunction('red', scale, 1);
    view.drawAxis();
    view.drawMoreThanOneFunction([functionToUse], 14);
}
main();
