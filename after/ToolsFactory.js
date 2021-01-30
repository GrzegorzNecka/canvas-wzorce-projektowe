import { Brush } from "./Brush.js";
import { Pencil } from "./Pencil.js";
import { Shape } from "./Shape.js";

export class ToolsFactory {
  constructor() {
    // strategia - każdy interfejs ma te same metody, dzieki czemu możemy na ślepo
    this.brush = new Brush(20, "lightblue"); //!strategia
    this.pencil = new Pencil(3, "red"); //!strategia
    this.shape = new Shape(20, "red"); //!strategia
  }

  getTool(tool) {
    switch (tool) {
      case "brush":
        return this.brush;
      case "pencil":
        return this.pencil;
      case "shape":
        return this.shape;
    }
  }
}

/**
 *
 * Fabryka -  pomaga tworzyć obiekty w kontrolowany sposób
 *
 */
