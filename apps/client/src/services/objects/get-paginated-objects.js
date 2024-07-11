export const BASE_URL = 'https://pokedex-backend.playoffside.online/items';

export async function getObjectsPaginated({ page = 1, size = 10 }) {
  try {
    const response = await fetch(
      `${BASE_URL}?currentPage=${page}&itemsPerPage=${size}`
    );

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
