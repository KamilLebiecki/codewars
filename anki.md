REGEX https://losseff.xyz/katas/015-abbreviate-a-two-word-name/javascript/

function isDivisible(n, x, y) {
return !(n%x||n%y)
}

filter(Boolean)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

[aeiou]/gi
document.querySelector("ul").appendChild(li);

.value
obj spread
tomdailing.com fizzbuzz

function likes(names) {
return {
0: 'no one likes this',
1: `${names[0]} likes this`,
2: `${names[0]} and ${names[1]} like this`,
3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
}[Math.min(4, names.length)]
}

function sumTwoSmallestNumbers(numbers){  
 numbers = numbers.sort(function(a, b){return a - b; });
return numbers[0] + numbers[1];
};

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
