/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez
 * @since Mar 16 2024
 * @desc Implementación dela función President
 */

export class President {
  private static actualPresident: President;
  public static getPresident(): President {
    if (!this.actualPresident) {
      this.actualPresident = new President('Biden');
    }
    return this.actualPresident;
  }
  public getName(): string {
    return this.nameOfPresident;
  }
  private constructor(private nameOfPresident: string) {
    this.nameOfPresident = nameOfPresident;
  }
}
