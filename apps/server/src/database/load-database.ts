import fs from 'fs';
import { PokemonSpecieListResponse } from './type/pokemon-specie-list-response';
import { PokemonSpecieResponse } from './type/pokemon-specie-response';
import { PokemonDataResponse } from './type/pokemon-response';
// import { EvolutionChainResponse } from './type/evolution-chain-response';
import { PokemonSpecie } from 'shared/types/pokemon';
import { PokemonColor } from 'shared/types/pokemon/color';
import { PokemonHabitat } from 'shared/types/pokemon/habitat';
import { PokemonType } from 'shared/types/pokemon/pokemon-type';

async function getAllPokemonsSpecies(): Promise<PokemonSpecie[]> {
  try {
    const pokemonSpecies: PokemonSpecie[] = [];

    const pokemonSpeciesListResponse: PokemonSpecieListResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon-species?limit=1025'
    ).then((res) => res.json());

    console.log('Pokemon Species List Response:', pokemonSpeciesListResponse);

    for (let i = 0; i < pokemonSpeciesListResponse.results.length; i++) {
      console.log(i + 1, '/', pokemonSpeciesListResponse.results.length);
      const pokemonSpecieData: PokemonSpecieResponse = await fetch(
        pokemonSpeciesListResponse.results[i].url
      ).then((res) => res.json());

      const pokemonData: PokemonDataResponse = await fetch(
        pokemonSpecieData.varieties[0].pokemon.url
      ).then((res) => res.json());

      // const evolutionChainData: EvolutionChainResponse = await fetch(
      //   pokemonSpecieData.evolution_chain.url
      // ).then((res) => res.json());

      pokemonSpecies.push({
        id: i + 1,
        color: pokemonSpecieData.color.name as PokemonColor,
        name: pokemonSpecieData.name,
        height: pokemonData.height,
        weight: pokemonData.weight,
        habitat: pokemonSpecieData.habitat?.name as PokemonHabitat,
        sprites: [
          pokemonData.sprites.front_default,
          pokemonData.sprites.back_default
        ],
        type: [
          pokemonData.types[0].type.name as PokemonType,
          pokemonData.types.length > 1
            ? (pokemonData.types[1].type.name as PokemonType)
            : undefined
        ],
        image: pokemonData.sprites.front_default,
        baseStats: {
          hp:
            pokemonData.stats.find((item) => item.stat.name === 'hp')
              ?.base_stat ?? 0,
          attack:
            pokemonData.stats.find((item) => item.stat.name === 'attack')
              ?.base_stat ?? 0,
          defense: pokemonData.stats.find(
            (item) => item.stat.name === 'defense'
          )?.base_stat,
          specialAttack:
            pokemonData.stats.find(
              (item) => item.stat.name === 'special-attack'
            )?.base_stat ?? 0,
          specialDefense:
            pokemonData.stats.find(
              (item) => item.stat.name === 'special-defense'
            )?.base_stat ?? 0,
          speed:
            pokemonData.stats.find((item) => item.stat.name === 'speed')
              ?.base_stat ?? 0,
          accuracy:
            pokemonData.stats.find((item) => item.stat.name === 'accuracy')
              ?.base_stat ?? 0,
          evasion:
            pokemonData.stats.find((item) => item.stat.name === 'evasion')
              ?.base_stat ?? 0
        },
        cry: pokemonData.cries.latest,
        description: pokemonSpecieData.flavor_text_entries[0].flavor_text
      });
    }

    return pokemonSpecies;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function savePokemonSpecies(PokemonSpecies: PokemonSpecie[]) {
  try {
    fs.writeFile(
      './src/database/pokemon-species.json',
      JSON.stringify(PokemonSpecies),
      (err) => {
        if (err) throw err;
        console.log('Saved!');
      }
    );
    console.log('Saved!');
  } catch (err) {
    console.error('Error saving file:', err);
  }
}

export async function LoadDatabase() {
  try {
    const PokemonSpecies: PokemonSpecie[] = await getAllPokemonsSpecies();
    savePokemonSpecies(PokemonSpecies);
  } catch (error) {
    console.error(error);
  }
}
