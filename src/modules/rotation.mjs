import { x, y, first, identity, activeTetromino, type, applyTetromino2, isValidMove } from '/src/modules/utils.mjs';
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
    first(fns.filter(predicate)) ?? identity;

const createRotationFns = model => rotationFn => pivot => kicks =>
    kicks.map(kick => 
        rotationFn(model.x + pivot + x(kick))(model.y + pivot + y(kick)))

const simulateMoves = (tetromino, kicks) =>
    kicks.map(kick => 
        tetromino.map(block => [x(block) + x(kick), y(block) + y(kick)]));

const _rotate = model => rotationFn => stateChangeFn => {
    const kicks = [[0, 0], [1, 0],  [1, -1],  [0, 2],  [1, 2]];

    const c = activeTetromino(model); // get active tetromino
    const simulatedTs = simulateMoves(c, kicks); // move it to the kick positions
    const fns = createRotationFns(model)(rotationFn)(_pivot(type(model)))(kicks);

    for (let index = 0; index < simulatedTs.length; index++) {
        const fn = fns[index];
        const t = simulatedTs[index];
        const rotatedT = t.map(fn); // rotate it
        
        if(isValidMove(model)(rotatedT)) { // validate the move
            const newModel = applyTetromino2(rotatedT, stateChangeFn(model))(kicks[index]);
            return newModel;
        }
    }
    return model;
}

const rotateCW = model => 
    _rotate(model)(_c90)(cwStateChange)

const rotateCCW = model => 
    _rotate(model)(_cc90)(ccwStateChange)

export { rotateCW, rotateCCW, selectFirst, createRotationFns };