let fruitName = "Banana"

fruitName = "23";

let fruit: {
    name: string;
    s: string;
} = {
    name: "banana",
    s: "true"
}

const {name: string} = fruit

// Unkown can take any types but TS limits the things we can do with it
const unknownString: unknown = "What am I?"

// Can not execute the following statement
// console.log(unknownString.toUpperCase()) 

//We can do type narrowing to do runtime checks
if (typeof unknownString === "string"){
    console.log(unknownString.toUpperCase())
}

// any gives more flexibility than unknown, but unknown gives more type safety