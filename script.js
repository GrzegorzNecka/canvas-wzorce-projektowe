import { ToolsUI } from "./after/ToolsUI.js";
import { ToolsFactory } from "./after/ToolsFactory.js";
import { DrawingBoardUI } from "./after/DrawingBoardUI.js";
import { DrawingContextUI } from "./after/DrawingContextUI.js";

const factory = new ToolsFactory();
const tools = new ToolsUI(".js-tools");
const board = new DrawingBoardUI(".js-canvas", 500, 300);
const context = new DrawingContextUI(".js-context");

tools.subscribe(selectedTool => {
  const tool = factory.getTool(selectedTool);
  board.changeTool(tool);
});

tools.subscribe(selectedTool => {
  context.updateContext(selectedTool);
});

/**
 *
 *
 *   const factory = new ToolsFactory(); //tworzymy
 * 
 *    - obiekt produkujący narzędzia
 *
 *
 * 
 * 
 *   const tools = new ToolsUI(".js-tools");
 * 
 *    - obiekt który reprezentuje interfejs związny z pracą z narzędziami
 *
 * 
 * 
 *
 *   const board = new DrawingBoardUI(".js-canvas", 500, 300);
 * 
 *    - przekazujemy mu kontener oraz rozmiary deski do rysowania
 *
 * 
 * 
 *
 *   const context = new DrawingContextUI(".js-context");
 * 
 *    - wskazuje na elemnet w którym będzie informacja o wybranym narzędziu
 *
 * 
 *
 * 
 *    tools.subscribe(selectedTool => {
 *      const tool = factory.getTool(selectedTool);
 *      board.changeTool(tool);
 *     });
 * 
 *    - interfejs z narzędziałmi na które możemy subskrybować
 *    - selectedTool - argument z wybrnaym narzędziem
 *    - tool  w fabryce produkujemy instancje narzędzia 

 *
 * 
 * 
 *
 *    tools.subscribe(selectedTool => {
 *      context.updateContext(selectedTool);
 *    });
 *
 *    - powiadamiamy interfejs że narzędzie uległo zmianie 
 *
 *
 *
 */
