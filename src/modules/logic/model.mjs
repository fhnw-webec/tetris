import {  ROWS, COLS, range, fillRow, SPAWN_STATE  } from "/src/modules/logic/utils.mjs";

const createModel = (rows = ROWS, cols = COLS) => ({
    x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, go: false, s: 0,
    m: range(0)(rows).map(row => fillRow(cols)(0))
});

export { createModel };