import { Router } from 'express';
import { HTTP_CODE } from '../../shared/utils/http-code';
import pokemonRouter from '../pokemons/pokemons.routes';
import { LoadDatabase } from '../../database/load-database';

export const router = Router();

// Test endpoint
router.get('/ping', (_req, res) => {
  res
    .status(HTTP_CODE.OK)
    .json({ message: 'Backend running - Hello World! 🏍' });
});

router.get('/load', (_req, res) => {
  LoadDatabase();
  res
    .status(HTTP_CODE.OK)
    .json({ message: 'Backend running - Hello World! 🏍' });
});

// Public Routes
router.use('/pokemons', pokemonRouter);
// router.use('/objects', objectsRouter);
