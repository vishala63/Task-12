//1. Extract first five letters from a string

let str1 = ' gfuh ieiuei ';
let result1 = str1.trim().substring(0, 5);
console.log(result1);

//2. Get the length of a string and make it uppercase

let str2 = 'hduej dij';
let length = str2.length;
let upper = str2.toUpperCase();
console.log('Length:', length);
console.log('Uppercase:', upper);

//3. Take a string, make it lowercase and trim it

let str3 = ' biji jdo ';
let result3 = str3.trim().toLowerCase();
console.log(result3);

//4. Replace a specified word in a string

let str4 = 'JavaScript is awesome';
let result4 = str4.replace('awesome', 'fun');
console.log(result4);


//5. Random statement in implicit coercion

console.log(89 + 'hello' + 90 / 9);

