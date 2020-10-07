//parent class
class Vehicle{

    constructor(make, model, year){//creates the objects make,model, year and sets their values
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }
}
//child class
class Cars extends Vehicle {
    constructor(make, model, year, doors){
        super(make, model, year);//super grants access to parent class contents ie properties and methods
        this.doors = doors;
    }
    Information(){
        super.Information(); //collects 'information' from class Vehicle
        console.log(`Doors: ${this.doors}.`);
    }
}

let myCar = new Cars('VW', 'Passat', 2011, 5);
myCar.Information();
    //let myVehicle = new Vehicle('Vw', 'Golf', 2010);
    //myVehicle.Information();
