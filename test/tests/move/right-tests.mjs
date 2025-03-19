import { test, assert } from "../../lib/unit-test.mjs"
import { right, move, equals } from "/src/modules/logic.mjs";

function rightTests() {
    const CAT = 'Right';

    test('O moves in 3x3 matrix, with one right', () => {
        // given
        const m1 = [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]
        ];
        const m2 = [
            [0, 1, 1],
            [0, 1, 1],
            [0, 0, 0]
        ];

        // when
        const result = right(m1);

        // then
        assert(equals(result, m2), "O is not on right edge");

    }, CAT);

    test('O moves in 3x3 matrix, with 2 right, but only one possible', () => {
        // given
        const m1 = [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]
        ];
        const m2 = [
            [0, 1, 1],
            [0, 1, 1],
            [0, 0, 0]
        ];

        // when
        let result = right(m1);
        result = right(result);

        // then
        assert(equals(result, m2), "O, is not on right edge");

    }, CAT);

    test('O moves in 3x3 matrix, with 1 right, but is already landed', () => {
        // given
        const m1 = [
            [ 0,  0,  0],
            [ 0, 11, 11],
            [ 0, 11, 11]
        ];
        const m2 = [
            [ 0,  0,  0],
            [ 0, 11, 11],
            [ 0, 11, 11]
        ];

        // when
        const result = right(m1);

        // then
        assert(equals(result, m2), "O, is not on right edge");

    }, CAT);

    test('I moves in 7x14 matrix, with right and down moves, model is non empty', () => {
        // given
        const m1 = [
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 3,  0,  0,  0,  0,  0,  0],
            [ 3,  0,  0,  0,  0,  0,  0],
            [ 3,  0,  0,  0, 11,  0,  0],
            [ 3,  0,  0, 11, 11,  0,  0],
            [ 0,  0,  0,  0, 11,  0,  0],
            [ 0,  0,  0,  0, 13,  0,  0],
            [ 0,  0,  0,  0, 13,  0,  0],
            [ 0,  0,  0,  0, 13,  0,  0],
            [ 0,  0,  0,  0, 13,  0,  0],
        ];
        const m2 = [
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  3,  0,  0,  0,  0],
            [ 0,  0,  3,  0,  0,  0,  0],
            [ 0,  0,  3,  0, 11,  0,  0],
            [ 0,  0,  3, 11, 11,  0,  0],
            [ 0,  0,  0,  0, 11,  0,  0],
            [ 0,  0,  0,  0, 13,  0,  0],
            [ 0,  0,  0,  0, 13,  0,  0],
            [ 0,  0,  0,  0, 13,  0,  0],
            [ 0,  0,  0,  0, 13,  0,  0],
        ];

        // when
        let result = right(m1);
        result = right(result);
        result = right(result);
        result = right(result); // test, if it stopps
        result = move(result);
        result = move(result);
        result = move(result);
        result = move(result);
        result = right(result);

        // then
        assert(equals(result, m2), "O, is not in col 4 and landed");

    }, CAT);

}

export { rightTests };