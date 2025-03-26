import { x, y, activeTetromino } from '/src/modules/utils.mjs';
import { applyTetromino } from './logic.mjs';

const xs = tetromino => tetromino.map(x);
const ys = tetromino => tetromino.map(y);

const min = (tetromino, selector) => Math.min(...selector(tetromino));
const max = (tetromino, selector) => Math.max(...selector(tetromino));

const pivot = tetromino => 
    [Math.round((min(tetromino, xs) + max(tetromino, xs)) / 2), 
     Math.round((min(tetromino, ys) + max(tetromino, ys)) / 2)]

const c90 = px => py => block =>
    [Math.round(-y(block) + py + px), Math.round(x(block) - px + py)]

const cc90 = px => py => block =>
    [Math.round(y(block) - py + px), Math.round(-x(block) + px + py)]

const _rotate = (model, rotationFn) => 
    applyTetromino(activeTetromino(model).map(rotationFn), model);

const rotateCW  = (px, py, model) => _rotate(model, c90(px)(py))
const rotateCCW = (px, py, model) => _rotate(model, cc90(px)(py))

export { rotateCW, rotateCCW, min, max, xs, ys, pivot };