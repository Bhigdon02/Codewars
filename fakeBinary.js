// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    const a = x.split('')
    let newStr = []
    for (let i = 0; i < a.length; i++) {
      if (a[i] < 5) {
        newStr.push(0)
      } else if (a[i] >= 5) {
        newStr.push(1)
      }
    } 
    
    return newStr.join('')
  }