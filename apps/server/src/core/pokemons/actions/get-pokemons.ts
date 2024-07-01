import { Request, Response } from 'express';
import PokemonDB from '../../../database/pokemon-db.json';
import { PokemonSpecie } from '../../../shared/types/pokemon';
import { HTTP_CODE } from '../../../shared/utils/http-code';
import {
  PaginateSettings,
  paginatedItemsResponse
} from '../../../shared/types/dto/paginated-response';

export function getPokemons(req: Request, res: Response) {
  const { currentPage = 1, itemsPerPage = 5 } = req.query;

  let offset = (Number(currentPage) - 1) * Number(itemsPerPage);

  if (Number(currentPage) < 1) {
    offset = 0;
  }

  const db = PokemonDB as PokemonSpecie[];

  const pokemonsInPage = db.slice(offset, offset + Number(itemsPerPage));

  const pagination: PaginateSettings = {
    currentPage: Number(currentPage),
    itemsPerPage: Number(itemsPerPage),
    totalItems: db.length
  };

  return paginatedItemsResponse(res, HTTP_CODE.OK, pagination, pokemonsInPage);
}
