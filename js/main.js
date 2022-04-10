// Reversed Strings
// const solution = (str) => str.split("").reverse().join("");

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
