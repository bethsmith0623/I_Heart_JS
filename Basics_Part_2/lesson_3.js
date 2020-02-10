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


