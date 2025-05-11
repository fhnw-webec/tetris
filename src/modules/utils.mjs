const LANDED = 10;

const x = list => list[0];
const y = list => list[list.length - 1];

const type = model => 
    model.m.flat().find(e => e > 0 && e < LANDED) || 0;

const _clearTetromino = model => 
    ({...model, m: model.m.map(row => 
        row.map(cell => 
            cell < LANDED ? 0 : cell))});

const applyTetromino = (tetromino, model) => ({
    ...model,
    m: tetromino.reduce((acc, block) => {
        acc[y(block)][x(block)] = type(model);
        return acc;
    }, _clearTetromino(model).m)
})

const applyMatrix = x => y => matrix =>
    ({ m: matrix, x: x, y: y })

const applyMatrix0 = matrix =>
    applyMatrix(0)(0)(matrix)

const activeTetromino = model =>
    model.m.flatMap((row, y) => row.flatMap((cell, x) => cell < LANDED && cell > 0 ? [[x, y]] : []));

export { x, y, activeTetromino, LANDED, applyMatrix0, applyMatrix, type, applyTetromino };