import { test, assert } from "../../lib/unit-test.mjs"
import { move, equals } from "/src/modules/logic.mjs";

function singleBlockMovesTests() {
    const SINGLE_BLOCK_MOVE = 'Single block move';

    test('Single block in 3x3 Matrix, with one move', () => {
        // given
        const m1 = [
            [0, 1, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        const m2 = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ];

        // when
        const result = move(m1);

        // then
        assert(equals(result, m2), "block 0, 1 is not on 1, 1");

    }, SINGLE_BLOCK_MOVE)

    test('Single block in 3x3 Matrix, with two moves', () => {
        // given
        const m1 = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        const m2 = [
            [0, 0, 0],
            [0, 0, 0],
            [1, 0, 0]
        ];

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "block 0, 0 is not on 2, 0");

    }, SINGLE_BLOCK_MOVE)

    test('Single block in 3x3 Matrix, with ten moves', () => {
        // given
        const m1 = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        const m2 = [
            [0, 0, 0],
            [0, 0, 0],
            [1, 0, 0]
        ];

        // when
        let result = move(m1);
        for (let index = 1; index < 10; index++) {
            result = move(result);
        }

        // then
        assert(equals(result, m2), "block 0, 0 is not on 2, 0");

    }, SINGLE_BLOCK_MOVE)
}

function twoBlockMovesTests() {
    const TWO_BLOCK = 'Two horizontal block moves';

    function model() {
        return [
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
    }

    test('Two blocks in 4x4 Matrix, with one move', () => {
        // given
        let m1 = [
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let m2 = [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        // when
        const result = move(m1);

        // then
        assert(equals(result, m2), "blocks row 0 are not in row 1");

    }, TWO_BLOCK)

    test('Two blocks in 4x4 Matrix, with two moves', () => {
        // given
        let m1 = [
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let m2 = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
        ];

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "blocks row 0 are not in row 2");

    }, TWO_BLOCK)

    test('Two blocks in 4x4 Matrix, with ten moves', () => {
        // given
        let m1 = [
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let m2 = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
        ];

        // when
        let result = move(m1);
        for (let index = 1; index < 10; index++) {
            result = move(result);
        }

        // then
        assert(equals(result, m2), "blocks row 0 are not in row 3, after then moves");

    }, TWO_BLOCK)
}

export { singleBlockMovesTests, twoBlockMovesTests };