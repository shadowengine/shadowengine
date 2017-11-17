export default class Color {

	R = 0;
	G = 0;
	B = 0;
	A = 0.0;

	_invalid = false;

	static Random(alpha = null) {
		return new Color(
			Math.random() * 255 | 0,
			Math.random() * 255 | 0,
			Math.random() * 255 | 0,
			alpha == null ? Math.random() : alpha
		);
	}

	static Invalid() {
		return new Color(0, 0, 0, 0, false);
	}

	constructor(r, g, b, a = 1.0, valid = true) {
		this.R = r;
		this.G = g;
		this.B = b;
		this.A = a;

		this._valid = valid;
	}

	isValid() { return this._valid; }

	asRGB() {
		return `rgb(${this.R}, ${this.G}, ${this.B})`;
	}

	asRGBA() {
		return `rgba(${this.R}, ${this.G}, ${this.B}, ${this.A})`;
	}

	asHex(rgba = false) {
		const a = ("0" + (this.A * 255).toString(16)).slice(-2);
		const r = ("0" + this.R.toString(16)).slice(-2);
		const g = ("0" + this.G.toString(16)).slice(-2);
		const b = ("0" + this.B.toString(16)).slice(-2);
		return "#" + (rgba ? a : "") + r + g + b;
	}

	asArray(rgba = false) {
		return [this.R, this.G, this.B].concat(rgba ? [this.A] : []);
	}

	asObject() {
		return {
			R: this.R,
			G: this.G,
			B: this.B,
			A: this.A
		};
	}

}
