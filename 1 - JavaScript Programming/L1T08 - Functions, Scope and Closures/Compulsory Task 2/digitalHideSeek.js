function hide(location) {
  // local variable
  let hideLocation = location;

  // return the hidden location when called
  function seek() {
    // closure around hideLocation
    return hideLocation;
  }
  return seek;
}

const startGame = hide("mountain");
// returns mountain
console.log(startGame());

// results in Uncaught ReferenceError: hideLocation is not defined
// there's no way I can access the local variable hideLocation without getting to it via the function
console.log(hideLocation);
