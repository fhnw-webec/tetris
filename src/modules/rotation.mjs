import { x, y, first, identity, activeTetromino, type, applyTetromino, isValidMove } from '/src/modules/utils.mjs';
import { cwStateChange, ccwStateChange } from '/src/modules/wall-kicks.mjs';

const PIVOTS = { 1: 1.5, 2: 0.5  } // 1: I, 2: O
const ALL_PIVOT_EXCEPT_I_O = 1;

const _c90 = px => py => block =>
    [Math.round(-y(block) + py + px), Math.round(x(block) - px + py)]

const _cc90 = px => py => block =>
    [Math.round(y(block) - py + px), Math.round(-x(block) + px + py)]

const _pivot = symbol => 
    PIVOTS.hasOwnProperty(symbol) ? PIVOTS[symbol] : ALL_PIVOT_EXCEPT_I_O;

const selectFirst = fns => predicate => 
    first(fns.filter(predicate)) ?? identity;  // 

const createRotationFns = model => rotationFn => pivot => kicks =>
    kicks.map(kick => 
        rotationFn(model.x + pivot + x(kick))(model.y + pivot + y(kick)))

const _rotate = model => rotationFn => stateChangeFn => {
    const kicks = [[0, 0], [1, 1]]; // 
    const fns = createRotationFns(model)(rotationFn)(_pivot(type(model)))(kicks);
    const rfn = selectFirst(fns)(fn => isValidMove(model)(activeTetromino(model).map(fn)));
    if(rfn === identity) {
        return model;
    }
    return applyTetromino(activeTetromino(model).map(rfn), stateChangeFn(model));
}

const rotateCW = model => 
    _rotate(model)(_c90)(cwStateChange)

const rotateCCW = model => 
    _rotate(model)(_cc90)(ccwStateChange)

export { rotateCW, rotateCCW, selectFirst, createRotationFns };