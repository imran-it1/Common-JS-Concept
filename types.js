// Strongly typed programming language

// int a = 5;
// string b = 'Alim Halim Khalim'
// int[] = [12, 35, 7, 8, 23]

// Js is dynamic types programming language

const a = 5;
const age = [12, 34, 67, 85, 23];
// console.log(typeof age);
// console.log(Array.isArray(age));

let x = 5;
let y = x;

// console.log(x, y);

y = 10;
// console.log(x, y);

let p = { job: "web developer" };
let q = p;

// Object take notun kore redeclare korle problem nai. Seta alada kono object ke refer korbe na.
// q = { job: "front end developer" };
// But onno ekta object ke refer kore amon object jodi tar value ke . notation diye change kore, tahole reference kota object er o value change hoye jabe
q.job = "Front End Developer";
// console.log(p, q);

// Ei same bepar ta Array er jonno o hobe

const array1 = [1, 4, 7, 8, 9];
array2 = array1;
// Both arra1 and array2 value will be change. because arra2 refer arra1
array2.push(100);
//Alada ekta array. Not refer array1
array3 = [3, 5, 76, 8, 9];
// array2 = [3, 5, 76, 8, 9];

console.log(array1, array2);
