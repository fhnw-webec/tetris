function move(model) {
    let copy = structuredClone(model);
    for (let row = 0; row < model.length; row++) {
        for (let cell = 0; cell < model[row].length; cell++) {
            if (model[row][cell] > 0) {
                if ((row + 1) < model.length) {
                    copy[row + 1][cell] = model[row][cell]; // next
                    copy[row][cell] = 0; // previous
                }
            }
        }
    }
    return copy;
}

// const move = model =>
//     model.map((row, rowIndex) =>
//         row.map((cell, colIndex) => {
//             if (cell > 0 && rowIndex + 1 < model.length) {
//                 // Move the value down if possible
//                 return 0;
//             }
//             else if (rowIndex > 0 && model[rowIndex - 1][colIndex] > 0) {
//                 // Move the value from the above row
//                 return model[rowIndex - 1][colIndex];
//             }
//             return cell;
//         }));

const equals = (m1, m2) =>
    m1.length === m2.length &&
    m1.every((row, i) =>
        row.length === m2[i].length &&
        row.every((cell, j) => cell === m2[i][j])
    );

export { move, equals };