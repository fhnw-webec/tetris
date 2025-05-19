import { TETROMINO_TYPE  } from '/src/modules/logic/spawn.mjs';

const _shuffle = array => {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex > 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const _tetrominos = Object.values(TETROMINO_TYPE).slice(1);
let _currentBag = [];
const CURRENT = 0;

const peek = () => {
    if(_currentBag.length < 2) {
        _currentBag = _currentBag.concat(_shuffle(_tetrominos));
    }
    return _currentBag[CURRENT];
}

const next = () => {
    if(_currentBag.length === 0) {
        _currentBag = _shuffle(_tetrominos);
    }
    const n = _currentBag[CURRENT];
    _currentBag = _currentBag.slice(1);
    return n;
}

export { next, peek };