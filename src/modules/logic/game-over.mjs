import { SPAWN_ROWS, LANDED } from "/src/modules/logic/utils.mjs";

const _startOfPlayfield = model => row => model.m[row] ?? [[LANDED]];

const computeGameOver = model => 
    ({ ...model, go: _startOfPlayfield(model)(SPAWN_ROWS).some(cell => cell >= LANDED) });

export { computeGameOver };