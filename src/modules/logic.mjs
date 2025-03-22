// codes: 1: I, 2: O, 3: T, 4: J, 5: L, 6: S, 7: Z
const LANDED = 10;

const head = list => list[0];
const last = list => list[list.length - 1];

const activeTetromino = model =>
    model.flatMap((row, i) => row.flatMap((cell, j) => cell < LANDED && cell > 0 ? [[i, j]] : []));

const simulateMove = (tetromino, dx, dy) =>
    tetromino.map(block => [head(block) + dx, last(block) + dy]);

const isValidMove = (model, tetromino) => tetromino.every(block =>
    head(block) < model.length && last(block) < model[0].length && model[head(block)][last(block)] < LANDED);

const clear = model => model.map(row => row.map(cell => cell < LANDED ? 0 : cell));

const type = model => model.flat().find(e => e > 0 && e < LANDED) || 0;

const applyTetromino = (tetromino, model) => tetromino.reduce((acc, block) => {
    acc[head(block)][last(block)] = type(model);
    return acc;
}, clear(model));

const hasCollisionWithButtom = (model, tetromino) => 
    tetromino.some(block => head(block) + 1 >= model.length || model[head(block) + 1][last(block)] > LANDED);

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
const move = model => doMove(model, 1,  0);
const left = model => doMove(model, 0, -1);
const right = model => doMove(model, 0, 1);

// equals
const equals = (m1, m2) =>
    m1.length === m2.length &&
    m1.every((row, i) =>
        row.length === m2[i].length &&
        row.every((cell, j) => cell === m2[i][j])
    );

export { activeTetromino, simulateMove, isValidMove, applyTetromino, move, left, right, equals };