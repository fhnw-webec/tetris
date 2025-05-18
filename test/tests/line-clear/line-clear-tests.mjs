import { test, assert } from "/test/lib/unit-test.mjs"
import { spawn, TETROMINO_TYPE } from '/src/modules/spawn.mjs';
import { equals, move, right } from '/src/modules/logic.mjs';
import { rotateCCW, rotateCW } from '/src/modules/rotation.mjs';
import { applyMatrix, SPAWN_STATE, LEFT_STATE } from '/src/modules/utils.mjs';
import { lineClear } from '/src/modules/line-clear.mjs';
import { RIGHT_STATE } from "../../../src/modules/utils.mjs";

function lineClearTest() {
    const LINE_CLEAR = 'Line clear tests';

    // see: https://tetris.wiki/Line_clear

    test('Single', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [11,  0, 11,  0, 11,  0,  0,  0,  0,  0],
            [11, 11, 11, 11, 11, 11, 11, 11,  0,  0],
            [11, 11, 11, 11, 11, 11,  0, 11, 11,  0],
        ]});

        const m2 = applyMatrix({ x: 8, y: 4, c: LEFT_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [11,  0, 11,  0, 11,  0,  0,  0,  0, 13],
            [11, 11, 11, 11, 11, 11,  0, 11, 11, 13],
        ]});
        
        // when
        // spawn T
        // move x: 0 y : 1
        // rotate ccw 
        // 5 x right
        // 3 x move
        let result = spawn(m1)(TETROMINO_TYPE.T);
        result = move(result);
        result = rotateCCW(result);
        result = right(result);
        result = right(result);
        result = right(result);
        result = right(result);
        result = right(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = lineClear(model);

        // then
        assert(equals(result, m2), 'Not a correct single line clear');

    }, LINE_CLEAR);

    test('Double', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0, 11],
            [11, 11,  0, 11,  0,  0,  0, 11, 11, 11],
            [11, 11, 11, 11,  0,  0, 11, 11, 11, 11],
            [11, 11, 11, 11,  0, 11, 11, 11, 11, 11],
        ]});

        const m2 = applyMatrix({ x: 3, y: 5, c: RIGHT_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0, 11],
            [11, 11,  0, 11,  0, 17,  0, 11, 11, 11],
        ]});
        
        // when
        // spawn Z
        // rotate cw 
        // 5 x move
        let result = spawn(m1)(TETROMINO_TYPE.Z);
        result = rotateCW(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = lineClear(model);

        // then
        assert(equals(result, m2), 'Not a correct single line clear');

    }, LINE_CLEAR);
}

export { lineClearTest };