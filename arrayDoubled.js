// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    newArr = []
    x.forEach((e) => newArr.push(e*2))
    return newArr
  }