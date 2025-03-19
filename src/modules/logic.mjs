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

// move
const moveDown = (model, row, cell) => model[row + 1][cell] = model[row][cell];

const hasLanded = (model, row, cell) => (row + 1 >= model.length || model[row + 1][cell] > LANDED);

const move = model => doMove(model, moveDown, hasLanded);


// left
const moveLeft = (model, row, cell) => model[row][cell - 1] = model[row][cell];

const collidesLeft = (model, row, cell) => (cell - 1 < 0 || model[row][cell - 1] > LANDED);

const left = model => doMove(model, moveLeft, collidesLeft);


// right
const right = model => doMove(model, moveLeft, collidesLeft);

// equals
const equals = (m1, m2) =>
    m1.length === m2.length &&
    m1.every((row, i) =>
        row.length === m2[i].length &&
        row.every((cell, j) => cell === m2[i][j])
    );

export { move, left, right, equals };