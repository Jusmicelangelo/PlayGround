class Vehicle {
    constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }
    honk() {
        console.log("beep!")
    }
    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk() // "beep!"
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."


class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
console.log(myFirstCar.numWheels);  // 4



class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        console.log("Vroom!")
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels);  // 2


class Garage {
    
    constructor (maxCapacity) {
        this.vehicles = [];
        this.maxCapacity = maxCapacity;
    }
    
    add (vehicle) {
        if (this.vehicles.length >= this.maxCapacity) {
            console.log("Sorry, we're full!");
            return 
        }
        if (!(vehicle instanceof Vehicle)) {
            console.log("Only vehicles are allowed in here!");
            return 
          }
        this.vehicles.push(vehicle)
        console.log("Vehicle added!")
        
    }
}

let garage = new Garage(2);
console.log(garage.vehicles); // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
console.log(garage.vehicles); // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
console.log(garage.vehicles); // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."