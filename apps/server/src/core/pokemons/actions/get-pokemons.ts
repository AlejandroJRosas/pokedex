import { Request, Response } from 'express';
import { HTTP_CODE } from '../../../utils/http-code';

export async function getPokemons(_req: Request, res: Response) {
  try {
    const pokemonsResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon-species?limit=5',
      {
        method: 'GET'
      }
    );

    const pokemons = await pokemonsResponse.json();

    const pokemonDetailedResponse = await fetch(pokemons.results[0].url, {
      method: 'GET'
    });

    const pokemonDetailed = await pokemonDetailedResponse.json();

    res
      .status(HTTP_CODE.OK)
      .json({ pokemons, habitat: pokemonDetailed.habitat.name });
  } catch (error) {
    console.log(error);
  }
}
