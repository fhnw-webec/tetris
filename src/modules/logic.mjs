function mark(model) {
    const copy = structuredClone(model);
    for (let row = 0; row < model.length; row++) {
        for (let cell = 0; cell < model[row].length; cell++) {
            if (0 < model[row][cell] && model[row][cell] < 10) {
                copy[row][cell] = copy[row][cell] + 10;
            }
        }
    }
    return copy;
}

function hasSpaceAround(model) {
    for (let row = model.length - 1; row >= 0; row--) {
        for (let cell = 0; cell < model[row].length; cell++) {
            if (0 < model[row][cell] && model[row][cell] < 10) {
                if (row + 1 >= model.length || model[row + 1][cell] > 10) {
                    return false;
                }
            }
        }
    }
    return true;
}

const hasCollision = model => !hasSpaceAround(model)

function move(model) {
    let copy = structuredClone(model);
    for (let row = model.length - 1; row >= 0; row--) {
        for (let cell = 0; cell < model[row].length; cell++) {
            if (0 < model[row][cell] && model[row][cell] < 10) {
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