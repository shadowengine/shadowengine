import Logger from "./Logger";

export default class SceneHandler {

  _game = null;
  _currentScene = null;

  constructor(game) {
    Logger.debug("SceneHandler", "initializing scene handler...");
    this._game = game;
  }

  getGame() {
    return this._game;
  }

  getCurrentScene() {
    return this._currentScene;
  }

  switchScene(SceneClass, args = {}) {
    if(this._currentScene !== null)
      this._currentScene.destroy();

    const instance = new SceneClass(this, args);
    this._currentScene = instance;
  }

  update(delta) {
    if(this._currentScene !== null)
      this._currentScene.update(delta);
  }

}
