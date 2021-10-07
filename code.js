/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Objects here.

function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  
  Traveler.prototype.hunt = function () {
    return (this.food += 2);
  };
  
  Traveler.prototype.eat = function () {
    if (this.food < 1) {
      this.isHealthy = false;
    } else {
      this.food -= 1;
    }
  };
  
  function Wagon(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }
  
  Wagon.prototype.getAvailableSeatCount = function () {
    return this.capacity - this.passengers.length;
  };
  
  Wagon.prototype.join = function (traveler) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(traveler);
    } else {
      console.log(`Sorry, ${traveler.name}, the wagon is full.`);
    }
  };
  
  Wagon.prototype.shouldQuarantine = function () {
    return this.passengers.some((passenger) => !passenger.isHealthy);
  };
  
  Wagon.prototype.totalFood = function () {
    return this.passengers.reduce(
      (sum, currentTraveler) => sum + currentTraveler.food,
      0
    );
  };
  