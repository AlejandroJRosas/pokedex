export const BASE_URL = 'https://pokedex-backend.playoffside.online/pokemons';

export async function getDetailedPokemon(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      throw new Error('Error while fetching pokemons');
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

console.log('Hola');
