import {  i, j, l, o, s, t, z  } from "/src/modules/tetromino.mjs";
import {  applyTetromino  } from "/src/modules/utils.mjs";

// Span wird in Row 0 erfolgen. Eigentlich sind das aber die
// Rows 22, 23, bzw. 22 für das I-Tetro. Das das Koordinaten-
// system auf dem Kopf ist, sind das die Rows -2, -3, bzw. -2.
// Hier im Modell wird das nicht berücksichtigt. Die View 
// zeichnet erst die Row 3 und folgende (0 basiert).
// (siehe https://tetris.wiki/Super_Rotation_System)

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

const _apply = fn => offset => type => model => 
    applyTetromino(fn(Math.floor(model.m[0].length / 2) + offset), model, [0,0], type);

const TYPE_TO_FUNCTION = Object.freeze({
  [TETROMINO_TYPE.I]: _apply(i)(-2)(TETROMINO_TYPE.I),
  [TETROMINO_TYPE.O]: _apply(o)(-1)(TETROMINO_TYPE.O),
  [TETROMINO_TYPE.T]: _apply(t)(-1)(TETROMINO_TYPE.T),
  [TETROMINO_TYPE.J]: _apply(j)(-1)(TETROMINO_TYPE.J),
  [TETROMINO_TYPE.L]: _apply(l)(-1)(TETROMINO_TYPE.L),
  [TETROMINO_TYPE.S]: _apply(s)(-1)(TETROMINO_TYPE.S),
  [TETROMINO_TYPE.Z]: _apply(z)(-1)(TETROMINO_TYPE.Z),
});

const spawn = model => tetrominoType => 
    TYPE_TO_FUNCTION[tetrominoType](model);
   

export{ spawn, TETROMINO_TYPE };