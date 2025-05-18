import { test, assert } from "../../lib/unit-test.mjs"
import { simulateMove, equalsMatrix } from "../../../src/modules/logic/logic.mjs";

function simulationTests() {
    const CAT = 'Simulate moves';

    test('O goes dx = 1', () => {
        // given
        const t1 = [
            [0, 0], [1, 0], [0, 1], [1, 1]
        ];

        const t2 = [
            [1, 0], [2, 0], [1, 1], [2, 1]
        ];

        // when
        const right = simulateMove(t1, 1, 0);

        // then
        assert(equalsMatrix(t2, right), "Not moved dx = 1");

    }, CAT);

    test('O goes dy = 1', () => {
        // given
        const t1 = [
            [0, 0], [0, 1], [1, 0], [1, 1]
        ];

        const t2 = [
            [0, 1], [0, 2], [1, 1], [1, 2]
        ];

        // when
        const right = simulateMove(t1, 0, 1);

        // then
        assert(equalsMatrix(t2, right), "Not moved dy = 1");

    }, CAT);

    test('O goes dx = 2, dy = 1', () => {
        // given
        const t1 = [
            [0, 0], [0, 1], [1, 0], [1, 1]
        ];

        const t2 = [
            [2, 1], [2, 2], [3, 1], [3, 2]
        ];

        // when
        const right = simulateMove(t1, 2, 1);

        // then
        assert(equalsMatrix(t2, right), "Not moved dx = 2, dy = 1");

    }, CAT);

    test('no move', () => {
        // given
        const t1 = [
            [0, 0], [0, 1], [1, 0], [1, 1]
        ];

        const t2 = [
            [0, 0], [0, 1], [1, 0], [1, 1]
        ];

        // when
        const right = simulateMove(t1, 0, 0);

        // then
        assert(equalsMatrix(t2, right), "Should not move");

    }, CAT);
}

export { simulationTests };