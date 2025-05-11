import { test, assert } from "/test/lib/unit-test.mjs"
import { rotateCW, rotateCCW } from "/src/modules/rotation.mjs";
import { equals } from "/src/modules/logic.mjs";

function rotationTest() {
    const ROTATION = 'Rotation tests';

    test('T, 90 CCW, CW, CCW', () => {
        // given
        const m1 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 3, 3, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        const m2 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        const x = 1;
        const y = 1;

        // when
        let result = rotateCCW(x, y, m1);
        result = rotateCW(x, y, result);
        result = rotateCCW(x, y, result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('J, CW, CW = 180', () => {
        // given
        const m1 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0, 0],
            [0, 0, 4, 4, 4, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        const m2 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 4, 4, 4, 0],
            [0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        const x = 2;
        const y = 1;

        // when
        let result = rotateCW(x, y, m1);
        result = rotateCW(x, y, result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('L, CW, CW, CW = 270', () => {
        // given
        const m1 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 5, 0, 0, 0],
            [0, 0, 5, 0, 0, 0],
            [0, 0, 5, 5, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        const m2 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 0],
            [0, 5, 5, 5, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        const x = 1;
        const y = 1;

        // when
        let result = rotateCW(x, y, m1);
        result = rotateCW(x, y, result);
        result = rotateCW(x, y, result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('S, CCW, -90', () => {
        // given
        const m1 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 6, 0, 0, 0],
            [0, 0, 6, 6, 0, 0],
            [0, 0, 0, 6, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        const m2 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 6, 6, 0, 0],
            [0, 6, 6, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        const x = 1;
        const y = 1;

        // when
        let result = rotateCCW(x, y, m1);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('Z, CCW, CCW -180', () => {
        // given
        const m1 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 7, 7, 0, 0, 0],
            [0, 0, 7, 7, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        const m2 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 7, 7, 0, 0, 0],
            [0, 0, 7, 7, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        const x = 1;
        const y = 2;

        // when
        let result = rotateCCW(x, y, m1);
        result = rotateCCW(x, y, result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('I, CW = 90', () => {
        // given
        const m1 = [
            [0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        const m2 = [
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        const x = 0;
        const y = 0;

        // when
        let result = rotateCW(x, y, m1);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('I, CW, CW = 180', () => {
        // given
        const m1 = [
            [0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        const m2 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        const x = 0;
        const y = 0;

        // when
        let result = rotateCW(0, 0, m1);
        result = rotateCW(0, 0, result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('I, CW, CW, CW = 180', () => {
        // given
        const m1 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        const m2 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        const x = 1;
        const y = 1;

        // when
        let result = rotateCW(x, y, m1);
        result = rotateCW(x, y, result);
        result = rotateCW(x, y, result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('O, CW = 90', () => {
        // given
        const m1 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 2, 2, 0, 0, 0],
            [0, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        const m2 = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 2, 2, 0, 0, 0],
            [0, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        const x = 1;
        const y = 2;

        // when
        let result = rotateCW(x, y, m1);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    
}

export { rotationTest };