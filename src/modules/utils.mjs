const LANDED = 10;

const x = list => list[0];
const y = list => list[list.length - 1];

const activeTetromino = model =>
    model.flatMap((row, y) => row.flatMap((cell, x) => cell < LANDED && cell > 0 ? [[x, y]] : []));

export { x, y, activeTetromino, LANDED };