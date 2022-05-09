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

function findShort(s){
return Math.min(...s.split(" ").map (s => s.length));
}

reducing from Leon returning video

function greet(lang) {
return langs[lang]||langs['english'];
}

var langs = {
'english': 'Welcome',
'czech': 'Vitejte',
'danish': 'Velkomst',
'dutch': 'Welkom',
'estonian': 'Tere tulemast',
'finnish': 'Tervetuloa',
'flemish': 'Welgekomen',
'french': 'Bienvenue',
'german': 'Willkommen',
'irish': 'Failte',
'italian': 'Benvenuto',
'latvian': 'Gaidits',
'lithuanian': 'Laukiamas',
'polish': 'Witamy',
'spanish': 'Bienvenido',
'swedish': 'Valkommen',
'welsh': 'Croeso'
};

// Filling an array (part 1)
//
// const arr = (N) => {
// let arr2 = [];
// for (let i = 0; i < N; i++) {
// arr2.push(i);
// }
// return arr2;
// };

const arr = n => Array.from({length: n}, (\_, i) => i);

aria hidden
align-items vs align-content
labels forms

inner join vs join
+a = Number(a)
sql commands

encapsulation
abstraction

function padIt(str,n){
let i = 0;
do {  
 if (i % 2 !== 0) str = str + '_';
else str = '_' + str;
i++;
}
while (i < n)
return str
}
