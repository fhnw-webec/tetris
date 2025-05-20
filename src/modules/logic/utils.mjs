const ROWS = 15;
const COLS = 10;

const LANDED = 10;
const SPAWN_ROWS = 3;
const SPAWN_STATE = 'O';
const RIGHT_STATE = 'R';
const LEFT_STATE = 'L';
const TWO_SUCCESSIVE_STATE = '2';

const x = list => list[0];
const y = list => list[list.length - 1]; // TODO, test length ===  2

const first = ls => ls.length > 0 ? ls[0] : null;

const nth = ls => n => (n + 1) <= ls.length ? ls[n] : null;

const identity = _ => _;

const range = from => to => [...Array(to - from).keys().map(n => from + n)];

const fillRow = size => value => range(0)(size).map(_ => value);

const type = model => 
    model.m.flat().find(e => e > 0 && e < LANDED) || 0;

const _clearTetromino = model => 
    ({...model, m: model.m.map(row => 
        row.map(cell => 
            cell < LANDED ? 0 : cell))});

const isValidMove = model => tetromino => 
    tetromino.length !== 0 && tetromino.every(block =>
        x(block) >= 0 && y(block) >= 0 &&
        y(block) < model.m.length && x(block) < model.m[0].length && 
        model.m[y(block)][x(block)] < LANDED);

const hasCollisionWithButtom = (model) => (tetromino) => 
    tetromino.some(block => 
        y(block) + 1 >= model.m.length || model.m[y(block) + 1][x(block)] > LANDED);

const applyTetromino = (tetromino, model, kick = [0, 0], t = type(model)) => ({
    ...model,
    x: model.x + x(kick),
    y: model.y + y(kick),
    m: tetromino.reduce((acc, block) => {
        acc[y(block)][x(block)] = t;
        return acc;
    }, _clearTetromino(model).m)
});

const applyMatrix = ({ x = 0, y = 0, c = SPAWN_STATE, p = SPAWN_STATE, m }) =>
    ({ m: m, c: c, p: p, x: x, y: y })

const activeTetromino = model =>
    model.m.flatMap((row, y) => row.flatMap((cell, x) => cell < LANDED && cell > 0 ? [[x, y]] : []));

const isTetrominoActive = model => activeTetromino(model).length !== 0;

export { x, y, first, nth, activeTetromino, LANDED, applyMatrix, type, applyTetromino, 
         identity, isValidMove, hasCollisionWithButtom, SPAWN_STATE, RIGHT_STATE, LEFT_STATE, 
         TWO_SUCCESSIVE_STATE, range, fillRow, ROWS, COLS, isTetrominoActive, SPAWN_ROWS };