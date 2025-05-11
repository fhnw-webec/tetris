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

        // when
        let result = rotateCCW(2, 2, m1);
        result = rotateCW(2, 2, result);
        result = rotateCCW(2, 2, result);

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

        // when
        let result = rotateCW(3, 2, m1);
        result = rotateCW(3, 2, result);

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

        // when
        let result = rotateCW(2, 2, m1);
        result = rotateCW(2, 2, result);
        result = rotateCW(2, 2, result);

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

        // when
        let result = rotateCCW(2, 2, m1);

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

        // when
        let result = rotateCCW(2, 3, m1);
        result = rotateCCW(2, 3, result);

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

        // when
        let result = rotateCW(1.5, 1.5, m1);

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

        // when
        let result = rotateCW(1.5, 1.5, m1);
        result = rotateCW(1.5, 1.5, result);

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
        const xOffset = 1;
        const yOffset = 1;
        const pivot = 1.5;
        const px = xOffset + pivot;
        const py = yOffset + pivot;

        // when
        let result = rotateCW(px, py, m1);
        result = rotateCW(px, py, result);
        result = rotateCW(px, py, result);

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
        const xOffset = 1;
        const yOffset = 2;
        const pivot = 0.5;
        const px = xOffset + pivot;
        const py = yOffset + pivot;

        // when
        let result = rotateCW(px, py, m1);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    
}

export { rotationTest };