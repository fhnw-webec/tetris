import { LANDED } from "/src/modules/logic/utils.mjs";

const ROW_ONE = 1;

const _startOfPlayfield = model => row => model.m[row] ?? [[LANDED]];

const computeGameOver = model => 
    ({ ...model, go: _startOfPlayfield(model)(ROW_ONE).some(cell => cell >= LANDED) });

export { computeGameOver };