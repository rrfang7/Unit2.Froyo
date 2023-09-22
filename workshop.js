// create prompt for user to store froyo flavors
const userObjectText = prompt("Please enter a list of comma-separated froyo flavors.");
console.log(userObjectText);


// array of flavors
const froyoFlavors = ["vanilla", "coffee", "strawberry"];

// split user input into array
const flavor = userObjectText.split(",");
console.log(flavor);

// for of loop to iterate array of flavor
const flavorCount = {};
for (const item of flavor) {    // item: flavor is key: pair value
    if (flavorCount[item]) {    // item is Key, flavor generates value
        flavorCount[item]++;
    }
    else {
        flavorCount[item] = 1;
    }
}

//console.log(flavorCount);
// user observe table listing of each flavor ordered
console.table(flavorCount);

// user input
// vanilla,vanilla,vanilla,strawberry,coffee,coffee