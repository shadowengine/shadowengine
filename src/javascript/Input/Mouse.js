let _X       = -1;
let _Y       = -1;
let _LastX   = -1;
let _LastY   = -1;
let _IsDown  = false;
let _WasDown = false;

let _mouseLetGo = false;

const _normalizeEvent = event => {
  let x = -1, y = -1;

  if(event.x !== undefined || event.y !== undefined) {
    x = event.x;
    y = event.y;
  } else {
    x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return [x, y];
}

$(window).bind("touchstart mouseup",   event => _mouseLetGo = true);
$(window).bind("touchstop mousedown", event => _IsDown = true);
$(window).bind("touchmove mousemove", event => {
  event = _normalizeEvent(event);
  _X = event[0];
  _Y = event[1];
});

export default class Mouse {

  static get X() { return _X; }
  static get Y() { return _Y; }

  static get LastX() { return _LastX; }
  static get LastY() { return _LastY; }

  static get IsDown()  { return _IsDown; }
  static get IsUp()    { return !_IsDown; }

  static get WasDown() { return _WasDown; }
  static get WasUp()   { return !_WasDown; }

  static get JustWentUp()   { return !_IsDown && _WasDown; }
  static get JustWentDown() { return _IsDown && !_WasDown; }

  static get IsMoving()  { return _X != _LastX || _Y != _LastY; }

  static get IsAtLeftEdge()   { return _X <= 10; }
  static get IsAtTopEdge()    { return _Y <= 10; }
  static get IsAtRightEdge()  { return _X <= $(window).width() - 10; }
  static get IsAtBottomEdge() { return _Y <= $(window).height() - 10; }

  static update() {
    _WasDown = _IsDown;
    _LastX = this.X;
    _LastY = this.Y;

    if(_mouseLetGo) {
      _IsDown = false;
      _mouseLetGo = false;
    }
  }

  static IsInsideBBox(x, y, width, height) {
		return Mouse.X >= x && Mouse.X <= x + width && Mouse.Y >= y && Mouse.Y <= y + height;
  }

  static IsInsideBCircle(x, y, radius) {
    const dx = Math.abs(Mouse.X - x);
    const dy = Math.abs(Mouse.Y - y);
    return (dx * dx) + (dy * dy) <= (radius * radius);
  }

}
