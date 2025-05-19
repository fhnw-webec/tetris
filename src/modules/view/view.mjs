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

const createGrid = () => {
    const root = document.getElementById('app');
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            let cell = document.createElement("div");
            cell.setAttribute('id', `x${col}y${row}`);
            root.appendChild(cell);
        }
    }
}

const _color = symbol => COLORS[symbol] ?? 'lightgrey';

const _draw = x => y => color => {
    const c = color !== 'empty' ? color : 'inherit';
    document.getElementById(`x${x}y${y}`).style.backgroundColor = c;
}

const render = model => {
    for (let y = 0; y < model.m.length; y++) {
        for (let x = 0; x < model.m[y].length; x++) {
            _draw(x)(y)(_color(model.m[y][x]));
        }
    }
}

export { createGrid, render }