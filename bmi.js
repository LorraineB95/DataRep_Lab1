class BMI {

    constructor(height, weight){ //creates the objects height and weight
        this.height = height;//creates a local variable
        this.weight = weight;//creates a local variable
    }

    calculateBMI(){
        let bmi = this.weight/(this.height**2); //let defines the variable
        return bmi;
    }
}

let myBMI = new BMI(2, 90);
console.log(myBMI.calculateBMI());