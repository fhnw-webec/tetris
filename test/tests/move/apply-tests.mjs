import { test, assert } from "../../lib/unit-test.mjs"
import { equals } from "../../../src/modules/logic/move.mjs";
import { applyMatrix, applyTetromino } from "/src/modules/logic/utils.mjs";

function applyTests() {
    const CAT = 'Apply-Tests';

    test('Apply O right', () => {
        // given
        const m1 = applyMatrix({ m: [
            [2, 2, 0],
            [2, 2, 0],
            [0, 0, 0]
        ]});
        const tetromino = [
            [1, 0], [2, 0], [1, 1], [2, 1]
        ];
        const m2 = applyMatrix({ m: [
            [0, 2, 2],
            [0, 2, 2],
            [0, 0, 0]
        ]});

        // when
        const result = applyTetromino(tetromino, m1);

        // then
        assert(equals(result, m2), "tetromino is not at the correct position");

    }, CAT);

    test('Apply O at bottom', () => {
        // given
        const m1 = applyMatrix({ m: [
            [2, 2, 0],
            [2, 2, 0],
            [0, 0, 0]
        ]});
        const tetromino = [
            [1, 1], [2, 1], [1, 2], [2, 2]
        ];
        const m2 = applyMatrix({ m: [
            [0, 0, 0],
            [0, 2, 2],
            [0, 2, 2]
        ]});

        // when
        const result = applyTetromino(tetromino, m1);

        // then
        assert(equals(result, m2), "tetromino is not at the correct position");

    }, CAT);

    test('Apply O identity', () => {
        // given
        const m1 = applyMatrix({ m: [
            [2, 2, 0],
            [2, 2, 0],
            [0, 0, 0]
        ]});
        const tetromino = [
            [0, 0], [1, 0], [0, 1], [1, 1]
        ];
        const m2 = applyMatrix({ m: [
            [2, 2, 0],
            [2, 2, 0],
            [0, 0, 0]
        ]});

        // when
        const result = applyTetromino(tetromino, m1);

        // then
        assert(equals(result, m2), "tetromino is not at the correct position");

    }, CAT);

    test('Apply I on non empty model', () => {
        // given
        const m1 = applyMatrix({ m: [
            [ 1,  1,  1,  1],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [ 0,  0, 12, 12],
            [ 0,  0, 12, 12],
        ]});
        const tetromino = [
            [0, 1], [1, 1], [2, 1], [3, 1]
        ];
        const m2 = applyMatrix({ m: [
            [ 0,  0,  0,  0],
            [ 1,  1,  1,  1],
            [ 0,  0,  0,  0],
            [ 0,  0, 12, 12],
            [ 0,  0, 12, 12],
        ]});

        // when
        const result = applyTetromino(tetromino, m1);

        // then
        assert(equals(result, m2), "tetromino is not at the correct position");

    }, CAT);
}

export { applyTests };