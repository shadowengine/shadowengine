import Logger from "./Logger";
import Mouse from "./Input/Mouse";
import SceneHandler from "./SceneHandler";

export default class Game {

  _engine = null;
  _sceneHandler = null;

  _stopped = false;

  _accumulator     = 0;
  _lastGlobalTime = 0;
  _lastFrameTime  = 0;
  _lastUpdateTime = 0;

  _$meters     = null;
  _updateMeter = null;
  _frameMeter  = null;

  _updateRate = 1000 / 30;

  constructor(engine) {
    Logger.debug("Game", "initializing game...");

    this._engine = engine;
    this._sceneHandler = new SceneHandler(this);

    this._createMeters();
    $(window).focus(() => {
      this._lastGlobalTime = performance.now();
      this._lastFrameTime  = performance.now();
      this._lastUpdateTime = performance.now();
    })
  }

  getEngine() {
    return this._engine;
  }

  getSceneHandler() {
    return this._sceneHandler;
  }

  start() {
    const loop = () => {
      if(this._stopped) return;

      let delta = this._getGlobalDelta();
      this._accumulator += delta;

      let stepsCount = 0;
      while(this._accumulator >= this._updateRate) {
        this.update(this._updateRate);
        this._accumulator -= this._updateRate;

        if(++stepsCount >= 240) {
          Logger.error("performance is unacceptable. step count: ", stepsCount);
          delta = 0;
          break;
        }
      }
      this.render(delta);

      window.requestAnimationFrame(loop);
    };

    loop();
  }

  stop() {
    this._stopped = true;
  }

  update() {
    this._updateMeter.tickStart();

    const delta = this._getUpdateDelta();
    this.getSceneHandler().update(delta);
    Mouse.update();

    this._updateMeter.tick();
  }

  render() {
    this._frameMeter.tickStart();

    const delta = this._getFrameDelta();
    this.getEngine().getRenderer().draw(this.getSceneHandler().getCurrentScene(), delta);

    this._frameMeter.tick();
  }

  _getGlobalDelta() {
    const now = performance.now();
    const delta = (now - this._lastGlobalTime);
    this._lastGlobalTime = now;
    return delta;
  }

  _getFrameDelta() {
    const now = performance.now();
    const delta = (now - this._lastFrameTime);
    this._lastFrameTime = now;
    return delta;
  }

  _getUpdateDelta() {
    const now = performance.now();
    const delta = (now - this._lastUpdateTime);
    this._lastUpdateTime = now;
    return delta;
  }

  _createMeters() {
    this._$meters = $('<div class="fps-meters"></div>');
    $('body').append(this._$meters);

    this._frameMeter = new FPSMeter(this._$meters.get(0), {
      theme:     'dark',
      heat:      1,
      graph:     1,
      history:   20
    });

    this._updateMeter = new FPSMeter(this._$meters.get(0), {
      theme:    'dark',
      heat:     1,
      graph:    1,
      history:  20,
      maxFps:   this._updateRate,
      top:      '46px',
      labelFps: 'UPS'
    });
  }

}
