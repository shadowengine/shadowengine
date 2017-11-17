import Renderer from "../Renderer";

import "fpsmeter";

export default class Canvas2D extends Renderer {

  _$canvas = null;
  _context = null;

  _width = 0;
  _height = 0;

  constructor() {
    super();

    this._$canvas = $('<canvas></canvas>');
    this._context = this._$canvas.get(0).getContext('2d');

    $('body').append(this._$canvas);
    $(window).resize(() => this.resize());

    this.resize();
  }

  getWidth() {
    return this._width;
  }

  getHeight() {
    return this._height;
  }

  resize() {
    this._width  = $('body').width();
    this._height = $('body').height();
    this._$canvas.attr("width", this._width);
    this._$canvas.attr("height", this._height);
  }

  draw(scene, delta) {
    const ctx = this._context;
    ctx.clearRect(0, 0, this._width, this._height);

    for(let i = 0; i < scene.entities.length; i++)
      scene.entities[i].draw(ctx, 0, 0);
  }

}
