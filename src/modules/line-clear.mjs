// (see https://tetris.wiki/Line_clear)

// TODO: Score?
// TODO: Game Over?

// Algorithmus:
// Von unten nach oben:
// 1. Reihe y_clear := height - 1, 
// 2. falls y_clear vollständig besetzt, Reihe löschen, Reihe y_clear wird frei
// 3. alle Blöcke mit y < y_clear um y + 1 bewegen
// 4. Wenn y_clear > 3, y_clear -= 1, weiter mit 2.