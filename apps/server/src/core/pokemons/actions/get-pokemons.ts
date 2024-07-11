import { Request, Response } from 'express';
import PokemonDB from '../../../database/pokemon-db.json';
import { PokemonSpecie } from '../../../shared/types/pokemon';
import { HTTP_CODE } from '../../../shared/utils/http-code';
import {
  PaginateSettings,
  paginatedItemsResponse
} from '../../../shared/types/dto/paginated-response';
import { PokemonType } from '../../../shared/types/pokemon/pokemon-type';

export function getPokemons(req: Request, res: Response) {
  const {
    currentPage = 1,
    itemsPerPage = 5,
    name,
    type,
    weight,
    height
  } = req.query;

  let offset = (Number(currentPage) - 1) * Number(itemsPerPage);

  if (Number(currentPage) < 1) {
    offset = 0;
  }

  let db = PokemonDB as PokemonSpecie[];

  if (name) {
    db = db.filter((pokemon) =>
      pokemon.name.toLowerCase().includes((name as string).toLowerCase())
    );
  }

  if (type && typeof type === 'string') {
    const typeList = type.split(',');

    if (typeList.length === 1) {
      db = db.filter((pokemon) =>
        pokemon.type.some((pokemonType) =>
          typeList.includes(pokemonType as PokemonType)
        )
      );
    }

    if (typeList.length === 2) {
      db = db.filter((pokemon) =>
        pokemon.type.every((pokemonType) =>
          typeList.includes(pokemonType as PokemonType)
        )
      );
    }
  }

  if (weight) {
    db = db.filter((pokemon) => pokemon.weight === Number(weight));
  }

  if (height) {
    db = db.filter((pokemon) => pokemon.height === Number(height));
  }

  const pokemonsInPage = db.slice(offset, offset + Number(itemsPerPage));

  const pagination: PaginateSettings = {
    currentPage: Number(currentPage),
    itemsPerPage: Number(itemsPerPage),
    totalItems: db.length
  };

  return paginatedItemsResponse(res, HTTP_CODE.OK, pagination, pokemonsInPage);
}
