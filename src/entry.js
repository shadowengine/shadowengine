import './less/style.less';

import Engine from "./javascript/Engine";
import Logger from "./javascript/Logger";
import Game from "./javascript/Game";
import Renderer from "./javascript/Renderer";
import ASCII from "./javascript/Renderers/ASCII"
import Canvas2D from "./javascript/Renderers/Canvas2D";
import Canvas3D from "./javascript/Renderers/Canvas3D";
import Scene from "./javascript/Scene";
import Loading from "./javascript/Scenes/Loading";
import GameRTS from "./javascript/Scenes/GameRTS";
import Entity from "./javascript/Entity";
import Component from "./javascript/Component";
import SceneHandler from "./javascript/SceneHandler";
import Mouse from "./javascript/Input/Mouse";

const Renderers  = {Canvas2D, Canvas3D, ASCII};
const Scenes     = {Loading, GameRTS};
const Input      = {Mouse};
const Components = {};

export {
  Engine,
  Logger,
  Game,
  Renderer,
  Renderers,
  Scene,
  Scenes,
  Input,
  Entity,
  Component,
  Components,
  SceneHandler
};
