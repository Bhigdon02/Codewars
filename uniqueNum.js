// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
    let newArr = []
    if ((arr[0] !== arr[1]) && (arr[1] === arr[2])) {
      newArr.push(arr[0])
    } else {
      
      for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        continue
      } else {
        newArr.push(arr[i+1])
      }
      }
    
    }
      return newArr[0]
  }