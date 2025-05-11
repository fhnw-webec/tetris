import { x, y, activeTetromino } from '/src/modules/utils.mjs';
import { applyTetromino, type } from './logic.mjs';

const c90 = px => py => block =>
    [Math.round(-y(block) + py + px), Math.round(x(block) - px + py)]

const cc90 = px => py => block =>
    [Math.round(y(block) - py + px), Math.round(-x(block) + px + py)]

const _rotate = (model, rotationFn) => 
    applyTetromino(activeTetromino(model).map(rotationFn), model);

const _pivots = { 1: 1.5, 2: 0.5  } // 1: I, 2: O
const ALL_PIVOT_EXCEPT_I_O = 1;

const _pivot = symbol => 
    _pivots.hasOwnProperty(symbol) ? _pivots[symbol] : ALL_PIVOT_EXCEPT_I_O;

const _applyPivot = rotateFn => x => y => pivot =>
    rotateFn(x + pivot)(y + pivot)

const rotateCW  = (x, y, model) => 
    _rotate(model, _applyPivot(c90)(x)(y)(_pivot(type(model))))

const rotateCCW = (x, y, model) => 
    _rotate(model, _applyPivot(cc90)(x)(y)(_pivot(type(model))))

export { rotateCW, rotateCCW };