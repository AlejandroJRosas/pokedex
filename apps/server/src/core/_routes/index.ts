import { Router } from 'express';
import { HTTP_CODE } from '../../shared/utils/http-code';
import {
  // loadDatabase,
  loadItems,
  loadPokemons
} from '../../database/load-database';

import pokemonsRouter from '../pokemons/pokemons.routes';
import itemsRouter from '../items/items.routes';

export const router = Router();

// Test endpoint
router.get('/ping', (_req, res) => {
  res
    .status(HTTP_CODE.OK)
    .json({ message: 'Backend running - Hello World! 🏍' });
});

// router.get('/load', (_req, res) => {
//   loadDatabase();
//   res.status(HTTP_CODE.OK).json({ message: 'Web Scrap Started!' });
// });

router.get('/load-pokemons', (_req, res) => {
  loadPokemons();
  res.status(HTTP_CODE.OK).json({ message: 'Web Scrap Started!' });
});

router.get('/load-items', (_req, res) => {
  loadItems();
  res.status(HTTP_CODE.OK).json({ message: 'Web Scrap Started!' });
});

// Public Routes
router.use('/pokemons', pokemonsRouter);
router.use('/items', itemsRouter);
