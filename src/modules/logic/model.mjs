import {  ROWS, COLS, range, fillRow, SPAWN_STATE  } from "/src/modules/logic/utils.mjs";

const createModel = () => ({
    x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE,
    m: range(0)(ROWS).map(row => fillRow(COLS)(0))
});

export { createModel };