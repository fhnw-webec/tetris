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
    1.5: I_WALL_KICK_DATA
};

const _index = symbol => STATES.indexOf(symbol);

const _next = c => direction =>
    STATES[(_index(c) + direction + STATES.length) % STATES.length];

const _rotate = model => direction =>
    ({ ...model, p: model.c, c: _next(model.c)(direction) })
    
const cwStateChange = model => _rotate(model)(1)

const ccwStateChange = model => _rotate(model)(-1)

const kickPositions = pivot => model => direction => {
    const nextState = _next(model.c)(direction);
    const key = `${model.c}->${nextState}`;
    return PIVOT_TO_KICK[pivot] ? PIVOT_TO_KICK[pivot][key] : [[0, 0]];
}

export { cwStateChange, ccwStateChange, kickPositions };