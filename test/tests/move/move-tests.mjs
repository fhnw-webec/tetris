import { test, assert } from "../../lib/unit-test.mjs"
import { a } from "/src/modules/logic.mjs";

function groupA() {
    const MAX_TEST = 'Maximum-Tests';

    test('Single block', () => {
        // given
        let x;

        // when
        x = 42;

        // then
        assert(x == a(x), "Expected 42")

    }, MAX_TEST)
}

export { groupA };