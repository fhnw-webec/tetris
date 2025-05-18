import { x, y, activeTetromino, type, applyTetromino, isValidMove } from '/src/modules/logic/utils.mjs';
import { cwStateChange, ccwStateChange, kickPositions } from '/src/modules/logic/wall-kicks.mjs';

const PIVOTS = { 1: 1.5, 2: 0.5  } // 1: I, 2: O
const ALL_PIVOT_EXCEPT_I_O = 1;

const _c90 = px => py => block =>
    [Math.round(-y(block) + py + px), Math.round(x(block) - px + py)]

const _cc90 = px => py => block =>
    [Math.round(y(block) - py + px), Math.round(-x(block) + px + py)]

const _pivot = symbol => 
    PIVOTS.hasOwnProperty(symbol) ? PIVOTS[symbol] : ALL_PIVOT_EXCEPT_I_O;

const createRotationFns = model => rotationFn => pivot => kicks =>
    kicks.map(kick => 
        rotationFn(model.x + pivot + x(kick))(model.y + pivot + y(kick)))

const simulateMoves = (tetromino, kicks) =>
    kicks.map(kick => 
        tetromino.map(block => [x(block) + x(kick), y(block) + y(kick)]));

const _rotate = model => rotationFn => stateChangeFn => direction => {
    const pivot = _pivot(type(model));
    const kicks = kickPositions(pivot)(model)(direction);
    const c = activeTetromino(model); // get active tetromino
    const simulatedTs = simulateMoves(c, kicks); // move it to the kick positions
    const fns = createRotationFns(model)(rotationFn)(pivot)(kicks);

    for (let index = 0; index < simulatedTs.length; index++) {
        const fn = fns[index];
        const t = simulatedTs[index];
        const rotatedT = t.map(fn); // rotate it
        
        if(isValidMove(model)(rotatedT)) { // validate the move
            const newModel = applyTetromino(rotatedT, stateChangeFn(model), kicks[index]);
            return newModel;
        }
    }
    return model;
}

const rotateCW = model => 
    _rotate(model)(_c90)(cwStateChange)(1)

const rotateCCW = model => 
    _rotate(model)(_cc90)(ccwStateChange)(-1)

export { rotateCW, rotateCCW, createRotationFns };