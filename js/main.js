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
