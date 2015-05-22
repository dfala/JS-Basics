//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function (passedName) {
	if (passedName === 'Tyler') { return true };
}

// console.log( isTyler(name) );

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
var getName = function () {
	return prompt('name pleeeease');
}

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function () {
	var message = 'Welcome' + 
	alert('Welcome, ' + getName());
}

// welcome();

//What is the difference between arguments and parameters?
  // Arguments is what you pass, parameters with what you receive and use whiting a fn.


//What are all the falsy values in JavaScript and how do you check if something is falsy?
// false, 0, null, NaN, undefined, ''
// if (!value)


//Create a function called myName that returns your name

var myName = function () {
	return 'Daniel Falabella'
}

//Now save the function definition of myName into a new variable called newMyName
var newMyName = myName();

//Now alert the result of invoking newMyName
// alert(newMyName);

//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function () {
	return function () {
		return newMyName;
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

 var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
