/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez
 * @since Mar 16 2024
 * @desc Implementación dela función efactorial
 */

/**
 * @desc Calcula el factorial de un número
 */
export function factorial(numberToCalculate: number): number {
  let factorial = 1;
  for (let actualNuber = 1; actualNuber <= numberToCalculate; actualNuber++) {
    factorial *= actualNuber;
  }
  return factorial;  
}