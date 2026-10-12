var car = {
    name: "Mercedes",
    color: "red",

    get getKilometers() {
        return this.kilometers;
    },

    set setKilometers(km) {
        this.kilometers = km;
    }
};

console.log(car.getKilometers);
car.setKilometers = 100;

console.log(car.getKilometers);


var computer = new Object();
computer.name = "lenovo";
computer.RAM = "16gb";

function Computer(name, CPU, RAM) {
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
}

var computer1 = new Computer("Macbook", "M1 8-CORE", "8GB");
var computer2 = new Computer("Lenovo", "Intel-core", "8GB");