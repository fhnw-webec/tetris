import { x, y } from '/src/modules/utils.mjs';

const xs = tetromino => tetromino.map(x);
const ys = tetromino => tetromino.map(y);

const min = (tetromino, selector) => Math.min(...selector(tetromino));
const max = (tetromino, selector) => Math.max(...selector(tetromino));

const pivot = tetromino => 
    [Math.round((min(tetromino, xs) + max(tetromino, xs)) / 2), 
     Math.round((min(tetromino, ys) + max(tetromino, ys)) / 2)]

const rotate = model => model;

// (x', y') = (x - pivot.x, y - pivot.y)

//  90 CW: (x, y) → ( y', -x') + pivot
// 180 CW: (x, y) → (-x', -y') + pivot
// 270 CW: (x, y) → (-y',  x') + pivot


export { rotate, min, max, xs, ys, pivot };