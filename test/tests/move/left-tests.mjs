import { test, assert } from "../../lib/unit-test.mjs"
import { left, move, equals } from "/src/modules/logic.mjs";
import { applyMatrix } from "/src/modules/utils.mjs";

function oneLeftTest() {
    const CAT = 'Left';

    test('O moves in 3x3 matrix, with one left', () => {
        // given
        const m1 = applyMatrix(1)(0)([
            [0, 2, 2],
            [0, 2, 2],
            [0, 0, 0]
        ]);
        const m2 = applyMatrix(0)(0)([
            [2, 2, 0],
            [2, 2, 0],
            [0, 0, 0]
        ]);

        // when
        const result = left(m1);

        // then
        assert(equals(result, m2), "O is not on left edge");

    }, CAT);

    test('O moves in 3x3 matrix, with 2 left, but only one possible', () => {
        // given
        const m1 = applyMatrix(1)(0)([
            [0, 2, 2],
            [0, 2, 2],
            [0, 0, 0]
        ]);
        const m2 = applyMatrix(0)(0)([
            [2, 2, 0],
            [2, 2, 0],
            [0, 0, 0]
        ]);

        // when
        let result = left(m1);
        result = left(result);

        // then
        assert(equals(result, m2), "O, is not on left edge");

    }, CAT);

    test('O moves in 3x3 matrix, with 1 left, but is already landed', () => {
        // given
        const m1 = applyMatrix(1)(1)([
            [ 0,  0,  0],
            [ 0, 12, 12],
            [ 0, 12, 12]
        ]);
        const m2 = applyMatrix(1)(1)([
            [ 0,  0,  0],
            [ 0, 12, 12],
            [ 0, 12, 12]
        ]);

        // when
        const result = left(m1);

        // then
        assert(equals(result, m2), "O, is not on left edge");

    }, CAT);

    test('I moves in 7x14 matrix, with left and down moves, model is non empty', () => {
        // given
        const m1 = applyMatrix(6)(5)([
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0, 11,  0,  0,  0,  3],
            [ 0,  0, 11, 11,  0,  0,  3],
            [ 0,  0, 11,  0,  0,  0,  3],
            [ 0,  0, 13,  0,  0,  0,  3],
            [ 0,  0, 13,  0,  0,  0,  0],
            [ 0,  0, 13,  0,  0,  0,  0],
            [ 0,  0, 13,  0,  0,  0,  0],
        ]);
        const m2 = applyMatrix(4)(8)([
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0],
            [ 0,  0, 11,  0,  0,  0,  0],
            [ 0,  0, 11, 11,  0,  0,  0],
            [ 0,  0, 11,  0,  0,  0,  0],
            [ 0,  0, 13,  0, 13,  0,  0],
            [ 0,  0, 13,  0, 13,  0,  0],
            [ 0,  0, 13,  0, 13,  0,  0],
            [ 0,  0, 13,  0, 13,  0,  0],
        ]);

        // when
        let result = left(m1);
        result = left(result);
        result = left(result);
        result = left(result); // test, if it stopps
        result = move(result);
        result = move(result);
        result = move(result);

        // then
        assert(equals(result, m2), "O, is not in col 4 and landed");

    }, CAT);

}

export { oneLeftTest };