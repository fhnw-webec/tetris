import { test, assert } from "/test/lib/unit-test.mjs"
import { rotate, xs, ys, min, max, pivot } from "/src/modules/rotation.mjs";
import { equals } from "/src/modules/logic.mjs";
import { x, y } from "/src/modules/utils.mjs";

function rotationTest() {
    const ROTATION = 'Rotation tests';

    test('Min, max', () => {
        // given
        const tetromino = [
            [10, 23],
            [12, 26],
            [14, 20],
            [16, 29]
        ];

        // when
        const minXResult = min(tetromino, xs);
        const maxXResult = max(tetromino, xs);
        const maxYResult = max(tetromino, ys);
        const minYResult = min(tetromino, ys);


        // then
        assert(minXResult === 10, 'minXResult not correct');
        assert(maxXResult === 16, 'maxXResult not correct');
        assert(minYResult === 20, 'minYResult not correct');
        assert(maxYResult === 29, 'maxYResult not correct');

    }, ROTATION);

    test('Pivot', () => {
        // given
        const tetromino = [
            [4, 3], [4, 4], [4, 5], [5, 4]
        ];
        // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        // [0, 0, 0, 0, 3, 0, 0, 0, 0, 0]
        // [0, 0, 0, 0, 3, 3, 0, 0, 0, 0]
        // [0, 0, 0, 0, 3, 0, 0, 0, 0, 0]
        // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        const piv = [4, 4];

        // when
        const result = pivot(tetromino);

        // then
        assert(x(result) === x(piv), "x not pivot");
        assert(y(result) === y(piv), "y not pivot");

    }, ROTATION);

    test('T, 90 CW', () => {
        // given
        const m1 = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0],
        ];

        const m2 = [
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0],
        ];

        // when
        const result = rotate(m1);

        // then
        assert(equals(result, m2), "not correctly rotated");

    }, ROTATION);
}

export { rotationTest };