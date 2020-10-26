// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if ( a > b ) {
  return a
  } else {
    return b
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a
  } else if (b > c) {
    return b
  } else {
    return c
  }
}

// Calculate the sum of an array of numbers
 function sumArray(numbers) {
//   numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
// }
let sum = 0;
if (numbers.length==0){
  return 0
}
for (let i = 0; i < numbers.length; i++){
 sum += numbers[i];

}
return sum;

}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  numbers.sort((a, b) => b - a);;
  return numbers[0]


}

// Return the longest string in an array
function longestString(strings) {
  strings.sort((a, b) => b - a);
  return strings[0]
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (!wordsArr.length) {
    return false
    }
      for (let i=0; i< wordsArr.length; i++){
      let counter = 0
      if (!wordsArr.includes(i)){
        for (let j=0; j< wordsArr.length; j++){
        // console.log(i, wordsArr[i], wordsArr[j])
        counter++
        // console.log(counter)
          if (wordsArr[i] == wordsArr[j] && j!=i) {
            // console.log(wordsArr[i],wordsArr[j],"break")
            break; 
          } else if (counter==wordsArr.length){
          // console.log(wordsArr[i],wordsArr[j],"noooo")
          return wordsArr[i]
            }
          }
        }
      }
    }

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
