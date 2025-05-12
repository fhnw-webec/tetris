import { x, y, activeTetromino, type, applyTetromino } from '/src/modules/utils.mjs';
import { cwStateChange, ccwStateChange } from '/src/modules/wall-kicks.mjs';

const PIVOTS = { 1: 1.5, 2: 0.5  } // 1: I, 2: O
const ALL_PIVOT_EXCEPT_I_O = 1;

const _c90 = px => py => block =>
    [Math.round(-y(block) + py + px), Math.round(x(block) - px + py)]

const _cc90 = px => py => block =>
    [Math.round(y(block) - py + px), Math.round(-x(block) + px + py)]

const _pivot = symbol => 
    PIVOTS.hasOwnProperty(symbol) ? PIVOTS[symbol] : ALL_PIVOT_EXCEPT_I_O;

const _applyPivot = model => rotationFn => pivot =>
    rotationFn(model.x + pivot)(model.y + pivot)

const _rotate = model => rotationFn => stateChangeFn =>
    // try all possible kicks and choose the first one, which is valid
    // if no kick (incuding [0, 0] -> basic rotation) is valid, do nothing
    // the position in the model needs a update according to the kick
    applyTetromino(activeTetromino(model).map(rotationFn), stateChangeFn(model));

const rotateCW = model => 
    _rotate(model)(_applyPivot(model)(_c90)(_pivot(type(model))))(cwStateChange)

const rotateCCW = model => 
    _rotate(model)(_applyPivot(model)(_cc90)(_pivot(type(model))))(ccwStateChange)

export { rotateCW, rotateCCW };