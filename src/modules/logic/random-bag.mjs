//import { TETROMINO_TYPE  } from '/src/modules/logic/spawn.mjs';

const TETROMINO_TYPE = Object.freeze({
  EMPTY: 0,
  I: 1,
  O: 2,
  T: 3,
  J: 4,
  L: 5,
  S: 6,
  Z: 7,
});

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

const tetrominos = Object.values(TETROMINO_TYPE);
let currentBag = [];

const next = () => {
    if(currentBag.length === 0) {
        currentBag = _shuffle(tetrominos);
    }
    const n = currentBag[0];
    currentBag = currentBag.slice(1);
    return n;
}

export { next };