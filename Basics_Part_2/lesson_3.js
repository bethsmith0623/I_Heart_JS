//write an else if statement for deciding what to wear based on the weather

var weather = "sunny";

if (weather === "snow") {
   console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else if (weather === "windy") {
  console.log("Wear a windbreaker.");
} else {
  console.log("Wear what you have on.");
}


// calculating the bill

var money = 100.50;
var price = 110.50;

if (money > price) {
  console.log(`You paid extra, here is your change, $${money-price}`);
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log(`That is not enough, you still owe $${price-money}`);
}

//awarding medals

var runner = "Kendyll";
var position = 2;
var medal;

if (position === 1) {
  medal = "gold";
} else if (position = 2) {
  medal = "silver";
} else if (position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

if(position <= 3) {
  console.log(runner + " received a " + medal + " medal.");
} else {
    console.log(runner + " received a " + medal);
}

/*write an if...else statement that prints "even" if the number is 
even and "odd" if the number is odd*/

var num = 2;

if (num % 2 === 0) {
  console.log("even");
} else if (num % 2 === 1) {
  console.log("odd");
}
//or
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

/*Write a series of conditional statements that:

Prints "not a group" if musicians is less than or equal to 0
Prints "solo" if musicians is equal to 1
Prints "duet" if musicians is equal to 2
Prints "trio" if musicians is equal to 3
Prints "quartet" if musicians is equal to 4
Prints "this is a large group" if musicians is greater than 4 */

// NOTE: the term for a group >4 is ensemble

var musicians = 1;

if (musicians <= 0) {
  console.log("not a group");
} else if (musicians === 1) {
  console.log("solo");
} else if (musicians === 2) {
  console.log("duet");
} else if (musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else {
  console.log("this is a large group");
}

/* Murder Mystery */
/* Since this might be your first time playing a murder mystery, we've simplified 
things quite a bit to make it easier. Here's what we know! In this murder mystery 
there are:

four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
We also know that each weapon corresponds to a particular room, so...

the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.
And we know that each suspect was located in a specific room at the time of the murder.

Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.
To help solve this mystery, write a combination of conditional statements that:

sets the value of weapon based on the room and
sets the value of solved to true if the value of room matches the suspect's room
Afterwards, use this template to print a message to the console if the mystery was solved:

__________ did it in the __________ with the __________! */

/* Solution NOTE: This problem is in part 8. In this course the use of the logical 
operators (&&, ||, !) aren't introduced until part 9, but it accepted my solution */

var room = "ballroom";  // ballroom, gallery, billiards rooom, dining room
var suspect = "Mr. Kalehoff"; // Mr. Parkes, Ms, Van Cleve, Mrs. Sparr, Mr. Kalehoff

var weapon = ""; // poison, a trophy, a pool stick, a knife
var solved = false;


if (room === "ballroom" && suspect === "Mr. Kalehoff") {
  weapon = "poison";
  solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
  weapon ="trophy";
  solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
  weapon = "pool stick";
  solved = true;
} else if (room === "dining room" && suspect === "Mr. Parkes"){
  weapon = "knife";
  solved = true;
} else {
  console.log("You haven't solved it yet!");
}

if (solved === true) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!" );
}


// Check Your Balance

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// Solution
if (checkBalance !== true) {
  console.log("Thank you. Have a nice day!");
} else if (isActive !== true && checkBalance === true) {
  console.log("Your account is no longer active.");
} else if (checkBalance === true && balance > 0) {
  console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (checkBalance === true && balance === 0) {
  console.log("Your account is empty.");
} else if (checkBalance === true && balance !== 0) {
  console.log("Your balance is negative. Please contact bank.");  
}

//Ice Cream

/*Ice cream is one of the most versatile desserts on the planet because 
it can be done up so many different ways. Using logical operators, write 
a series of complex logical expressions that prints only if the following 
conditions are true:

if flavor is set to vanilla or chocolate and
if vessel is set to cone or bowl and
if toppings is set to sprinkles or peanuts
If the above conditions are true, then print out:

I'd like two scoops of __________ ice cream in a __________ with __________.
Fill in the blanks with the flavor of the ice cream, vessel, and toppings. 
For example,
I'd like two scoops of vanilla ice cream in a cone with peanuts. */

//Solution code

var flavor = "strawberry";  //vanilla, chocolate
var vessel = "cone";  //cone, bowl
var toppings = "cookies";  //sprinkles, peanuts

if ((flavor === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
      (toppings === "sprinkles" || toppings === "peanuts")) {
      console.log("I'd like two scoops of " + flavor +
    " ice cream in a " + vessel + " with " + toppings + ".");
}

//What Do I Wear?

/*Using if/else statements, create a series of logical expressions 
that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct 
 * values: (Sizing chart given in problem)
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

//Solution

if ((shirtWidth >= 18 && shirtWidth < 20) &&
  (shirtLength >= 28 && shirtLength < 29) &&
  (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S");
} else if (
  (shirtWidth >= 20 && shirtWidth < 22) &&
  (shirtLength >= 29 && shirtLength < 30) &&
  (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    console.log("M");
} else if (
  (shirtWidth >= 22 && shirtWidth < 24) &&
  (shirtLength >= 30 && shirtLength < 31) &&
  (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    console.log("L");
}  else if (
  (shirtWidth >= 24 && shirtWidth < 26) &&
  (shirtLength >= 31 && shirtLength < 33) &&
  (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    console.log("XL");
}  else if (
  (shirtWidth >= 26 && shirtWidth < 28) &&
  (shirtLength >= 33 && shirtLength < 34) &&
  (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    console.log("2XL");
} else if (
  (shirtWidth >= 28 && shirtWidth < 30) &&
  (shirtLength >= 34 && shirtLength < 35) &&
  (shirtSleeve >= 10.13 && shirtSleeve < 11)) {
    console.log("3XL");
} else {
  console.log("N/A");
}

//Ternary Operators
//conditional ? (if condition is true) : (if condition is false)

var isGoing = true;
var color;
if (isGoing) {
  color = "green";
} else {
  color = "red";
}
console.log(color);

/* with ternary operators, the 8 lines above become the shortened 
3 lines below */

var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

//Navigating the Food Chain
/* Write a series of ternary statements that sets the variable category equal to:

"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
undefined if an animal doesn't eat plants or animals
Use the eatsPlants and eatsAnimals variables to test your code. */

var eatsPlants = false;
var eatsAnimals = true;

var category = (eatsPlants && !eatsAnimals) ? "herbivore" :
  (!eatsPlants && eatsAnimals) ? "carnivore" :
  (eatsPlants && eatsAnimals) ? "omnivore" : "";

console.log(category);

//Switch Statements
/* only work in situations like this where you have a bunch of if 
statements based on the value of the same variable. This code below 
is repetitve and could benefit from the use of a switch statement */
var option = 3;

if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
} else if (option === 4) {
  console.log("You selected option 4.");
} else if (option === 5) {
  console.log("You selected option 5.");
} else if (option === 6) {
  console.log("You selected option 6.");
}

/* Here's what it looks like using a switch statement. Be sure
to include the break statement, otherwise it will return all cases
after the case your variable is assigned to. This is called 
"falling-through". */
var option = 3;
switch (option) {
  case 1: console.log("You selected option 1."); break;
  case 2: console.log("You selected option 2."); break;
  case 3: console.log("You selected option 3."); break;
  case 4: console.log("You selected option 4."); break;
  case 5: console.log("You selected option 5."); break;
  case 6: console.log("You selected option 6."); break;
}
 /* a default case can be added to a switch statement and will be
 executed when none of the values match the value of the expression.
 Here's an example with a default case.*/
 var prize = "";
 var winner = 3;

 switch (winner) {
   case 1:
     prize += "a trip for two to the Bahamas and ";
   case 2:
     prize += "a four piece furniture set.";
     break;
   case 3:
     prize += "a smartwatch and ";
   default:
     prize += "tickets to the circus.";
 }
 
 console.log("You've won " + prize);

 //Back to school problem

 /* In 2015, the U.S. Bureau of Labor Statistics conducted research 
 to reveal how average salary is directly related to the number of 
 years spent in school. In their findings, they found that people 
 with:

no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year. 

Write a switch statement to set the average salary of a person 
based on their type of completed education.

Afterwards, print the following to the console.

In 2015, a person with __________ earned an average of __________
/year.
*/

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

switch(education) {
  case "no high school diploma": salary = 25636; break;
  case "a high school diploma": salary = 35256; break;
  case "an Associate's degree": salary = 41496; break;
  case "a Bachelor's degree": salary = 59124; break;
  case "a Master's degree": salary = 69732; break;
  case "a Professional degree": salary = 89960; break;
  case "a Doctoral degree": salary = 84396; break;
}

console.log("In 2015, a person with " + education + 
  " earned an average of $" + salary.toLocaleString("en-US") + "/year.");

  