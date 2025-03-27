// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';


class Motorbike extends Vehicle{
  
// year, weight, top speed, and wheels
vin: string;
color: string;
make: string;
model: string;
year: number;
weight: number;
topSpeed: number;
wheels: Wheel[];
 // make (string), model (string), year (number), weight (number), topSpeed (number), 
 // wheels (Wheel[])
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    super();
    // vin, color, make, model, year, weight, topSpeed, wheels

    // TODO: The constructor should initialize the properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;    
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    
    // TODO: The constructor should check if the wheels array has 2 elements 
    // and create 2 new default Wheel objects if it does not

if (wheels.length !==2) {
  this.wheels = [new Wheel(), new Wheel()];
  } else {
    this.wheels = wheels;
  }
}

    // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
wheelie(): void {
  if (this.topSpeed > 30) {
  //30 is an example, need to review and ID the correct number later
  console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
} else {
  console.log(`${this.make} ${this.model} cannot perform a wheelie!`);
}
}

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
  // TODO: The method should call the printDetails method of the parent class
  super.printDetails(); // Calls the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, 
  // weight, top speed, color, and wheels
  console.log(`Vin: ${this.vin}`);
  console.log(`Make:${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`Weight: ${this.weight}`);
  console.log(`Top Speed:${this.topSpeed}`);
  console.log(`Color: ${this.color}`);
  console.log(`Wheels: ${this.wheels.length}`);  
 }
}
  
// Export the Motorbike class as the default export
export default Motorbike;