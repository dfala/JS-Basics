// Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}

// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.
var inner = outer();

// Once you do that, invoke inner.
inner();

var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

// Above you're given a callFriend function that returns another function.
// Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var callAlready = callFriend();
callAlready('435-215-9248');


// Write a function called makeCounter that makes the following code work properly.

  var makeCounter = function () {
    var currentCount = 0;

    return function () {
      currentCount++;
      return currentCount;
    }
  }

  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4

// Write a function that accepts another function as it's first argument and returns a new function
// (which invokes the original function that was passed in) that can only ever be executed once.
var isExecuted = false;
var parentFunction = function (innerFunction) {
  if (isExecuted) return;
  isExecuted = true;
  innerFunction();
}

parentFunction(function () {
  console.log("executed");
})


/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters.
  The first parameter will be an anonymous function and the second parameter, 'N', will be a number.
  Now, in 'fnCounter', allow the anonymous function to be invoked 'N' number of times.
  After it's been invoked 'N' number of times, return 'STOP'.
*/

var fnCounter = function (callback, num) {
  for (i = 0; i < num; i++) {
    callback();
  }
  return 'STOP'
}


/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code)
  then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout
  calls a function or evaluates an expression after a specified number of milliseconds.
*/
    // console logs the number 6 five times with 1 second laps in between each log


// Now, run the function in your console and note what happpens.
// Was your answer right or wrong?

    // Yes


// Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)

var counter = function() {
  for (i=1; i<=5; i++) {
    doScaledTimeout(i);
  }
};

var doScaledTimeout = function (i) {
  var timing = (i * 1000) * 2;
  setTimeout(function() {
    alert(i);
  }, timing);
}

// counter();

/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/

var funcArray = function (num) {
  return num;
}

funcArray(0) //0
funcArray(1) //1
funcArray(2) //2
funcArray(3) //3
funcArray(4) //4
funcArray(5) //5





