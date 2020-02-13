const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(100).fill("nemo");
const huge = new Array(1000).fill("nemo");
const mega = new Array(10000).fill("nemo");
function findNemo(array) {
  //measuring the efficiency of the function
  //start timer
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo"){
      console.log('Found NEMO!');
    }
  }
  //end timer and console.log of results
  let t1 = performance.now();
  console.log("Call to find Nemo took " + 
    (t1-t0) + " milliseconds.");
}
//testing for performance using RunJS
findNemo(nemo); //returns 0 milliseconds
findNemo(everyone); //returns 0.49 milliseconds
findNemo(large); //returns 1.47 milliseconds
findNemo(large); //returns 8.71 milliseconds
findNemo(mega); // returns 79.63 milliseconds

/* What does this show us?
As our array.length grew, it took our function
longer and longer to complete the loop.
It depends on many factors including the speed
of the CPU among other things. This doesn't mean
much. 

Big O Notation is the language we use to talk 
about how efficient our code is.  It is used
to compare scalability.
*/