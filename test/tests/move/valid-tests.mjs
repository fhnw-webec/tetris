import { test, assert } from "../../lib/unit-test.mjs"
import { isValid } from "../../../src/modules/logic.mjs";

function validTests() {
    const CAT = 'Tests if tetrominos are valid';

    test('O move is valid', () => {
        // given
        const matrix = [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]
        ];
        const tetromino = [
            [0, 0], [0, 1], [1, 0], [1, 1]
        ];

        // when
        const result = isValid(matrix, tetromino);

        // then
        assert(result, "Not top left O tetromino");

    }, CAT);

    test('O move is valid', () => {
        // given
        const matrix = [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]
        ];
        const tetromino = [
            [1, 0], [1, 1], [2, 0], [2, 1]
        ];

        // when
        const result = isValid(matrix, tetromino);

        // then
        assert(result, "Not bottom O tetromino");

    }, CAT);

    test('O move is not valid - off right bounds', () => {
        // given
        const matrix = [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]
        ];
        const tetromino = [
            [0, 2], [0, 3], [1, 2], [1, 3]
        ];

        // when
        const result = isValid(matrix, tetromino);

        // then
        assert(!result, "Not a valid move");

    }, CAT);

    test('O move is not valid - off bottom bounds', () => {
        // given
        const matrix = [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]
        ];
        const tetromino = [
            [2, 0], [2, 1], [3, 0], [3, 1]
        ];

        // when
        const result = isValid(matrix, tetromino);

        // then
        assert(!result, "Not a valid move");

    }, CAT);

    test('O move is valid', () => {
        // given
        const matrix = [
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 12, 12,  0,  0],
            [ 0,  0,  0,  0, 12, 12,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
        ];
        const tetromino = [
            [3, 2], [3, 3], [4, 2], [4, 3]
        ];

        // when
        const result = isValid(matrix, tetromino);

        // then
        assert(result, "Valid move");

    }, CAT);

    test('O move is not valid', () => {
        // given
        const matrix = [
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 12, 12,  0,  0],
            [ 0,  0,  0,  0, 12, 12,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
        ];
        const tetromino = [
            [3, 3], [3, 4], [4, 3], [4, 4]
        ];

        // when
        const result = isValid(matrix, tetromino);

        // then
        assert(!result, "Not a valid move");

    }, CAT);
}

export { validTests };