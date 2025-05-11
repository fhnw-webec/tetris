import { x, y, activeTetromino, LANDED } from "/src/modules/utils.mjs";

// coordinate-system: origin is at upper left, x is horizontal, y is vertical
// codes: 0: empty, I: 1, O: 2, T: 3, J: 4, L: 5, S: 6, Z: 7

const simulateMove = (tetromino, dx, dy) =>
    tetromino.map(block => [x(block) + dx, y(block) + dy]);

const isValidMove = (model, tetromino) => tetromino.every(block =>
    y(block) < model.length && x(block) < model[0].length && model[y(block)][x(block)] < LANDED);

const clear = model => model.map(row => row.map(cell => cell < LANDED ? 0 : cell));

const type = model => model.flat().find(e => e > 0 && e < LANDED) || 0;

const applyTetromino = (tetromino, model) => tetromino.reduce((acc, block) => {
    acc[y(block)][x(block)] = type(model);
    return acc;
}, clear(model));

const hasCollisionWithButtom = (model, tetromino) => 
    tetromino.some(block => y(block) + 1 >= model.length || model[y(block) + 1][x(block)] > LANDED);

const mark = model =>
    model.map(row => row.map(cell => (cell > 0 && cell < LANDED ? cell + LANDED : cell)));

const doMove = (model, dx, dy) => {
    const active = activeTetromino(model);
    const simulated = simulateMove(active, dx, dy);
    const current = isValidMove(model, simulated) ? simulated : active;
    const newModel = applyTetromino(current, model);
    return hasCollisionWithButtom(newModel, current) ? mark(newModel) : newModel;
}

// moves
const move = model => doMove(model,  0, 1);
const left = model => doMove(model, -1, 0);
const right = model => doMove(model, 1, 0);

// equals
const equals = (m1, m2) =>
    m1.length === m2.length &&
    m1.every((row, i) =>
        row.length === m2[i].length &&
        row.every((cell, j) => cell === m2[i][j])
    );

export { simulateMove, isValidMove, applyTetromino, move, left, right, equals, type };