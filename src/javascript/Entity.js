export default class Entity {

  X = 0;
  Y = 0;
  Z = 0;

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

  draw(ctx, screenX, screenY) {

  }

  update(delta) {
    
  }

}
