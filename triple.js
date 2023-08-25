// always use ===
// equal comparison doesn't work for non-primitive

const first = [45, 54, 98];
const second = first;
if (first === second) {
  //   console.log("values are equal");
} else {
  //   console.log("values are not equal");
}

// type coercion
// type conversion
// type casting

// Comparing Two array by loop

function checkEqualArray(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        return true;
      }
    }
  }
}

const a = [1, 2, 3];
const b = [2, 2, 3, 4];

const result = checkEqualArray(a, b);

if (result) {
  console.log("Two array are equal");
} else {
  console.log("Two array are not equal");
}
