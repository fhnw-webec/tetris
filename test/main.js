import { equalityTest } from "./tests/equality/equality-tests.mjs";
import { singleBlockMovesTests, twoBlockMovesTests } from "./tests/move/move-tests.mjs";

equalityTest();
singleBlockMovesTests();
twoBlockMovesTests();
