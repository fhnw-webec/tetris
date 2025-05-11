import { x, y, activeTetromino } from '/src/modules/utils.mjs';
import { applyTetromino } from './logic.mjs';

const c90 = px => py => block =>
    [Math.round(-y(block) + py + px), Math.round(x(block) - px + py)]

const cc90 = px => py => block =>
    [Math.round(y(block) - py + px), Math.round(-x(block) + px + py)]

const _rotate = (model, rotationFn) => 
    applyTetromino(activeTetromino(model).map(rotationFn), model);

const rotateCW  = (px, py, model) => _rotate(model, c90(px)(py))
const rotateCCW = (px, py, model) => _rotate(model, cc90(px)(py))

export { rotateCW, rotateCCW };