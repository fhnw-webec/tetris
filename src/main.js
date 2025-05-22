import { createUI, render, renderPreview } from '/src/modules/view/view.mjs';
import { createModel } from '/src/modules/logic/model.mjs';
import { spawn, spawnStrict } from '/src/modules/logic/spawn.mjs';
import { move, left, right } from '/src/modules/logic/move.mjs';
import { rotateCW, rotateCCW } from '/src/modules/logic/rotation.mjs';
import { lineClear } from '/src/modules/logic/line-clear.mjs';
import { next, peek } from "/src/modules/logic/random-bag.mjs";
import { computeGameOver } from "/src/modules/logic/game-over.mjs";

const ONE_FRAME = 1000 / 60; // Level 1 = 16.67ms, https://tetris.wiki/Marathon
const DELAY = 10 * ONE_FRAME;
const TICK = 40 * ONE_FRAME;

let counter = TICK;

const fastDrop = model => {
    counter = 0;
    return model;
}

const keyBindings = {
  ArrowLeft: left,
  ArrowRight: right,
  ArrowUp: rotateCW,
  ArrowDown: fastDrop,
  z: rotateCCW,
};

const handleKeyPress = event => {
  const action = keyBindings[event.key];
  if (action) {
    counter += DELAY;
    model = action(model);
  }
}

window.addEventListener('keydown', handleKeyPress);

createUI();

let model = createModel();
let preview = createModel(4, 6);

setInterval(() => {
    counter -= ONE_FRAME;
    render(model);
    renderPreview(preview);

    if(counter <= 0) {
        model = spawn(model)(next);
        preview = spawnStrict(preview)(peek);
        model = move(model);
        model = lineClear(model);
        model = computeGameOver(model);

        if(model.go) {
            model = createModel();
            counter = 3 * TICK;
        }
        else {
            counter = TICK;
        }
    }
}, ONE_FRAME);