import { Request, Response } from 'express';
import { HTTP_CODE } from 'shared/utils/http-code';
import PokemonDB from 'database/pokemon-db.json';
import { PokemonSpecie } from 'shared/types/pokemon';

export function getPokemonDetailed(req: Request, res: Response) {
  const { pokemonId } = req.params;

  const db = PokemonDB as PokemonSpecie[];

  const pokemon = db.find((p) => p.id === Number(pokemonId));

  return res.status(HTTP_CODE.OK).json(pokemon);
}
