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
