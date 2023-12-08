//Exercise 3.1:

let arr = ["Milk", "Bread", "Apples"];
console.log(arr.length);

arr[1] = "Bananas";
console.log(arr);

//Exercise 3.2:
let shopping;
shopping = ["Milk", "Bread", "Apples"];
shopping[1] = "Bananas";
shopping[2] = "Eggs";
shopping[3] = "Apples";
console.log(shopping);

shopping.pop();
console.log(shopping);

shopping.sort();
console.log(shopping);

shopping = shopping.find(e => e === "Milk");
console.log(shopping);

findIndex1 = shopping.indexOf("Milk");
console.log(findIndex1);

shopping = ["Bananas", "Eggs", "Milk"];
shopping.splice(1, 0, "Carrots", "Lettuce");
console.log(shopping);

let newshopping = ["Juice", "Pop"];
console.log(newshopping);
let newshopping2 = ["Juice", "Pop"];
console.log(newshopping2);

let combinelist = shopping.concat(newshopping, newshopping2);
console.log(combinelist);
let lastitem = combinelist.lastIndexOf("Pop");
console.log(lastitem);

//Exercise 3.3:
let multiarr = [1, 2, 3];
multiarr2 =
    [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ];
console.log(multiarr2);
console.log(multiarr2[1][1]);

//Objects:
//Exercise 3.4:

let myCar = {
    make: "Toyota",
    model: "Carmy",
    year: 2022,
    color: 'Blue',
    isAutomatic: true,
    mileage: 15000,
    isElectric: false,
    owners: ['John', 'Sarah'],
    features: ['Air Conditioning', 'Power Windows', 'Bluetooth', 'Cruise Control'],
};
var propertyName = "color";
var myCar2 = {
    make: "Toyota",
    model: "Carmy",
    year: 2022,
    color: "blue",
}
myCar[myCar2] = "black",

    newProperty = "forSale",
    myCar[newProperty] = true,
    console.log(myCar.forSale);

[newProperty] = "available";
console.log(myCar.make);
console.log(myCar.model);

//Exercise 3.5 :

let people = [];

var friend1 = {
    fisrtName: "Khadijah",
    lastname: "Abro",
    ID: 1
};
var friend2 = {
    Fsistname: "Rida",
    lastname: "pathan",
    ID: 2
};
var friend3 = {
    firstname: "Ajar",
    Lastname: "Baloch",
    ID: 3
};

let friend = [];
friend.push(friend1);
friend.push(friend2);
friend.push(friend3);

console.log(friend);

// Removing the last element is done with pop():
// Deleting the first element can be done with shift().
// we can add elements with the push() method.


// Chapter Projects :
//Manupulating an Array:

const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
    { test: 'one', score: 55 }, ['one', 'two']];

theList.shift();
console.log(theList);

theList.splice(0, 0, "Fisrt");
console.log(theList);

theList.splice(3, 10, "hello World");
console.log(theList);

theList.splice(2, 1, "Middle");
console.log(theList);

theList.push("Last");
console.log(theList);

//Company Project Catalog :

const storeInventory = [];

const item1 = {
    Name: "Product A",
    Model: "Model1",
    Cost: 99.99,
    Quantity: 100
};
const item2 = {
    Name: "Product B",
    Model: "Model2",
    Cost: 39.9,
    Quantity: 25
};
const item3 = {
    Name: "Product C",
    Model: "Model3",
    Cost: 75.1,
    Quantity: 68
};
storeInventory.push = (item1, item2, item3);
console.log("storeIventory:");
console.log(storeInventory);

let findIndex2 = item3.find( e=>e ===2 );
console.log(findIndex2);


//Chapter : 4
//Logical statements:
//Exercise 4.1:

let event = true;
console.log(event);

if (event) {
    console.log("i'll go to shopping.")
} else {
    console.log("I won't go.")
};

//Exercise 4.2:
let userAge = prompt("Please enter your age");

let message;
if (userAge >= 21) {
    message = "You are allowed to enter the venue and purchase alcohol."
} else {
    message = "you are not old enough to enter the venue and puchase alcohol."
}
if (userAge >= 19) {
    message = "You can enter in venue but cant purchase alcohol."
} else {
    message = "Please enter the valid number."
}
console.log(message);

//Exercise 4.3 :
let ID = true;
let message3 = ID;
console.log("allowed.");

//Exercise 4.4 :
let randomNumber = (Math.random() * 6);
console.log(randomNumber)
//let usersInput = prompt("ask a question!");
let response;
switch (response) {
    case "1":
        console.log("its a certain!");
        break;
    case "2":
        console.log("without a doubt.");
        break;
    case "3":
        console.log("certainly not!");
        break;
    case "4":
        console.log("try again");
        break;
    case "5":
        console.log("my source say no!")
        break;
    case "6":
        console.log("don't count on it");
        break;
    default:
        console.log("I don't know this number!")
};
if (randomNumber)
    final_response = "The Magic 8-Ball says: {responses[random_number]}"
else {
    final_response = "Invalid response."
};
console.log(final_response);

//Exercise 4.5 :
let prize = prompt("Please enter a number between 0 and 10 to set the prize.");
if (0 <= prize <= 10)
    console.log("Correct!")
else {
    console.log("incorrect answer,please enter a number between 0 and 10.")
};
let output = "mySelection";
switch ("mySelection") {
    case "1":
        console.log("a");
        break;
    case "2":
        console.log("b");
        break;
    case "3":
        console.log("c");
        break;
    case "4":
        console.log("d");
        break;
    case "5":
        console.log("e");
        break;
    case "6":
        console.log("f");
        break;
    case "7":
        console.log("g");
        break;
    case "8":
        console.log("h");

        break;
    case "9":
        console.log("i");
        break;
};
if (prize + "mySelection")
    console.log("congratulations!Correct answer!");
else {
    console.log("better luck,next time!")
};

//Evaluating a number game:
let userNumber = prompt("Please enter a number");
if (userNumber <= 7)
    console.log("Great!You're right.")
else {
    console.log("Oops,you're wrong!")
};

//Friend checker game:
let friends = prompt("enter a name");
let input;
switch (input) {
    case 1:
        console.log("Alice");
        break;
    case 2:
        console.log("El");
        break;
    default:
        console.log("Enter a string value")
};
if (friends + input)
    console.log("Yes,This is my friend!")
else {
    console.log("I dont know her!")
};







































