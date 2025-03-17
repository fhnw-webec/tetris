import { test, assert } from "../../lib/unit-test.mjs"
import { move, equals } from "/src/modules/logic.mjs";

function singleBlockMovesTests() {
    const CAT = 'Single block moves, empty model';

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
            [ 0, 0, 0],
            [ 0, 0, 0],
            [11, 0, 0]
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
            [0, 0, 0],
        ];
        const m2 = [
            [ 0, 0, 0],
            [ 0, 0, 0],
            [11, 0, 0],
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
    const CAT = 'Two horizontal block moves, empty model';

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

    test('Three blocks in 4x4 Matrix, with two moves', () => {
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

    test('Three blocks in 4x4 Matrix, with ten moves', () => {
        // given
        let m1 = [
            [ 1,  1,  1,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ];
        let m2 = [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [11, 11, 11,  0],
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
    const CAT = 'O move test, empty model';

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
            [ 1,  1,  0,  0],
            [ 1,  1,  0,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ];
        let m2 = [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [11, 11,  0,  0],
            [11, 11,  0,  0],
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
            [ 1,  1,  0,  0],
            [ 1,  1,  0,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ];
        let m2 = [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [11, 11,  0,  0],
            [11, 11,  0,  0],
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
    const CAT = 'T move test, empty model';

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
            [ 0,  1,  1,  1],
            [ 0,  0,  1,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ];
        let m2 = [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [ 0, 11, 11, 11],
            [ 0,  0, 11,  0],
        ];

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "Baseline of T should be in row 2");

    }, CAT)

    test('T, with ten moves', () => {
        // given
        let m1 = [
            [ 0,  1,  1,  1],
            [ 0,  0,  1,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ];
        let m2 = [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [ 0, 11, 11, 11],
            [ 0,  0, 11,  0],
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

function ZMoveTests() {
    const CAT = 'Z move test, empty model';

    test('Z, with one move', () => {
        // given
        let m1 = [
            [2, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let m2 = [
            [0, 0, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ];

        // when
        const result = move(m1);

        // then
        assert(equals(result, m2), "Baseline of Z should be in row 1");

    }, CAT)

    test('Z, with two moves', () => {
        // given
        let m1 = [
            [ 2,  2,  0,  0],
            [ 0,  2,  2,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ];
        let m2 = [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [12, 12,  0,  0],
            [ 0, 12, 12,  0],
        ];

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "Baseline of Z should be in row 2");

    }, CAT)

    test('Z, with ten moves', () => {
        // given
        let m1 = [
            [ 2,  2,  0,  0],
            [ 0,  2,  2,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ];
        let m2 = [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [12, 12,  0,  0],
            [ 0, 12, 12,  0],
        ];

        // when
        let result = move(m1);
        for (let index = 1; index < 10; index++) {
            result = move(result);
        }

        // then
        assert(equals(result, m2), "Baseline of Z should be in row 2");

    }, CAT)
}

function ZMoveTestsNotEmpty() {
    const CAT = 'Z move test, non empty model';

    test('Z, with ten moves', () => {
        // given
        let m1 = [
            [ 2,  2,  0,  0,  0],
            [ 0,  2,  2,  0,  0],
            [ 0,  0,  0,  0,  0],
            [11, 11, 11,  0,  0],
            [ 0, 11,  0,  0,  0],
        ];
        let m2 = [
            [ 0,  0,  0,  0,  0],
            [12, 12,  0,  0,  0],
            [ 0, 12, 12,  0,  0],
            [11, 11, 11,  0,  0],
            [ 0, 11,  0,  0,  0],
        ];

        // when
        let result = move(m1);
        for (let index = 1; index < 10; index++) {
            result = move(result);
        }

        // then
        assert(equals(result, m2), "Baseline of Z should be in row 1");

    }, CAT)

    test('Z, with two moves, collides with T', () => {
        // given
        let m1 = [
            [ 0,  0,  2,  2,  0],
            [ 0,  0,  0,  2,  2],
            [ 0,  0,  0,  0,  0],
            [11, 11, 11,  0,  0],
            [ 0, 11,  0,  0,  0],
        ];
        let m2 = [
            [ 0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0],
            [ 0,  0, 12, 12,  0],
            [11, 11, 11, 12, 12],
            [ 0, 11,  0,  0,  0],
        ];

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "Baseline of Z should be in row 2");

    }, CAT)

    test('T, with three moves, collides with Z', () => {
        // given
        let m1 = [
            [ 0,  0,  2,  2,  0],
            [ 0,  0,  0,  2,  2],
            [ 0,  0,  0,  0,  0],
            [ 0, 11,  0,  0,  0],
            [11, 11, 11,  0,  0],
        ];
        let m2 = [
            [ 0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0],
            [ 0, 11, 12, 12,  0],
            [11, 11, 11, 12, 12],
        ];

        // when
        let result = move(m1);
        result = move(result);
        result = move(result);

        // then
        assert(equals(result, m2), "Baseline of Z should be in row 3");

    }, CAT)

}

export { singleBlockMovesTests, twoHorizontalBlockMoveTests, OMoveTests, TMoveTests, ZMoveTests, ZMoveTestsNotEmpty };