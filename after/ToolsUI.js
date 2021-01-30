export class ToolsUI {
  constructor(container) {
    const root = this.createRoot();
    this.createButtons(root);
    this.attachToContainer(container, root);
    this.subscribers = []; //!obserwator - przechowuje funkcje selectedTool z scripts.js
  }

  // stworzenia kontenera na przyciski
  createRoot() {
    const root = document.createElement("div");
    root.classList.add("flex", "flex-column");
    return root;
  }

  // dodajemy przyciski do kontenera
  createButtons(root) {
    root.appendChild(this.createButton("Pencil", "pencil"));
    root.appendChild(this.createButton("Brush", "brush"));
    root.appendChild(this.createButton("Shape", "shape"));
  }

  attachToContainer(container, root) {
    document.querySelector(container).appendChild(root);
  }

  // utworzenie pojedynczego przycisku
  createButton(name, selector) {
    const btn = document.createElement("button");
    btn.setAttribute("data-tool", selector);
    btn.textContent = name;

    // po kliknieciu na button odpalane sąwszystkie funkcje
    btn.addEventListener("click", () => {
      this.subscribers.forEach(s => s(selector));
    });
    return btn;
  }

  //!obserwator - dodanie do tablicy funkcji nasłuchujących z pliku script.js
  subscribe(subscriber) {
    /**
     *
       subscriper = (selectedTool => {
             const tool = factory.getTool(selectedTool);
            board.changeTool(tool);
          })
     * 
     */
    this.subscribers.push(subscriber);
    // console.log("subscribers", this.subscribers);
  }
}

/**
 *
 *    tworzymy reprezentację  w interfejsie użytkownika
 *
 *    wzorzec obserwator
       - subscriber - funkcje które nasłuchują na zmianę narzędzi
       - btn.addEventListener("click", () => jeśli ktośkliknie
         na przycisk to toolsUI rozgłosi żę dany selektor został wybrany
       - ! toolsUI nie wie kto go nasłuchuje - dzieki temu mamy dobrą
         separację logiki związanej z wyborem narzędzi od logiki związanej
         z reagowaniem na taką zmianę
 *
 */
