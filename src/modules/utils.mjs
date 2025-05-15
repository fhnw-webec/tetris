const LANDED = 10;
const SPAWN_STATE = 'O';
const RIGHT_STATE = 'R';
const LEFT_STATE = 'L';
const TWO_SUCCESSIVE_STATE = '2';

const x = list => list[0];
const y = list => list[list.length - 1];

const first = ls => ls.length > 0 ? ls[0] : null;

const nth = ls => n => (n + 1) <= ls.length ? ls[n] : null;

const identity = _ => _;

const type = model => 
    model.m.flat().find(e => e > 0 && e < LANDED) || 0;

const _clearTetromino = model => 
    ({...model, m: model.m.map(row => 
        row.map(cell => 
            cell < LANDED ? 0 : cell))});

const isValidMove = model => tetromino => 
    tetromino.length !== 0 && tetromino.every(block =>
    y(block) < model.m.length && x(block) < model.m[0].length && model.m[y(block)][x(block)] < LANDED);

const hasCollisionWithButtom = (model) => (tetromino) => 
    tetromino.some(block => 
        y(block) + 1 >= model.m.length || model.m[y(block) + 1][x(block)] > LANDED);

const applyTetromino = (tetromino, model) => 
    applyTetromino(tetromino, model)([0, 0])

const applyTetromino2 = (tetromino, model) => kick => ({
    ...model,
    x: model.x + x(kick),
    y: model.y + y(kick),
    m: tetromino.reduce((acc, block) => {
        acc[y(block)][x(block)] = type(model);
        return acc;
    }, _clearTetromino(model).m)
})

const applyMatrix2 = current => previous => x => y => matrix =>
    ({ m: matrix, c: current, p: previous, x: x, y: y })

const applyMatrix = x => y => matrix =>
    applyMatrix2(SPAWN_STATE)(SPAWN_STATE)(x)(y)(matrix)

const applyMatrix0 = matrix =>
    applyMatrix(0)(0)(matrix)

const activeTetromino = model =>
    model.m.flatMap((row, y) => row.flatMap((cell, x) => cell < LANDED && cell > 0 ? [[x, y]] : []));

export { x, y, first, nth, activeTetromino, LANDED, applyMatrix0, applyMatrix, applyMatrix2, type, applyTetromino, 
    identity, isValidMove, hasCollisionWithButtom, SPAWN_STATE, RIGHT_STATE, LEFT_STATE, TWO_SUCCESSIVE_STATE,
    applyTetromino2 };