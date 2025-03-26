import { test, assert } from "../../lib/unit-test.mjs"
import { equals } from "../../../src/modules/logic.mjs";
import { activeTetromino } from "/src/modules/utils.mjs";

function activeTetrominoTests() {
    const CAT = 'Active Tetromino Tests';

    test('O top left', () => {
        // given
        const matrix = [
            [2, 2, 0],
            [2, 2, 0],
            [0, 0, 0]
        ];
        const tetromino = [
            [0, 0], [1, 0], [0, 1], [1, 1]
        ];

        // when
        const result = activeTetromino(matrix);

        // then
        assert(equals(result, tetromino), "Not top left O tetromino");

    }, CAT);

    test('T top right', () => {
        // given
        const matrix = [
            [0, 3, 3, 3],
            [0, 0, 3, 0],
            [0, 0, 0, 0]
        ];
        const tetromino = [
            [1, 0], [2, 0], [3, 0], [2, 1]
        ];

        // when
        const result = activeTetromino(matrix);

        // then
        assert(equals(result, tetromino), "Not top right T tetromino");

    }, CAT);

    test('T top right, with non empty model', () => {
        // given
        const matrix = [
            [0, 3, 3, 3, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 12, 12, 0, 0],
            [0, 0, 12, 12, 0, 0],
        ];
        const tetromino = [
            [1, 0], [2, 0], [3, 0], [2, 1]
        ];

        // when
        const result = activeTetromino(matrix);

        // then
        assert(equals(result, tetromino), "Not top right T tetromino");

    }, CAT);

}

export { activeTetrominoTests };