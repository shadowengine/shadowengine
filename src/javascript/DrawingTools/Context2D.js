export default class Context2D {

  _context = null;

  constructor(context) {
    this._context = context;
  }

	getContext() {
		return this._context;
	}

	drawCircle(x, y, size, options = {}) {
		const ctx = this._context;

		if(options.color) {
			ctx.strokeStyle = options.color.asRGBA();
			ctx.fillStyle   = options.color.asRGBA();
		}

		if(options.stroke)    ctx.strokeStyle = options.stroke.asRGBA();
		if(options.fill)      ctx.fillStyle   = options.fill.asRGBA();
		if(options.lineWidth) ctx.lineWidth   = options.lineWidth;

		ctx.beginPath();
		ctx.arc(x | 0, y | 0, size, 0, Math.PI * 2, false);
		ctx.stroke();
		ctx.fill();
	}

}
