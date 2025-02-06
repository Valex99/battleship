// Will return to this later... maybe

import Ship from "../logic/ship";


describe('Ship class', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3); // Create a ship with a length of 3
  });

  test('Ship is not sunk initially', () => {
    expect(ship.isSunk()).toBe(false); // The ship should not be sunk at the start
  });

  test('Ship gets hit', () => {
    ship.hit();
    expect(ship.timesHit).toBe(1); // After one hit, the ship should have 1 hit
  });

  test('Ship is sunk when hit the same number of times as its length', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true); // After 3 hits, the ship should be sunk
  });
});