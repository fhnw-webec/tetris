import { x, y, activeTetromino, applyTetromino, isValidMove, hasCollisionWithButtom, LANDED } from "/src/modules/logic/utils.mjs";

// coordinate-system: origin is at upper left, x is horizontal, y is vertical
// codes: 0: empty, I: 1, O: 2, T: 3, J: 4, L: 5, S: 6, Z: 7

const simulateMove = (tetromino, dx, dy) =>
    tetromino.map(block => [x(block) + dx, y(block) + dy]);

const _mark = model =>
    ({...model, m: model.m.map(row => 
        row.map(cell => 
            (cell > 0 && cell < LANDED ? cell + LANDED : cell)))});

const updatePosition = model => dx => dy => 
    ({ ...model, x: model.x + dx, y: model.y + dy});

const _doMove = (model, dx, dy) => {
    const active = activeTetromino(model);
    const simulated = simulateMove(active, dx, dy);
    const isValid = isValidMove(model)(simulated);
    const current = isValid ? simulated : active;
    const newModel = applyTetromino(current, isValid ? updatePosition(model)(dx)(dy) : model);
    return hasCollisionWithButtom(newModel)(current) ?_mark(newModel) : newModel;
}

// moves
const move = model => _doMove(model,  0, 1);
const left = model => _doMove(model, -1, 0);
const right = model => _doMove(model, 1, 0);

// equality
const equals = (m1, m2) =>
    equalsPos(m1, m2) &&
    equalsState(m1, m2) &&
    equalsMatrix(m1.m, m2.m);

const equalsPos = (m1, m2) =>
    m1.x === m2.x &&
    m1.y === m2.y

const equalsState = (m1, m2) =>
    m1.c === m2.c &&
    m1.p === m2.p

const equalsMatrix = (m1, m2) =>
    m1.length === m2.length &&
    m1.every((row, i) =>
        row.length === m2[i].length &&
        row.every((cell, j) => 
            cell === m2[i][j])
    );

export { move, left, right, equals, equalsPos, equalsState, equalsMatrix, simulateMove };