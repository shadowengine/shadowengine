import Renderer from "../Renderer";
import Vector2 from "../Vector2";
import Context2D from "../DrawingTools/Context2D";

import "fpsmeter";

export default class Canvas2D extends Renderer {

  _$canvas = null;
  _context = null;

	_size = Vector2.Invalid();

  constructor() {
    super();

    this._$canvas = $('<canvas></canvas>');
    this._context = this._$canvas.get(0).getContext('2d');
		this._drawing = new Context2D(this._context);

    $('body').append(this._$canvas);
    $(window).resize(() => this.resize());

    this.resize();
  }

  getSize() {
    return this._size;
  }

  resize() {
		this._size = new Vector2($('body').width(), $('body').height());
    this._$canvas.attr("width", this._size.X);
    this._$canvas.attr("height", this._size.Y);
  }

  draw(scene, delta) {
    const ctx = this._context;
    ctx.clearRect(0, 0, this._width, this._height);

    for(let i = 0; i < scene.entities.length; i++)
      scene.entities[i].draw(this._drawing, new Vector2(0, 0));
  }

}
