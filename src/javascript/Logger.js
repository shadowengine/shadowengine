const LEVELS = ["error", "warn", "info", "log"];

let _currentLevel = LEVELS.length;

const _log = (type, source, args) =>{
  const position = LEVELS.indexOf(type);

  if(position === -1)
    throw new Error("invalid logging level");

  if(position > _currentLevel)
    return false;

  console[type].apply(console, ["[" + type.toUpperCase() + "]", "[" + source + "]"].concat(args));
}

export default class Logger {

  static getLevel() {
    return LEVELS[_currentLevel];
  }

  static setLevel(level) {
    const position = LEVELS.indexOf(level);

    if(position === -1)
      throw new Error("invalid logging level");

    _currentLevel = position;
  }

  static error(source, ...args) {
    _log("error", source, args);
  }

  static warn(source, ...args) {
    _log("warn", source, args);
  }

  static info(source, ...args) {
    _log("info", source, args);
  }

  static debug(source, ...args) {
    _log("log", source, args);
  }

  static log(source, ...args) {
    _log("log", source, args);
  }

}
