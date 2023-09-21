
// array of flavors
 const flavors = ["vanilla", "coffee", "strawberry"];
console.log(flavors);

const userObjectText = prompt("Pick a froyo flavor");
const userObject = JSON.parse(userObjectText);

const orderFroyo = { 
    vanilla: 3,
    coffee: 2,
    strawberry: 1
}
console.log(orderFroyo)

/*
function gimmeAnObject(key, value) {
    const obj = {};
    obj[key] = value;
    return obj;
}
*/

const myFroyo = gimmeAnObject("flavors", "vanilla")
console.log("myFroyo", myFroyo);

 


/* 
const userObjectText = prompt('Please enter a list of comma-separated froyo flavors.');
const userObjectArray = userObjectText.split(',');
const froyo = {
 orderedFlavors: userObjectArray
};
console.log(froyo);
console.table(froyo);

*/