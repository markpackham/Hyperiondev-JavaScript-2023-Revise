function hide(location) {
  // local variable
  let hideLocation = location;

  // return the hidden location when called
  function seek() {
    return hideLocation;
  }
  return seek;
}

let startGame = hide("swamp");
console.log(startGame);

// results in digitalHideSeek.js:14 Uncaught ReferenceError: hideLocation is not defined
// there's no way I can access the local variable hideLocation without getting to it via the function
console.log(hideLocation);
