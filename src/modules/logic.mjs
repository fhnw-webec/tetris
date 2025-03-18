const mark = model =>
    model.map(row => row.map(cell => (cell > 0 && cell < 10 ? cell + 10 : cell)));

const isActiveTetromino = (model, row, cell) => (0 < model[row][cell] && model[row][cell] < 10)

const hasCollision = model => !hasSpaceAround(model)

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
                }
            }
        }
    }
    return hasCollision(copy) ? mark(copy) : copy;
}

const moveDown = (model, row, cell) => {
    model[row + 1][cell] = model[row][cell]; // Move down
    model[row][cell] = 0; // Clear previous position
}

const hasLanded = (model, row, cell) => (row + 1 >= model.length || model[row + 1][cell] > 10);

const move = model => doMove(model, moveDown, hasLanded);


const moveLeft = (model, row, cell) => {
    model[row][cell - 1] = model[row][cell]; // Move down
    model[row][cell] = 0; // Clear previous position
}

const collidesLeft = (model, row, cell) => (cell - 1 < 0 || model[row][cell - 1] > 10);

const left = model => doMove(model, moveLeft, collidesLeft);

const equals = (m1, m2) =>
    m1.length === m2.length &&
    m1.every((row, i) =>
        row.length === m2[i].length &&
        row.every((cell, j) => cell === m2[i][j])
    );

export { move, left, equals };