import { x, y, activeTetromino, type, applyTetromino } from '/src/modules/utils.mjs';

const PIVOTS = { 1: 1.5, 2: 0.5  } // 1: I, 2: O
const ALL_PIVOT_EXCEPT_I_O = 1;

const c90 = px => py => block =>
    [Math.round(-y(block) + py + px), Math.round(x(block) - px + py)]

const cc90 = px => py => block =>
    [Math.round(y(block) - py + px), Math.round(-x(block) + px + py)]

const _rotate = (model, rotationFn) => 
    applyTetromino(activeTetromino(model).map(rotationFn), model);

const _pivot = symbol => 
    PIVOTS.hasOwnProperty(symbol) ? PIVOTS[symbol] : ALL_PIVOT_EXCEPT_I_O;

const _applyPivot = rotateFn => x => y => pivot =>
    rotateFn(x + pivot)(y + pivot)

const rotateCW  = (model) => 
    _rotate(model, _applyPivot(c90)(model.x)(model.y)(_pivot(type(model))))

const rotateCCW = (model) => 
    _rotate(model, _applyPivot(cc90)(model.x)(model.y)(_pivot(type(model))))

export { rotateCW, rotateCCW };