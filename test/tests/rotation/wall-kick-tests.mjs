import { test, assert } from "/test/lib/unit-test.mjs"
import { rotateCW, rotateCCW } from "/src/modules/rotation.mjs";
import { equals } from "/src/modules/logic.mjs";
import { applyMatrix2, SPAWN_STATE, RIGHT_STATE, LEFT_STATE, TWO_SUCCESSIVE_STATE } from "/src/modules/utils.mjs";


function wallKickTest() {
    const WALL_KICK = 'Wall kick tests';

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