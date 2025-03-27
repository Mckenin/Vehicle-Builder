// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
class Truck extends Vehicle {
    constructor(vin, // combination of letters & numbers
    color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        // The constructor calls the constructor of the parent class, Vehicle
        // The constructor initializes the properties of the Truck class
        // The constructor checks if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
        let initializedWheels;
        if (wheels.length !== 4) {
            initializedWheels = [
                new Wheel(16, "Default Tire"),
                new Wheel(16, "Default Tire"),
                new Wheel(16, "Default Tire"),
                new Wheel(16, "Default Tire"),
            ];
        }
        else {
            initializedWheels = wheels;
        }
        super();
        // vin, color, make, model, year, weight, topSpeed, wheels
        this.towingCapacity = towingCapacity;
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
    }
    tow(vehicle) {
        const vehicleMake = vehicle.make;
        const vehicleModel = vehicle.model;
        if (vehicle.weight <= this.towingCapacity) {
            // TODO: If it is, log that the vehicle is being towed
            console.log(`${vehicleMake} ${vehicleModel} is being towed by the ${this.make} ${this.model}.`);
        }
        else {
            // TODO: If it is not, log that the vehicle is too heavy to be towed
            console.log(`${vehicleMake} ${vehicleModel} is too heavy to be towed by the ${this.make} ${this.model}.`);
        }
    }
    // TODO: Override the printDetails method from the Vehicle class
    printDetails() {
        // TODO: The method should call the printDetails method of the parent class
        super.printDetails();
        // TODO: The method should log the details of the Truck
        // TODO: The details should include the VIN, make, model, year, weight, top speed, 
        // color, towing capacity, and wheels
        console.log(`Vin: ${this.vin}`);
        console.log(`Make:${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight}`);
        console.log(`Top Speed:${this.topSpeed}`);
        console.log(`Color: ${this.color}`);
        console.log(`Towing Capacity: ${this.towingCapacity}`);
        console.log(`Wheels: ${this.wheels.length}`);
    }
}
// Export the Truck class as the default export
export default Truck;
