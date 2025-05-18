import { test, assert } from "../../lib/unit-test.mjs"
import { applyMatrix, isValidMove } from "/src/modules/logic/utils.mjs";

function validTests() {
    const CAT = 'Tests if moves are valid';

    test('O move is valid, right', () => {
        // given
        const matrix = applyMatrix({ x: 0, y: 0, m: [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]
        ]});
        const tetromino = [
            [1, 0], [2, 0], [1, 1], [2, 1]
        ];

        // when
        const result = isValidMove(matrix)(tetromino);

        // then
        assert(result, "Not top left O tetromino");

    }, CAT);

    test('O move is valid, down', () => {
        // given
        const matrix = applyMatrix({ x: 0, y: 0, m: [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]
        ]});
        const tetromino = [
            [0, 1], [1, 1], [0, 2], [1, 2]
        ];

        // when
        const result = isValidMove(matrix)(tetromino);

        // then
        assert(result, "Not bottom O tetromino");

    }, CAT);

    test('O move is not valid, off right bounds', () => {
        // given
        const matrix = applyMatrix({ x: 1, y: 0, m: [
            [0, 1, 1],
            [0, 1, 1],
            [0, 0, 0]
        ]});
        const tetromino = [
            [2, 0], [3, 0], [2, 1], [3, 1]
        ];

        // when
        const result = isValidMove(matrix)(tetromino);

        // then
        assert(!result, "Not a valid move");

    }, CAT);

    test('O move is not valid, off left bounds', () => {
        // given
        const matrix = applyMatrix({ x: 0, y: 0, m: [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]
        ]});
        const tetromino = [
            [-1, 0], [0, 0], [-1, 1], [0, 1]
        ];

        // when
        const result = isValidMove(matrix)(tetromino);

        // then
        assert(!result, "Not a valid move");

    }, CAT);

    test('O move is not valid - off bottom bounds', () => {
        // given
        const matrix = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0],
            [1, 1, 0],
            [1, 1, 0]
        ]});
        const tetromino = [
            [0, 2], [1, 2], [0, 3], [1, 3]
        ];

        // when
        const result = isValidMove(matrix)(tetromino);

        // then
        assert(!result, "Not a valid move");

    }, CAT);

    test('T move is valid', () => {
        // given
        const matrix = applyMatrix({ x: 0, y: 0, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 12, 12,  0,  0],
            [ 0,  0,  0,  0, 12, 12,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
        ]});
        const tetromino = [
            [2, 2], [3, 2], [4, 2], [3, 3] 
        ];

        // when
        const result = isValidMove(matrix)(tetromino);

        // then
        assert(result, "Valid move");

    }, CAT);

    test('I move is not valid', () => {
        // given
        const matrix = applyMatrix({ x: 0, y: 0, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 12, 12,  0,  0],
            [ 0,  0,  0,  0, 12, 12,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0],
        ]});
        const tetromino = [
            [4, 4], [4, 5], [4, 6], [4, 7]
        ];

        // when
        const result = isValidMove(matrix)(tetromino);

        // then
        assert(!result, "Not a valid move");

    }, CAT);
}

export { validTests };