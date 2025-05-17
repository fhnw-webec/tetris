const R23 = 0;
const R22 = 1;

const i = x => [[x, R22], [x + 1, R22], [x + 2, R22], [x + 3, R22]];
const j = x => [[x, R23], [x, R22], [x + 1, R22], [x + 2, R22]];
const l = x => [[x, R22], [x + 1, R22], [x + 2, R22], [x + 2, R23]];
const o = x => [[x, R23], [x + 1, R23], [x, R22], [x + 1, R22]];
const s = x => [[x, R22], [x + 1, R22], [x + 1, R23], [x + 2, R23]];
const t = x => [[x, R22], [x + 1, R22], [x + 1, R23], [x + 2, R22]];
const z = x => [[x, R23], [x + 1, R23], [x + 1, R22], [x + 2, R22]];

export { i, j, l, o, s, t, z };