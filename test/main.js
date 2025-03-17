import { equalityTest } from "./tests/equality/equality-tests.mjs";
import { singleBlockMovesTests, twoHorizontalBlockMoveTests, OMoveTests } from "./tests/move/move-tests.mjs";

equalityTest();

singleBlockMovesTests();
twoHorizontalBlockMoveTests();
OMoveTests();
