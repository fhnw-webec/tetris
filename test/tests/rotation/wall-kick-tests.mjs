import { test, assert } from "/test/lib/unit-test.mjs"
import { rotateCW, rotateCCW, createRotationFns } from "/src/modules/rotation.mjs";
import { equals } from "/src/modules/logic.mjs";
import { x, y, first, nth, applyMatrix2, identity, SPAWN_STATE, RIGHT_STATE, LEFT_STATE, 
         TWO_SUCCESSIVE_STATE } from "/src/modules/utils.mjs";


function wallKickTest() {
    const WALL_KICK = 'Wall kick tests';

    test('createRotationFns: apply kick [1, 2]', () => {
        // given
        // createRotationFns = model => rotationFn => pivot => kicks =>
        const model = applyMatrix2(SPAWN_STATE)(SPAWN_STATE)(3)(2)([]);
        const pivot = 3;
        const rotationFn = px => py => block => [px, py]
        const kicks = [[1, 2]];

        // when
        const result = createRotationFns(model)(rotationFn)(pivot)(kicks);

        // then
        assert(result.length === 1, 'Length should be 1');
        assert(x(first(result)()) === 7, 'Should be 7');
        assert(y(first(result)()) === 7, 'Should be 7'); 

    }, WALL_KICK);

    test('createRotationFns: apply kick [[1, 2], [3, 4]]', () => {
        // given
        const model = applyMatrix2(SPAWN_STATE)(SPAWN_STATE)(0)(1)([]);
        const pivot = 2;
        const rotationFn = px => py => block => [px, py]
        const kicks = [[1, 2], [3, 4]];

        // when
        const result = createRotationFns(model)(rotationFn)(pivot)(kicks);
        
        // then
        assert(result.length === 2, 'Length should be 2'); // [fn1, fn2]
        assert(x(first(result)()) === 3, 'Should be 3');
        assert(y(first(result)()) === 5, 'Should be 5'); 
        assert(x(nth(result)(1)()) === 5, 'Should be 5'); // 
        assert(y(nth(result)(1)()) === 7, 'Should be 7');

    }, WALL_KICK);

    test('SRS, example, J: O->L, No possible kick found', () => {
        // given
        const m1 = applyMatrix2(SPAWN_STATE)(SPAWN_STATE)(3)(2)([
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 11, 11,  0,  0,  0,  0],
            [ 0,  0,  0,  4,  0, 11, 11, 11,  0,  0],
            [ 0,  0,  0,  4,  4,  4, 11, 11, 11, 11],
            [ 0, 11, 11, 11,  0,  0,  0, 11, 11, 11],
            [11, 11,  0,  0,  0,  0, 11, 11, 11, 11],
            [11, 11, 11, 11, 11,  0, 11, 11, 11, 11],
            [11, 11, 11, 11, 11,  0, 11, 11, 11, 11],
        ]);

        // when
        const result = rotateCCW(m1);

        // then
        assert(equals(result, m1), 'Should be same position, no kick found');

    }, WALL_KICK);

    test('SRS, example, J: O->L, Kick: (1, 2)', () => {
        // given
        const m1 = applyMatrix2(SPAWN_STATE)(SPAWN_STATE)(3)(2)([
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 11, 11,  0,  0,  0,  0],
            [ 0,  0,  0,  4,  0, 11, 11, 11,  0,  0],
            [ 0,  0,  0,  4,  4,  4, 11, 11, 11, 11],
            [ 0, 11, 11, 11,  0,  0,  0, 11, 11, 11],
            [11, 11,  0,  0,  0,  0, 11, 11, 11, 11],
            [11, 11, 11, 11,  0,  0, 11, 11, 11, 11],
            [11, 11, 11, 11, 11,  0, 11, 11, 11, 11],
        ]);

        const m2 = applyMatrix2(LEFT_STATE)(SPAWN_STATE)(4)(4)([
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 11, 11,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0, 11, 11, 11,  0,  0],
            [ 0,  0,  0,  0,  0,  0, 11, 11, 11, 11],
            [ 0, 11, 11, 11,  0,  4,  0, 11, 11, 11],
            [11, 11,  0,  0,  0,  4, 11, 11, 11, 11],
            [11, 11, 11, 11,  4,  4, 11, 11, 11, 11],
            [11, 11, 11, 11, 11,  0, 11, 11, 11, 11],
        ]);

        // when
        const result = rotateCCW(m1);

        // then
        assert(equals(result, m2), 'Not the kick: J: O->L, (1, 2)');

    }, WALL_KICK);

    test('Reverse SRS example, J: L->O, (-1, -2)', () => {
        // given
        const m1 = applyMatrix2(LEFT_STATE)(SPAWN_STATE)(4)(4)([
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 11, 11,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0, 11, 11, 11,  0,  0],
            [ 0,  0,  0,  0,  0,  0, 11, 11, 11, 11],
            [ 0, 11, 11, 11,  0,  4,  0, 11, 11, 11],
            [11, 11,  0,  0,  0,  4, 11, 11, 11, 11],
            [11, 11, 11, 11,  4,  4, 11, 11, 11, 11],
            [11, 11, 11, 11, 11,  0, 11, 11, 11, 11],
        ]);

        const m2 = applyMatrix2(SPAWN_STATE)(LEFT_STATE)(3)(2)([
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 11, 11,  0,  0,  0,  0],
            [ 0,  0,  0,  4,  0, 11, 11, 11,  0,  0],
            [ 0,  0,  0,  4,  4,  4, 11, 11, 11, 11],
            [ 0, 11, 11, 11,  0,  0,  0, 11, 11, 11],
            [11, 11,  0,  0,  0,  0, 11, 11, 11, 11],
            [11, 11, 11, 11,  0,  0, 11, 11, 11, 11],
            [11, 11, 11, 11, 11,  0, 11, 11, 11, 11],
        ]);

        // when
        const result = rotateCW(m1);

        // then
        assert(equals(result, m2), 'Not the kick: J: L->O, (-1, -2)');

    }, WALL_KICK);


    test('O: O->R, R->2, Kick: [0, 0]', () => {
        // given
        const m1 = applyMatrix2(SPAWN_STATE)(SPAWN_STATE)(4)(3)([
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 11, 11,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 11, 11, 11, 11,  0,  0],
            [ 0,  0,  0,  0,  2,  2, 11, 11, 11, 11],
            [ 0, 11, 11, 11,  2,  2,  0, 11, 11, 11],
            [11, 11,  0,  0,  0,  0, 11, 11, 11, 11],
            [11, 11, 11, 11,  0,  0, 11, 11, 11, 11],
            [11, 11, 11, 11, 11,  0, 11, 11, 11, 11],
        ]);

        const m2 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(4)(3)([
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 11, 11,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 11, 11, 11, 11,  0,  0],
            [ 0,  0,  0,  0,  2,  2, 11, 11, 11, 11],
            [ 0, 11, 11, 11,  2,  2,  0, 11, 11, 11],
            [11, 11,  0,  0,  0,  0, 11, 11, 11, 11],
            [11, 11, 11, 11,  0,  0, 11, 11, 11, 11],
            [11, 11, 11, 11, 11,  0, 11, 11, 11, 11],
        ]);

        // when
        let result = rotateCW(m1);
        result = rotateCW(result);

        // then
        assert(equals(result, m2), 'Not R->2');

    }, WALL_KICK);

    test('T: R->2, Kick: (1, 0)', () => {
        // given
        const m1 = applyMatrix2(RIGHT_STATE)(SPAWN_STATE)(1)(0)([
            [ 0,  0,  3,  0,  0,  0],
            [ 0, 11,  3,  3,  0,  0],
            [ 0,  0,  3,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(2)(0)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0, 11,  3,  3,  3,  0],
            [ 0,  0,  0,  3,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        // when
        const result = rotateCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (1, 0)');

    }, WALL_KICK);

    test('Z: L->2, Kick: (1, 0)', () => {
        // given
        const m1 = applyMatrix2(SPAWN_STATE)(SPAWN_STATE)(2)(0)([
            [ 0,  0,  7,  7,  0,  0],
            [ 0,  0, 11,  7,  7,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(LEFT_STATE)(SPAWN_STATE)(3)(0)([
            [ 0,  0,  0,  0,  7,  0],
            [ 0,  0, 11,  7,  7,  0],
            [ 0,  0,  0,  7,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        // when
        const result = rotateCCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (1, 0)');

    }, WALL_KICK);

    test('I: 2->R, Kick: none possible', () => {
        // given
        const m = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(1)(0)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  1,  1,  1,  1,  0],
            [11, 11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11, 11],
        ]);
        // I: 2->R: [0, 0], [1, 0], [-2, 0], [1, 2], [-2, -1]

        // when
        const result = rotateCCW(m);

        // then
        assert(equals(result, m), 'No kick should be possible');

    }, WALL_KICK);

    test('I: 2->L, Kick: none possible', () => {
        // given
        const m = applyMatrix2(TWO_SUCCESSIVE_STATE)(TWO_SUCCESSIVE_STATE)(1)(0)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  1,  1,  1,  1,  0],
            [11, 11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11, 11],
        ]);
        // I: 2->L: [[0, 0], [2, 0], [-1, 0], [2, -1], [-1, 2]]

        // when
        const result = rotateCW(m);

        // then
        assert(equals(result, m), 'No kick should be possible');

    }, WALL_KICK);

    test('I: 2->R, Kick: (0, 0)', () => {
        // given
        const m1 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(1)(0)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  1,  1,  1,  1,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(RIGHT_STATE)(TWO_SUCCESSIVE_STATE)(1)(0)([
            [ 0,  0,  0,  1,  0,  0],
            [ 0,  0,  0,  1,  0,  0],
            [ 0,  0,  0,  1,  0,  0],
            [ 0,  0,  0,  1,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
        // I: 2->R: [0, 0], [1, 0], [-2, 0], [1, 2], [-2, -1]

        // when
        const result = rotateCCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (0, 0)');

    }, WALL_KICK);


    test('I: 2->R, Kick: (1, 0)', () => {
        // given
        const m1 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(1)(0)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  1,  1,  1,  1,  0],
            [ 0, 11, 11, 11,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(RIGHT_STATE)(TWO_SUCCESSIVE_STATE)(2)(0)([
            [ 0,  0,  0,  0,  1,  0],
            [ 0,  0,  0,  0,  1,  0],
            [ 0,  0,  0,  0,  1,  0],
            [ 0, 11, 11, 11,  1,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
        // I: 2->R: [0, 0], [1, 0],  [-2, 0], [1, 2],   [-2, -1]

        // when
        const result = rotateCCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (1, 0)');

    }, WALL_KICK);

    test('I: 2->R, Kick: (-2, 0)', () => {
        // given
        const m1 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(1)(0)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  1,  1,  1,  1,  0],
            [ 0,  0,  0, 11, 11,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(RIGHT_STATE)(TWO_SUCCESSIVE_STATE)(-1)(0)([
            [ 0,  1,  0,  0,  0,  0],
            [ 0,  1,  0,  0,  0,  0],
            [ 0,  1,  0,  0,  0,  0],
            [ 0,  1,  0, 11, 11,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
        // I: 2->R: [0, 0], [1, 0],  [-2, 0], [1, 2],   [-2, -1]

        // when
        const result = rotateCCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (-2, 0)');

    }, WALL_KICK);

    test('I: 2->R, Kick: (1, 2)', () => {
        // given
        const m1 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(1)(0)([
            [ 0,  0,  0,  0,  0,  0],
            [11, 11, 11,  0, 11, 11],
            [ 0,  1,  1,  1,  1,  0],
            [11, 11, 11, 11,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(RIGHT_STATE)(TWO_SUCCESSIVE_STATE)(2)(2)([
            [ 0,  0,  0,  0,  0,  0],
            [11, 11, 11,  0, 11, 11],
            [ 0,  0,  0,  0,  1,  0],
            [11, 11, 11, 11,  1,  0],
            [ 0,  0,  0,  0,  1,  0],
            [ 0,  0,  0,  0,  1,  0],
        ]);
        // I: 2->R: [0, 0], [1, 0], [-2, 0], [1, 2],   [-2, -1]

        // when
        const result = rotateCCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (1, 2)');

    }, WALL_KICK);

    test('I: 2->R, Kick: (-2, -1)', () => {
        // given
        const m1 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(1)(1)([
            [11,  0, 11, 11,  0,  0],
            [11,  0, 11, 11,  0,  0],
            [11,  0, 11, 11, 11, 11],
            [11,  1,  1,  1,  1,  0],
            [11, 11, 11, 11, 11, 11],
            [11,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(RIGHT_STATE)(TWO_SUCCESSIVE_STATE)(-1)(0)([
            [11,  1, 11, 11,  0,  0],
            [11,  1, 11, 11,  0,  0],
            [11,  1, 11, 11, 11, 11],
            [11,  1,  0,  0,  0,  0],
            [11, 11, 11, 11, 11, 11],
            [11,  0,  0,  0,  0,  0],
        ]);
        // I: 2->R: [0, 0], [1, 0], [-2, 0], [1, 2], [-2, -1]

        // when
        const result = rotateCCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (-2, -1)');

    }, WALL_KICK);

    test('I: R->2, Kick: right border stuck', () => {
        // given
        const m1 = applyMatrix2(RIGHT_STATE)(RIGHT_STATE)(3)(1)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  1],
            [ 0,  0,  0,  0,  0,  1],
            [ 0,  0,  0,  0,  0,  1],
            [ 0,  0,  0,  0,  0,  1],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(2)(1)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  1,  1,  1,  1],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
        // I: R->2: [[0, 0], [-1, 0], [2, 0], [-1, -2], [2, 1]]

        // when
        const result = rotateCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (-1, 0)');

    }, WALL_KICK);

    test('I: L->O, Kick: left border stuck', () => {
        // given
        const m1 = applyMatrix2(LEFT_STATE)(LEFT_STATE)(-1)(1)([
            [ 0,  0,  0,  0,  0,  0],
            [ 1,  0,  0,  0,  0,  0],
            [ 1,  0,  0,  0,  0,  0],
            [ 1,  0,  0,  0,  0,  0],
            [ 1,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(SPAWN_STATE)(LEFT_STATE)(0)(1)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 1,  1,  1,  1,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
        // I: L->O: [[0, 0], [1, 0], [-2, 0], [1, 2], [-2, -1]]

        // when
        const result = rotateCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (-1, 0)');

    }, WALL_KICK);

    test('S: R->2, Kick: (0, 0)', () => {
        // given
        const m1 = applyMatrix2(RIGHT_STATE)(RIGHT_STATE)(1)(0)([
            [ 0,  0,  6,  0,  0,  0],
            [ 0,  0,  6,  6,  0,  0],
            [ 0,  0,  0,  6,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(1)(0)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  6,  6,  0,  0],
            [ 0,  6,  6,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
        // S: R->2: [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]]

        // when
        const result = rotateCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (0, 0)');

    }, WALL_KICK);

    test('S: R->2, Kick: (1, 0)', () => {
        // given
        const m1 = applyMatrix2(RIGHT_STATE)(RIGHT_STATE)(1)(0)([
            [ 0,  0,  6,  0,  0,  0],
            [ 0,  0,  6,  6,  0,  0],
            [ 0, 11,  0,  6,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(2)(0)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  6,  6,  0],
            [ 0, 11,  6,  6,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
        // S: R->2: [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]]

        // when
        const result = rotateCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (1, 0)');

    }, WALL_KICK);

    test('S: R->2, Kick: (1, 1)', () => {
        // given
        const m1 = applyMatrix2(RIGHT_STATE)(RIGHT_STATE)(1)(0)([
            [ 0,  0,  6,  0,  0,  0],
            [ 0,  0,  6,  6,  0,  0],
            [ 0, 11, 11,  6,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(2)(1)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0, 11, 11,  6,  6,  0],
            [ 0,  0,  6,  6,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
        // S: R->2: [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]]

        // when
        const result = rotateCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (1, 1)');

    }, WALL_KICK);

    test('S: R->2, Kick: (0, -2)', () => {
        // given
        const m1 = applyMatrix2(RIGHT_STATE)(RIGHT_STATE)(1)(1)([
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  6,  0,  0,  0],
            [ 0,  0,  6,  6,  0,  0],
            [ 0, 11, 11,  6,  0,  0],
            [ 0,  0,  0, 11,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(1)(-1)([
            [ 0,  0,  6,  6,  0,  0],
            [ 0,  6,  6,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0, 11, 11,  0,  0,  0],
            [ 0,  0,  0, 11,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
        // S: R->2: [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]]

        // when
        const result = rotateCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (0, -2)');

    }, WALL_KICK);

    test('S: R->2, Kick: (1, -2)', () => {
        // given
        const m1 = applyMatrix2(RIGHT_STATE)(RIGHT_STATE)(1)(1)([
            [ 0,  0, 11,  0,  0,  0],
            [ 0,  0,  6,  0,  0,  0],
            [ 0,  0,  6,  6,  0,  0],
            [ 0, 11, 11,  6,  0,  0],
            [ 0,  0,  0, 11,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(2)(-1)([
            [ 0,  0, 11,  6,  6,  0],
            [ 0,  0,  6,  6,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0, 11, 11,  0,  0,  0],
            [ 0,  0,  0, 11,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
        // S: R->2: [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]]

        // when
        const result = rotateCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (1, -2)');

    }, WALL_KICK);

    test('S: 2->R, Kick: (0, 2)', () => {
        // given
        const m1 = applyMatrix2(TWO_SUCCESSIVE_STATE)(RIGHT_STATE)(2)(-1)([
            [ 0,  0, 11,  6,  6,  0],
            [ 0,  0,  6,  6,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0, 11, 11,  0,  0,  0],
            [ 0,  0,  0, 11,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);

        const m2 = applyMatrix2(RIGHT_STATE)(TWO_SUCCESSIVE_STATE)(2)(1)([
            [ 0,  0, 11,  0,  0,  0],
            [ 0,  0,  0,  6,  0,  0],
            [ 0,  0,  0,  6,  6,  0],
            [ 0, 11, 11,  0,  6,  0],
            [ 0,  0,  0, 11,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
        // S: 2->R: [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]]

        // when
        const result = rotateCCW(m1);

        // then
        assert(equals(result, m2), 'Not R->2, with (0, 2)');

    }, WALL_KICK);

    test('S: L->2, Kick: none possible', () => {
        // given
        const m = applyMatrix2(LEFT_STATE)(LEFT_STATE)(4)(1)([
            [ 0,  0,  0,  0, 11, 11],
            [ 0,  0,  0, 11,  6, 11],
            [ 0,  0,  0, 11,  6,  6],
            [ 0,  0,  0, 11, 11,  6],
            [ 0,  0,  0,  0, 11, 11],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]);
    
        // S: L->2: [[[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]]

        // when
        const result = rotateCCW(m);

        // then
        assert(equals(result, m), 'Not R->2, with (0, 2)');

    }, WALL_KICK);
}

export { wallKickTest };