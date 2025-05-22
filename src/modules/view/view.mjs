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

const createElement = name => document.createElement(name);

const createUI = () => {
    const root = document.getElementById('app');
    root.appendChild(createElement('header'));
    const section = createElement('section');
    section.appendChild(createGrid(createElement('article'))(ROWS)(COLS)(''));
    section.appendChild(createGrid(createElement('aside'))(4)(6)('p-'));
    root.appendChild(section);
    return root;
}

const createGrid = node => rows => cols => prefix => {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let cell = document.createElement("div");
            cell.setAttribute('id', `${prefix}x${col}y${row}`);
            node.appendChild(cell);
        }
    }
    return node;
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