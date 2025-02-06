import Ship from "./ship";
// Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.

class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = createBoard();
    this.missedShots = [];
    this.ships = [];
  }

  createBoard() {
    return Array.from({ length: this.size }, () => Array(this.size).fill(null));
  }

  placeShip(x, y, length, direction = "horizontal") {
    const newShip = new Ship(length);
    this.ships.push(newShip);

    if (direction === "horizontal") {
      for (let i = 0; i < length; i++) {
        this.board[y][x + i] = newShip;
      }
    } else {
      for (let i = 0; i < length; i++) {
        this.board[y + i][x] = newShip;
      }
    }
  }
}
