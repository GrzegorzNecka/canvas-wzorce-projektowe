export class ToolsUI {
  constructor(container) {
    const root = this.createRoot();
    this.createButtons(root);
    this.attachToContainer(container, root);
    this.subscribers = []; //!obserwator
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
    btn.addEventListener("click", () => {
      this.subscribers.forEach(s => s(selector)); //!obserwator
    });
    return btn;
  }

  subscribe(subscriber) { //!obserwator
    this.subscribers.push(subscriber);
  }
}

/**
 *
 *    tworzymy reprezentację  w interfejsie użytkownika
 *
 *    wzorzec obserwator
 *      - subscriber - funkcje które nasłuchują na zmianęnarzędzi
 *      - btn.addEventListener("click", () => jeśli ktośkliknie
 *        na przycisk to toolsUI rozgłosi żę dany selektor został wybrany
 *      - ! toolsUI nie wie kto go nasłuchuje - dzieki temu mamy dobrą 
 *        separację logiki związanej z wyborem narzędzi od logiki związanej 
 *        z reagowaniem na taką zmianę 
 *
 * 
 * 
 */
