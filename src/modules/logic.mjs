const mark = model =>
    model.map(row => row.map(cell => (cell > 0 && cell < 10 ? cell + 10 : cell)));

const isActiveTetromino = (model, row, cell) => (0 < model[row][cell] && model[row][cell] < 10)

const hasCollision = model => !hasSpaceAround(model)

const hasSpaceAround = model => {
    for (let row = model.length - 1; row >= 0; row--) {
        for (let cell = 0; cell < model[row].length; cell++) {
            if (isActiveTetromino(model, row, cell)) {
                if (row + 1 >= model.length || model[row + 1][cell] > 10) {
                    return false;
                }
            }
        }
    }
    return true;
}

const move = model => {
    let copy = structuredClone(model);
    for (let row = model.length - 1; row >= 0; row--) {
        for (let cell = 0; cell < model[row].length; cell++) {
            if (isActiveTetromino(model, row, cell)) {
                if (hasSpaceAround(model)) {
                    copy[row + 1][cell] = model[row][cell]; // Move down
                    copy[row][cell] = 0; // Clear previous position
                }
            }
        }
    }
    return hasCollision(copy) ? mark(copy) : copy;
}

const equals = (m1, m2) =>
    m1.length === m2.length &&
    m1.every((row, i) =>
        row.length === m2[i].length &&
        row.every((cell, j) => cell === m2[i][j])
    );

export { move, equals };