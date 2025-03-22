const LANDED = 10;

const mark = model =>
    model.map(row => row.map(cell => (cell > 0 && cell < LANDED ? cell + LANDED : cell)));

const isActiveTetromino = (model, row, cell) => (0 < model[row][cell] && model[row][cell] < LANDED)

const hasCollisionWithButtom = model => !hasSpaceAround(model, hasLanded)

const hasSpaceAround = (model, predicate = hasLanded) => {
    for (let row = model.length - 1; row >= 0; row--) {
        for (let cell = 0; cell < model[row].length; cell++) {
            if (isActiveTetromino(model, row, cell)) {
                if (predicate(model, row, cell)) {
                    return false;
                }
            }
        }
    }
    return true;
}

const doMove = (model, action, predicate) => {
    let copy = structuredClone(model);
    for (let row = model.length - 1; row >= 0; row--) {
        for (let cell = 0; cell < model[row].length; cell++) {
            if (isActiveTetromino(model, row, cell)) {
                if (hasSpaceAround(model, predicate)) {
                    action(copy, row, cell);
                    copy[row][cell] = 0;
                }
            }
        }
    }
    return hasCollisionWithButtom(copy) ? mark(copy) : copy;
}

// codes: 1: I, 2: O, 3: T, 4: J, 5: L, 6: S, 7: Z

const head = list => list[0];
const last = list => list[list.length - 1];

const activeTetromino = model =>
    model.flatMap((row, i) => row.flatMap((cell, j) => cell < LANDED && cell > 0 ? [[i, j]] : []));

const simulateMove = (tetromino, dx, dy) =>
    tetromino.map(block => [head(block) + dx, last(block) + dy]);

const isValid = (model, tetromino) => tetromino.every(block =>
    head(block) < model.length && last(block) < model[0].length && model[head(block)][last(block)] < LANDED);

const clear = model => model.map(row => row.map(cell => cell < LANDED ? 0 : cell));

const type = model => model.flat().find(e => e > 0 && e < LANDED) || 0;

const applyTetromino = (tetromino, model) => tetromino.reduce((acc, block) => {
    acc[head(block)][last(block)] = type(model);
    return acc;
}, clear(model));

const move = model => {
    const a = activeTetromino(model);
    const s = simulateMove(a, 1, 0);
    const r = isValid(model, s) ? applyTetromino(s, model) : model;
    return hasCollisionWithButtom(r) ? mark(r) : r;
}



// move
const moveDown = (model, row, cell) => model[row + 1][cell] = model[row][cell];

const hasLanded = (model, row, cell) => (row + 1 >= model.length || model[row + 1][cell] > LANDED);

//const move = model => doMove(model, moveDown, hasLanded);


// left
const moveLeft = (model, row, cell) => model[row][cell - 1] = model[row][cell];

const collidesLeft = (model, row, cell) => (cell - 1 < 0 || model[row][cell - 1] > LANDED);

const left = model => doMove(model, moveLeft, collidesLeft);


// right
const moveRight = (model, row, cell) => model[row][cell + 1] = model[row][cell];

const collidesRight = (model, row, cell) => (cell + 1 >= model[0].length || model[row][cell + 1] > LANDED);

const right = model => doMove(model, moveRight, collidesRight);


// equals
const equals = (m1, m2) =>
    m1.length === m2.length &&
    m1.every((row, i) =>
        row.length === m2[i].length &&
        row.every((cell, j) => cell === m2[i][j])
    );

export { activeTetromino, simulateMove, isValid, applyTetromino, move, left, right, equals };