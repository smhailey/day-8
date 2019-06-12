//Write a function that takes in a number and returns 'even' if the number is even or 'odd' if it is odd.

//what I am getting: number
function evenOrOdd(num) {
  // if a number is perfectly divisible by 2
  if (num % 2 == 0) {
    return 'even'
  }
  else {
    return 'odd'
  }
  //return num % 2 == 0 ?  'even': 'odd' 
}

//what returns: 'even' || 'odd'
console.log(evenOrOdd(2))
console.log(evenOrOdd(3))
console.log(evenOrOdd(0))
console.log(evenOrOdd(-2))
console.log(evenOrOdd(-1))