let guest = "";
let guestList = [];
let finalList = "";

for (let i = 0; i < 11; i++) {
  guest = prompt("Add a name to the dinner party guest list!");
  // each name added to the array
  guestList.push(guest);

  if (i === 10) {
    let replace_Guest_YN = prompt(
      "You can only add a maximum of 10 people to your guest list. Would you like to replace someone on the list with the last person you entered? yes/no: "
    ).toLocaleLowerCase();

    if (replace_Guest_YN === "yes") {
      let replaceGuest = prompt(
        "Please enter the name of the person you would like to replace with your 11th entry."
      );

      // use indexOf to find where to replace guest within array
      let nameIndex = guestList.indexOf(replaceGuest);
      // make sure I am replacing the correct person
      console.log(
        `Index of '${nameIndex}' known as '${replaceGuest}' is being replaced by ${guestList[10]}`
      );
      // replace selected guest with 11th guest
      guestList[nameIndex] = guestList[10];
      // get rid of 11th entry since they now take up the replaced person's guest slot
      guestList.pop();
      break;

      // "no" is the default
    } else {
      // get rid of unwanted 11th guest
      guestList.pop();
      break;
    }
  }
}

for (let value of guestList) {
  finalList += value + ",";
}

// "How to remove last character from string in JavaScript" learned from byby.dev
// https://byby.dev/js-remove-last-char#:~:text=The%20slice(0%2C%20%2D1,to%20get%20the%20same%20result.
// chop off final ","
finalList = finalList.slice(0, -1);

console.log(finalList);
