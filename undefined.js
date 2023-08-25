/**
 * 8 Way to get undefined
 *  ***
 * 1. =====> Variable that is not initialized <======
 * 2. =====> function with no return <======
 * 3. =====> parameters > arguments <======
 * 4. =====> function with return *right sev* (right clear) <=====
 * 5. =====> Vuture object property <=====
 * 6. =====> Vuture array element <======
 * 7. =====> *delete = access* FOR array element + object property *** Array and Object Hole *** <=====
 * 8. =====> Explicitly Undefined initialize <=====
 */

// 1
// let first;
// console.log(first);

//2
function add(a, b) {
  const sum = a + b;
}
const result = add(3, 6);
// console.log(result);

//3
function sum(a, b, c, d) {
  const add = a + b + c + d;
  console.log(a, b, c, d);
}

// sum(2, 4, 5);

//4

function second(a, b) {
  const sum = a + b;
  return;
}

// const result2 = second(2, 5);
const result2 = second(2, 5);
// console.log(result2);

const fifth = { id: 2, name: "ponchom", age: 40 };
// console.log(fifth.salary);

const a = [1, 5, 6, 8, 9, 0];

// Not recomanded to do that. Insted use splice()
delete a[3];

// console.log(a);
// console.log(a[3]);
// console.log(a[7]);

const x = undefined;
// console.log(x);

const student = {
  id: 23,
  name: "abul",
  class: 12,
};

delete student.name;

// console.log(student.name);

// Interesting Things

// console.log(typeof undefined);
console.log(typeof null);
