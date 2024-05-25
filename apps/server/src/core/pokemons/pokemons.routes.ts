import { Router } from 'express';
import { getPokemons } from './actions/get-pokemons';

const router = Router();

router.get('/', getPokemons);

export default router;
