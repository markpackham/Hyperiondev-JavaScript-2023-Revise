let word = prompt("Enter a word");

let reverseWord = "";

// String: length taken from Mozzila docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
// figure out how long we have to loop for
wordLength = word.length;

// make sure we don't go enter the realm of negative numbers of the loop will be infinite
while (wordLength > 0) {
  // move backwards through the word and reassmble the letters
  // strings are like arrays, they start at zero so to get to the end of one we use the length and -1
  reverseWord += word[wordLength - 1];
  wordLength--;
}

console.log(`Word is ${word} - Reverse word is ${reverseWord}`);

if (word === reverseWord) {
  console.log(`${reverseWord} is a palindrome`);
} else {
  console.log(`${word} is not palindrome`);
}
