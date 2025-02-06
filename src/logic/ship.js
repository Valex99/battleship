export default class Ship {
    constructor(shipLength) {
      this.shipLength = shipLength;
      this.timesHit = 0;
    }
  
    hit() {
      this.timesHit++;
    }
  
    isSunk() {
      return this.timesHit >= this.shipLength; // Returns true or false
    }
  }
  