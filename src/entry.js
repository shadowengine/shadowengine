import './less/style.less';

import Color from "./javascript/Color";
import Component from "./javascript/Component";
import Engine from "./javascript/Engine";
import Entity from "./javascript/Entity";
import Game from "./javascript/Game";
import Logger from "./javascript/Logger";
import Renderer from "./javascript/Renderer";
import Scene from "./javascript/Scene";
import SceneHandler from "./javascript/SceneHandler";
import Vector2 from "./javascript/Vector2";
import Vector3 from "./javascript/Vector3";

import Context2D from "./javascript/DrawingTools/Context2D";

import Mouse from "./javascript/Input/Mouse";

import ASCII from "./javascript/Renderers/ASCII"
import Canvas2D from "./javascript/Renderers/Canvas2D";
import Canvas3D from "./javascript/Renderers/Canvas3D";

import Loading from "./javascript/Scenes/Loading";
import GameRTS from "./javascript/Scenes/GameRTS";

const Components   = {};
const DrawingTools = {Context2D};
const Input        = {Mouse};
const Renderers    = {Canvas2D, Canvas3D, ASCII};
const Scenes       = {Loading, GameRTS};

export {
	Color,
	Component,
  Engine,
	Entity,
	Game,
  Logger,
  Renderer,
  Scene,
	SceneHandler,
	Vector2,
	Vector3,

	Components,
	DrawingTools,
	Input,
	Renderers,
  Scenes
};
