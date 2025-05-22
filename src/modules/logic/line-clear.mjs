import { fillRow, isTetrominoActive, LANDED, SPAWN_ROWS } from "/src/modules/logic/utils.mjs";

// (see https://tetris.wiki/Line_clear)
const SCORE_UNIT = 100;

const _allTaken = row => row.every(cell => cell > LANDED);

const _row = model => index => model.m[index];

const _rowLength = model => index => _row(model)(index).length;

const _bottomY = model => model.m.length - 1;

const _removeRow = model => index => ({
    ...model,
    m: [fillRow(_rowLength(model)(index))(0)].concat(model.m.filter((_, currentIndex) => currentIndex !== index))
})

const _updateScore = model => ({ ...model, s: model.s + SCORE_UNIT })

const _lineClear = (model, index) => {
    if(index < SPAWN_ROWS) {
        return model;
    }
    if(_allTaken(_row(model)(index))) {
        return _lineClear(_removeRow(_updateScore(model))(index), index);
    }
    return _lineClear(model, index - 1);
}

const lineClear = model => 
    isTetrominoActive(model) ? model : _lineClear(model, _bottomY(model));

export { lineClear, SPAWN_ROWS, SCORE_UNIT };