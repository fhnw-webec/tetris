import { equalityTest } from "./tests/equality/equality-tests.mjs";
import { oneLeftTest } from "./tests/move/left-tests.mjs";
import { singleBlockMovesTests, twoHorizontalBlockMoveTests, OMoveTests, 
         TMoveTests, ZMoveTests, ZMoveTestsNotEmpty, ZTIMovesNonEmpty } from "./tests/move/move-tests.mjs";

// equaliy
equalityTest();

// move
singleBlockMovesTests();
twoHorizontalBlockMoveTests();
OMoveTests();
TMoveTests();
ZMoveTests();
ZMoveTestsNotEmpty();
ZTIMovesNonEmpty();

// left 
oneLeftTest();