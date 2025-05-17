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

        const m2 = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0],
            [ 0,  1,  1,  1,  1,  0],
            [ 0,  0,  0,  0,  0,  0],
        ]});
        
        // when
        const result = spawn(m1)(TETROMINO_TYPE.I);

        // then
        assert(equals(result, m2), 'Not a correct spawn');

    }, SPAWN);
}

export { spawnTest }; 