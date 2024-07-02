import { Item } from '../shared/types/items';
import { PokemonSpecie } from '../shared/types/pokemon';
import { getAllItems, saveItems } from './scrap/items.scrap';
import {
  getAllPokemonsSpecies,
  savePokemonSpecies
} from './scrap/pokemon-species.scrap';

export async function loadDatabase() {
  try {
    const pokemonSpecies: PokemonSpecie[] = await getAllPokemonsSpecies();
    savePokemonSpecies(pokemonSpecies);
    const items: Item[] = await getAllItems();
    saveItems(items);
  } catch (error) {
    console.error(error);
  }
}

export async function loadPokemons() {
  try {
    const pokemonSpecies: PokemonSpecie[] = await getAllPokemonsSpecies();
    savePokemonSpecies(pokemonSpecies);
  } catch (error) {
    console.error(error);
  }
}

export async function loadItems() {
  try {
    const items: Item[] = await getAllItems();
    saveItems(items);
  } catch (error) {
    console.error(error);
  }
}
