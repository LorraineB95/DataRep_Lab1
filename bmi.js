class BMI {
    //creates the objects height and weight
    constructor(height, weight){
        //creates local variables
        this.height = height;
        this.weight = weight;
    }

    calculateBMI(){
        //let defines the variables
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

let myBMI = new BMI(2, 90);
console.log(myBMI.calculateBMI());