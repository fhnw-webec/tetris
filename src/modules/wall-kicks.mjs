const STATES = ['O', 'R', '2', 'L'];

const index = symbol => STATES.indexOf(symbol);

const _rotate = model => direction =>
    ({ ...model, p: model.c, c: STATES[(index(model.c) + direction + STATES.length) % STATES.length] })
    
const cwStateChange = model => _rotate(model)(1)

const ccwStateChange = model => _rotate(model)(-1)

export { cwStateChange, ccwStateChange };