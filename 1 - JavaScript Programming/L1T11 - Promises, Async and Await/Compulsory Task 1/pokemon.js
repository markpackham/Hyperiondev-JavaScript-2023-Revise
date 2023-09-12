const squirtle = [];

let pokemonPromise = new Promise(function (resolve, reject) {
  fetch("https://pokeapi.co/api/v2/pokemon/squirtle/")
    // grab JSON data
    .then((res) => res.json())

    .then((result) => {
      items = result;
      // all goes well so resolve
      resolve(items);
    }),
    // fire off an error if something went wrong
    (error) => {
      reject(error);
    };
});

pokemonPromise.then(
  // resolved outcome
  function (result) {
    console.log(
      `Name: ${result.name} Weight: ${result.weight}\n Abilities: ${result.abilities[0].ability.name} and ${result.abilities[1].ability.name}`
    );
  },
  // rejected outcome
  function (error) {
    console.log(error);
  }
);
