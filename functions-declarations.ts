let fruitNames: string[] = ["Apple", "Banana"];

// Adding types to arguments
function alternateUpperCase(name: string, index: number){
    if (index % 2 === 0) {
        return name.toUpperCase()
    }
    return name;
}

// TS knows alternatedNames is a string[]
const alternatedNames = fruitNames.map(alternateUpperCase)

// Adding return value to functions
function headsOrTails(): boolean {
    return 2 > 4;
}

// Every async function returns a promise of something
// getFruitList() returns a Promise<string[]>
async function getFruitList()  {
    const response = await fetch("https://example.com/fruit");
    const fruitList:string[] = await response.json();
    return fruitList;
}

// Type annotations for callbacks. In this instance, our callback is taking a 
// function which accepts a number as an argument and returns a number
function mapNumbersToNumbers(list: number[], callback: (num: number) => number ){
    return list.map(callback)
}
const doubledNumbers = mapNumbersToNumbers([1,2,3], (num) => 2 * num)
 
// Optional parameters with the "?" or "=" operator.
function run(name: string, elevation = "high", speed?:number, ) :string {
    let message:string;
    if(speed){
        message = name + ' is running at ' + elevation + " elevation with " + speed.toString() + ' speed.';
    } else {
        message = name + ' is running at ' + elevation + " elevation.";
    }
    return message;
}

run("Abhishek", "steep", 5)
run("Sharma")
run("John", "Very steep")

// Spread syntax for unknown parameters
function manyRun(...names: string[]){
    names.forEach((name) => {
        console.log(name + ' runs.')
    })
}