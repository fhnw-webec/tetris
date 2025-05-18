import { test, assert } from "/test/lib/unit-test.mjs"
import { spawn, TETROMINO_TYPE } from '/src/modules/spawn.mjs';
import { equals, move, right, left } from '/src/modules/logic.mjs';
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
        result = lineClear(result);

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
        let result = spawn(m1)(TETROMINO_TYPE.Z);
        result = rotateCW(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = lineClear(result);

        // then
        assert(equals(result, m2), 'Not a correct double line clear');

    }, LINE_CLEAR);

    test('Triple', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0, 11,  0,  0],
            [11, 11,  0,  0, 11, 11, 11,  0, 11, 11],
            [11, 11,  0,  0, 11, 11, 11, 11, 11, 11],
            [11, 11, 11,  0, 11, 11, 11, 11, 11, 11],
            [11, 11, 11,  0, 11, 11, 11, 11, 11, 11],
        ]});

        const m2 = applyMatrix({ x: 2, y: 6, c: LEFT_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0, 11,  0,  0],
            [11, 11,  0,  0, 11, 11, 11,  0, 11, 11],
        ]});
        
        // when
        let result = spawn(m1)(TETROMINO_TYPE.L);
        result = left(result);
        result = rotateCCW(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = lineClear(result);

        // then
        assert(equals(result, m2), 'Not a correct triple line clear');

    }, LINE_CLEAR);

    test('Tetris', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0, 11, 11, 11, 11, 11, 11,  0, 11],
            [ 0,  0, 11, 11, 11, 11, 11, 11,  0, 11],
            [11,  0, 11, 11, 11, 11, 11, 11,  0, 11],
            [11,  0, 11, 11, 11, 11, 11, 11, 11, 11],
            [11,  0, 11, 11, 11, 11, 11, 11, 11, 11],
            [11,  0, 11, 11, 11, 11, 11, 11, 11, 11],
            [11,  0, 11, 11, 11, 11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11, 11, 11, 11,  0, 11],
        ]});

        const m2 = applyMatrix({ x: 0, y: 7, c: LEFT_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0, 11, 11, 11, 11, 11, 11,  0, 11],
            [ 0,  0, 11, 11, 11, 11, 11, 11,  0, 11],
            [11,  0, 11, 11, 11, 11, 11, 11,  0, 11],
            [11, 11, 11, 11, 11, 11, 11, 11,  0, 11],
        ]});
        
        // when
        let result = spawn(m1)(TETROMINO_TYPE.I);
        result = left(result);
        result = left(result);
        result = left(result);
        result = rotateCCW(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = lineClear(result);

        // then
        assert(equals(result, m2), 'Not a correct tetris line clear');

    }, LINE_CLEAR);

    test('Larger line clears', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0, 11,  0,  0,  0],
            [ 0, 11, 11, 11,  0, 11, 11, 11,  0,  0],
            [11, 11, 11, 11, 11, 11, 11, 11, 11,  0],
            [11, 11, 11, 11, 11, 11, 11, 11, 11,  0],
            [11, 11, 11, 11, 11, 11, 11, 11, 11,  0],
            [11, 11, 11, 11, 11, 11, 11, 11, 11,  0],
            [11, 11, 11, 11, 11, 11, 11, 11, 11,  0],
            [11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
        ]});

        const m2 = applyMatrix({ x: 7, y: 7, c: RIGHT_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0, 11,  0,  0,  0],
            [ 0, 11, 11, 11,  0, 11, 11, 11,  0,  0],
            [11, 11, 11, 11, 11, 11, 11, 11, 11,  0],
        ]});
        
        // when
        let result = spawn(m1)(TETROMINO_TYPE.I);
        result = right(result);
        result = right(result);
        result = right(result);
        result = rotateCW(result);
        result = right(result);

        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);

        result = lineClear(result);

        // then
        assert(equals(result, m2), 'Not a correct large line clear');

    }, LINE_CLEAR);

    test('Hurdle, Split', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0, 11, 11,  0],
            [11, 11,  0,  0, 11, 11, 11,  0, 11, 11],
            [11, 11,  0,  0, 11, 11, 11, 11, 11, 11],
            [ 0, 11, 11,  0, 11, 11, 11, 11, 11, 11],
            [11, 11, 11,  0, 11, 11, 11, 11, 11, 11],
        ]});

        const m2 = applyMatrix({ x: 2, y: 6, c: LEFT_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0, 11, 11,  0],
            [11, 11,  0,  0, 11, 11, 11,  0, 11, 11],
            [ 0, 11, 11, 15, 11, 11, 11, 11, 11, 11],
        ]});
        
        // when
        let result = spawn(m1)(TETROMINO_TYPE.L);
        result = rotateCCW(result);
        result = left(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = lineClear(result);

        // then
        assert(equals(result, m2), 'Not a correct split line clear');

    }, LINE_CLEAR);

    test('Noop with active tetromino', () => {
        // given
        const m = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  3,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  3,  3,  3,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0, 11, 11,  0],
            [11, 11,  0,  0, 11, 11, 11,  0, 11, 11],
            [11, 11,  0,  0, 11, 11, 11, 11, 11, 11],
            [ 0, 11, 11,  0, 11, 11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
        ]});
        
        // when
        const result = lineClear(m);

        // then
        assert(equals(result, m), 'Should be a noop');

    }, LINE_CLEAR);

}

export { lineClearTest };