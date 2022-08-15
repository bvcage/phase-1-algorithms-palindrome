function isPalindrome(word) {
  const letterAry = word.split('');
  let isPalindrome = true;
  while (letterAry.length > 1 && isPalindrome) {
    const firstLtr = letterAry.shift();
    const lastLtr = letterAry.pop();
    if (firstLtr !== lastLtr) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

/* 
  get first letter and last letter
  compare first letter to last letter
  if same, contine with 2nd letter and 2nd to last letter
  if odd number of letters, ignore final (middle) letter
  if all comparisons are equal, the word is a palindrome
  if any comparison is unequal, the word is not a palindrome
*/

/* This solution assumes that the word is a palindrome until it is proven false.
It looks for a falsey value by comparing the first letter in an array to the last
letter in an array. If they match, it looks at the next letter set. If they do not
match, the word is not a palindrome: the return value is set to false, and the
while loop terminates the search.
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
