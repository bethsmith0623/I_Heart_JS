const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
// const large = new Array(100).fill("nemo");
// const huge = new Array(1000).fill("nemo");
const mega = new Array(10000).fill("nemo");
function findNemo(array) {
  //measuring the efficiency of the function
  //start timer
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo"){
      console.log('Found NEMO!');
    }
  }
  //end timer and console.log of results
  // let t1 = performance.now();
  // console.log("Call to find Nemo took " + 
  //   (t1-t0) + " milliseconds.");
}
//testing for performance using RunJS
findNemo(nemo); //returns 0 milliseconds
// findNemo(everyone); //returns 0.49 milliseconds
// findNemo(large); //returns 1.47 milliseconds
// findNemo(large); //returns 8.71 milliseconds
// findNemo(mega); // returns 79.63 milliseconds

/* What does this show us?
As our array.length grew, it took our function longer and longer to 
complete the loop.  It depends on many factors including the speed
of the CPU among other things. This doesn't mean much. 

Big O Notation is the language we use to talk about how efficient our
code is.  It is used to compare scalability.

When we talk about Big-O and scalability of code we simply mean when 
we grow bigger and bigger with our input, how much does the algorithm
or function slow down? As the characters in out array increases, how 
many more operations do we have to do? This is called alogrithmic 
efficiency. The less our algorithm slows down the better it is. We can
calculate how many operations (or steps).
*/

// O(n)
/* The above findNemo function, because we loop through each item,
will produce a linear graph and have a notation of O(n). 
O of n --> Linear Time.  */

// O(1)
function compressFirstBox(boxes){
  console.log(boxes[0]);
}
/* If we have a function like this one, because it is only compressing
the first box, no matter the size of the array, we call this O(1).
O of 1 --> Constant Time */

//Exercise #1
/* What is the Big O of the below function? (Hint, you may want to go 
line by line) */
function funChallenge(input) {
  let a = 10;  // O(1) Some people don't count assignments
  a = 50 + 3;  // O(1)

  for (let i = 0; i < input.length; i++) {  //  O(n) --> n is the input
    anotherFunction();  // O(n)
    let stranger = true;  // O(n)
    a++;  // O(n)
  }
  return a;  // O(1)  another thing some people don't count
}

funChallenge();

/* 3 (O of 1s) + 4n (O of ns)  so we write this as BIG O(3 + 4n) 
generally this is just simplified as O(n) */

//Exercise #2
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;  //O(1)
  let b = 10;  //O(1)
  let c = 50;  //O(1)
  for (let i = 0; i < input; i++) {  //* 
    let x = i + 1;  // O(n)
    let y = i + 2;  // O(n)
    let z = i + 3;  // O(n)

  }
  for (let j = 0; j < input; j++) {  //*
    let p = j * 2;  // O(n)
    let q = j * 2;  // O(n)
  }
  let whoAmI = "I don't know";  //O(1)
}

//BIG-O(4 + 5n)  //* of O(4 + 7n if the * are counted)

//Simplifying Big O - The Four Rules
/* from best to worst:
O(log n), O(1), O(n), O(n log n), O(n^2), O(2^n), O(n!)

1. Worst Case
    Always consider the worst case 
    - i.e. O(1) and O(n) - comparing these 2, O(n) has more operations
    and is therefore less efficient, the worst case
    (Can make O(n) slightly more efficient by inserting a break in the
    loop - however worst case is if our item is last - the break won't
    matter)
2. Remove Constants
    If you counted and had something like this O(1 + n/2 + 100)
    Since we are dropping the constants it will be O(n) as we get
    larger and larger numbers, the +101 and /2 are much less
    significant
3. Different terms for inputs **tricky part***/

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function(boxes) {
    console.log(boxes);
  });
  boxes2.forEach(function(boxes) {
    console.log(boxes);
  });
}
/*
not still O(n) due to the 2 arguments being passed into the 
compressBoxesTwice function
so this one would be O(a + b)

(Nested Loops)
May get an interview question like this:
Log all pairs of array  */

const boxes = ['a','b','c','d','e'];

function logAllPairsOfArray(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}
logAllPairsOfArray(boxes);

//returns aa, ab, ac, ad, ae, ba, bb, bc, bd, be, etc.
/* a good rule of thumb is that if you see nested loops,
we use multiplication. So this becomes O(n^2)
O(n^2) --> Quadratic Time (pretty slow)

4. Drop Non Dominant Terms
two loops added with a nested loop inside one like the 
function below
O(n + n^2) this means that the n^2 is dominant so we drop
the n. This also goes back to rule 1 because n^2 is worse than
a single n.
Nested loops are not the best way to handle functions for 
scalability and Big O.
*/

function printAllNumbersThenAllPairSums(numbers) {
  console.log("These are the numbers:");
  numbers.forEach(function(number) {
    console.log(number);
  });
  console.log("And these are their sums:");
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber){
      console.log(firstNumber + secondNumber);
    });
  });
}
printAllNumbersThenAllPairSums([1,2,3,4,5]);

