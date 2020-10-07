//parent class
class Vehicle {
    //creates the objects make,model, year and sets their values
    constructor(make, model, year) { 
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information() {
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }
}
//child class
class Cars extends Vehicle {
    constructor(make, model, year, doors) {
         //super grants access to parent class contents ie properties and methods
        super(make, model, year); 
        this.doors = doors;
    }
    Information() {
        //collects 'information' from class Vehicle
        super.Information();
        console.log(`Doors: ${this.doors}.`);
    }
}

let myCar = new Cars('VW', 'Passat', 2011, 5);
myCar.Information();
    //let myVehicle = new Vehicle('Vw', 'Golf', 2010);
    //myVehicle.Information();
