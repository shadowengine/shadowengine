import Logger from "./Logger";

export default class Engine {

  _game     = null;
  _renderer = null;

  constructor(GameClass, RendererClass) {
    Logger.info("Engine", "initializing engine...");
    this._renderer = new RendererClass(this);
    this._game     = new GameClass(this);

    this._game.start();
  }

  getGame() {
    return this._game;
  }

  getRenderer() {
    return this._renderer;
  }

}
