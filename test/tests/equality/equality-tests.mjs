import { test, assert } from "../../lib/unit-test.mjs"
import { equals } from "/src/modules/logic.mjs";
import { applyMatrix0, applyMatrix } from "/src/modules/utils.mjs";

function equalityTest() {
    const EQUALITY = 'Equality of models';

    test('Identity', () => {
        // given
        const m1 = applyMatrix0([
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ]);

        const m2 = applyMatrix0([
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ]);

        // when
        const isSame = equals(m1, m2);

        // then
        assert(isSame, "same, must be true");

    }, EQUALITY);

    test('m1 one row longer, than m2', () => {
        // given
        const m1 = applyMatrix0([
            [0, 1, 0, 1],
            [0, 1, 0],
            [0, 1, 0],
        ]);

        const m2 = applyMatrix0([
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ]);

        // when
        const isSame = equals(m1, m2);

        // then
        assert(!isSame, "m1 first row is longer, must be false");

    }, EQUALITY);

    test('m2 longer than m1', () => {
        // given
        const m1 = applyMatrix0([
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ]);

        const m2 = applyMatrix0([
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ]);

        // when
        const isSame = equals(m1, m2);

        // then
        assert(!isSame, "m2 longer than m1, must be false");

    }, EQUALITY);

    test('different matrix values', () => {
        // given
        const m1 = applyMatrix0([
            [0, 1, 0],
            [0, 2, 0],
            [0, 1, 0],
        ]);

        const m2 = applyMatrix0([
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ]);

        // when
        const isSame = equals(m1, m2);

        // then
        assert(!isSame, "different values, must be false");

    }, EQUALITY);

    test('different x, y values', () => {
        // given
        const m1 = applyMatrix(2)(1)([
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ]);

        const m2 = applyMatrix(2)(2)([
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ]);

        // when
        const isSame = equals(m1, m2);

        // then
        assert(!isSame, "x and y not equal, must be false");

    }, EQUALITY);

}

export { equalityTest };