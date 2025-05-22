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

const PREVIEW_RENDER_PREFIX = 'p-';

const _createElement = name => document.createElement(name);

const createUI = () => {
    const root = document.getElementById('app');
    root.appendChild(_createElement('header'));
    const section = _createElement('section');
    section.appendChild(_createGrid(_createElement('article'))(ROWS)(COLS)(''));
    section.appendChild(_createGrid(_createElement('aside'))(4)(6)('p-'));
    root.appendChild(section);
    return root;
}

const _createGrid = node => rows => cols => prefix => {
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

const _updateGrid = x => y => color => prefix => {
    const c = color !== 'empty' ? color : 'inherit';
    document.getElementById(`${prefix}x${x}y${y}`).style.backgroundColor = c;
}

const _updateScore = model => {
    const header = document.querySelector('body > main > header');
    header.textContent = `Score: ${ model.s }`;
    return model;
}

const _render = model => prefix => {
    for (let y = 0; y < model.m.length; y++) {
        for (let x = 0; x < model.m[y].length; x++) {
            _updateGrid(x)(y)(_color(model.m[y][x]))(prefix);
        }
    }
}

const render = model => {
    model = _updateScore(model);
    _render(model)('');
}

const renderPreview = model => _render(model)(PREVIEW_RENDER_PREFIX);

export { createUI, render, renderPreview }