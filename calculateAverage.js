// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  
    let sum = 0
    for (let num of array) {
      sum += num
    }
    
    if (array.length >= 1) {
      return sum / array.length
    } else if (array.length < 1) {
      return 0
    }
    
  }