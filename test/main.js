import { equalityTest } from "./tests/equality/equality-tests.mjs";
import { singleBlockMovesTests, twoHorizontalBlockMoveTests, OMoveTests, TMoveTests } from "./tests/move/move-tests.mjs";

equalityTest();

singleBlockMovesTests();
twoHorizontalBlockMoveTests();
OMoveTests();
TMoveTests();
