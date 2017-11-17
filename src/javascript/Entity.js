import Vector3 from "./Vector3";

export default class Entity {

  _position = Vector3.Invalid();
  _scene = null;

  constructor(scene) {
    this._scene = scene;
  }

  getScene() {
    return this._scene;
  }

  getGame() {
    return this._scene.getGame()
  }

	getPosition() {
		return this._position;
	}

	setPosition(position) {
		this._position = position;
	}

  draw(ctx, screenPosition) {

  }

  update(delta) {

  }

}
