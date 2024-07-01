import { Router } from 'express';
import { getPokemons } from './actions/get-pokemons';
import { getPokemonDetailed } from './actions/get-pokemon-detailed';

const router = Router();

router.get('/', getPokemons);
router.get('/:pokemonId', getPokemonDetailed);

export default router;
