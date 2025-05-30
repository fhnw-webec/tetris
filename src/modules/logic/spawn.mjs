import {  i, j, l, o, s, t, z  } from "/src/modules/logic/tetromino.mjs";
import {  applyTetromino, isTetrominoActive  } from "/src/modules/logic/utils.mjs";

// Span wird in Row 0 erfolgen. Eigentlich sind das aber die
// Rows 22, 23, bzw. 22 für das I-Tetro. Da dieses Koordinaten-
// system invertiert ist, sind das die Rows -2, -3, bzw. -2.
// Im Modell wird das nicht berücksichtigt und die erste Zeile
// ist Row 0. Die View zeichnet erst die Row 3 und folgende (0 basiert,
// siehe https://tetris.wiki/Super_Rotation_System).

const TETROMINO_TYPE = Object.freeze({
  EMPTY: 0,
  I: 1,
  O: 2,
  T: 3,
  J: 4,
  L: 5,
  S: 6,
  Z: 7,
});

const _initCoords = model => 
    originX => ({ ...model, x: originX, y: 0 })

const originX = model => 
    offset => Math.floor(model.m[0].length / 2) + offset

const _apply = fn => offset => type => model => 
    applyTetromino(fn(originX(model)(offset)), _initCoords(model)(originX(model)(offset)), [0,0], type);

const TYPE_TO_FUNCTION = Object.freeze({
  [TETROMINO_TYPE.I]: _apply(i)(-2)(TETROMINO_TYPE.I),
  [TETROMINO_TYPE.O]: _apply(o)(-1)(TETROMINO_TYPE.O),
  [TETROMINO_TYPE.T]: _apply(t)(-2)(TETROMINO_TYPE.T),
  [TETROMINO_TYPE.J]: _apply(j)(-2)(TETROMINO_TYPE.J),
  [TETROMINO_TYPE.L]: _apply(l)(-2)(TETROMINO_TYPE.L),
  [TETROMINO_TYPE.S]: _apply(s)(-2)(TETROMINO_TYPE.S),
  [TETROMINO_TYPE.Z]: _apply(z)(-2)(TETROMINO_TYPE.Z),
});

const spawn = model => nextFn => 
    isTetrominoActive(model) ? model : spawnStrict(model)(nextFn);

const spawnStrict = model => nextFn => 
    TYPE_TO_FUNCTION[nextFn()](model);

export{ spawn, spawnStrict, TETROMINO_TYPE };