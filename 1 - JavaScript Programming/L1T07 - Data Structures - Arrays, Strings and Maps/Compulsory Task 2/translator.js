let word = prompt(
  "Enter the English word for a number from 'one' to 'ten' to get the French version. eg 'two' will give you 'deux'"
);
// won't matter if the user enters a mix of upper or lowercase words
word = word.toLocaleLowerCase();

let englishFrenchMap = new Map();

englishFrenchMap.set("one", "une");
englishFrenchMap.set("two", "deux");
englishFrenchMap.set("three", "trois");
englishFrenchMap.set("four", "quatre");
englishFrenchMap.set("five", "cinq");
// Both Words are the same in English & French
englishFrenchMap.set("six", "six");
englishFrenchMap.set("seven", "sept");
englishFrenchMap.set("eight", "huit");
englishFrenchMap.set("nine", "neuf");
englishFrenchMap.set("ten", "dix");

// // Safty check to make sure everything is correctly outputted
// for (let [keyEnglish, valueFrench] of englishFrenchMap) {
//   console.log(`${keyEnglish} = ${valueFrench}`);
// }

// check if key exists in first place or looping is a waste of time
if (englishFrenchMap.has(word)) {
  for (let [keyEnglish, valueFrench] of englishFrenchMap) {
    if (keyEnglish === word) {
      console.log(
        `The French for the English word '${keyEnglish}' is '${valueFrench}'!`
      );
    }
  }
} else {
  console.log("Sorry I don't have a translation for that word.");
}
