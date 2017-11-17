export default class Vector3 {

	X = 0;
	Y = 0;
	Z = 0;

	_invalid = false;

	static Random(min, max) {
		return new Vector2(
			(Math.random() * (max.X - min.X)) + min.X,
			(Math.random() * (max.Y - min.Y)) + min.Y,
			(Math.random() * (max.Z - min.Z)) + min.Z
		);
	}

	static Invalid() {
		return new Vector3(0, 0, 0, false);
	}

	constructor(x, y, z, valid = true) {
		this.X = x;
		this.Y = y;
		this.Z = z;

		this._valid = valid;
	}

	isValid() { return this._valid; }

	asArray() {
		return [this.X, this.Y, this.Z];
	}

	asObject() {
		return {
			X: this.X,
			Y: this.Y,
			Z: this.Z
		};
	}

	distanceTo(vector3) {
		// @todo
		return 0;
	}

}
