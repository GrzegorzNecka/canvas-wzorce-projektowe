export class Pencil {
  constructor(capSize, color) {
    this._drawing = false;
    this._capSize = capSize || 5;
    this._color = color || "black";
  }

  onMouseMove(x, y, ctx) {
    if (this._drawing) {
      ctx.lineWidth = this._capSize;
      ctx.lineCap = "round";
      ctx.strokeStyle = this._color;
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }

  onMouseUp(x, y, ctx) {
    this._drawing = false;
    ctx.beginPath();
  }

  onMouseDown(x, y, ctx) {
    if (!this._drawing) {
      this._drawing = true;
    }
  }
}

//strategia - wzorzec , dzęki któremu możemy w dynamiczny sposób wymieniać dane elementy na poszczególnych etapach życia aplikacji

// - wzorzec strategia wymaga aby interfejs poszczególnych obiektów  - które są strategiami - był taki sam
