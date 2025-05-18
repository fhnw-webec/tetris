import { createGrid, render } from '/src/modules/view/view.mjs';
import { createModel } from '/src/modules/logic/model.mjs';
import { spawn, TETROMINO_TYPE  } from '/src/modules/logic/spawn.mjs';
import { move, left, right } from '/src/modules/logic/move.mjs';
import { rotateCW, rotateCCW } from '/src/modules/logic/rotation.mjs';
import { lineClear } from '/src/modules/logic/line-clear.mjs';


createGrid();

const keyBindings = {
  ArrowLeft: left,
  ArrowRight: right,
  ArrowUp: rotateCW,
  z: rotateCCW,
};

// TODO Lock-Delay!
const ONE_FRAME = 1000 / 60; // Level 1 = 16.67ms, https://tetris.wiki/Marathon
const DELAY = 10 * ONE_FRAME;
const TICK = 50 * ONE_FRAME;

let counter = TICK;

let model = createModel();

function handleKeyPress(event) {
  const action = keyBindings[event.key];
  if (action) {
    counter += DELAY;
    model = action(model);
  }
}

window.addEventListener('keydown', handleKeyPress);

setInterval(() => {
    counter -= ONE_FRAME;
    render(model);

    if(counter < 0) {
        model = spawn(model)(TETROMINO_TYPE.S);
        model = move(model);
        model = lineClear(model);
        counter = TICK;
    }
}, ONE_FRAME);