// create prompt for user to store froyo flavors
const userObjectText = prompt("Please enter a list of comma-separated froyo flavors.");
console.log(userObjectText);


// array of flavors
const froyoFlavors = ["vanilla", "coffee", "strawberry"];

// split user input into array
const flavor = userObjectText.split(",");
console.log(flavor);


// user input
// vanilla,vanilla,vanilla,strawberry,coffee,coffee