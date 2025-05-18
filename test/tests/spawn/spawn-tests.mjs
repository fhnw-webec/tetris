import { test, assert } from "/test/lib/unit-test.mjs"
import { spawn, TETROMINO_TYPE } from '/src/modules/spawn.mjs';
import { equals } from '/src/modules/logic.mjs';
import { applyMatrix, SPAWN_STATE } from '/src/modules/utils.mjs';

function spawnTest() {
    const SPAWN = 'Spawn tests';

    test('Span I', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  1,  1,  1,  1,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});
        
        // when
        const result = spawn(m1)(TETROMINO_TYPE.I);

        // then
        assert(equals(result, m2), 'Not a correct spawn');

    }, SPAWN);

    test('Span O', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});

        const m2 = applyMatrix({ x: 2, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  2,  2,  0,  0],
            [ 0,  0,  2,  2,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});
        
        // when
        const result = spawn(m1)(TETROMINO_TYPE.O);

        // then
        assert(equals(result, m2), 'Not a correct spawn');

    }, SPAWN);

    // TODO ungerader Testcase

    test('Span T', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  3,  0,  0,  0],
            [ 0,  3,  3,  3,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});
        
        // when
        const result = spawn(m1)(TETROMINO_TYPE.T);

        // then
        assert(equals(result, m2), 'Not a correct spawn');

    }, SPAWN);

    test('Span J', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  4,  0,  0,  0,  0],
            [ 0,  4,  4,  4,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});
        
        // when
        const result = spawn(m1)(TETROMINO_TYPE.J);

        // then
        assert(equals(result, m2), 'Not a correct spawn');

    }, SPAWN);

    test('Span L', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  5,  0,  0],
            [ 0,  5,  5,  5,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});
        
        // when
        const result = spawn(m1)(TETROMINO_TYPE.L);

        // then
        assert(equals(result, m2), 'Not a correct spawn');

    }, SPAWN);

    test('Span S', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  6,  6,  0,  0],
            [ 0,  6,  6,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});
        
        // when
        const result = spawn(m1)(TETROMINO_TYPE.S);

        // then
        assert(equals(result, m2), 'Not a correct spawn');

    }, SPAWN);

    test('Span Z', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});

        const m2 = applyMatrix({ x: 1, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  7,  7,  0,  0,  0],
            [ 0,  0,  7,  7,  0,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});
        
        // when
        const result = spawn(m1)(TETROMINO_TYPE.Z);

        // then
        assert(equals(result, m2), 'Not a correct spawn');

    }, SPAWN);
}

export { spawnTest }; 