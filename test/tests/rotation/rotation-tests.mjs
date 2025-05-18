import { test, assert } from "/test/lib/unit-test.mjs"
import { rotateCW, rotateCCW } from "/src/modules/logic/rotation.mjs";
import { equalsPos, equalsMatrix } from "/src/modules/logic/move.mjs";
import { applyMatrix } from "/src/modules/logic/utils.mjs";


const equals = (m1, m2) => 
    equalsPos(m1, m2) && equalsMatrix(m1.m, m2.m)

function rotationTest() {
    const ROTATION = 'Basic rotation tests';

    test('T, 90 CCW, CW, CCW', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 3, 3, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCCW(m1);
        result = rotateCW(result);
        result = rotateCCW(result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('J, CW, CW = 180', () => {
        // given
        const m1 = applyMatrix({ x: 2, y: 1, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0, 0],
            [0, 0, 4, 4, 4, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 2, y: 1, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 4, 4, 4, 0],
            [0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCW(m1);
        result = rotateCW(result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('L, CW, CW, CW = 270', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 5, 0, 0, 0],
            [0, 0, 5, 0, 0, 0],
            [0, 0, 5, 5, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 0],
            [0, 5, 5, 5, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCW(m1);
        result = rotateCW(result);
        result = rotateCW(result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('S, CCW, -90', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 6, 0, 0, 0],
            [0, 0, 6, 6, 0, 0],
            [0, 0, 0, 6, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 6, 6, 0, 0],
            [0, 6, 6, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCCW(m1);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('Z, CCW, CCW -180', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 2, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 7, 7, 0, 0, 0],
            [0, 0, 7, 7, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 2, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 7, 7, 0, 0, 0],
            [0, 0, 7, 7, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCCW(m1);
        result = rotateCCW(result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('I, CW = 90', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, m: [
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCW(m1);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('I, CW, CW = 180', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 0, y: 0, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCW(m1);
        result = rotateCW(result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('I, CW, CW, CW = 180', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCW(m1);
        result = rotateCW(result);
        result = rotateCW(result);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    test('O, CW = 90', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 2, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 2, 2, 0, 0, 0],
            [0, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 2, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 2, 2, 0, 0, 0],
            [0, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCW(m1);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);

    
}

export { rotationTest };