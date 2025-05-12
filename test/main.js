import { equalityTest } from "./tests/equality/equality-tests.mjs";
import { oneLeftTest } from "./tests/move/left-tests.mjs";
import { rightTests } from "./tests/move/right-tests.mjs";
import { activeTetrominoTests } from "./tests/move/active-tetromino-tests.mjs";
import { simulationTests } from "./tests/move/simulation-tests.mjs";
import { validTests } from "./tests/move/valid-tests.mjs";
import { applyTests } from "./tests/move/apply-tests.mjs";
import { rotationTest } from "./tests/rotation/rotation-tests.mjs";
import { rotationStateTest } from "./tests/rotation/rotation-state-tests.mjs";
import { wallKickTest } from "./tests/rotation/wall-kick-tests.mjs";
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

// right
rightTests();

// infrastructure
activeTetrominoTests();
simulationTests();
validTests();
applyTests();

// rotation
rotationTest();
rotationStateTest();

// wall kicks
wallKickTest();