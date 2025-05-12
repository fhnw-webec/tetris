import { x, y } from "/src/modules/utils.mjs";

const STATES = ['O', 'R', '2', 'L'];

const I_WALL_KICK_DATA = {
    'O->R': [[0, 0], [-2, 0], [1, 0],  [-2, 1],  [1, -2]],
    'R->O': [[0, 0], [2, 0],  [-1, 0], [2, -1],  [-1, 2]],
    'R->2': [[0, 0], [-1, 0], [2, 0],  [-1, -2], [2, 1]],
    '2->R': [[0, 0], [1, 0],  [-2, 0], [1, 2],   [-2, -1]],
    '2->L': [[0, 0], [2, 0],  [-1, 0], [2, -1],  [-1, 2]],
    'L->2': [[0, 0], [-2, 0], [1, 0],  [-2, 1],  [1, -2]],
    'L->O': [[0, 0], [1, 0],  [-2, 0], [1, 2],   [-2, -1]],
    'O->L': [[0, 0], [-1, 0], [2, 0],  [-1, -2], [2, 1]],
  };

const OTHER_WALL_KICK_DATA = {
    'O->R': [[0, 0], [-1, 0], [-1, -1], [0, 2],  [-1, 2]],
    'R->O': [[0, 0], [1, 0],  [1, 1],   [0, -2], [1, -2]],
    'R->2': [[0, 0], [1, 0],  [1, 1],   [0, -2], [1, -2]],
    '2->R': [[0, 0], [-1, 0], [-1, -1], [0, 2],  [-1, 2]],
    '2->L': [[0, 0], [1, 0],  [1, -1],  [0, 2],  [1, 2]],
    'L->2': [[0, 0], [-1, 0], [-1, 1],  [0, -2], [-1, -2]],
    'L->O': [[0, 0], [-1, 0], [-1, 1],  [0, -2], [-1, -2]],
    'O->L': [[0, 0], [1, 0],  [1, -1],  [0, 2],  [1, 2]],
};

const PIVOT_TO_KICK = {
    1: OTHER_WALL_KICK_DATA,
    0.5: {  }, // O
    1.5: I_WALL_KICK_DATA
};

const index = symbol => STATES.indexOf(symbol);

const _next = c => direction =>
    STATES[(index(c) + direction + STATES.length) % STATES.length];

const _rotate = model => direction =>
    ({ ...model, p: model.c, c: _next(model.c)(direction) })
    
const cwStateChange = model => _rotate(model)(1)

const ccwStateChange = model => _rotate(model)(-1)

const kicks = rotateFn => x => y => c => pivot => {
    console.log(_next(c), PIVOT_TO_KICK[pivot][`${c}->${_next(c)}`])
    return PIVOT_TO_KICK[pivot][`${c}->${_next(c)}`].map(kick => 
        rotateFn(x + x(kick) + pivot)(y + y(kick) + pivot));
    }

export { cwStateChange, ccwStateChange };