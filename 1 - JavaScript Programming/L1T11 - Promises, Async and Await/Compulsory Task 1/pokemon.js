fetch("https://pokeapi.co/api/v2/pokemon/squirtle/")
  // Used the Mozilla Developer Network to understand .json method
  // https://developer.mozilla.org/en-US/docs/Web/API/Response/json
  // parse JSON to JavaScript object
  // res is short for "response"
  .then((res) => res.json())

  .then(
    // resolved outcome, dig through the result to get the details we want
    function (result) {
      console.log(
        `Name: ${result.name} - Weight: ${result.weight} - Abilities: ${result.abilities[0].ability.name} and ${result.abilities[1].ability.name}`
      );
    }
  )
  .catch((error) => {
    console.log(error);
  });
