/* 
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. {}
6. []


Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/

// const a = [];
// if (a) {
//   console.log("This is a truthy value");
// } else {
//   console.log("This is a falsy value");
// }

// Check Falsy

const b = "";
if (!b) {
  console.log("This is falsy");
}

// Check truthy

const x = "";
if (!!x) {
  console.log("This is truthy");
}
