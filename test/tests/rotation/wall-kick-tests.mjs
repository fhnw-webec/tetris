import { test, assert } from "/test/lib/unit-test.mjs"
import { rotateCW, rotateCCW, selectFirst, createRotationFns } from "/src/modules/rotation.mjs";
import { equals } from "/src/modules/logic.mjs";
import { x, y, first, nth, applyMatrix2, identity, SPAWN_STATE, RIGHT_STATE, LEFT_STATE, 
         TWO_SUCCESSIVE_STATE } from "/src/modules/utils.mjs";


function wallKickTest() {
    const WALL_KICK = 'Wall kick tests';

    test('selectFirst: no function selected -> identity', () => {
        // given
        const fns = [() => 1, () => 2, () => 3];
        const predicate = f => f() === 4;

        // when
        const result = selectFirst(fns)(predicate);

        // then
        assert(result === identity, 'Should be identity');

    }, WALL_KICK);

    test('selectFirst: one function selected -> () => 2', () => {
        // given
        const fns = [() => 1, () => 2, () => 3];
        const predicate = f => f() === 2;

        // when
        const result = selectFirst(fns)(predicate);

        // then
        assert(result() === 2, 'Should be 2');

    }, WALL_KICK);

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
        // createRotationFns = model => rotationFn => pivot => kicks =>
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

        const m2 = applyMatrix2(RIGHT_STATE)(SPAWN_STATE)(4)(4)([
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
}

export { wallKickTest };