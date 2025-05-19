import {  ROWS, COLS } from "/src/modules/logic/utils.mjs";

const COLORS = Object.freeze({
    0: 'empty',
    1: 'cyan',      // I
    2: 'yellow',    // O
    3: 'magenta',   // T
    4: 'blue',      // J
    5: 'orange',    // L
    6: 'limegreen', // S
    7: 'red',       // Z
});

const createSection = () => document.createElement("section");

const createGrid = root => rows => cols => prefix => {
    const section = createSection();
    root.appendChild(section);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let cell = document.createElement("div");
            cell.setAttribute('id', `${prefix}x${col}y${row}`);
            section.appendChild(cell);
        }
    }
}

const createPreview = root => {
    createGrid(root)(4)(6)('p-');
}

const createUI = () => {
    const root = document.getElementById('app');
    createGrid(root)(ROWS)(COLS)('');
    createPreview(root);
}

const _color = symbol => COLORS[symbol] ?? 'lightgrey';

const _draw = x => y => color => prefix => {
    const c = color !== 'empty' ? color : 'inherit';
    document.getElementById(`${prefix}x${x}y${y}`).style.backgroundColor = c;
}

const render = (model, prefix = '') => {
    for (let y = 0; y < model.m.length; y++) {
        for (let x = 0; x < model.m[y].length; x++) {
            _draw(x)(y)(_color(model.m[y][x]))(prefix);
        }
    }
}

export { createUI, render }