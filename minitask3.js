const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";

const pokemon = async () => {
  try {
    const poke = await fetch(url);
    if (!poke.ok) {
      throw new Error(`${poke.status}: ${poke.statusText}`);
    }

    const data = await poke.json();
    // console.log(data);

    const results = data.results.map(async (item) => {
      const res = await fetch(item.url);
      return await res.json();
    });

    const fetch30 = await Promise.all(results);

    // const sprites = fetch30.map((item) => {
    //    item.sprites.front_shiny;
    // });
    // console.log(sprites);

    // const name = fetch30.map((item) => {
    //    item.name;
    // });
    // console.log(name);

    // const types = fetch30.map((item) => {
    //   return item.types.map((t) => {
    //     return t.type.name;
    //   });
    // });
    // console.log(types);

    const dataPoke = fetch30.map((item) => {
      const image = item.sprites.front_shiny;
      const name = item.name;
      const types = item.types.map((t) => t.type.name);

      const allDatas = {
        image,
        name,
        types,
      };
      return allDatas;
    });
    return dataPoke;
  } catch (error) {
    console.log(error);
  }
};

pokemon();

const renderPokemon = async () => {
  const dataPoke = await pokemon();

  const container = document.querySelector("#image");

  dataPoke.map((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img src='${item.image}' alt='${item.name}' />
    <h3>${item.name}</h3>
    <p>${item.types.join(", ")}</p>`;

    container.appendChild(card);
  });
};

renderPokemon();
