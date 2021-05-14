
// interface lets us create a named definition of an object that we can reuse
interface Car {
    wheels: number;
    color: string;
    doors?: string;
}

interface ElectricCar extends Car {
    power: string;
}

const car: Car  = { wheels: 4, color: "white" };

const evCar: ElectricCar = { wheels: 4, color: "blue", power: "plug in" }