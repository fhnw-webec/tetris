import { test, assert } from "../../lib/unit-test.mjs"
import { equals, equalsMatrix } from "../../../src/modules/logic/move.mjs";
import { activeTetromino, applyMatrix } from "/src/modules/logic/utils.mjs";

function activeTetrominoTests() {
    const CAT = 'Active tetromino tests';

    test('No active tetromino', () => {
        // given
        const model =  applyMatrix({ m: [
            [ 0,  0,  0],
            [ 0, 12,  0],
            [13, 13, 13]
        ]});

        // when
        const result = activeTetromino(model);

        // then
        assert(result.length === 0, "Not top left O tetromino");

    }, CAT);

    test('O top left', () => {
        // given
        const model =  applyMatrix({ m: [
            [2, 2, 0],
            [2, 2, 0],
            [0, 0, 0]
        ]});
        const tetromino = [
            [0, 0], [1, 0], [0, 1], [1, 1]
        ];

        // when
        const result = activeTetromino(model);

        // then
        assert(equalsMatrix(result, tetromino), "Not top left O tetromino");

    }, CAT);

    test('T top right', () => {
        // given
        const model = applyMatrix({ m: [
            [0, 3, 3, 3],
            [0, 0, 3, 0],
            [0, 0, 0, 0]
        ]});
        const tetromino = [
            [1, 0], [2, 0], [3, 0], [2, 1]
        ];

        // when
        const result = activeTetromino(model);

        // then
        assert(equalsMatrix(result, tetromino), "Not top right T tetromino");

    }, CAT);

    test('T top right, with non empty model', () => {
        // given
        const matrix = applyMatrix({ m: [
            [0, 3, 3, 3, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 12, 12, 0, 0],
            [0, 0, 12, 12, 0, 0],
        ]});
        const tetromino = [
            [1, 0], [2, 0], [3, 0], [2, 1]
        ];

        // when
        const result = activeTetromino(matrix);

        // then
        assert(equalsMatrix(result, tetromino), "Not top right T tetromino");

    }, CAT);

    test('I middle (1,4), with non empty model', () => {
        // given
        const matrix = applyMatrix({ m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 12, 12, 0, 0],
            [0, 0, 12, 12, 0, 0],
        ]});
        const tetromino = [
            [1, 3], [2, 3], [3, 3], [4, 3]
        ];

        // when
        const result = activeTetromino(matrix);

        // then
        assert(equalsMatrix(result, tetromino), "Not top right T tetromino");

    }, CAT);

}

export { activeTetrominoTests };