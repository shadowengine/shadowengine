export default class Vector2 {

	X = 0;
	Y = 0;

	_invalid = false;

	static Random(min, max) {
		return new Vector2(
			(Math.random() * (max.X - min.X)) + min.X,
			(Math.random() * (max.Y - min.Y)) + min.Y
		);
	}

	static Invalid() {
		return new Vector2(0, 0, false);
	}

	constructor(x, y, valid = true) {
		this.X = x;
		this.Y = y;

		this._valid = valid;
	}

	isValid() { return this._valid; }

	asArray() {
		return [this.X, this.Y];
	}

	asObject() {
		return {
			X: this.X,
			Y: this.Y
		};
	}

	distanceTo(vector2) {
		const a = this.X - vector2.X;
		const b = this.Y - vector2.Y;
		return Math.sqrt((a * a) + (b * b));
	}

}
