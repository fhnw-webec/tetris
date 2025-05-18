import { test, assert } from "../../lib/unit-test.mjs"
import { move, equals } from "/src/modules/logic/logic.mjs";
import { applyMatrix } from "/src/modules/logic/utils.mjs";

function singleBlockMovesTests() {
    const CAT = 'Move: Single block moves, empty model';

    test('Single block in 3x3 Matrix, with one move', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, m: [
            [0, 1, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]});
        const m2 = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ]});

        // when
        const result = move(m1);

        // then
        assert(equals(result, m2), "block 0, 1 is not on 1, 1");

    }, CAT)

    test('Single block in 3x3 Matrix, with two moves', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]});
        const m2 = applyMatrix({ x: 0, y: 2, m: [
            [ 0, 0, 0],
            [ 0, 0, 0],
            [11, 0, 0]
        ]});

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "block 0, 0 is not on 2, 0");

    }, CAT)

    test('Single block in 3x3 Matrix, with ten moves', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]});
        const m2 = applyMatrix({ x: 0, y: 2, m: [
            [ 0, 0, 0],
            [ 0, 0, 0],
            [11, 0, 0],
        ]});

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
    const CAT = 'Move: Two horizontal block moves, empty model';

    test('Two blocks in 4x4 Matrix, with one move', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, m: [
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]});
        const m2 = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]});

        // when
        const result = move(m1);

        // then
        assert(equals(result, m2), "blocks row 0 are not in row 1");

    }, CAT)

    test('Three blocks in 4x4 Matrix, with two moves', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]});
        const m2 = applyMatrix({ x: 0, y: 2, m: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
        ]});

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "blocks row 0 are not in row 2");

    }, CAT)

    test('Three blocks in 4x4 Matrix, with ten moves', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [ 1,  1,  1,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ]});
        const m2 = applyMatrix({ x: 0, y: 3, m: [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [11, 11, 11,  0],
        ]});

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
    const CAT = 'Move: O move test, empty model';

    test('O, with one move', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]});
        const m2 = applyMatrix({ x: 0, y: 1, m: [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
        ]});

        // when
        const result = move(m1);

        // then
        assert(equals(result, m2), "Baseline of T should be in row 1");

    }, CAT)

    test('O, with two moves', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [ 1,  1,  0,  0],
            [ 1,  1,  0,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ]});
        const m2 = applyMatrix({ x: 0, y: 2, m: [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [11, 11,  0,  0],
            [11, 11,  0,  0],
        ]});

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "Baseline of T should be in row 2");

    }, CAT)

    test('O, with ten moves', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [ 1,  1,  0,  0],
            [ 1,  1,  0,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ]});
        const m2 = applyMatrix({ x: 0, y: 2, m: [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [11, 11,  0,  0],
            [11, 11,  0,  0],
        ]});

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
    const CAT = 'Move: T move test, empty model';

    test('T, with one move', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, m: [
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]});
        const m2 = applyMatrix({ x: 1, y: 1, m: [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
        ]});

        // when
        const result = move(m1);

        // then
        assert(equals(result, m2), "Baseline of T should be in row 1");

    }, CAT)

    test('T, with two moves', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, m: [
            [ 0,  1,  1,  1],
            [ 0,  0,  1,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ]});
        const m2 = applyMatrix({ x: 1, y: 2, m: [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [ 0, 11, 11, 11],
            [ 0,  0, 11,  0],
        ]});

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "Baseline of T should be in row 2");

    }, CAT)

    test('T, with ten moves', () => {
        // given
        const m1 = applyMatrix({ x: 1, y: 0, m: [
            [ 0,  1,  1,  1],
            [ 0,  0,  1,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ]});
        const m2 = applyMatrix({ x: 1, y: 2, m: [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [ 0, 11, 11, 11],
            [ 0,  0, 11,  0],
        ]});

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
    const CAT = 'Move: Z move test, empty model';

    test('Z, with one move', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [2, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]});
        const m2 = applyMatrix({ x: 0, y: 1, m: [
            [0, 0, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ]});

        // when
        const result = move(m1);

        // then
        assert(equals(result, m2), "Baseline of Z should be in row 1");

    }, CAT)

    test('Z, with two moves', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [ 2,  2,  0,  0],
            [ 0,  2,  2,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ]});
        const m2 = applyMatrix({ x: 0, y: 2, m: [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [12, 12,  0,  0],
            [ 0, 12, 12,  0],
        ]});

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "Baseline of Z should be in row 2");

    }, CAT)

    test('Z, with ten moves', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [ 2,  2,  0,  0],
            [ 0,  2,  2,  0],
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
        ]});
        const m2 = applyMatrix({ x: 0, y: 2, m: [
            [ 0,  0,  0,  0],
            [ 0,  0,  0,  0],
            [12, 12,  0,  0],
            [ 0, 12, 12,  0],
        ]});

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
    const CAT = 'Move: Z move test, non empty model';

    test('Z, with ten moves', () => {
        // given
        const m1 = applyMatrix({ x: 0, y: 0, m: [
            [ 2,  2,  0,  0,  0],
            [ 0,  2,  2,  0,  0],
            [ 0,  0,  0,  0,  0],
            [11, 11, 11,  0,  0],
            [ 0, 11,  0,  0,  0],
        ]});
        const m2 = applyMatrix({ x: 0, y: 1, m: [
            [ 0,  0,  0,  0,  0],
            [12, 12,  0,  0,  0],
            [ 0, 12, 12,  0,  0],
            [11, 11, 11,  0,  0],
            [ 0, 11,  0,  0,  0],
        ]});

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
        const m1 = applyMatrix({ x: 2, y: 0, m: [
            [ 0,  0,  2,  2,  0],
            [ 0,  0,  0,  2,  2],
            [ 0,  0,  0,  0,  0],
            [11, 11, 11,  0,  0],
            [ 0, 11,  0,  0,  0],
        ]});
        const m2 = applyMatrix({ x: 2, y: 2, m: [
            [ 0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0],
            [ 0,  0, 12, 12,  0],
            [11, 11, 11, 12, 12],
            [ 0, 11,  0,  0,  0],
        ]});

        // when
        let result = move(m1);
        result = move(result);

        // then
        assert(equals(result, m2), "Baseline of Z should be in row 2");

    }, CAT)

    test('T, with three moves, collides with Z', () => {
        // given
        const m1 = applyMatrix({ x: 2, y: 0, m: [
            [ 0,  0,  2,  2,  0],
            [ 0,  0,  0,  2,  2],
            [ 0,  0,  0,  0,  0],
            [ 0, 11,  0,  0,  0],
            [11, 11, 11,  0,  0],
        ]});
        const m2 = applyMatrix({ x: 2, y: 3, m: [
            [ 0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0],
            [ 0, 11, 12, 12,  0],
            [11, 11, 11, 12, 12],
        ]});

        // when
        let result = move(m1);
        result = move(result);
        result = move(result);

        // then
        assert(equals(result, m2), "Baseline of Z should be in row 3");

    }, CAT)

}

function ZTIMovesNonEmpty() {
    const CAT = 'Move: Z, T, I moves on a non empty model'; // T:1, Z:2, I:3

    test('Z, with 15 moves', () => {
        // given
        const m1 = applyMatrix({ x: 4, y: 0, m: [
            [ 0,  0,  0,  0,  3,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  3,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  3,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  3,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [11,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [11, 11,  0,  0,  0,  0,  0,  0,  0,  0],
            [11, 11, 12, 12,  0,  0,  0,  0,  0,  0],
            [11, 11, 11, 12, 12,  0,  0,  0,  0,  0],
        ]});
        const m2 = applyMatrix({ x: 4, y: 15, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0, 13,  0,  0,  0,  0,  0],
            [11,  0,  0,  0, 13,  0,  0,  0,  0,  0],
            [11, 11,  0,  0, 13,  0,  0,  0,  0,  0],
            [11, 11, 12, 12, 13,  0,  0,  0,  0,  0],
            [11, 11, 11, 12, 12,  0,  0,  0,  0,  0],
        ]});

        // when
        let result = move(m1);
        for (let index = 1; index < 15; index++) {
            result = move(result);
        }

        // then
        assert(equals(result, m2), "Baseline of I should be in row 18");

    }, CAT)
}

export { singleBlockMovesTests, twoHorizontalBlockMoveTests, OMoveTests, TMoveTests, ZMoveTests, 
         ZMoveTestsNotEmpty, ZTIMovesNonEmpty };