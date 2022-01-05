const isPalindrome = (word) => {
  const cleanWord = word;
  const reverseWord = cleanWord.split('').reverse().join('');
  return reverseWord == cleanWord;
}

/* 
  in: a string
  ou: return a boolean, true or false
  if the string is a palindrome, return true
  else return false
  only needs to deal w/lowercase strings that are all letters
*/

/*
  Did an arrow function, easier to read & keeps the code DRY.
  The split, reverse, & join is easier to read even though it isn't the most well-performing solution
  (especially on small strings). This solution will split a string into an array, then reverse the order
  of an array, & finally join it back together which concatenates the elements of the array as a string.
  If the reversed word matches the original word, it will return true. If not, then it will return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
