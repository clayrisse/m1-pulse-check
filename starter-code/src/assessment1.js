// Write a function that returns the product of 2 numbers
function product(x, y) {
  return typeof y==='number' && typeof x==='number' ? x*y : false
}

// Write a function that returns whether a given number is even
function isEven(num) {
return num%2==0 && true
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
return a > b ? a : b
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (typeof a!=='number' || typeof b!=='number' || typeof c!=='number' ){
 return false
  }
  return  a > b && a > c ? a : b > c ? b : c
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (!Array.isArray(numbers) ){
    return false
  }
  let gg = numbers.filter(x => typeof x=='number')
   if (gg.length!=numbers.length) {
     return false
   }
   return numbers.length ? numbers.reduce((acc,ele)=>acc+ele) : 0   
 
 }

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (!Array.isArray(numbers) || numbers.length==0 ){
    return false
  }
return numbers.sort((a,b)=>b-a)[0]
}

// Return the longest string in an array
function longestString(strings) {
  if (!Array.isArray(strings) || strings.length == 0){
    return false
  }
  let gg = strings.filter(x => typeof x=='string')
  return gg.sort((a,b)=>b.length-a.length)[0]
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return !Array.isArray(wordsArr)
    ? false
    : wordsArr.includes(word) ? true : false

}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (!wordsArr.length || !Array.isArray(wordsArr)) {
  return false
  }
    for (let i=0; i< wordsArr.length; i++){
    let counter = 0
    if (!wordsArr.includes(i)){
      for (let j=0; j< wordsArr.length; j++){
      // console.log(i, wordsArr[i], wordsArr[j])
      counter++
      // console.log(counter)
        if (wordsArr[i] == wordsArr[j] && j!=i ) {
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

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (!typeof personObj === 'object' || Array.isArray(personObj) || personObj.firstName === undefined || personObj.lastName === undefined) {
    return false
  } 
  return personObj.firstName + " " + personObj.lastName
  }

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  return !Array.isArray(matrix) 
    ? false
    : maxOfArray(matrix.map(ele => maxOfArray(ele)))
}