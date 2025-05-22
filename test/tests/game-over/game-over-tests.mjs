import { test, assert } from "/test/lib/unit-test.mjs"
import { computeGameOver } from '/src/modules/logic/game-over.mjs';
import { equals } from '/src/modules/logic/move.mjs';
import { applyMatrix, SPAWN_STATE } from '/src/modules/logic/utils.mjs';

function gameOverTests() {
    const GAME_OVER = 'Game over tests';

    test('Game still runing, nothing on the first line', () => {
        // given
        const m = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // off playfieldd
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // first line of playfield
            [ 0,  0,  0,  0,  0,  0, 11,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0, 11, 11,  0],
            [11, 11,  0,  0, 11, 11, 11,  0, 11, 11],
            [11, 11,  0,  0, 11, 11, 11, 11, 11, 11],
            [ 0, 11, 11,  0, 11, 11, 11, 11, 11, 11],
            [11, 11, 11,  0, 11, 11, 11, 11, 12, 12],
        ]});

        // when
        const result = computeGameOver(m);

        // then
        assert(!result.go, "Game is not yet over: nothing on first line");

    }, GAME_OVER);

    test('Game still runing, active tetromino on the first line', () => {
        // given
        const m = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  3,  0,  0,  0], // off playfieldd
            [ 0,  0,  0,  0,  0,  3,  3,  3,  0,  0], // first line of playfield
            [ 0,  0,  0,  0,  0,  0, 11,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0, 11, 11,  0],
            [11, 11,  0,  0, 11, 11, 11,  0, 11, 11],
            [11, 11,  0,  0, 11, 11, 11, 11, 11, 11],
            [ 0, 11, 11,  0, 11, 11, 11, 11, 11, 11],
            [11, 11, 11,  0, 11, 11, 11, 11, 12, 12],
        ]});

        // when
        const result = computeGameOver(m);

        // then
        assert(!result.go, "Game is not yet over: active tetromino on first line");

    }, GAME_OVER);

    test('Game over, landed block on first line', () => {
        // given
        const m = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0, 11,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0, 11,  0,  0,  0], // off playfieldd
            [ 0,  0,  0,  0,  0,  0, 11,  0,  0,  0], // first line of playfield
            [ 0,  0,  0,  0,  0,  0, 11,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0, 11, 11,  0],
            [11, 11,  0,  0, 11, 11, 11,  0, 11, 11],
            [11, 11,  0,  0, 11, 11, 11, 11, 11, 11],
            [ 0, 11, 11,  0, 11, 11, 11, 11, 11, 11],
            [11, 11, 11,  0, 11, 11, 11, 11, 12, 12],
        ]});

        // when
        const result = computeGameOver(m);

        // then
        assert(result.go, "Game still running: but landed block on first line");

    }, GAME_OVER);

    test('Playfield not big enough', () => {
        // given
        const m = applyMatrix({ x: 0, y: 0, c: SPAWN_STATE, p: SPAWN_STATE, m: [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ]});

        // when
        const result = computeGameOver(m);

        // then
        assert(result.go, "Playfield not big enough: Game should be over (not even started)");

    }, GAME_OVER);
}

export { gameOverTests };