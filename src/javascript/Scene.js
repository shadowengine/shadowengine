export default class Scene {

  _sceneHandler = null;

  entities = [];

  constructor(sceneHandler) {
    this._sceneHandler = sceneHandler;
  }

  update(delta) {
    for(let i = 0; i < this.entities.length; i++) {
      this.entities[i].update(delta);
    }
  }

  getSceneHandler() {
    return this._sceneHandler;
  }

  getGame() {
    return this._sceneHandler.getGame();
  }

}
