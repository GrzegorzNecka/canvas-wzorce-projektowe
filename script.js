import { ToolsUI } from "./after/ToolsUI.js";
import { ToolsFactory } from "./after/ToolsFactory.js";
import { DrawingBoardUI } from "./after/DrawingBoardUI.js";
import { DrawingContextUI } from "./after/DrawingContextUI.js";

// !fabryka - obiekt produkujący narzędzia
const factory = new ToolsFactory();

// obiekt który reprezentuje interfejs związny z pracą z narzędziami
const tools = new ToolsUI(".js-tools");

// przekazujemy mu kontener oraz rozmiary deski do rysowania
// .js-canvas" to klasa ;)
const board = new DrawingBoardUI(".js-canvas", 500, 300);

//wskazuje na elemnet w którym będzie informacja o wybranym narzędziu
const context = new DrawingContextUI(".js-context");

// interfejs z narzędziami na które możemy subskrybować
// selectedTool - argument z wybrnaym narzędziem
// tool  w fabryce produkujemy instancje narzędzia

// !obserwator
tools.subscribe(selectedTool => {
  // console.log("selectedTool", selectedTool);
  const tool = factory.getTool(selectedTool);
  board.changeTool(tool);
});

//powiadamiamy interfejs że narzędzie uległo zmianie

//subskrybenttów może być więcej

tools.subscribe(selectedTool => {
  context.updateContext(selectedTool);
});
