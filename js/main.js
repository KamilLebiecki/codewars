// reversedStrings
//const solution = (str) => str.split("").reverse().join("");

// String repeat
// const repeatStr = (n, s) => (n > 0 ? s.repeat(n) : "");

// Remove String Spaces
// const noSpace = (x) => x.split(" ").join("");

// Square(n) Sum

// function squareSum(numbers) {
// 	let result = 0;
// 	for (let i = 0; i < numbers.length; i++) {
// 		result += numbers[i] ** 2;
// 	}
// 	return result;
// }

// Convert number to reversed array of digits
// const digitize = (n) => n.toString().split("").reverse();

// const digitize = (n) => {
// 	const nString = String(n);
// 	return nString
// 		.split("")
// 		.map((el) => {
// 			return +el;
// 		})
// 		.reverse();
// };

//Abbreviate a Two Word Name

//take first letter
//go through other letter
//if space spotted, than grab next one

// function abbrevName(name) {
// 	let abbv = "";
// 	abbv.push(name[0]);
// 	for (i = 1; i < name.length; i++) {
// 		if (name[i] === " ") {
// 			abbv.push(name[i]);
// 			abbv.pusn(name[i + 1]);
// 		}
// 	}
// 	return abbv;
// }

// function abbrevName(name) {
// 	let upper = name.toUpperCase();
// 	let new_name = upper.split(" ", 1);
// 	// return `${new_name[0][0]}.${new_name[1][0]}`;
// }
// function abbrevName(name) {
// 	return name
// 		.match(/\b(\w)/g)
// 		.toString()
// 		.toUpperCase()
// 		.replace(",", ".");
// }
// Convert a string to an array
// const stringToArray = (s) => s.split(" ");

//Reversed Words
// const reverseWords = (str) => str.split(" ").reverse().join(" ");

//Is n divisible by x and y?
// const isDivisible = (n, x, y) => (n % x === 0 && n % y === 0 ? true : false);

// Count of positives / sum of negatives

// function countPositivesSumNegatives(input) {
// 	//if the array is empty or is null, return empty array
// 	//if the array is not empty, then go through the array
// 	//if the number is positive - add to varPositive
// 	//if the number is negative - add to varNegative
// 	//if the number is 0 - do not anything
// 	//push varPositive
// 	//push varNegative
// 	//return all
// 	if (input == null || input.length < 1) {
// 		return [];
// 	}

// 	let countPositive = 0;
// 	let sumNegative = 0;
// 	let array = [];
// 	for (let i = 0; i < input.length; i++) {
// 		if (input[i] > 0) {
// 			countPositive++;
// 		} else {
// 			sumNegative += input[i];
// 		}
// 	}
// 	array.push(countPositive);
// 	array.push(sumNegative);
// 	return array;
// }

// Counting sheep...

// function countSheeps(arrayOfSheep) {
// 	let sheepCounter = 0;
// 	for (let i = 0; i < arrayOfSheep.length; i++) {
// 		arrayOfSheep[i] === true ? sheepCounter++ : sheepCounter;
// 	}
// 	return sheepCounter;
// }

// Sum Arrays

// function sum(numbers) {
// 	let sum = 0;
// 	if (numbers.length !== 0) {
// 		for (let i = 0; i < numbers.length; i++) {
// 			sum += numbers[i];
// 		}
// 	}
// 	return sum;
// }

// Fake Binary
// function fakeBin(x) {
// 	//split the string into array
// 	let array1 = x.split("");
// 	let array3 = [];
// 	let array2 = array1.forEach((e) => {
// 		if (e >= 5) {
// 			array3.push(1);
// 		} else {
// 			array3.push(0);
// 		}
// 	});
// 	return array3.join("");
// }
//go through all array
// digit below 5 = 0
//digit greater or equal 5 = 1
//
//
//A Needle in the Haystack
// function findNeedle(haystack) {
// 	for (let i = 0; i < haystack.length; i++) {
// 		if (haystack[i] === "needle") {
// 			return `found the needle at position ${i}`;
// 		}
// 	}
// }
// Get the mean of an array
// function getAverage(marks) {
// 	let average = 0;
// 	for (let i = 0; i < marks.length; i++) {
// 		average += marks[i];
// 	}
// 	return Math.floor(average / marks.length);
// }

// Century From Year

// function century(year) {
// 	if (year <= 100) {
// 		return 1;
// 	} else if (year % 100 == 0) {
// 		return parseInt(year / 100);
// 	} else {
// 		return parseInt(year / 100) + 1;
// 	}
// }

// function whatCentury(year) {
// 	// code must go here
// }

// function century(year) {
// 	// Finish this :)
// 	//change to string
// 	//split
// 	//check if the last number is 0
// 	//  if yes, then return first two numbers
// 	// if higher then return first two numbers increased by one
// 	//

// 	return;
// }
// You only need one - Beginner
// const check = (a, x) => a.includes(x);

// Array plus array
//grab one array, sum the numbers
//grab two array, sum the numbers
//sum the numbers of two arrays

// function arrayPlusArray(arr1, arr2) {
// 	let arr1sum = 0;
// 	let arr2sum = 0;

// 	for (let i = 0; i < arr1.length; i++) {
// 		arr1sum += arr1[i];
// 	}
// 	for (let j = 0; j < arr2.length; j++) {
// 		arr2sum += arr2[j];
// 	}
// 	return arr1sum + arr2sum;
// }

// Calculate average

// function find_average(array) {
// 	return array.reduce((a, b) => a + b) / array.length;
// }
// const find_average = (arr) =>
// 	arr.length === 0 ? 0 : arr.reduce((a, b) => a + b) / arr.length;

//sum all of them, then divide by the number of elements

// Reversed sequence
// create an array
// go through all elements till 'n'
// unshift all elements tiii 'n'
// return array
// const reverseSeq = (n) => {
// 	let m = [];
// 	for (let i = n; i > 0; i--) {
// 		m.push(i);
// 	}
// 	return m;

// Opposites Attract

// function lovefunc(flower1, flower2) {
// 	if (flower1 % 2 === 0 && flower2 !== 0) {
// 		return true;
// 	} else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

//check if flower1 is odd and flower2 is even than true
//check if flower1 is even and flower2 is odd than true
//othwerise false
// const lovefunc = (flower1, flower2) =>
// 	(flower1 % 2 === 0 && flower2 % 2 !== 0) ||
// 	(flower1 % 2 !== 0 && flower2 % 2 === 0)
// 		? true
// 		: false;
// Beginner - Reduce but Grow

// function grow(x) {
// 	let multiple = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		multiple *= x[i];
// 	}
// 	return multiple;
// }
//
//
// If you can't sleep, just count sheep!!

// var countSheep = function (num) {
// 	let sheeps = "";
// 	for (let i = 1; i <= num; i++) {
// 		sheeps += `${i} sheep...`;
// 	}
// 	return sheeps;
// };
// Sentence Smash
// const smash = (words) => words.join(" ");
//
// Sum Mixed Array
// function sumMix(x) {
// 	let sum = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		sum += Number(x[i]);
// 	}
// 	return sum;
// }
//
//
// Find numbers which are divisible by given number

// function divisibleBy(numbers, divisor) {
// 	let arr = [];
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (numbers[i] % divisor === 0) {
// 			arr.push(numbers[i]);
// 		}
// 	}
// 	return arr;
// }
//
// Incorrect division method
// const solve = (x, y) => x / y;
//
// Return to Sanity
// function mystery() {
// 	var results = { sanity: "Hello" };
// 	return results;
// }
//
// //Fix your code before the garden dies!
// const rainAmount = (mm) =>
// 	mm < 40
// 		? `You need to give your plant ${40 - mm}mm of water`
// 		: "Your plant has had more than enough water for today!";
//

// Transportation on vacation
// function rentalCarCost(d) {
// 	totalCost = Number(d * 40);
// 	if (d >= 7) {
// 		return (totalCost = totalCost - 50);
// 	} else if (d >= 3) {
// 		return (totalCost = totalCost - 20);
// 	} else {
// 		return totalCost;
// 	}
// }
//
//
//How good are you really?
// const betterThanAverage = (classPoints, yourPoints) =>
// 	yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length;
//
// Can we divide it?
// const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
//
//
// Remove exclamation marks
// const removeExclamationMarks = s => s.split("!").join("")
//
// Square Every Digit
// function squareDigits(num) {
// 	let numStr = num.toString().split("");
// 	let result = "";
// 	for (let i = 0; i < numStr.length; i++) {
// 		result += Number(numStr[i] ** 2);
// 	}
// 	return Number(result);
// }
//
// // Shortest Word
// function findShort(s) {
// 	let strArray = s.split(" ");

// 	let shortest = strArray.reduce((shortestWord, currentWord) => {
// 		return currentWord.length < shortestWord.length
// 			? currentWord.length
// 			: shortestWord.length;
// 	}, strArray[0]);
// 	return Number(shortest);
// }

// function findShort(s) {
// 	var s = s.split(" ");
// 	var x = [];
// 	var y = 0;

// 	for (var i = 0; i < s.length; ++i) {
// 		x = s[i];

// 		if (y == 0 || x.length < y) {
// 			y = x.length;
// 		}
// 	}
// 	return y;
// }
//
// Beginner Series #2 Clock
// const past = (h, m, s) => h*3600000 + m*60000 + s*1000
//
// Is he gonna survive?
// const hero = (bullets, dragons) => bullets >= dragons * 2;
//
// Will you make it?
// const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
// 	fuelLeft * mpg >= distanceToPump;
//
// Function 3 - multiplying two numbers
// const multiply = (a, b) => a * b;
//
// Area or Perimeter
// const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * l + 2 * w);
//
// Third Angle of a Triangle
// const otherAngle = (a, b) => 180 - a - b;
//
// Grasshopper - Messi goals function
// const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals
//
// Will there be enough space?
// const enough = (cap, on, wait) =>
// 	cap - on > wait ? 0 : Math.abs(cap - on - wait);
//
// Switch it Up!
// function switchItUp(number) {
// 	switch (number) {
// 		case 1:
// 			return "One";
// 			break;
// 		case 2:
// 			return "Two";
// 			break;
// 		case 3:
// 			return "Three";
// 			break;
// 		case 4:
// 			return "Four";
// 			break;
// 		case 5:
// 			return "Five";
// 			break;
// 		case 6:
// 			return "Six";
// 			break;
// 		case 7:
// 			return "Seven";
// 			break;
// 		case 8:
// 			return "Eight";
// 			break;
// 		case 9:
// 			return "Nine";
// 			break;
// 		case 0:
// 			return "Zero";
// 			break;
// 		default:
// 			return "Try again";
// 			break;
// 	}
// }
//
//
// Count Odd Numbers below n
// function oddCount(n) {
// 	return Math.floor(n / 2);
// }
//
// Function 2 - squaring an argument
// const square = (a) => a ** 2;
//
// Multiples of 3 or 5
// function solution(number) {
// 	let result = 0;
// 	for (let i = 0; i < number; i++) {
// 		if (i % 3 === 0 || i % 5 === 0) {
// 			result += i;
// 		}
// 	}
// 	return result;
// }
//
//
//
// // Create Phone Number
// function createPhoneNumber(numbers) {
// 	return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
// }

// Is this a triangle?
// const isTriangle = (a, b, c) =>
// 	a < b + c && b < a + c && c < a + b ? true : false;
//
// String ends with?
// const solution = (str, ending) => str.endsWith(ending);
//
// Grasshopper - Grade book
// function getGrade(s1, s2, s3) {
// 	let avg = s1 + s2 + s3;
// 	let sum = avg / 3;
// 	if (sum <= 100 && sum >= 90) {
// 		return "A";
// 	} else if (sum < 90 && sum >= 80) {
// 		return "B";
// 	} else if (sum < 80 && sum >= 70) {
// 		return "C";
// 	} else if (sum < 70 && sum >= 60) {
// 		return "D";
// 	} else if (sum < 60 && sum >= 0) {
// 		return "F";
// 	}
// }
//
// Grasshopper - Messi Goals
// var laLigaGoals = 43;
// var championsLeagueGoals = 10;
// var copaDelReyGoals = 5;

// var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;
//
// Thinkful - Logic Drills: Traffic light
// function updateLight(current) {
// 	switch (current) {
// 		case "green":
// 			return "yellow";
// 		case "yellow":
// 			return "red";
// 		case "red":
// 			return "green";
// 	}
// }
//
// Beginner Series #4 Cockroach
// const cockroachSpeed = (s) => Math.floor(s / 0.036);
//
//Is it even?
// const testEven = (n) => n % 2 === 0;
//
// // Sum The Strings
// function sumStr(a, b) {
// 	let sum = 0;
// 	sum = Number(a) + Number(b);
// 	return String(sum);
// }
//
// Grasshopper - Terminal game move function
// const move = (position, roll) => position + 2 * roll;
//
// Grasshopper - Personalized Message
// const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");
//
// Grasshopper - Debug sayHello
// const sayHello = name => `Hello, ${name}`;
//
// Grasshopper - Function syntax debugging
// function main(verb, noun) {
// 	return verb + noun;
// }
//
// Grasshopper - Basic Function Fixer
// function addFive(num) {
// 	var total = num + 5;
// 	return total;
// }
//
//
// Grasshopper - Bug Squashing

// var health = 100;
// var position = 0;
// var coins = 0;

// function main() {
// 	rollDice();
// 	move();
// 	combat();
// 	getCoins();
// 	buyHealth();
// 	printStatus();
// }
//
//
// // Grasshopper - Object syntax debug
// var rooms = {
// 	first: {
// 		description: "This is the first room",
// 		items: {
// 			chair: "The old chair looks comfortable",
// 			lamp: "This lamp looks ancient",
// 		},
// 	},
// 	second: {
// 		description: "This is the second room",
// 		items: {
// 			couch: "This couch looks like it would hurt your back",
// 			table: "On the table there is an unopened bottle of water",
// 		},
// 	},
// };
//
// Grasshopper - Terminal Game Turn Function
// function doTurn() {
// 	rollDice();
// 	move();
// 	combat();
// 	getCoins();
// 	buyHealth();
// 	printStatus();
// }
//
// Grasshopper - Create the rooms
// var rooms = {
// 	room1: {
// 		name: "Room1",
// 		description: "Description",
// 		completed: true,
// 	},
// 	room2: {
// 		name: "Room2",
// 		description: "Description",
// 		completed: false,
// 	},
// 	room3: {
// 		name: "Room3",
// 		description: "Description",
// 		completed: true,
// 	},
// };
//
//
// Grasshopper - Order of operations
// function orderOperations() {
// 	return (2 + 2) * (2 + 2) * 2;
// }
//
// Grasshopper - Array Mean
// const findAverage = (nums) => nums.reduce((a, b) => a + b) / nums.length;
//
// Grasshopper - Combine strings
// const combineNames = (a, b) => `${a} ${b}`;
//
// Grasshopper - Terminal game combat function
// function combat(health, damage) {
// 	if (health - damage > 0) {
// 		return health - damage;
// 	}
// 	if (health - damage <= 0) {
// 		return 0;
// 	}
// }
//
// Grasshopper - Variable Assignment Debug
// var a = "dev";
// var b = "Lab";

// var name = a + b;
//
//
// // Grasshopper - Debug;
// function weatherInfo(temp) {
// 	var c = convertToCelsius(temp);

// 	if (c < 0) {
// 		return c + " is freezing temperature";
// 	} else {
// 		return c + " is above freezing temperature";
// 	}
// }

// function convertToCelsius(temperature) {
// 	var celsius = (temperature - 32) * (5 / 9);
// 	return celsius;
// }
//
// Grasshopper - Check for factor
// const checkForFactor = (base, factor) => base % factor === 0
//
// Grasshopper - Terminal Game #1
// function Hero(name) {
// 	if (!name) {
// 		this.name = "Hero";
// 	} else {
// 		this.name = name;
// 	}
// 	this.position = "00";
// 	this.health = 100;
// 	this.damage = 5;
// 	this.experience = 0;
// }
//
// Total amount of points
//
// function points(games) {
// 	// pseudo code
// 	// set a variable for tracking results
// 	let result = 0;
// 	// go through every element in the array
// 	let arr = games.split(":");
// 	console.log(arr);
// 	// check if the first number is bigger than after sign :
// 	// if bigger, than add +3 to the points, if the same, add +1 and if lower, then add nothing
// 	// return the result
// // }

// Count by X
//
//
// Quarter of the year

// const quarterOf = (month) => {
// 	return month === 1 || month === 2 || month === 3
// 		? 1
// 		: month === 4 || month == 5 || month === 6
// 		? 2
// 		: month === 7 || month == 8 || month === 9
// 		? 3
// 		: month === 10 || month === 11 || month === 12
// 		? 4
// 		: "Try again";
// };
//
// L1: Set Alarm
// const setAlarm = (employed, vacation) => employed && !vacation;
//
// Student's Final Grade
// function finalGrade(exam, projects) {
// 	return exam > 90 || projects > 10
// 		? 100
// 		: exam > 75 && projects >= 5
// 		? 90
// 		: exam > 50 && projects >= 2
// 		? 75
// 		: 0;
// }
//
//
// // Filter out the geese

// function gooseFilter(birds) {
// 	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// 	return birds.filter((el) => geese.indexOf(el) === -1);
// }
//
//
// The 'if' function
// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2 When bool is truth-ish, func1 should be called, otherwise call the func2.

// const _if = (bool, func1, func2) => bool ? func1() : func2()
//
// How old will I be in 2099?
// function calculateAge(yearA, yearB) {
// 	return yearA === yearB
// 		? "You were born this very year!"
// 		: yearA === yearB - 1
// 		? "You are 1 year old."
// 		: yearB === yearA - 1
// 		? "You will be born in 1 year."
// 		: yearA < yearB
// 		? `You are ${yearB - yearA} years old.`
// 		: yearA > yearB
// 		? `You will be born in ${yearA - yearB} years.`
// 		: "Try again!";
// }

// Shifty Closures
// var greet_abe = function () {
// 	var name = "Abe";
// 	return "Hello, " + name + "!";
// };

// var greet_ben = function () {
// 	var name = "Ben";
// 	return "Hello, " + name + "!";
// };
//
// BASIC: Making Six Toast.
// const sixToast = (num) => Math.abs(6 - num);
//
//
//

// TODO: Refactor and shorten the function

// Be Concise I - The Ternary Operator

// var describeAge = (a) =>
// 	`You're a(n) ${
// 		a < 13 ? "kid" : a < 18 ? "teenager" : a < 65 ? "adult" : "elderly"
// 	}`;
//
//
// Multiplication table for number
// function multiTable(number) {
// 	let result = "";
// 	for (let i = 1; i <= 10; i++) {
// 		result += `${i} * ${number} = ${i * number}\n`;
// 	}
// 	return result.slice(0, -1);
// }
//
// L1: Bartender, drinks!
// function getDrinkByProfession(param) {
// 	switch (param.toLowerCase()) {
// 		case "jabroni":
// 			return "Patron Tequila";
// 		case "school counselor":
// 			return "Anything with Alcohol";
// 		case "programmer":
// 			return "Hipster Craft Beer";
// 		case "bike gang member":
// 			return "Moonshine";
// 		case "politician":
// 			return "Your tax dollars";
// 		case "rapper":
// 			return "Cristal";
// 		default:
// 			return "Beer";
// 	}
// }
//
// Reversing Words in a String
// const reverse = (string) => string.split(" ").reverse().join(" ");
//
// String Templates - Bug Fixing #5
// function buildString(...template) {
// 	return `I like ${template.join(", ")}!`;
// }
//
// No Loops 2 - You only need one
// const check = (a, x) => a.includes(x);
//
// No Loops 1 - Small enough?

// function smallEnough(a, limit) {
// 	const b = a.filter((number) => number <= limit);
// 	if (a.length === b.length) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
//
// Keep up the hoop
// const hoopCount = (n) =>
// 	n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

// Odd or Even?
// function oddOrEven(array) {
// 	if (array !== []) {
// 		if (array.reduce((a, b) => a + b, 0) % 2 === 0) {
// 			return "even";
// 		} else if (array.reduce((a, b) => a + b, 0) % 2 !== 0) {
// 			return "odd";
// 		}
// 	} else {
// 		return 0;
// 	}
// }
//
// Reverse words
// function reverseWords(str) {
// 	let strSplit = str.split(" ");
// 	let reversedSplit = [];
// 	for (let i = 0; i < strSplit.length; i++) {
// 		reversedSplit.push(strSplit[i].split("").reverse().join(""));
// 	}
// 	return reversedSplit.join(" ");
// }

// take the string
// split it into words
// go through the words
// split it into arrays
// reverse letters
// join into words
// join into sentence
//
// Make a function that does arithmetic!
// function arithmetic(a, b, operator) {
// 	switch (operator) {
// 		case "add":
// 			return a + b;
// 		case "subtract":
// 			return a - b;
// 		case "multiply":
// 			return a * b;
// 		case "divide":
// 			return a / b;
// 		default:
// 			return "Try again!";
// 	}
// }
//
// Double Char
// const doubleChar = (str) => {
// 	let newStr = "";
// 	for (let i = 0; i < str.length; i++) {
// 		newStr = newStr + str[i] + str[i];
// 	}
// 	return newStr;
// };
//
// DNA to RNA Conversion
// const DNAtoRNA = (dna) => dna.replace(/T/g, "U");
//
//  Find Maximum and Minimum Values of a List
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);
//
// How many lightsabers do you own?
// const howManyLightsabersDoYouOwn = name => name === "Zach" ? 18 : 0
//
// Is it a palindrome?
// function isPalindrome(x) {
// 	// if (x.toLowerCase() === x.split("").reverse().join("").toLowerCase()) {
// 	// 	return true;
// 	// }
// 	const isPalindrome = (x) =>
// 		x.toLowerCase() === x.split("").reverse().join("").toLowerCase()
// 			? true
// 			: false;
// }
//
// Reverse List Order
// const reverseList = (list) => list.reverse();
//
// Total amount of points

// function points(games) {
// 	let result = 0;
// 	// grab the array

// 	for (let i = 0; i < games.length; i++) {
// 		if (Number(games[i][0]) > Number(games[i][2])) {
// 			result += 3;
// 		} else if (Number(games[i][0]) === Number(games[i][2])) {
// 			result++;
// 		}
// 	}
// 	return result;
// }
// const points = (games) => {
// 	let result = 0;
// 	games.forEach((element) => {
// 		if (Number(element[0] > Number(element[2]))) {
// 			result += 3;
// 		} else if (Number(element[0]) === Number(element[2])) {
// 			result++;
// 		}
// 	});
// 	return result;
// };
//
// Count by X
//
// function countBy(x, n) {
// 	let z = [];
// 	for (let i = 1; i <= n; i++) {
// 		z.push(i * x);
// 	}
// 	return z;
// }
//
// Rock Paper Scissors
//
// const rps = (p1, p2) => {
// 	if (p1 === p2) {
// 		return "Draw!";
// 	} else if (p1 === "scissors" && p2 === "paper") {
// 		return "Player 1 won!";
// 	} else if (p1 === "scissors" && p2 === "rock") {
// 		return "Player 2 won!";
// 	} else if (p1 === "rock" && p2 === "paper") {
// 		return "Player 2 won!";
// 	} else if (p1 === "rock" && p2 === "scissors") {
// 		return "Player 1 won!";
// 	} else if (p1 === "paper" && p2 === "scissors") {
// 		return "Player 2 won!";
// 	} else if (p1 === "paper" && p2 === "rock") {
// 		return "Player 1 won!";
// 	}
// };
//
// Sum without highest and lowest number

// const sumArray = (array) =>
// 	Array.isArray(array) && array.length > 1
// 		? array.reduce((a, b) => a + b) - Math.min(...array) - Math.max(...array)
// 		: 0;
//
// Twice as old
// const twiceAsOld = (d, s) => Math.abs(d - s * 2);
//
//
// Parse nice int from char problem
// const getAge = (inputString) => parseInt(inputString[0]);
//
// The Feast of Many Beasts
// const feast = (beast, dish) =>
// 	beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
//
// Short Long Short
// const solution = (a, b) => (a.length > b.length ? b + a + b : a + b + a);
//
// Name Shuffler
// const nameShuffler = (str) => str.split(" ").reverse().join(" ");
//
// Find the Remainder
// const remainder = (n, m) => (n > m ? n % m : m % n);
//
// Highest and Lowest
// const highAndLow = (numbers) =>
// 	`${String(Math.max(...numbers.split(" ")))} ${String(
// 		Math.min(...numbers.split(" "))
// 	)}`;
//
// Get the Middle Character

// const getMiddle = (s) =>
// 	s.length > 1 && s.length % 2 === 0
// 		? String(`${s[s.length / 2 - 1]}${s[s.length / 2]}`)
// 		: s.length > 2 && s.length !== 0
// 		? String(`${s[Math.floor(s.length / 2)]}`)
// 		: s;
//
// Who likes it?
// function likes(names) {
// 	if (names.length === 0) {
// 		return "no one likes this";
// 	} else if (names.length === 1) {
// 		return `${names[0]} likes this`;
// 	} else if (names.length === 2) {
// 		return `${names[0]} and ${names[1]} like this`;
// 	} else if (names.length === 3) {
// 		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
// 	} else {
// 		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// 	}
// }
// const likes = (names) =>
// 	names.length === 0
// 		? "no one likes this"
// 		: names.length === 1
// 		? `${names[0]} likes this`
// 		: names.length === 2
// 		? `${names[0]} and ${names[1]} like this`
// 		: names.length === 3
// 		? `${names[0]}, ${names[1]} and ${names[2]} like this`
// 		: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//
// Credit Card Mask
// const maskify = (cc) =>
// 	cc.length > 4 ? "#".repeat(cc.length - 4) + cc.substr(-4) : cc;
//
// Sum of two lowest positive integers
// function sumTwoSmallestNumbers(numbers) {
// 	let firstMin = Math.min(...numbers);
// 	numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
// 	let secondMin = Math.min(...numbers);
// 	return firstMin + secondMin;
// }
//
//
// Descending Order
// const descendingOrder = (n) =>
// 	Number(
// 		n
// 			.toString()
// 			.split("")
// 			.sort((a, b) => b - a)
// 			.join("")
// 	);
//
// My head is at the wrong end!
// const fixTheMeerkat = (arr) => [arr[2], arr[1], arr[0]];
//
// Sort and Star
// function twoSort(s) {
// 	return s.sort((a, b) => b - a);
// }
//
// Powers of 2
// const powersOfTwo = (n) => {
// 	const result = [];
// 	for (let i = 0; i <= n; i++) {
// 		result.push(2 ** i);
// 	}
// 	return result;
// };
//
//
// Drink about
//
// const peopleWithAgeDrink = (old) =>
// 	old < 14
// 		? "drink toddy"
// 		: old < 18
// 		? "drink coke"
// 		: old < 21
// 		? "drink beer"
// 		: "drink whisky";
//
// What is between?
// function between(a, b) {
// 	let arr = [];
// 	for (let i = a; i <= b; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }
//
// Cat years, Dog years
// var humanYearsCatYearsDogYears = function (humanYears) {
// 	let result = Array(3);
// 	let catYears = 0;
// 	let dogYears = 0;

// 	if (humanYears === 1) {
// 		catYears = 15;
// 	} else if (humanYears === 2) {
// 		catYears = 24;
// 	} else {
// 		catYears = 15 + 24 + 4 * humanYears;
// 	}

// 	if (humanYears === 1) {
// 		// catYears = 15;
// 		dogYears = 15;
// 	} else if (humanYears === 2) {
// 		// catYears = 24;
// 		dogYears = 24;
// 	} else {
// 		// catYears = 24 + 4 * humanYears
// 		dogYears = 24 + 5 * humanYears;
// 	}
// 	return result.push(humanYears, catYears, dogYears);
// };

// Cat years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
//
// Generate range of integers
// function generateRange(min, max, step) {
// 	let array = [];
// 	for (let i = min; i <= max; i += step) {
// 		array.push(i);
// 	}
// 	return array;
// }
//
// Hello, Name or World!
//
// const hello = (name) =>
// 	name
// 		? `Hello, ${name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()}!`
// 		: "Hello, World!";
//
// Palindrome Strings
// const isPalindrome = (line) =>
// 	line.toString() === line.toString().split("").reverse().join("");
//
//
// Find the Difference in Age between Oldest and Youngest Family Members
// const differenceInAges = (ages) => [
// 	Math.min(...ages),
// 	Math.max(...ages),
// 	Math.max(...ages) - Math.min(...ages),
// ];
//
// Add Length
// const addLength = (str) => str.split(" ").map((e) => `${e} ${e.length}`);
//
// Welcome!
// function greet(language) {
// 	switch (language) {
// 		case "czech":
// 			return "Vitejte";
// 		case "danish":
// 			return "Velkomst";
// 		case "dutch":
// 			return "Welkom";
// 		case "estonian":
// 			return "Tere tulemast";
// 		case "finnish":
// 			return "Tervetuloa";
// 		case "flemish":
// 			return "Welgekomen";
// 		case "french":
// 			return "Bienvenue";
// 		case "german":
// 			return "Willkommen";
// 		case "irish":
// 			return "Failte";
// 		case "italian":
// 			return "Benvenuto";
// 		case "latvian":
// 			return "Gaidits";
// 		case "lithuanian":
// 			return "Laukiamas";
// 		case "polish":
// 			return "Witamy";
// 		case "spanish":
// 			return "Bienvenido";
// 		case "swedish":
// 			return "Valkommen";
// 		case "welsh":
// 			return "Croeso";
// 		case "english":
// 		default:
// 			return "Welcome";
// 	}
// }
//
// Squash the bugs
//
// function findLongest(str) {
// 	var spl = str.split(" ");
// 	var longest = 0;

// 	for (var i = 0; i < spl.length; i++) {
// 		if (spl[i].length > longest) {
// 			longest = spl[i].length;
// 		}
// 	}
// 	return longest;
// }
//
// Filling an array (part 1)
//
// const arr = (N) => {
// 	let arr2 = [];
// 	for (let i = 0; i < N; i++) {
// 		arr2.push(i);
// 	}
// 	return arr2;
// };
//
//
// Is this my tail?
// function correctTail(body, tail) {
// 	let sub = body.substr(body.length - tail.length);

// 	if (sub == tail) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// FIXME: Replace all dots
// const replaceDots = (str) => str.replace(/\./g, "-");
//
//
// Push a hash/an object into array
// items = [];
// items.push({ a: "b", c: "d" });
//
// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
//
// function yourFutureCareer() {
// 	let career = Math.random();
// 	if (career <= 0.32) {
// 		return "FrontEnd Developer";
// 	} else if (career <= 0.65) {
// 		return "BackEnd Developer";
// 	} else {
// 		return "Full-Stack Developer";
// 	}
// }

// yourFutureCareer();
//
// Training JS #1: create your first JS function and print "Hello World!"
// function helloWorld() {
// 	var str = "Hello World!";
// 	console.log(str);
// }
//
// Unexpected parsing
// const getStatus = (isBusy) => {
// 	return { status: isBusy ? "busy" : "available" };
// };
//
// Max Headroom and JavaScript style
// function getMax1() {
// 	var max = {
// 		name: "Max Headroom",
// 	};
// 	return max;
// }
// function getMax2() {
// 	return { name: "Max Headroom" };
// }
//
// 101 Dalmatians - squash the bugs, not the dogs!

// function howManyDalmatians(number) {
// 	var dogs = [
// 		"Hardly any",
// 		"More than a handful!",
// 		"Woah that's a lot of dogs!",
// 		"101 DALMATIANS!!!",
// 	];
// 	return number <= 10
// 		? dogs[0]
// 		: number <= 50
// 		? dogs[1]
// 		: number === 101
// 		? dogs[3]
// 		: dogs[2];
// }
//
// Training JS #2: Basic data types--Number
// var v1 = 50;
// (v2 = 100), (v3 = 150), (v4 = 200), (v5 = 2), (v6 = 250);
// function equal1() {
// 	var a = v1;
// 	var b = v1;
// 	return a + b;
// }
// //Please refer to the example above to complete the following functions
// function equal2() {
// 	var a = v4; //set number value to a
// 	var b = v2; //set number value to b
// 	return a - b;
// }
// function equal3() {
// 	var a = v1; //set number value to a
// 	var b = v5; //set number value to b
// 	return a * b;
// }
// function equal4() {
// 	var a = v4; //set number value to a
// 	var b = v5; //set number value to b
// 	return a / b;
// }
// function equal5() {
// 	var a = v6; //set number value to a
// 	var b = v3; //set number value to b
// 	return a % b;
// }
//
// Training JS #3: Basic data types--String
//
// var a1 = "A",
// 	a2 = "a",
// 	b1 = "B",
// 	b2 = "b",
// 	c1 = "C",
// 	c2 = "c",
// 	d1 = "D",
// 	d2 = "d",
// 	e1 = "E",
// 	e2 = "e",
// 	n1 = "N",
// 	n2 = "n";
// function Dad() {
// 	//select some variable to combine "Dad"
// 	return d1 + a2 + d2;
// }
// function Bee() {
// 	//select some variable to combine "Bee"
// 	return b1 + e2 + e2;
// }
// function banana() {
// 	//select some variable to combine "banana"
// 	return b2 + a2 + n2 + a2 + n2 + a2;
// }

// //answer some questions if you finished works above
// function answer1() {
// 	//the answer should be "yes" or "no"
// 	return "no";
// }
// function answer2() {
// 	//the answer should be "yes" or "no"
// 	return "no";
// }
// function answer3() {
// 	//the answer should be "yes" or "no"
// 	return "yes";
// }
// var a1 = "A",
// 	a2 = "a",
// 	b1 = "B",
// 	b2 = "b",
// 	c1 = "C",
// 	c2 = "c",
// 	d1 = "D",
// 	d2 = "d",
// 	e1 = "E",
// 	e2 = "e",
// 	n1 = "N",
// 	n2 = "n";
// function Dad() {
// 	//select some variable to combine "Dad"
// 	return d1 + a2 + d2;
// }
// function Bee() {
// 	//select some variable to combine "Bee"
// 	return b1 + e2 + e2;
// }
// function banana() {
// 	//select some variable to combine "banana"
// 	return b2 + a2 + n2 + a2 + n2 + a2;
// }

// //answer some questions if you finished works above
// function answer1() {
// 	//the answer should be "yes" or "no"
// 	return "no";
// }
// function answer2() {
// 	//the answer should be "yes" or "no"
// 	return "no";
// }
// function answer3() {
// 	//the answer should be "yes" or "no"
// 	return "yes";
// }
//
// Training JS #4: Basic data types--Array
// function getLength(arr) {
// 	return arr.length;
// }
// function getFirst(arr) {
// 	return arr[0];
// }
// function getLast(arr) {
// 	return arr[arr.length - 1];
// }
// function pushElement(arr) {
// 	var el = 1;
// 	arr.push(el);
// 	return arr;
// }
// function popElement(arr) {
// 	arr.pop();
// 	return arr;
// }
//
// Training JS #5: Basic data types--Object
//
// function animal(obj) {
// 	return `This ${obj.color} ${obj["name"]} has ${obj["legs"]} legs.`;
// }
//
// Training JS #6: Basic data types--Boolean and conditional statements if..else
// const trueOrFalse = (val) => (val ? "true" : "false");
// const trueOrFalse = (val) => Boolean(val).toString();
//
// Training JS #7: if..else and ternary operator
// const saleHotdogs = (n) =>
// 	n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
//
// Training JS #8: Conditional statement--switch
// function howManydays(month) {
// 	var days;
// 	switch (month) {
// 		case 2:
// 			days = 28;
// 			break;
// 		case 4:
// 		case 6:
// 		case 9:
// 		case 11:
// 			days = 30;
// 			break;
// 		default:
// 			days = 31;
// 	}
// 	return days;
// }
//
// Training JS #9: loop statement --while and do..while
// function padIt(str, n) {
// 	let i = 0;
// 	do {
// 		if (i % 2 !== 0) str = str + "*";
// 		else str = "*" + str;
// 		i++;
// 	} while (i < n);
// 	return str;
// }
//
//
// Training JS #10: loop statement --for
// function pickIt(arr) {
// 	var odd = [],
// 		even = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 0) {
// 			even.push(arr[i]);
// 		} else if (arr[i] % 2 !== 0) {
// 			odd.push(arr[i]);
// 		}
// 	}
// 	return [odd, even];
// }
// Training JS #11: loop statement --break,continue
// const grabDoll = (dolls) => {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (bag.length === 3) {
// 			break;
// 		}
// 		if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
// 		bag.push(dolls[i]);
// 	}
// 	return bag;
// };

// const grabDoll = (dolls) => {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (bag.length === 3) {
// 			break;
// 		}
// 		if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
// 		bag.push(dolls[i]);
// 	}
// 	return bag;
// };

// console.log(
// 	grabDoll([
// 		"Hello Kitty",
// 		"Barbie doll",
// 		"Woody",
// 		"Alien",
// 		"Hello Kitty",
// 		"Barbie doll",
// 		"Buzz Astral",
// 		"Sid",
// 		"Hello Kitty",
// 		"Barbie doll",
// 	])
// );
//
// Training JS #12: loop statement --for..in and for..of

// function giveMeFive(obj) {
// 	let array = [];
// 	for (var key in obj) {
// 		if (key.length === 5) {
// 			array.push(key);
// 		}
// 		if (obj[key].length === 5) {
// 			array.push(obj[key]);
// 		}
// 	}
// 	return array;
// }
//
// Training JS #13: Number object and its properties

// function whatNumberIsIt(n) {
// 	if (n === Number.MAX_VALUE) {
// 		return `Input number is Number.MAX_VALUE`;
// 	} else if (n === Number.MIN_VALUE) {
// 		return `Input number is Number.MIN_VALUE`;
// 	} else if (isNaN(n)) {
// 		return `Input number is Number.NaN`;
// 	} else if (n < -Number.MAX_VALUE) {
// 		return `Input number is Number.NEGATIVE_INFINITY`;
// 	} else if (n > Number.MAX_VALUE) {
// 		return `Input number is Number.POSITIVE_INFINITY`;
// 	} else {
// 		return `Input number is ${n}`;
// 	}
// }

// const whatNumberIsIt = (n) =>
// 	n === Number.MAX_VALUE
// 		? `Input number is Number.MAX_VALUE`
// 		: n === Number.MIN_VALUE
// 		? `Input number is Number.MIN_VALUE`
// 		: isNaN(n)
// 		? `Input number is Number.NaN`
// 		: n < -Number.MAX_VALUE
// 		? `Input number is Number.NEGATIVE_INFINITY`
// 		: n > Number.MAX_VALUE
// 		? `Input number is Number.POSITIVE_INFINITY`
// 		: `Input number is ${n}`;
//
// Training JS #14: Methods of Number object--toString() and toLocaleString()
// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"

// const colorOf = (r, g, b) => {
// 	let red = r.toString(16);
// 	let green = g.toString(16);
// 	let blue = b.toString(16);
// 	return `#${red.length === 1 ? "0" + red : red}${
// 		green.length === 1 ? "0" + green : green
// 	}${blue.length === 1 ? "0" + blue : blue}`;
// };
//
// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// function howManySmaller(arr, n) {
// 	return (newArr = arr.map((e) => +e.toFixed(2)).filter((e) => e < n).length);
// }

// howManySmaller([1.234,1.235,1.228],1.24) should return 2
// howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
// howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
//
// Training JS #16: Methods of String object--slice(), substring() and substr()

// const cutIt = (arr) =>
// 	arr.map((e) => e.slice(0, Math.min(...arr.map((x) => x.length))));
//
// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

// const firstToLast = (str, c) =>
// 	str.search(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c);
//
// Training JS #18: Methods of String object--concat() split() and its good friend join()
// const splitAndMerge = (string, separator) =>
// 	string
// 		.split(" ")
// 		.map((e) => e.split("").join(separator))
// 		.join(" ");
//
// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// const alienLanguage = (str) =>
// 	str
// 		.split(" ")
// 		.map((e) => e.slice(0, -1).toUpperCase() + e.slice(-1).toLowerCase())
// 		.join(" ");
//
// Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
// function topSecret(str) {
// 	let dict = [
// 		"a",
// 		"b",
// 		"c",
// 		"d",
// 		"e",
// 		"f",
// 		"g",
// 		"h",
// 		"i",
// 		"j",
// 		"k",
// 		"l",
// 		"m",
// 		"n",
// 		"o",
// 		"p",
// 		"q",
// 		"r",
// 		"s",
// 		"t",
// 		"u",
// 		"v",
// 		"w",
// 		"x",
// 		"y",
// 		"z",
// 	];
// 	let Dict = [
// 		"A",
// 		"B",
// 		"C",
// 		"D",
// 		"E",
// 		"F",
// 		"G",
// 		"H",
// 		"I",
// 		"J",
// 		"K",
// 		"L",
// 		"M",
// 		"N",
// 		"O",
// 		"P",
// 		"Q",
// 		"R",
// 		"S",
// 		"T",
// 		"U",
// 		"V",
// 		"W",
// 		"X",
// 		"Y",
// 		"Z",
// 	];
// 	return str.replace(/[a-z]/gi, (v) => {
// 		if (v === v.toLowerCase()) {
// 			return dict.indexOf(v.toLowerCase()) - 3 < 0
// 				? dict[dict.indexOf(v.toLowerCase()) - 3 + 26]
// 				: dict[dict.indexOf(v.toLowerCase()) - 3];
// 		}
// 		if (v === v.toUpperCase()) {
// 			return Dict.indexOf(v) - 3 < 0
// 				? Dict[Dict.indexOf(v) - 3 + 26]
// 				: Dict[Dict.indexOf(v) - 3];
// 		}
// 		return v;
// 	});
// }
//
//
// Training JS #21: Methods of String object--trim() and the string template
//
// function fiveLine(s) {
// 	let result = "";
// 	for (let i = 1; i < 6; i++) {
// 		if (i === 5) {
// 			result += `${s.trim().repeat(i)}`;
// 			break;
// 		}
// 		result += `${s.trim().repeat(i)}\n`;
// 	}
// 	return result;
//
// Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction
// }
// let shuffleIt = (arr, ...swap) => {
// 	let i = 0;
// 	while (i < swap.length) {
// // 		let [a, b] = [swap[i][0], swap[i][1]];
// // 		[arr[a], arr[b]] = [arr[b], arr[a]];
// // 		i++;
// // 	}
// // 	return arr;
// // };
// //
// //
// // Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()
// // Coding in function infiniteLoop. function accept 3 parameters. The 1st parameter is arr, it's a 2D array, it contains three 1D array. The 2nd parameter is d ，it's a string. The 3rd parameter is n, it's a number.

// // You can think of arr as a moat, the elements of arr like water constantly flow in. The direction of flow is controlled by the parameter d. The value of d can be "left" or "right". "left" means the "river" moves to the left. All elements in the 1D array are to the left moving n position, if beyond the bounds of the array and the element is moved to the tail on the left side of the array; if it exceeds the left boundary element would be moved to the tail of 3rd array(like a circle). Right is also similar to the operation, but it is moving to the right.

// // Finally, return arr.

// function infiniteLoop(arr, d, n) {
// 	let newArr = [];
// 	//
// }

// function infiniteLoop(arr, d, n) {
// 	for (let i = 1; i <= n; i++) {
// 		if (d === "left") {
// 			arr[2].push(arr[0].shift());
// 			arr[1].push(arr[2].shift());
// 			arr[0].push(arr[1].shift());
// 		}
// 		if (d === "right") {
// 			arr[0].unshift(arr[2].pop());
// 			arr[1].unshift(arr[0].pop());
// 			arr[2].unshift(arr[1].pop());
// 		}
// 	}
// 	return arr;
// }
// function infiniteLoop(arr, d, n) {
// 	for (let i = 0; i < n; i++) {
// 		if (d === "right") {
// 			arr[0].unshift(arr[2].pop());
// 			arr[1].unshift(arr[0].pop());
// 			arr[2].unshift(arr[1].pop());
// 		} else if (d === "left") {
// 			arr[2].push(arr[0].shift());
// 			arr[1].push(arr[2].shift());
// 			arr[0].push(arr[1].shift());
// 		}
// 	}
// 	return arr;
// }
//
// Training JS #24: methods of arrayObject---splice() and slice()

// Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.
// function threeInOne(arr) {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i += 3) {
// 		newArr.push(arr[i] + arr[i + 1] + arr[i + 2]);
// 	}
// 	return newArr;
// }
//
// Training JS #25: methods of arrayObject---reverse() and sort()
// Coding in function sortIt. function accept 1 parameters arr, it's a number array.

// function sortIt(arr) {
// 	return arr.slice().sort((a, b) => {
// 		let countA = arr.filter((v) => v === a).length;
// 		let countB = arr.filter((v) => v === b).length;
// 		if (countA === countB) {
// 			return a - b;
// 		} else if (countB > countA) {
// 			return 1;
// 		} else {
// 			return -1;
// 		}
// 	});
// }

// conditions1: according to the number of elements(in ascending order) for example:

// sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
// because [1,1,1,2,2,3] has one 3, two 2 and three 1
// conditions2: If the same number of elements, according to the number values(in descending order) for example:

// sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
// because number of 3,2 and 1 both are three, then according to 3>2>1
// Comprehensive two conditions should be like this:

// sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]
//
// Vowel Count
// function getCount(str) {
// 	let vowelsCount = 0;
// 	let arr = str.split("");
// 	for (let i = 0; i < arr.length; i++) {
// 		if (
// 			arr[i] === "a" ||
// 			arr[i] === "e" ||
// 			arr[i] === "i" ||
// 			arr[i] === "o" ||
// 			arr[i] === "u"
// 		) {
// 			vowelsCount++;
// 		}
// 	}
// 	return vowelsCount;
// }
//
// Disemvowel Trolls
// function disemvowel(str) {
// 	return str
// 		.split("")
// 		.filter(
// 			(e) =>
// 				e !== "a" &&
// 				e !== "A" &&
// 				e !== "e" &&
// 				e !== "E" &&
// 				e !== "i" &&
// 				e !== "I" &&
// 				e !== "o" &&
// 				e !== "O" &&
// 				e !== "u" &&
// 				e !== "U"
// 		)
// 		.join("");
// }
//
//
// Vowel remover

// function shortcut(string) {
// 	return string
// 		.split("")
// 		.filter(
// 			(e) => e !== "a" && e !== "e" && e !== "i" && e !== "o" && e !== "u"
// 		)
// 		.join("");
// }
//
// Removing Elements
// function removeEveryOther(arr) {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i += 2) {
// 		newArr.push(arr[i]);
// 	}
// 	return newArr;
// }
//
// I love you, a little , a lot, passionately ... not at all
// function howMuchILoveYou(nbPetals) {
// 	let m = [
// 		"I love you",
// 		"a little",
// 		"a lot",
// 		"passionately",
// 		"madly",
// 		"not at all",
// 	];
// 	return m[(nbPetals - 1) % 6];
// }
//
// Is the string uppercase?
// String.prototype.isUpperCase = function () {
// 	return this == this.toUpperCase();
// };
//
//
// Find the first non-consecutive number
// function firstNonConsecutive(arr) {
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] - arr[i - 1] > 1) {
// 			return arr[i];
// 		}
// 	}
// 	return null;
// }
//
// Difference of Volumes of Cuboids
// const findDifference = (a, b) =>
// 	Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
//
//
// Correct the mistakes of the character recognition software
// const correct = (string) =>
// 	string.replace(/1/g, "I").replace(/5/g, "S").replace(/0/g, "O");
//
// Cat years, Dog years
// const humanYearsCatYearsDogYears = (humanYears) => {
// 	if (humanYears === 1) {
// 		return [1, 15, 15];
// 	}
// 	if (humanYears === 2) {
// 		return [2, 24, 24];
// 	}

// 	return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
// };
//
// Well of Ideas - Easy Version
// const well = (x) => {
// 	let result = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] === "good") {
// 			result++;
// 		}
// 	}
// 	return result === 0 ? "Fail!" : result > 2 ? "I smell a series!" : "Publish!";
// };
//
// Plural
// const plural = n => n === 1 ? false : true
//
// Convert to Binary
// const toBinary = (n) => Number(n.toString(2));
//
// List Filtering
//
// const filter_list = (l) => l.filter((e) => typeof e === "number");
//
// Array.diff
//
// Exes and Ohs
// function XO(str) {
// 	countAllExes = 0;
// 	countAllOhs = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (str.toLowerCase()[i] === "x") {
// 			countAllExes++;
// 		}
// 		if (str.toLowerCase()[i] === "o") {
// 			countAllOhs++;
// 		}
// 	}
// 	return countAllExes === countAllOhs;
// }
// Stringy Strings
// function stringy(size) {
// 	let alternateString = "";
// 	for (let i = 1; i <= size; i++) {
// 		if (i % 2 !== 0) {
// 			alternateString += 1;
// 		}
// 		if (i % 2 === 0) {
// 			alternateString += 0;
// 		}
// 	}
// 	return alternateString;
// }
//
// Simple Pig Latin
// const pigIt = (str) => {
// 	const arr = str.split(" ");
// 	return arr
// 		.map((w) => (w.match(/[A-z]/i) ? `${w.substr(1)}${w.substr(0, 1)}ay` : w))
// 		.join(" ");
// };
//
// Regular Ball Super Ball
// var Ball = function (ballType = "regular") {
// 	return (this.ballType = ballType);
// };
//
// N-th Power
// const index = (arr, n) => (n >= arr.length ? -1 : arr[n] ** n);
//
// Super Duper Easy
//
// const problem = (x) => (typeof x === "string" ? "Error" : x * 50 + 6);
//
//
// Hex to Decimal
// function hexToDec(hexString) {
// 	return parseInt(hexString, 16);
// }
//
// String.prototype.isUpperCase = function () {
// 	return this == this.toUpperCase();
// };
// String.prototype.isUpperCase = function () {
// 	return this.toUpperCase() === this.toString();
// };
// String.prototype.isUpperCase = function () {
// 	const re = /([a-z]+)/g;
// 	return !re.test(this);
// };
// const findDifference = (a, b) =>
// 	Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
// function find_difference(a, b) {
// 	return Math.abs(
// 		a.reduce((previous, current) => previous * current) -
// 			b.reduce((previous, current) => previous * current)
// 	);
// }
// function volume(c) {
// 	return c.reduce((x, y) => x * y);
// }

// function find_difference(a, b) {
// 	return Math.abs(volume(a) - volume(b));
// }
// function find_difference([a, b, c], [d, e, f]) {
// 	return Math.abs(a * b * c - d * e * f);
// }

// const humanYearsCatYearsDogYears = (humanYears) => {
// 	if (humanYears === 1) {
// 		return [1, 15, 15];
// 	}
// 	if (humanYears === 2) {
// 		return [2, 24, 24];
// 	}
// 	return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
// };

// var humanYearsCatYearsDogYears = function (y) {
// 	if (y === 1) return [1, 15, 15];
// 	if (y === 2) return [2, 24, 24];
// 	return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
// };

// const humanYearsCatYearsDogYears = (humanYears) => {
// 	let catYears = 0;
// 	let dogYears = 0;
// 	for (let i = 1; i <= humanYears; i++) {
// 		if (i === 1) {
// 			catYears += 15;
// 			dogYears += 15;
// 		} else if (i === 2) {
// 			catYears += 9;
// 			dogYears += 9;
// 		} else {
// 			catYears += 4;
// 			dogYears += 5;
// 		}
// 		return [humanYears, catYears, dogYears];
// 	}
// };

// const humanYearsCatYearsDogYears = (humanYears) => [
// 	humanYears,
// 	(humanYears - 1 ? 16 : 11) + 4 * humanYears,
// 	(humanYears - 1 ? 14 : 10) + 5 * humanYears,
// ];
//
//
// function disemvowel(str) {
// 	return str
// 		.split("")
// 		.filter(
// 			(e) =>
// 				e !== "a" &&
// 				e !== "A" &&
// 				e !== "e" &&
// 				e !== "E" &&
// 				e !== "i" &&
// 				e !== "I" &&
// 				e !== "o" &&
// 				e !== "O" &&
// 				e !== "u" &&
// 				e !== "U"
// 		)
// 		.join("");
// }

// function disemvowel(str) {
// 	return str.replace(/[aeiou]/gi, "");
// }

// function disemvowel(str) {
// 	var vowels = ["a", "e", "i", "o", "u"];
// 	return str
// 		.split("")
// 		.filter(function (el) {
// 			return vowels.indexOf(el.toLowerCase()) == -1;
// 		})
// 		.join("");
// }
//
// const toBinary = (n) => Number(n.toString(2));
// let toBinary = (n) => +n.toString(2);
// toBinary = (n) => parseInt(n.toString(2));
// function pickIt(arr) {
// 	var odd = [],
// 		even = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 0) {
// 			even.push(arr[i]);
// 		} else if (arr[i] % 2 !== 0) {
// 			odd.push(arr[i]);
// 		}
// 	}
// 	return [odd, even];
// }
// function pickIt(arr) {
// 	let odd = [];
// 	let even = [];
// 	for (var x of arr) {
// 		(x % 2 ? odd : even).push(x);
// 	}
// 	return [even, odd];
// }
//
// function isBigEnough(value) {
// 	return value >= 10;
// }

// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//
// const trueOrFalse = (val) => (val ? "true" : "false");
// const trueOrFalse = (val) => Boolean(val).toString();
// function stringy(size) {
// 	let alternateString = "";
// 	for (let i = 1; i <= size; i++) {
// 		if (i % 2 !== 0) {
// 			alternateString += 1;
// 		}
// 		if (i % 2 === 0) {
// 			alternateString += 0;
// 		}
// 	}
// 	return alternateString;
// }
// const stringy = (x) => "".padStart(x, "10");
// const stringy = (size = "10".repeat(size).slice(0, size));
// const stringy = (size = Array.from(Array(size), (v, i) => +!(i % 2)).join(""));
// const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found);
// const correct = (string) =>
// 	string.replace(/1/g, "I").replace(/5/g, "S").replace(/0/g, "O");
// const corrections = {
// 	5: "S",
// 	0: "O",
// 	1: "I",
// };

// const correct = (string) =>
// 	string.replace(/[501]/g, (character) => corrections[character]);
// function correct(string) {
// 	const map = {
// 		0: "0",
// 		1: "I",
// 		5: "S",
// 	};
// 	return string
// 		.split("")
// 		.map((c) => (map.hasOwnProperty(c) ? map[c] : c))
// 		.join("");
// }

// function correct(string) {
// 	return [...string].map((a) => ({ 0: "O", 5: "S", 1: "I" }[a] || a)).join("");
// }

// const well = (x) => {
// 	let result = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] === "good") {
// 			result++;
// 		}
// 		return result === 0
// 			? "Fail!"
// 			: result > 2
// 			? "I smell a series!"
// 			: "Publish!";
// 	}
// };

// function well(x) {
// 	switch (x.filter((i) => i === "good").length) {
// 		case 0:
// 			return "Fail!";
// 		case 1:
// 		case 2:
// 			return "Publish!";
// 		default:
// 			return `I smell a series!`;
// 	}
// }
// function well(x) {
// 	var good = 0;
// 	for (var i = 0; i < x.length; i++)
// 		if (x[i] == "good" && ++good > 2) return "I smell a series!";

// 	return good ? "Publish!" : "Fail!";
// }
// function well(x) {
// 	const count = x.reduce((s, v) => s + (v == "good"), 0);
// 	return count ? (count > 2 ? "I smell a series!" : "Publish!") : "Fail!";
// }

// const correct = (string) =>
// 	string.replace(/1/g, "I").replace(/0/g, "O").replace(/5/g, "S");

// const corrections = {
// 	5: "S",
// 	0: "O",
// 	1: "I",
// };

// const correct = (string) =>
// 	string.replace(/[501]/g, (character) => corrections[character]);
// function correct(string) {
// 	const map = {
// 		0: "O",
// 		1: "I",
// 		5: "S",
// 	};
// 	return string
// 		.split("")
// 		.map((c) => (map.hasOwnProperty(c) ? map[c] : c))
// 		.join("");
// }

// function correct(string) {
// 	return [...string].map((a) => ({ 0: "O", 5: "S", 1: "I" }[a] || a)).join("");
// }

// const well = (x) => {
// 	let result = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] === "good") {
// 			result++;
// 		}
// 	}
// 	return result === 0 ? "Fail!" : result > 2 ? "I smell a series!" : "Publish!";
// };

// const well = (x) => {
// 	const good_count = x.filter((x) => x == "good").length;
// 	return good_count < 1
// 		? "Fail"
// 		: good_count < 3
// 		? "Publish!"
// 		: "I smell a series!";
// };

// function well(x) {
// 	switch (x.filter((i) => i === "good").length) {
// 		case 0:
// 			return "Fail!";
// 		case 1:
// 		case 2:
// 			return "Publish!";
// 		default:
// 			return "I smell a series!";
// 	}
// }
//
// function well(x) {
// 	var good = 0;
// 	for (var i = 0; i < x.length; ++i)
// 		if (x[i] === "good" && ++good > 2) return "I smell a series!";
// 	return good ? "Publish" : "Fail!";
// }

// function well(x) {
// 	const count = x.reduce((s, v) => s + (v == "good"), 0);
// 	return count ? (count > 2 ? "I smell a series!" : "Publish") : "Fail";
// }

// function sortIt(arr) {
// 	return arr.slice().sort((a, b) => {
// 		let countA = arr.filter((v) => v === a).length;
// 		let countB = arr.filter((v) => v === b).length;
// 		if (countA === countB) {
// 			return b - a;
// 		} else if (countA > countB) {
// 			return 1;
// 		} else {
// 			return -1;
// 		}
// 	});
// }

// function howMuchILoveYou(nbPetals) {
// 	let m = [
// 		"I love you",
// 		"a little",
// 		"a lot",
// 		"passionately",
// 		"madly",
// 		"not at all",
// 	];
// 	return m[(nbPetals - 1) % 6];
// }
// const phrases = [
// 	"I love you",
// 	"a little",
// 	"a lot",
// 	"passionately",
// 	"madly",
// 	"not at all,",
// ];

// function howMuchILoveYou(n) {
// 	return phrases[(n - 1) % phrases.length];
// }
// const howMuchILoveYou = (n) =>
// 	["not at all", "I love you", "a little", "a lot", "passionately", "madly"][
// 		n % 6
// 	];
//
// function sortIt(arr) {
// 	return arr.slice().sort((a, b) => {
// 		let counterA = arr.filter((v) => v === a).length;
// 		let counterB = arr.filter((v) => v === b).length;
// 		if (counterA === counterB) {
// 			return b - a;
// 		} else if (counterA > counterB) {
// 			return 1;
// 		} else {
// 			return -1;
// 		}
// 	});
// }

// console.log(sortIt([1, 1, 1, 2, 2, 3]));
// console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]));
// console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));
//
// function padIt(str, n) {
// 	let i = 0;
// 	do {
// 		if (i % 2 !== 0) str = str + "*";
// 		else str = "*" + str;
// 		i++;
// 	} while (i < n);
// 	return str;
// }
// function getCount(str) {
// 	let vowelsCount = 0;
// 	let arr = str.split("");
// 	for (let i = 0; i < arr.length; i++) {
// 		if (
// 			arr[i] === "a" ||
// 			arr[i] === "e" ||
// 			arr[i] === "i" ||
// 			arr[i] === "o" ||
// 			arr[i] === "u"
// 		) {
// 			vowelsCount++;
// 		}
// 	}
// 	return vowelsCount;
// }
// function getCount(str) {
// 	return str.replace(/[^aeiou]/gi, "").length;
// }
//
// function getCount(str) {
// 	return (str.match(/[aeiou]/gi) || []).length;
// }
//
// function getCount(str) {
// 	return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
// }
//
// function firstNonConsecutive(arr) {
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] - arr[i - 1] > 1) {
// 			return arr[i];
// 		}
// 	}
// 	return null;
// }
// function firstNonConsecutive(arr) {
// 	let result = arr.find((val, index) => val !== index + arr[0]);
// 	return Number.isInteger(result) ? result : null;
// }
//
// function firstNonConsecutive(arr) {
// 	var out = null;
// 	for (var i = 1; i < arr.length; i++) {
// 		if (arr[i] - arr[i - 1] != 1) {
// 			out = arr[i];
// 			break;
// 		}
// 	}
// 	return out;
// }

// const firstNonConsecutive = (arr) =>
// 	arr.length == 1
// 		? null
// 		: arr[0] + 1 != arr[1]
// 		? arr[1]
// 		: firstNonConsecutive(arr.slice(1));
//
// function padIt(str, n) {
// 	let i = 0;
// 	do {
// 		if (i % 2 !== 0) str = str + "^";
// 		else str = "^" + str;
// 		i++;
// 	} while (i < n);
// 	return str;
// }
//
// function howMuchILoveYou(nbPetals) {
// 	let m = [
// 		"I love you",
// 		"a little",
// 		"a lot",
// 		"passionately",
// 		"madly",
// 		"not at all",
// 	];
// 	return m[(nbPetals - 1) % 6];
// }

// const phrases = [
// 	"I love you",
// 	"a little",
// 	"a lot",
// 	"passionately",
// 	"madly",
// 	"not at all",
// ];
// function howMuchILoveYou(n) {
// 	return phrases[(n - 1) % phrases.length];
// }

// const howMuchILoveYou = (n) =>
// 	["not at all", "I love you", "a little", "a lot", "passionately", "madly"][
// 		n % 6
// 	];

// function removeEveryOther(arr) {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i += 2) {
// 		newArr.push(arr[i]);
// 	}
// 	return newArr;
// }

// function removeEveryOther(arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		arr.splice(i, 1);
// 	}
// 	return arr;
// }

// const removeEveryOther = (arr) => arr.filter((_, i) => !(i % 2));

// const removeEveryOther = (arr = arr.filter((item, i) => i % 2 == 0));

// function removeEveryOther(arr) {
// 	return arr.filter((_, i) => i % 2 == 0);
// }

// const plural = (n) => (n === 1 ? false : true);

// function plural(n) {
// 	return n !== 1;
// }

// const plural = (n) => n !== 1;

// function XO(str) {
// 	countAllExes = 0;
// 	countAllOhs = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (str.toLowerCase()[i] === "x") {
// 			countAllExes++;
// 		}
// 		if (str.toLowerCase()[i] === "o") {
// 			countAllOhs++;
// 		}
// 	}
// 	return countAllExes === countAllOhs;
// }
// function XO(str) {
// 	let x = str.match(/x/gi);
// 	let o = str.match(/o/gi);
// 	return (x && x.length) === (o && o.length);
// }

// const XO = (str) => {
// 	str = str.toLowerCase().split("");
// 	return (
// 		str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
// 	);
// };

// function countSheeps(arrayOfSheeps) {
// 	return arrayOfSheeps.filter(Boolean).length;
// }

// const words = ["spray", "paint", "umbrella", "aligator", "quake3arena"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);

// const pigIt = (str) => {
// 	const arr = str.split("");
// 	return arr
// 		.map((w) => (w.match(/[A-z]/i) ? `${w.substr(1)}${w.substr(0, 1)}ay` : w))
// 		.join(" ");
// };

// function pigIt(str) {
// 	return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
// }

// function pigIt(str) {
// 	return str.replace(/\w+/g, (w) => {
// 		return w.slice(1) + w[0] + "ay";
// 	});
// }

// function pigIt(str) {
// 	var arrayWord = str.split(" ");
// 	return arrayWord
// 		.map(function (word) {
// 			var firstLetter = word.charAt(0);
// 			return word.slice(1) + firstLetter + "ay";
// 		})
// 		.join(" ");
// }

// const grabDoll = (dolls) => {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (bag.length === 3) {
// 			break;
// 		}
// 		if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
// 		bag.push(dolls[i]);
// 	}
// 	return bag;
// };

// const grabDoll = (dolls) =>
// 	dolls.filter((i) => i == "Hello Kitty" || i == "Barbie doll").slice(0, 3);

// function grabDoll(dolls) {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (!/^(Hello Kitty|Barbie doll)$/.test(dolls[i])) continue;
// 		bag.push(dolls[i]);
// 		if (bag.length === 3) break;
// 	}
// 	return bag;
// }

// console.log(
// 	grabDoll([
// 		"Hello Kitty",
// 		"Barbie doll",
// 		"Woody",
// 		"Alien",
// 		"Hello Kitty",
// 		"Barbie doll",
// 		"Buzz Astral",
// 		"Sid",
// 		"Hello Kitty",
// 		"Barbie doll",
// 	])
// );

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
// 	for (let i = 2; num > i; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
// 	return num > 1;
// }
// console.log(array.filter(isPrime));

// const humanYearsCatYearsDogYears = (humanYears) => {
// 	if (humanYears === 1) {
// 		return [1, 15, 15];
// 	}
// 	if (humanYears === 2) {
// 		return [2, 24, 24];
// 	}
// 	return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
// };

// var humanYearsCatYearsDogYears = function (y) {
// 	if (y == 1) return [1, 15, 15];
// 	if (y == 2) return [2, 24, 24];
// 	return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
// };

// const humanYearsCatYearsDogYears = (humanYears) => {
// 	let catYears = 0;
// 	let dogYears = 0;
// 	for (let i = 1; i <= humanYears; i++) {
// 		if (i === 1) {
// 			catYears += 15;
// 			dogYears += 15;
// 		} else if (i === 2) {
// 			catYears += 9;
// 			dogYears += 9;
// 		} else {
// 			catYears += 4;
// 			dogYears += 5;
// 		}
// 	}
// 	return [humanYears, catYears, dogYears];
// };

// const humanYearsCatYearsDogYears = (humanYears) => [
// 	humanYears,
// 	(humanYears - 1 ? 16 : 11) + 4 * humanYears,
// 	(humanYears - 1 ? 14 : 10) + 5 * humanYears,
// ];

// function stringy(size) {
// 	let alternateString = "";
// 	for (let i = 1; i <= size; i++) {
// 		if (i % 2 !== 0) {
// 			alternateString += 1;
// 		}
// 		if (i % 2 == 0) {
// 			alternateString += 0;
// 		}
// 	}
// 	return alternateString;
// }

// function stringy(size) {
// 	var str = "";
// 	for (var i = 1; i <= size; i++) str += i % 2;
// 	return str;
// }

// const stringy = (x) => "".padStart(x, "10");

// const stringy = (size) => "10".repeat(size).slice(0, size);

// const stringy = (size) => Array.from(Array(size), (v, i) => +!(i % 2)).join("");

// const index = (arr, n) => (n >= arr.length ? -1 : arr[n] ** n);

// function index(array, n) {
// 	return array[n] ** n || -1;
// }

// const index = (array, n) => (array.length > n ? Math.pow(array[n], n) : -1);

// function index(array, n) {
// 	return Math.pow(array[n], n) || -1;
// }

// function pickIt(arr) {
// 	var odd = [],
// 		even = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 0) {
// 			even.push(arr[i]);
// 		} else if (arr[i] % 2 !== 0) {
// 			odd.push(arr[i]);
// 		}
// 	}
// 	return [odd, even];
// }

// function pickIt(arr) {
// 	let odd = [];
// 	let even = [];
// 	for (var x of arr) {
// 		(x % 2 ? odd : even).push(x);
// 	}
// 	return [odd, even];
// }

// const findDifference = (a, b) =>
// 	Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);

// function disemvowel(str) {
// 	return str
// 		.split("")
// 		.filter(
// 			(e) =>
// 				e !== "a" &&
// 				e !== "A" &&
// 				e !== "e" &&
// 				e !== "E" &&
// 				e !== "i" &&
// 				e !== "I" &&
// 				e !== "o" &&
// 				e !== "O" &&
// 				e !== "u" &&
// 				e !== "U"
// 		)
// 		.join("");
// }

// function disemvowel(str) {
// 	return str.replace(/[aeiou]/gi, "");
// }

// function disemvowel(str) {
// 	var vowels = ["a", "e", "i", "o", "u"];
// 	return str
// 		.split("")
// 		.filter(function (el) {
// 			return vowels.indexOf(el.toLowerCase()) == -1;
// 		})
// 		.join("");
// }

// const correct = (string) =>
// 	string.replace(/1/g, "I").replace(/0/g, "O").replace(/5/g, "S");

// const toBinary = (n) => Number(n.toString(2));

// let toBinary = (n) => +n.toString(2);

// const toBinary = (n) => parseInt(n.toString(2));

// const arrayOfSheeps = [
// 	true,
// 	true,
// 	true,
// 	false,
// 	true,
// 	true,
// 	true,
// 	true,
// 	true,
// 	false,
// 	true,
// 	false,
// 	true,
// 	false,
// 	false,
// 	true,
// 	true,
// 	true,
// 	true,
// 	true,
// 	false,
// 	false,
// 	true,
// 	true,
// ];

// function countSheeps(arrayOfSheeps) {
// 	return arrayOfSheeps.filter(Boolean).length;
// }

// const countSheeps = (arrayOfSheeps) => arrayOfSheeps.filter(Boolean).length;

// function sortIt(arr) {
// 	return arr.slice().sort((a, b) => {
// 		let countA = arr.filter((v) => v === a).length;
// 		let countB = arr.filter((v) => v === b).length;
// 		if (countA === countB) {
// 			return b - a;
// 		} else if (countA > countB) {
// 			return 1;
// 		} else {
// 			return -1;
// 		}
// 	});
// }

// const grabDoll = (dolls) => {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (bag.length === 3) {
// 			break;
// 		}
// 		if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
// 		bag.push(dolls[i]);
// 	}
// 	return bag;
// };

// const grabDoll = (dolls) =>
// 	dolls.filter((i) => i === "Hello Kitty" || i === "Barbie doll").slice(0, 3);

// function grabDoll(dolls) {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (!/^(Hello Kitty|Barbie doll)$/.test(dolls[i])) continue;
// 		bag.push(dolls[i]);
// 		if (bag.length === 3) break;
// 	}
// 	return bag;
// }

// function padString(str, n) {
// 	let i = 0;
// 	do {
// 		if (i % 2 !== 0) str = str + "*";
// 		else str = "*" + str;
// 		i++;
// 	} while (i < n);
// 	return str;
// }

// const index = (arr, n) => (n >= arr.length ? -1 : arr[n] ** n);

// function index(array, n) {
// 	return array[n] ** n || -1;
// }

// const index = (array, n) => (array.length > n ? Math.pow(array[n], n) : -1);

// function index(array, n) {
// 	return Math.pow(array[n], n) || -1;
// }

// const pigIt = (str) => {
// 	const arr = str.split(" ");
// 	return arr
// 		.map((w) => (w.match(/[A-z]/i) ? `$w{w.substr(1)}${w.substr(0, 1)}ay` : w))
// 		.join("");
// };

// function pigIt(str) {
// 	return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
// }

// function pigIt(str) {
// 	return str.replace(/\w+/g, (w) => {
// 		return w.slice(1) + w[0] + "ay";
// 	});
// }

// function pigIt(str) {
// 	var arrayWord = str.split(" ");
// 	return arrayWord
// 		.map(function (word) {
// 			var firstLetter = word.charAt(0);
// 			return word.slice(1) + firstLetter + "ay";
// 		})
// 		.join(" ");
// }

// Capitalization and Mutability
// const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

// A wolf in sheep's clothing
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]
//  7      6      5      4      3              2      1
//  0      1      2      3      4      5       6      7
//  1      2      3      4      5      6       7      8

// function warnTheSheep(queue) {
// 	const wolfIndex = queue.indexOf("wolf");

// 	if (wolfIndex === queue.length - 1) {
// 		return "Pls go away and stop eating my sheep";
// 	}
// 	const sheepIndex = queue.length - wolfIndex - 1;

// 	return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
// }

// Bin to Decimal

// const binToDec = (b) => parseInt(b.toString(), 2);

// const correct = (string) =>
// 	string.replace(/1/g, "I").replace(/5/g, "S").replace(/0/g, "O");

// const correction = {
// 	5: "S",
// 	0: "O",
// 	1: "I",
// };
// const correct = (string) => {
// 	string.replace(/[501]/g, (character) => corrections[character]);
// };

// function correct(string) {
// 	const map = {
// 		0: "O",
// 		1: "I",
// 		5: "S",
// 	};
// 	return string
// 		.split("")
// 		.map((c) => (map.hasOwnProperty(c) ? map[c] : c))
// 		.join("");
// }

// function correct(string) {
// 	return [...string].map((a) => ({ 0: "O", 5: "S", 1: "I" }[a] || a)).join("");
// }

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
// 	for (let i = 2; num > i; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
// 	return num > 1;
// }
// console.log(array.filter(isPrime));

// function pickIt(arr) {
// 	var odd = [],
// 		even = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 0) {
// 			even.push(arr[i]);
// 		} else if (arr[i] % 2 !== 0) {
// 			odd.push(arr[i]);
// 		}
// 	}
// 	return [odd, even];
// }

// function pickIt(arr) {
// 	let odd = [];
// 	let even = [];
// 	for (var x of arr) {
// 		(x % 2 ? odd : even).push(x);
// 	}
// 	return [odd, even];
// }

// function XO(str) {
// 	countAllExes = 0;
// 	countAllOhs = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (str.toLowerCase()[i] === "x") {
// 			countAllExes++;
// 		}
// 		if (str.toLowerCase()[i] === "o") {
// 			countAllOhs++;
// 		}
// 	}
// 	return countAllExes === countAllOhs;
// }

// function XO(str) {
// 	let x = str.match(/x/gi);
// 	let o = str.match(/o/gi);
// 	return (x && x.length) === (o && o.length);
// }

// const XO = (str) => {
// 	str = str.toLowerCase().split("");
// 	return (
// 		str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
// 	);
// };

// const well = (x) => {
// 	let result = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] === "good") {
// 			result++;
// 		}
// 	}
// 	return result === 0 ? "Fail!" : result > 2 ? "I smell a series!" : "Publish!";
// };

// Exclamation marks series #1: Remove an exclamation mark from the end of string

// const remove = (string) =>
// 	string.charAt(string.length - 1) === "!" ? string.slice(0, -1) : string;

// const well = (x) => {
// 	let result = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] === "good") {
// 			result++;
// 		}
// 	}
// 	return result === 0 ? "Fail" : result > 2 ? "I smell a series!" : "Publish!";
// };

// const well = (x) => {
// 	const good_count = x.filter((x) => x == "good").length;
// 	return good_count < 1
// 		? "Fail!"
// 		: good_count < 3
// 		? "Publish!"
// 		: "I smell a series!";
// };

// function well(x) {
// 	switch (x.filter((i) => i === "good").length) {
// 		case 0:
// 			return "Fail!";
// 		case 1:
// 		case 2:
// 			return "Publish!";
// 		default:
// 			return "I smell a series!";
// 	}
// }

// function well(x) {
// 	let good_counter = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if ((x[i] == "good") & (++good_counter > 2)) return "I smell a series";

// 		return good_counter ? "Publish!" : "Fail!";
// 	}
// }

// function well(x) {
// 	const count = x.reduce((s, v) => s + (v == "good"), 0);
// 	return count ? (count > 2 ? "I smell a series!" : "Publish!") : "Fail!";
// }

// const remove = (string) =>
// 	string.charAt(string.length - 1) === "!" ? string.slice(0, -1) : string;

// const remove = (s) => s.replace(/!$/, "");

// function remove(s) {
// 	return s.endsWith("!") ? s.slice(0, -1) : s;
// }

// const remove = (string) =>
// 	string.charAt(string.length - 1) === "!" ? string.slice(0, -1) : string;

// const remove = (s) => s.replace(/!$/, "");

// function remove(s) {
// 	return s.endsWith("!") ? s.slice(0, -1) : s;
// }

// function stringy(size) {
// 	let alternateString = "";
// 	for (let i = 1; i <= size; i++) {
// 		if (i % 2 !== 0) {
// 			alternateString += 1;
// 		}
// 		if (i % 2 === 0) {
// 			alternateString += 0;
// 		}
// 	}
// 	return alternateString;
// }

// function stringy(size) {
// 	let str = "";
// 	for (let i = 1; i <= size; i++) {
// 		str += i % 2;
// 	}
// 	return str;
// }

// const stringy = (x) => "".padStart(x, "10");

// const stringy = (size) => "10".repeat(size).slice(0, size);

// const stringy = (size) => Array.from(Array(size), (v, i) => +!(i % 2)).join("");

// const padIt = (str, n) => {
// 	let i = 0;
// 	do {
// 		if (i % 2 !== 0) str = str + "*";
// 		else str = "*" + str;
// 		i++;
// 	} while (i < n);
// 	return str;
// };

// const findDifference = (a, b) =>
// 	Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);

// function find_difference(a, b) {
// 	return Math.abs(
// 		a.reduce((previous, current) => previous * current) -
// 			b.reduce((previous, current) => previous * current)
// 	);
// }

// function volume(c) {
// 	return c.reduce((x, y) => x * y);
// }
// function find_difference(a, b) {
// 	return Math.abs(volume(a) - volume(b));
// }

// function find_difference([a, b, c], [d, e, f]) {
// 	return Math.abs(a * b * c - d * e * f);
// }

// const plural = (n) => (n === 1 ? false : true);

// function plural(n) {
// 	return n !== 1;
// }

// const plural = (n) => n !== 1;

// const grabDoll = (dolls) => {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (bag.length === 3) {
// 			break;
// 		}
// 		if ((dolls[i] !== "Hello Kitty") & (dolls[i] !== "Barbie doll")) continue;
// 		bag.push(dolls[i]);
// 	}
// 	return bag;
// };

// const grabDoll = (dolls) =>
// 	dolls.filter((i) => i == "Hello Kitty" || i == "Barbie doll").slice(0, 3);

// function grabDoll(dolls) {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (!/^(Hello Kitty)|Barbie doll)$/.test(dolls[i])) continue;
// 		bag.push(dolls[i]);
// 		if (bag.length === 3) break;
// 	}
// 	return bag;
// }

// function getCount(str) {
// 	let vowelsCount = 0;
// 	let arr = str.split("");
// 	for (let i = 0; i < arr.length; i++) {
// 		if (
// 			arr[i] === "a" ||
// 			arr[i] === "e" ||
// 			arr[i] === "i" ||
// 			arr[i] === "o" ||
// 			arr[i] === "u"
// 		) {
// 			vowelsCount++;
// 		}
// 	}
// 	return vowelsCount;
// }

// function getCount(str) {
// 	return str.replace(/[^aeiou]/gi, "").length;
// }

// function getCount(str) {
// 	return (str.match(/[aeiou]/gi) || []).length;
// }

// function getCount(str) {
// 	return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
// }

// function howMuchILoveYou(nbPetals) {
// 	let m = [
// 		"I love you",
// 		"a little",
// 		"a lot",
// 		"passionately",
// 		"madly",
// 		"not at all",
// 	];
// 	return m[(nbPetals - 1) % 6];
// }

// const phrases = [
// 	"I love you",
// 	"a little",
// 	"a lot",
// 	"passionately",
// 	"madly",
// 	"not at all",
// ];

// function howMuchILoveYou(n) {
// 	return phrases[(n - 1) % phrases.length];
// }

// const howMuchILoveYou = (n) =>
// 	["not at all", "I love you", "a little", "a lot", "passionately", "madly"][
// 		n % 6
// 	];

// function countSheeps(sheepsArray) {
// 	return sheepsArray.filter(Boolean).length;
// }

// function removeEveryOther(arr) {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i += 2) {
// 		newArr.push(arr[i]);
// 	}
// 	return newArr;
// }

// function removeEveryOther(arr) {
// 	return arr.filter(function (elem, index) {
// 		return index % 2 === 0;
// 	});
// }

// function removeEveryOther(arr) {
// 	for (var i = 1; i < arr.length; i++) {
// 		arr.splice(i, 1);
// 	}
// 	return arr;
// }

// const removeEveryOther = (arr) => arr.filter((_, i) => !(i % 2));

// const removeEveryOther = (arr = arr.filter((item, i) => i % 2 == 0));

// function removeEveryOther(arr) {
// 	return arr.filter((_, i) => i % 2 == 0);
// }

// const pigIt = (str) => {
// 	const arr = str.split("");
// 	return arr
// 		.map((w) => (w.match(/[A-z]/i) ? `${w.substr(1)}${w.substr(0, 1)}ay` : w))
// 		.join(" ");
// };

// function pigIt(str) {
// 	return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
// }

// function pigIt(str) {
// 	return str.replace(/\w+/g, (w) => {
// 		return w.slice(1) + w[0] + "ay";
// 	});
// }

// function pigIt(str) {
// 	var arrayWord = str.split(" ");
// 	return arrayWord
// 		.map(function (word) {
// 			var firstLetter = word.charAt(0);
// 			return word.slice(1) + firstLetter + "ay";
// 		})
// 		.join(" ");
// }

// String.prototype.isUpperCase = function () {
// 	return this == this.toUpperCase();
// };

// String.prototype.isUpperCase = function () {
// 	return this.toUpperCase() === this.toString();
// };

// String.prototype.isUpperCase = function () {
// 	const re = /([a-z]+)/g;
// 	return !re.test(this);
// };

// const index = (arr, n) => (n >= arr.length ? -1 : arr[n] ** n);

// function index(array, n) {
// 	return array[n] ** n || -1;
// }

// const index = (array, n) => (array.length > n ? Math.pow(array[n], n) : -1);

// function index(array, n) {
// 	return Math.pow(array[n], n) || -1;
// }

// function firstNonConsecutive(arr) {
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] - arr[i - 1] > 1) {
// 			return arr[i];
// 		}
// 	}
// 	return null;
// }

// function firstNonConsecutive(arr) {
// 	let result = arr.find((val, index) => val !== index + arr[0]);
// 	return Number.isInteger(result) ? result : null;
// }

// function firstNonConsecutive(arr) {
// 	let out = null;
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] - arr[i - 1] != 1) {
// 			out = arr[i];
// 			break;
// 		}
// 	}
// 	return out;
// }

// const firstNonConsecutive = (arr =
// 	arr.length == 1
// 		? null
// 		: arr[0] + 1 != arr[1]
// 		? arr[1]
// 		: firstNonConsecutive(arr.slice(1)));

// const humanYearsCatYearsDogYears = (humanYears) => {
// 	if (humanYears === 1) {
// 		return [1, 15, 15];
// 	}
// 	if (humanYears === 2) {
// 		return [2, 24, 24];
// 	}
// 	return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
// };

// let humanYearsCatYearsDogYears = function (y) {
// 	if (y == 1) return [1, 15, 15];
// 	if (y == 2) return [2, 24, 24];
// 	return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
// };

// const humanYearsCatYearsDogYears = (humanYears) => {
// 	let catYears = 0;
// 	let dogYears = 0;
// 	for (let i = 1; i <= humanYears; i++) {
// 		if (i === 1) {
// 			catYears += 15;
// 			dogYears += 15;
// 		} else if (i === 2) {
// 			catYears += 9;
// 			dogYears += 9;
// 		} else {
// 			catYears += 4;
// 			dogYears += 5;
// 		}
// 	}
// 	return [humanYears, catYears, dogYears];
// };

// const humanYearsCatYearsDogYears = (humanYears) => [
// 	humanYears,
// 	(humanYears - 1 ? 16 : 11) + 4 * humanYears,
// 	(humanYears - 1 ? 14 : 10) + 5 * humanYears,
// ];

// function disemvowel(str) {
// 	return str
// 		.split("")
// 		.filter(
// 			(e) =>
// 				e !== "a" &&
// 				e !== "A" &&
// 				e !== "e" &&
// 				e !== "E" &&
// 				e !== "i" &&
// 				e !== "I" &&
// 				e !== "o" &&
// 				e !== "O" &&
// 				e !== "u" &&
// 				e !== "U"
// 		)
// 		.join("");
// }

// function disemvowel(str) {
// 	return str.replace(/[aeiou]/gi, "");
// }

// function disemvowel(str) {
// 	let vowels = ["a", "e", "i", "o", "u"];
// 	return str
// 		.split("")
// 		.filter(function (el) {
// 			return vowels.indexOf(el.toLowerCase()) == -1;
// 		})
// 		.join("");
// }

// function sortIt(arr) {
// 	return arr.slice().sort((a, b) => {
// 		let countA = arr.filter((v) => v === a).length;
//         let countB = arr.filter((v) => v === b).length;
//         if (countA === countB) {
//             return b - a;
//         } else if (countA > countB {
//             return 1;
//         } else {
//             return -1;
//         }
// 	});
// }

// const toBinary = (n) => Number(n.toString(2));

// let toBinary = (n) => +n.toString(2);

// const toBinary = (n) => parseInt(n.toString(2));

// function pickIt(arr) {
// 	let odd = [],
// 		even = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 0) {
// 			even.push(arr[i]);
// 		} else if (arr[i] % 2 !== 0) {
// 			odd.push(arr[i]);
// 		}
// 	}
// 	return [odd, even];
// }

// function pickIt(arr) {
// 	let odd = [];
// 	let even = [];
// 	for (let x of arr) {
// 		(x % 2 ? odd : even).push(x);
// 	}
// 	return [odd, even];
// }

// const correct = (string) =>
// 	string.replace(/1/g, "I").replace(/5/g, "S").replace(/0/g, "O");

// const corrections = {
// 	5: "S",
// 	0: "O",
// 	1: "I",
// };

// const correct = (string) => {
// 	string.replace(/[501]/g, (character) => correction[character]);
// };

// function correct(string) {
// 	const map = {
// 		0: "O",
// 		1: "I",
// 		5: "S",
// 	};
// 	return string
// 		.split("")
// 		.map((c) => (map.hasOwnProperty(c) ? map[c] : c))
// 		.join("");
// }

// function correct(string) {
// 	return [...string].map((a) => ({ 0: "O", 5: "S", 1: "I" }[a] || a)).join("");
// }

// function XO(str) {
// 	countAllExes = 0;
// 	countAllOhs = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (str.toLowerCase()[i] === "x") {
// 			countAllExes++;
// 		}
// 		if (str.toLowerCase()[i] === "o") {
// 			countAllOhs++;
// 		}
// 	}
// 	return countAllExes === countAllOhs;
// }

// function XO(str) {
// 	let x = str.match(/x/gi);
// 	let o = str.match(/o/gi);
// 	return (x && x.length) === (o && o.length);
// }

// const XO = (str) => {
// 	str = str.toLowerCase().split("");
// 	return (
// 		str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
// 	);
// };

// const array = [-3, -2, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
// 	for (let i = 2; num > i; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
// 	return num > 1;
// }

// console.log(array.filter(isPrime));

// const trueOrFalse = (val) => (val ? "True" : "False");

// const trueOrFalse = (val) => Boolean(val).toString();

// const remove = (string) =>
// 	string.charAt(string.length - 1) === "!" ? string.slice(0, -1) : string;

// const remove = (s) => s.replace(/!$/, "");

// function remove(s) {
// 	return s.endsWith("!") ? s.slice(0, -1) : s;
// }

// function string(size) {
// 	let alternateString = "";
// 	for (let i = 1; i <= size; i++) {
// 		if (i % 2 !== 0) {
// 			alternateString += 1;
// 		}
// 		if (i % 2 === 0) {
// 			alternateString += 0;
// 		}
// 	}
// 	return alternateString;
// }

// function stringy(size) {
// 	let str = "";
// 	for (let i = 1; i <= size; i++) str += i % 2;
// 	return str;
// }

// const stringy = (x) => "".padStart(x, "10");

// const stringy = (size) => "10".repeat(size).slice(0, size);

// const stringy = (size) => Array.from(Array(size), (v, i) => +!(i % 2)).join("");

// const well = (x) => {
// 	let result = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] === "good") {
// 			result++;
// 		}
// 	}
// 	return result === 0 ? "Fail" : result > 2 ? "I smell a series" : "Publish!";
// };

// const well = (x) => {
// 	const good_count = x.filter((x) => x === "good").length;
// 	return good_count < 1
// 		? "Fail"
// 		: good_count < 3
// 		? "Publish"
// 		: "I smell a series!";
// };

// function well(x) {
// 	switch (x.filter((i) => i === "good").length) {
// 		case 0:
// 			return "Fail!";
// 		case 1:
// 		case 2:
// 			return "Publish!";
// 		default:
// 			return "I smell a series!";
// 	}
// }

// function well(x) {
// 	let good = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] === "good" && ++good > 2) {
// 			return "I smell a series";
// 		}
// 	}
// 	return good ? "Publish!" : "Fail!";
// }

// function well(x) {
// 	const count = x.reduce((s, v) => s + (v === "good"), 0);
// 	return count ? (count > 2 ? "I smell a series!" : "Publish!") : "Fail!";
// }

// const well = (x) => {
// 	let result = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] === "good") {
// 			result++;
// 		}
// 	}
// 	return result === 0 ? "Fail!" : result > 2 ? "I smell a series" : "Publish";
// };

// const well = (x) => {
// 	const good_count = x.filter((x) => x == "good").length;
// 	return good_count < 1
// 		? "Fail"
// 		: good_count < 3
// 		? "Publish!"
// 		: "I smell a series";
// };

// function well(x) {
// 	switch (x.filter((i) => i === "good").length) {
// 		case 0:
// 			return "Fail!";
// 		case 1:
// 		case 2:
// 			return "Publish!";
// 		default:
// 			return "I smell a series!";
// 	}
// }

// function well(x) {
// 	var good = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] === "good" && ++good > 2) {
// 			return "I smell a series!";
// 		}
// 	}
// 	return good ? "Publish!" : "Fail!";
// }

// function well(x) {
// 	const count = x.reduce((s, v) => s + (v === "good"), 0);
// 	return count ? (count > 2 ? "I smell a series!" : "Publish!") : "Fail!";
// }

// const sheepsArray = (arrayOfSheeps) => {
// 	return arrayOfSheeps.filter(Boolean).length;
// };

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
// 	for (let i = 2; num > i; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
// 	return num > 1;
// }

// console.log(array.filter(isPrime));

// const trueOrFalse = (val) => (val ? "True" : "False");

// const trueOrFalse = (val) => Boolean(val).toString;

// function padIt(str, n) {
// 	let i = 0;
// 	do {
// 		if (i % 2 !== 0) str = str + "*";
// 		else str = "*" + str;
// 		i++;
// 	} while (i < n);
// 	return str;
// }

// const grabDoll = (dolls) => {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (bag.length === 3) {
// 			break;
// 		}
//         if (dolls[i] !== "Hello Kitty" && dolls[i] && !== "Barbie doll") continue;
//         bag.push(dolls[i])
// 	}
//     return bag;
// };

// const grabDoll = (dolls) =>
// 	dolls.filter((i) => i === "Hello Kitty" || i === "Barbie doll").slice(0, 3);

// function grabDoll(dolls) {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (!/^(Hello Kitty|Barbie doll)$/.test(dolls[i])) continue;
// 		bag.push(dolls[i]);
// 		if (bag.length === 3) break;
// 	}
// 	return bag;
// }

// function getCount(str) {
// 	let vowelsCount = 0;
// 	let arr = str.split("");
// 	for (let i = 0; i < arr.length; i++) {
// 		if (
// 			arr[i] === "a" ||
// 			arr[i] === "e" ||
// 			arr[i] === "i" ||
// 			arr[i] === "o" ||
// 			arr[i] === "u"
// 		) {
// 			vowelsCount++;
// 		}
// 	}
// 	return vowelsCount;
// }

// function getCount(str) {
// 	return str.replace(/[^aeiou]/gi, "").length;
// }

// function getCount(str) {
// 	return (str.match(/[aeiou]/gi) || []).length;
// }

// function getCount(str) {
// 	return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
// }

// const index = (arr, n) => (n >= arr.length ? -1 : arr[n] ** n);

// function index(array, n) {
// 	return array[n] ** n || -1;
// }

// const index = (array, n) => (array.length > n ? Math.pow(array[n], n) : -1);

// function index(array, n) {
// 	return Math.pow(array[n], n) || -1;
// }

// function removeEveryOther(arr) {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i += 2) {
// 		newArr.push(arr[i]);
// 	}
// 	return newArr;
// }

// function removeEveryOther(arr) {
// 	return arr.filter(function (elem, index) {
// 		return index % 2 === 0;
// 	});
// }

// function removeEveryOther(arr) {
// 	for (var i = 1; i < arr.length; i++) {
// 		arr.splice(i, 1);
// 	}
// 	return arr;
// }

// const removeEveryOther = (arr = arr.filter((_, i) => !(i % 2)));

// const removeEveryOther = arr => arr.filter((item, i) => i % 2 === 0;)

// function removeEveryOther(arr){
//     return arr.filter((_,i) => i % 2 === 0;)
// }

// const plural = (n) => (n === 1 ? false : true);

// function plural(n) {
// 	return n !== 1;
// }

// const plural = (n) => n !== 1;

// const findDifference = (a, b) =>
// 	Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);

// function howMuchILoveYou(nbPetals) {
// 	let m = [
// 		"I love you",
// 		"a little",
// 		"a lot",
// 		"passionately",
// 		"madly",
// 		"not at all",
// 	];
// 	return m[(nbPetals - 1) % 6];
// }

// const phrases = [
// 	"I love you",
// 	"a little",
// 	"a lot",
// 	"passionately",
// 	"madly",
// 	"not at all",
// ];

// function howMuchILoveYou(n) {
// 	return phrases[(n - 1) % phrases.length];
// }

// const howMuchILoveYou = (n) =>
// 	["not at all", "I love you", "a little", "a lot", "passionately", "madly"][
// 		n % 6
// 	];

// const remove = (string) =>
// 	string.charAt(string.length - 1) === "!" ? string.slice(0, -1) : string;

// const remove = (s) => s.replace(/!$/, "");

// function remove(s) {
// 	return s.endsWith("!") ? s.slice(0, -1) : s;
// }

// const findDifference = (a, b) =>
// 	Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);

// function find_difference(a, b) {
// 	return Math.abs(
// 		a.reduce((previous, current) => previous * current) -
// 			b.reduce((previous, current) => previous * current)
// 	);
// }

// function volume(c) {
// 	return c.reduce((x, y) => x * y);
// }

// function find_difference(a, b) {
// 	return Math.abs(volume(a) - volume(b));
// }

// function find_difference([a, b, c], [d, e, f]) {
// 	return Math.abs(a * b * c - d * e * f);
// }

// const pigIt = (str) => {
// 	const arr = str.split(" ");
// 	return arr
// 		.map((w) => (w.match(/[A-z]/i) ? `${w.substr(1)}${w.substr(0, 1)}ay` : w))
// 		.join(" ");
// };

// function pigIt(str) {
// 	return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
// }

// function pigIt(str) {
// 	return str.replace(/\w+/g, (w) => {
// 		return w.slice(1) + w[0] + "ay";
// 	});
// }

// function pigIt(str) {
// 	var arrayWord = str.split(" ");
// 	return arrayWord
// 		.map(function (word) {
// 			var firstLetter = word.charAt(0);
// 			return word.slice(1) + firstLetter + "ay";
// 		})
// 		.join(" ");
// }

// const strCount = (str, letter) => {
// 	let result = 0;
// 	let newArr = str.split("");
// 	for (let i = 0; i < newArr.length; i++) {
// 		if (newArr[i] === letter) {
// 			result++;
// 		}
// 	}
// 	return result;
// };

// function strCount(str, letter) {
// 	return str.split(letter).length - 1;
// }

// function strCount(str, letter) {
// 	return str.split("").filter((c) => c == letter).length;
// }

// const strCount = (str, letter) => --str.split(letter).length;

// The Wide-Mouthed frog!
// const mouthSize = (animal) => {
// 	switch (animal.toLowerCase()) {
// 		case "alligator":
// 			return "small";
// 		default:
// 			return "wide";
// 	}
// };
//
// Enumerable Magic #25 - Take the First N Elements

// const take = (arr, n) => arr.slice(0, n);

// Dollars and Cents

// const formatMoney = (amount) => "$" + amount.toFixed(2);

// Complementary DNA

// const DNAStrand = (dna) => {
// 	const pairs = {
// 		A: "T",
// 		T: "A",
// 		C: "G",
// 		G: "C",
// 	};
// 	return dna
// 		.split("")
// 		.map((i) => pairs[i])
// 		.join("");
// };

// Binary Addition

// const addBinary = (a, b) => (a + b).toString(2);

// const trueOrFalse = (val) => (val ? "True" : "False");

// const trueOrFalse = (val) => Boolean(val).toString();

// const well = (x) => {
// 	let result = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] === "good") {
// 			result++;
// 		}
// 	}
// 	return result === 0 ? "Fail" : result > 2 ? "I smell a series!" : "Publish!";
// };

// const well = (x) => {
// 	const good_count = x.filter((e) => e === "good").length;
// 	return good_count < 1
// 		? "Fail"
// 		: good_count < 3
// 		? "Publish!"
// 		: "I smell a series!";
// };

// function well(x) {
// 	switch (x.filter((i) => i === "good").length) {
// 		case 0:
// 			return "Fail!";
// 		case 1:
// 		case 2:
// 			return "Publish!";
// 		default:
// 			return "I smell a series!";
// 	}
// }

// function firstNonConsecutive(arr) {
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] - arr[i - 1] > 1) {
// 			return arr[i];
// 		}
// 	}
// 	return null;
// }

// function firstNonConsecutive(arr) {
// 	let result = arr.find((val, index) => val !== index + arr[0]);
// 	return Number.isInteger(result) ? result : null;
// }

// function firstNonConsecutive(arr) {
// 	let out = null;
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] - arr[i - 1] != 1) {
// 			out = arr[i];
// 			break;
// 		}
// 	}
// 	return out;
// }

// const firstNonConsecutive = (arr) =>
// 	arr.length == 1
// 		? null
// 		: arr[0] + 1 != arr[1]
// 		? arr[1]
// 		: firstNonConsecutive(arr.slice(1));

// String.prototype.isUpperCase = function () {
// 	return this == this.toUpperCase();
// };

// String.prototype.isUpperCase = function () {
// 	return this.toUpperCase() === this.toString();
// };

// String.prototype.isUpperCase = function () {
// 	const re = /([a-z]+)/g;
// 	return !re.test(this);
// };

// const humanYearsCatYearsDogYears = (humanYears) => {
// 	if (humanYears === 1) {
// 		return [1, 15, 15];
// 	}
// 	if (humanYears === 2) {
// 		return [2, 24, 24];
// 	}
// 	return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
// };

// let humanYearsCatYearsDogYears = function (y) {
// 	if (y == 1) return [1, 15, 15];
// 	if (y == 2) return [2, 24, 24];
// 	return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
// };

// const humanYearsCatYearsDogYears = (humanYears) => {
// 	let catYears = 0;
// 	let dogYears = 0;

// 	for (let i = 1; i <= humanYears; i++) {
// 		if (i === 1) {
// 			catYears += 15;
// 			dogYears += 15;
// 		} else if (i === 2) {
// 			catYears += 9;
// 			dogYears += 9;
// 		} else {
// 			catYears += 4;
// 			dogYears += 5;
// 		}
// 	}
// 	return [humanYears, catYears, dogYears];
// };

// const humanYearsCatYearsDogYears = (humanYears) => [
// 	humanYears,
// 	(humanYears - 1 ? 16 : 11) + 4 * humanYears,
// 	(humanYears - 1 ? 14 : 10) + 5 * humanYears,
// ];

// const strCount = (str, letter) => {
// 	let result = 0;
// 	let newArr = str.split("");
// 	for (let i = 0; i < newArr.length; i++) {
// 		if (newArr[i] === letter) {
// 			result++;
// 		}
// 	}
// 	return result;
// };

// function strCount(str, letter) {
// 	return str.split(letter).length - 1;
// }

// function strCount(str, letter) {
// 	return str.split("").filter((c) => c == letter).length;
// }

// const strCount = (str, letter) => --str.split(letter).length;

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
// 	fomr (let i = 2; num > i; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
// 	return num > 1;
// }
// console.log(array.filter(isPrime));

// const well = (x) => {
// 	let result = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (x[i] === "good") {
// 			result++;
// 		}
// 	}
// 	return result === 0 ? "Fail!" : result > 2 ? "I smell a series!" : "Publish!";
// };

// const well = (x) => {
// 	const good_count = x.filter((x) => x === "good").length;
// 	return good_count < 1
// 		? "Fail!"
// 		: good_count < 3
// 		? "Publish!"
// 		: "I smell a series!";
// };

// function well(x) {
// 	switch (x.filter((i) => i === "good").length) {
// 		case 0:
// 			return "Fail!";
// 		case 1:
// 		case 2:
// 			return "Publish!";
// 		default:
// 			return "I smell a series!";
// 	}
// }

// function well(x) {
// 	var good = 0;
// 	for (var i = 0; i < x.length; ++i)
// 		if (x[i] === "good" && ++good > 2) return "I smell a series!";

// 	return good ? "Publish" : "Fail!";
// }

// function well(x){
//     const count = x.reduce((s,v) = s + (v === "good"), 0);
//     return count ? count > 2 ? "I smell a series!" : "Publish" : "Fail!";
// }

// function pickIt(arr) {
// 	var odd = [],
// 		even = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 0) {
// 			even.push(arr[i]);
// 		} else if (arr[i] % 2 !== 0) {
// 			odd.push(arr[i]);
// 		}
// 	}
// 	return [odd, even];
// }

// function pickIt(arr) {
// 	let odd = [];
// 	let even = [];
// 	for (var x of arr) {
// 		(x % 2 ? odd : even).push(x);
// 	}
// 	return [odd, even];
// }

// function XO(str) {
// 	let countAllExes = 0;
// 	let countAllOhs = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (str.toLowerCase()[i] === "x") {
// 			countAllExes++;
// 		}
// 		if (str.toLowerCase()[i] === "o") {
// 			countAllOhs++;
// 		}
// 	}
// 	return countAllExes === countAllOhs;
// }

// function XO(str) {
// 	let x = str.match(/x/gi);
// 	let o = str.match(/o/gi);
// 	return (x && x.length) === (o && o.length);
// }

// const XO = (str) => {
// 	str = str.toLowerCase().split("");
// 	return (
// 		str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
// 	);
// };

// function disemvowel(str) {
// 	return str
// 		.split("")
// 		.filter(
// 			(e) =>
// 				e !== "a" &&
// 				e !== "A" &&
// 				e !== "e" &&
// 				e !== "E" &&
// 				e !== "i" &&
// 				e !== "I" &&
// 				e !== "o" &&
// 				e !== "O" &&
// 				e !== "u" &&
// 				e !== "U"
// 		)
// 		.join("");
// }

// function disemvowel(str) {
// 	return str.replace(/[aeiou]/gi, "");
// }

// function disemvowel(str) {
// 	let vowels = ["a", "e", "i", "o", "u"];
// 	return str
// 		.split("")
// 		.filter(function (el) {
// 			return vowels.indexOf(el.toLowerCase()) == -1;
// 		})
// 		.join("");
// }

// const correct = (string) =>
// 	string.replace(/1/g, "I").replace(/5/g, "5").replace(/0/g, "O");

// const corrections = {
// 	5: "S",
// 	0: "O",
// 	1: "I",
// };

// const correct = (string) =>
// 	string.replace(/[501]/g, (character) => corrections[character]);

// function correct(string) {
// 	const map = {
// 		0: "O",
// 		1: "I",
// 		5: "S",
// 	};
// 	return string.split("").map(c => (map.hasOwnProperty(c) ? map[c] : c).join("");
// }

// function correct(string){
//     return [...string].map(a => ({"0": "O", "5": "S", "0": "O"})[a]||a).join("");
// }

// const trueOrFalse = (val) => (val ? "True" : "False");

// const trueOrFalse = (val) => Boolean(val).toString();

// const strCount = (str, letter) => {
// 	let result = 0;
// 	let newArr = str.split("");
// 	for (let i = 0; i < newArr.length; i++) {
// 		if (newArr[i] === letter) {
// 			result++;
// 		}
// 	}
// 	return result;
// };

// function strCount(str, letter) {
// 	return str.split(letter).length - 1;
// }

// function strCount(str, letter) {
// 	return str.split("").filter((c) => c === letter).length;
// }

// const strCount = (str, letter) => --str.split(letter).length;

// @media (min-width: 600px){
//     property: value,
// }

// const sheeps = [
// 	true,
// 	true,
// 	true,
// 	false,
// 	true,
// 	true,
// 	true,
// 	true,
// 	true,
// 	false,
// 	true,
// 	false,
// 	true,
// 	false,
// 	false,
// 	true,
// 	true,
// 	true,
// 	true,
// 	true,
// 	false,
// 	false,
// 	true,
// 	true,
// ];

// const countSheeps = (arrayOfSheeps) => arrayOfSheeps.filter(Boolean).length;

// function sortIt(arr) {
// 	return arr.slice().sort((a, b) => {
// 		let countA = arr.filter((v) => v === a).length;
// 		let countB = arr.filter((v) => v === b).length;
// 		if (countA === countB) {
// 			return b - a;
// 		} else if (countA > countB) {
// 			return 1;
// 		} else {
// 			return -1;
// 		}
// 	});
// }

// const remove = (string) =>
// 	string.charAt(string.lenght - 1) === "!" ? string.slice(0, -1) : string;

// const remove = (s) => s.replace(/!$/, "");

// function remove(s) {
// 	return s.endsWith("!") ? s.slice(0, -1) : s;
// }

// const grabDoll = (dolls) => {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (bag.length === 3) {
// 			break;
// 		}
// 		if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
// 		bag.push(dolls[i]);
// 	}
// 	return bag;
// };

// const grabDoll = (dolls) =>
// 	dolls.filter((i) => i === "Hello Kitty" || i === "Barbie doll").slice(0, 3);

// function grabDoll(dolls) {
// 	let bag = [];
// 	for (let i = 0; i < dolls.length; i++) {
// 		if (!/^(Hello Kitty|Barbie doll)$/.test(dolls[i])) continue;
// 		bag.push(dolls[i]);
// 		if (bag.length === 3) break;
// 	}
// 	return bag;
// }

// const index = (arr, n) => (n >= arr.length ? -1 : arr[n] ** n);

// function index(array, n) {
// 	return array[n] ** n || -1;
// }

// const index = (array, n) => (array.length > n ? Math.pow(array[n], n) : -1);

// function index(array, n) {
// 	return Math.pow(array[n], n) || -1;
// }

// const toBinary = (n) => Number(n.toString(2));

// const toBinary = (n) => parseInt(n.toString(2));

// let toBinary = (n) => +n.toString(2);

// function stringy(size) {
// 	let alternateString = "";
// 	for (let i = 1; i <= size; i++) {
// 		if (i % 2 !== 0) {
// 			alternateString += 1;
// 		}
// 		if (i % 2 === 0) {
// 			alternateString += 0;
// 		}
// 	}
// 	return alternateString;
// }

// function stringy(size) {
// 	let str = "";
// 	for (let i = 1; i <= size; i++) str += i % 2;
// 	return str;
// }

// const stringy = (x) => "".padStart(x, "10");

// const stringy = (size) => "10".repeat(size).slice(0, size);

// const stringy = (size) => Array.from(Array(size), (v, i) => +!(i % 2)).join("");

// const padIt (string,n ) {
//     let i = 0;
//     do {
//         if (i % 2 !==0) str = str + "*";
//         else str = "*" + str;
//         i++;
//     }
//     while (i < n)
//     return str;

// }

// function removeEveryOther(arr) {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i += 2) {
// 		newArr.push(arr[i]);
// 	}
// 	return newArr;
// }

// function removeEveryOther(arr) {
// 	return arr.filter(function (elem, inded) {
// 		return index % 2 === 0;
// 	});
// }

// function removeEveryOther(arr) {
// 	for (var i = 1; i < arr.length; i++) {
// 		arr.splice(i, 1);
// 	}
// 	return arr;
// }

// const removeEveryOther = (arr) => arr.filter((_, i) => !(i % 2));

// const removeEveryOther = (arr) => arr.filter((item, index) => index % 2 === 0);

// function removeEveryOther(arr) {
// 	return arr.filter((_, i) => i % 2 == 0);
// }

const pigIt = (str) => {
	const arr = str.split("");
	return arr.map((w) =>
		w.match(/[A-z]/i) ? `${w.substr(1)}${w.substr(0, 1)}ay` : w
	);
};

function pigIt(string) {
	return string.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

function pigIt(str) {
	return str.replace(/\w+/g, (w) => {
		return w.slice(1) + w[0] + "ay";
	});
}

function pigIt(str) {
	var arrayWord = str.split(" ");
	return arrayWord
		.map(function (word) {
			var firstLetter = word.charAt(0);
			return word.slice(1) + firstLetter + "ay";
		})
		.join(" ");
}
