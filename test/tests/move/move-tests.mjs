import { test, assert } from "../../lib/unit-test.mjs"
import { move, equals } from "/src/modules/logic.mjs";

function singleBlockMovesTests() {
    const CAT = 'Single block moves';

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

    }, CAT)

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

    }, CAT)

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

    }, CAT)
}

function twoHorizontalBlockMoveTests() {
    const CAT = 'Two horizontal block moves';

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

    }, CAT)

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

    }, CAT)

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

    }, CAT)
}


function OMoveTests() {
    const CAT = 'O move test';

    test('O, with one move', () => {
        // given
        let m1 = [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let m2 = [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
        ];

        // when
        const result = move(m1);

        // then
        assert(equals(result, m2), "Baseline of T should be in row 1");

    }, CAT)

    test('O, with two moves', () => {
        // given
        let m1 = [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let m2 = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [1, 1, 0, 0],
        ];

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "Baseline of T should be in row 2");

    }, CAT)

    test('O, with ten moves', () => {
        // given
        let m1 = [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let m2 = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [1, 1, 0, 0],
        ];

        // when
        let result = move(m1);
        for (let index = 1; index < 10; index++) {
            result = move(result);
        }

        // then
        assert(equals(result, m2), "Baseline of T should be in row 2");

    }, CAT)
}

function TMoveTests() {
    const CAT = 'T move test';

    test('T, with one move', () => {
        // given
        let m1 = [
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let m2 = [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
        ];

        // when
        const result = move(m1);

        // then
        assert(equals(result, m2), "Baseline of T should be in row 1");

    }, CAT)

    test('T, with two moves', () => {
        // given
        let m1 = [
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let m2 = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0],
        ];

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "Baseline of T should be in row 2");

    }, CAT)

    test('O, with ten moves', () => {
        // given
        let m1 = [
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let m2 = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0],
        ];

        // when
        let result = move(m1);
        for (let index = 1; index < 10; index++) {
            result = move(result);
        }

        // then
        assert(equals(result, m2), "Baseline of T should be in row 2");

    }, CAT)
}

export { singleBlockMovesTests, twoHorizontalBlockMoveTests, OMoveTests, TMoveTests };