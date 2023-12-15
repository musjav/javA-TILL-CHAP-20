// // var age = prompt("First Name");
// // var age = prompt("Last Name");
// // var age = prompt("Email");
// // var age = prompt("Phone Number");
// // var age = prompt("Password");
// // // alert(You are learning JavaScript);
// // alert("You're learning JavaScript!");
// // // 1. Declare a variable in camelCase format
// // var myVariable;

// // // 2. Declare a variable and assign a string in a separate statement
// // var secondVariable;
// // secondVariable = "Hello, I'm a string!";

// // // 3. Declare the variable teamName and alert your team name
// // var teamName = "Team Awesome";
// // alert(teamName);

// // // 4. Reassign the variable bestMan with a new string
// // var bestMan = "Charlie";
// // bestMan = "David"; // Assigning a new string to the variable bestMan

// // var caseQty;
// // caseQty=144;
// // var num = 9;
// // var sumOfNumbers;
// // sumOfNumbers = 5 + 7; 

// // var merchTotal = 100;
// // var shippingCharge = 10;
// // var orderTotal = merchTotal + shippingCharge;
// // alert("value of order total:\n" + orderTotal)
// // // 1. Declare a variable and assign it a number
// // var myNumber = 10;
// // // 2. Change the value of the variable by adding it together with a number
// // AddedNumber = myNumber+5; // This is shorthand for myNumber = myNumber + 5;
// // alert("Added nummbers:"+AddedNumber );

// // // var productcost = 3.45;
// // // var nameOfBand;
// // // Declare a legally-named variable and assign a number to it
// // var legalVariable = 25;

// // // Declare a variable that is a combination of your first and last names using camelCase
// // // var firstName = "John";
// // // var lastName = "Doe";
// // // var combinedName = `${firstName}${lastName}`;

// // // List of legal variables:
// // // var legalVariableName;
// // // var anotherLegalName;
// // // var thisIsAlsoLegal123;
// // // var camelCaseExample;

// // // List of illegal variables:
// // // var 123illegalVariable; // Starts with a number (illegal)
// // // var my-variable; // Contains a hyphen (illegal)
// // // var illegal name; // Contains a space (illegal)
// // // var const; // Reserved keyword (illegal)

// // console.log("Q.What is the namee and symbol of the arithmetic operator that gives you the remainder when one number is divided by another \n ans.%")

// // // What is the value of num?
// // var num = 20 % 6;
// // console.log(num);

// // var largeNum = 1000 * 2000;
// // var firstVariable = 15;
// // var secondVariable = 7;

// // var subtractionResult = firstVariable - secondVariable;
// // var dividend = 27;
// // var divisor = 5;

// // var remainderVariable = dividend % divisor;
// // var num1 = 10;
// // var num2 = 6;

// // alert("The result of the multiplication is:\n"+num1*num2);

// // Using the increment operator
// // x++;
// // x--;
// // var x = 50;
// // var y = x++;
// // // The value of y will be 50 because the postfix increment (x++) assigns the current value of x to y and then increments x by 1.
// // var y = 50;
// // var z = --y;
// // // The value of z will be 49 because the prefix decrement (--y) decrements y by 1 and then assigns the decremented value to z.
// // var newNum = --num;
// // var originalVar = 10;
// // var incrementedVar = originalVar++;
// // var myVariable = 5;
// // myVariable++;
// // alert("The new value is:\n"+ myVariable);

// var calculatedNum = 2 + (2 * 6);
// // = 2 + (2 * 6)
// // = 2 + 12
// // = 14
// var calculatedNum = (2 + 2) * 6;
// // = (2 + 2) * 6
// // = 4 * 6
// // = 24
// var calculatedNum = (2 + 2) * (4 + 2);
// // = (2 + 2) * (4 + 2)
// // = 4 * 6
// // = 24

// var calculatedNum = ((2 + 2) * 4) + 2;
// // = ((2 + 2) * 4) + 2
// // = (4 * 4) + 2
// // = 16 + 2
// // = 18
// var cost = (2 + 2) * (4 + 10);
// // = (4) * (14)
// // = 56
// var units = 2 + (2 * 4) + 10;
// // = 2 + (8) + 10
// // = 20
// var pressure = (4 / 2) * 4;
// // = (2) * 4
// // = 8
// // 1. var num = "2" + "2";
// // The value of num would be "22" (including the quotation marks) because when two strings are added together using the + operator in JavaScript, they are concatenated, not numerically added.

// // 2. message = ("Hello," + "Dolly");
// // The value of message would be "Hello,Dolly" (including the quotation marks) because the + operator concatenates the two strings together.

// // 3. alert("33" + 3);
// // The message displayed in the alert box would be "333" (including the quotation marks) because the number 3 gets coerced into a string due to concatenation with the string "33".
// alert("Pakistan " + "Zindabad");
// var concatenated = "Number: " + 10;
// // This would assign the value "Number: 10" to the variable concatenated
// var firstString = "Hello";
// var secondString = "World";
// var concatenatedString = firstString + secondString;
// // This would assign the value "HelloWorld" to the variable concatenatedString

// var firstName = prompt("Enter first name");
// var country = prompt("Country?", "China");
// var yourName = prompt("Enter Your Name");
// // The prompt message should be enclosed in quotes
// var userInput = prompt("Enter your answer", "Default value");
// // The first parameter is the message, and the second parameter is the default input value
// var message = "Enter your favorite color:";
// var defaultResponse = "Blue";
// var userResponse = prompt(message, defaultResponse);
// var customPrompt = prompt("What's your favorite food?", "Pizza");
// alert("Your favorite food is: " + customPrompt);
// // This displays a prompt asking for the user's favorite food with "Pizza" as the default response and then displays the user's response in an alert
// var city = "Karachi";
// if (city === "Karachi") {
//     console.log("The City OF Lights");
// }
// // Corrected by using '===' for comparison instead of '='
// if (x === y) {
//     var z = prompt("Please enter the value of z:");
//     // Assuming x is equal to y, it prompts the user to enter the value of z.
// }
// var ZipCode = "10010";
// if (ZipCode === "10010") {
//     alert("Karachi");
// } else {
//     alert("Please write correct city");
// }
// var myVariable = 5; // Example variable
// if (myVariable === 5) {
//     myVariable = 10; // Assigning a new value if the condition is true
// }
// if (variable1 !== variable2) {
//     // Your code here if variable1 is not equal to variable2
// }
// if (variable1 >= variable2) {
//     // Your code here if variable1 is greater than or equal to variable2
// }
// var myVariable = 5; // Example variable
// if (myVariable !== 10) {
//     myVariable = 10; // Assigning 10 to myVariable if it's not equal to 10
// }
// var num1 = 5;
// var num2 = 10;
// if (num1 !== num2) {
//     alert("Congratulations! Numbers are unequal.");
// }
// var enteredName = prompt("Please enter your first name:");
// var anotherName = "John"; // Example name to compare
// if (enteredName !== anotherName) {
//     alert("No match");
// }
// var variable1 = 10;
// var variable2 = 8;

// if (variable1 >= variable2) {
//     alert("Variable 1 is greater than or equal to Variable 2");
// } else {
//     alert("Variable 1 is less than Variable 2");
// }
// var marks = parseFloat(prompt("Enter your marks:"));

// if (marks >= 90) {
//     alert("Your percentage is " + marks + "%. Grade: A");
// } else if (marks >= 70 && marks < 90) {
//     alert("Your percentage is " + marks + "%. Grade: B");
// } else if (marks >= 50 && marks < 70) {
//     alert("Your percentage is " + marks + "%. Grade: C");
// } else {
//     alert("Your percentage is " + marks + "%. Grade: F");
// }
// if (a === 10) {
//     alert("a is 10");
// } else {
//     alert("The correct value of a is " + a);
// }
// // Ensure to define the value of 'a' before using this statement.
// var city = prompt("Enter a city:");

// if (city === "Karachi") {
//     alert("Acknowledging it is Karachi.");
// } else if (city === "Lahore") {
//     alert("Acknowledging it's Lahore.");
// } else {
//     alert("Different city entered.");
// }
// if (a === b && c === d) {
//     // Your code here if both conditions are true
// }
// if (a === b || c !== d) {
//     // Your code here if either a equals b or c is not equal to d
// }
// if ((name === "Hamza" || name === "Arsalan") && age < 60) {
//     // Your code here if name is either "Hamza" or "Arsalan" and age is less than 60
// }
// var variable1 = 10;
// var variable2 = 20;

// if (variable1 < variable2 || variable1 > variable2) {
//     alert("The condition is true: Variable 1 is less than or greater than Variable 2");
// }
// var firstName = "John";
// var lastName = "Doe";

// var enteredFirstName = prompt("Enter your first name:");
// var enteredLastName = prompt("Enter your last name:");

// if (enteredFirstName === firstName && enteredLastName === lastName) {
//     alert("Names match!");
// }
// var password = prompt("Enter your password:");

// if (password !== "") {
//     if (password.length <= 5) {
//         alert("Password must be greater than 5 characters.");
//     } else {
//         alert("OK");
//     }
// }
// if (a === 1) {
//     if (c === "Max") {
//         alert("OK");
//     }
// }
// // This statement will only display "OK" if 'a' is equal to 1 and 'c' is equal to "Max".
// if (a === 1 && c === "Max") {
//     alert("OK");
// }
// // This statement tests both conditions at once without using nested if statements.
// var var1 = 5;
// var var2 = 5;

// if (var1 === var2) {
//     if (var1 <= var2) {
//         alert("Test passed: Variable 1 equals Variable 2 and is less than or equal to Variable 2");
//     }
// }
// // // This checks if var1 equals var2 and if var1 is less than or equal to var2.
// var emptyArray = [];
// var arrayWithString = ["Hello"];
// var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]); // This will display "j" in an alert
// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var lengthOfArray = alphabet.length;
// alert(lengthOfArray); // This will display the total length of the array
// var arrayWithOneElement = ["Apple"];
// arrayWithOneElement[1] = "Banana";
// alert(arrayWithOneElement[1]); // This will display the newly added element "Banana" in an alert
// var arrayWithOneElement = ["Hello"];
// arrayWithOneElement.push("World"); // Adding a new element to the array
// alert(arrayWithOneElement[arrayWithOneElement.length - 1]); // Alerting the last element ("World")
// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.pop(); // Removes the last element from the array
// console.log(Alphabet); // This will display the modified array without the last element
// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.push(5); // Adding a new number element (5) to the end of the array
// console.log(Alphabet); // This will display the modified array with the added number element
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift(); // Remove the first element of the array
// console.log(sizes); // Displays the modified array without the first element
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(3, 2, 1); // Add three number elements (1, 2, 3) to the beginning of the array
// console.log(sizes); // Displays the modified array with added elements at the beginning
// var myArray = ["First"];
// myArray.unshift("Second"); // Add a new element ("Second") to the beginning of the array
// alert(myArray[0]); // This will alert the new first element of the array
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L"); // Insert "L" at index 2
// console.log(sizes); // Displays the modified array with "L" inserted
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3); // Copy the first 3 elements into a new array
// console.log(regSizes); // Displays the new array with the copied elements
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 3, "elephant", "tiger"); // Add elements after "dog" and remove elements "cat", "ox", "duck"
// console.log(pets); // Displays the modified array
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 2); // Remove "cat" and "ox"
// console.log(pets); // Displays the modified array
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var slicedPets = pets.slice(3, 5); // Get elements from index 3 to 4 ("duck" and "frog")
// console.log(slicedPets); // Displays the sliced elements
// for (var i = 0; i < 10; i++) {
//     // Your code here to run 10 times
// }
// for (var i = 0; i <= 11; i++) {
//     // Your code here to run 12 times
// }
// // The missing characters in the code are: ; after var i = 0, ; after i <= 4, ; after i++.

// // Code the first line of a for loop with a counter name that's not i. Run it 100 times using <:

// for (var j = 0; j < 100; j++) {
//     // Your code here to run 100 times
// }
// for (var k = 3; k > 0; k--) {
//     // Your code here to run 3 times and decrementing
// }
// var numberOfElements = myArray.length;
// var flag = true; // Or false, based on your requirement
// for (var m = 0; m < pets.length; m++) {
//     // Your code here using the elements in the 'pets' array
// }
// for (var n = 0; n < 10; n++) {
//     if (n === 1) {
//         alert(n);
//         break;
//     }
// }
// var usernames = ["user1", "user2", "user3"]; // Array containing usernames
// var userInput = prompt("Enter first name");
// for (var p = 0; p < usernames.length; p++) {
//     if (userInput === usernames[p]) {
//         alert("Enter");
//         break;
//     } else {
//         alert("Please write correct username");
//         break;
//     }
// }
// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (var r = 0; r < firstArr.length; r++) {
//     for (var s = 0; s < secondArr.length; s++) {
//         console.log(firstArr[r] + secondArr[s]);
//     }
// }
// // Expected Output:
// // a1, a2, a3, a4, ..., f6




















