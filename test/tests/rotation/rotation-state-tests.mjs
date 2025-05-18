import { test, assert } from "/test/lib/unit-test.mjs"
import { rotateCW, rotateCCW } from "/src/modules/logic/rotation.mjs";
import { equals } from "/src/modules/logic/logic.mjs";
import { applyMatrix, SPAWN_STATE, RIGHT_STATE, LEFT_STATE, TWO_SUCCESSIVE_STATE } from "/src/modules/logic/utils.mjs";


function rotationStateTest() {
    const ROTATION_STATE = 'Rotation state tests';

    test('T, 1 x 90 CW, O->R: R', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: RIGHT_STATE, p: SPAWN_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 0, 3, 3, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        const result = rotateCW(m1);

        // then
        assert(equals(result, m2), "Not O->R: R");

    }, ROTATION_STATE);

    test('T, 2 x 90 CW, O->R, R->2: 2', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: TWO_SUCCESSIVE_STATE, p: RIGHT_STATE, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCW(m1);
        result = rotateCW(result);

        // then
        assert(equals(result, m2), "Not O->R, R->2: 2");

    }, ROTATION_STATE);

    test('T, 3 x 90 CW, O->R, R->2, 2->L: L', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: LEFT_STATE, p: TWO_SUCCESSIVE_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 0, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCW(m1);
        result = rotateCW(result);
        result = rotateCW(result);

        // then
        assert(equals(result, m2), "Not O->R, R->2, 2->L: L");

    }, ROTATION_STATE);

    test('T, 4 x 90 CW, O->R, R->2, 2->L, L->O: 0', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: LEFT_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCW(m1);
        result = rotateCW(result);
        result = rotateCW(result);
        result = rotateCW(result);

        // then
        assert(equals(result, m2), "Not O->R, R->2, 2->L, L->O: 0");

    }, ROTATION_STATE);

    test('T, 1 x 90 CCW, O->L: L', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: LEFT_STATE, p: SPAWN_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 0, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCCW(m1);

        // then
        assert(equals(result, m2), "Not O->L: L");

    }, ROTATION_STATE);

    test('T, 1 x 90 CCW, L->2: 2', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, c: LEFT_STATE, p: SPAWN_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 0, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: TWO_SUCCESSIVE_STATE, p: LEFT_STATE, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCCW(m1);

        // then
        assert(equals(result, m2), "Not L->2: 2");

    }, ROTATION_STATE);

    test('T, 1 x 90 CCW, 2->R: R', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, c: TWO_SUCCESSIVE_STATE, p: LEFT_STATE, m: [
            [0, 0, 0, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: RIGHT_STATE, p: TWO_SUCCESSIVE_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 0, 3, 3, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCCW(m1);

        // then
        assert(equals(result, m2), "Not 2->R: R");

    }, ROTATION_STATE);

    test('T, 1 x 90 CCW, R->0: O', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, c: RIGHT_STATE, p: TWO_SUCCESSIVE_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 0, 3, 3, 0, 0],
            [0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: RIGHT_STATE, m: [
            [0, 0, 3, 0, 0, 0],
            [0, 3, 3, 3, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]});

        // when
        let result = rotateCCW(m1);

        // then
        assert(equals(result, m2), "Not R->O: O");

    }, ROTATION_STATE);
}

export { rotationStateTest };