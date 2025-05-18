import { fillRow, isTetrominoActive, LANDED } from "/src/modules/logic/utils.mjs";

// (see https://tetris.wiki/Line_clear)

const SPAWN_ROWS = 3;

// TODO: Score?
// TODO: Game Over?

const _allTaken = row => row.every(cell => cell > LANDED);

const row = model => index => model.m[index];

const rowLength = model => index => row(model)(index).length;

const bottomY = model => model.m.length - 1;

const removeRow = model => index => ({
    ...model,
    m: [fillRow(rowLength(model)(index))(0)].concat(model.m.filter((_, currentIndex) => currentIndex !== index))
})

const _lineClear = (model, index) => {
    if(index < SPAWN_ROWS) {
        return model;
    }
    if(_allTaken(row(model)(index))) {
        return _lineClear(removeRow(model)(index), index);
    }
    return _lineClear(model, index - 1);
}

const lineClear = model => 
    isTetrominoActive(model) ? model : _lineClear(model, bottomY(model));

export { lineClear };