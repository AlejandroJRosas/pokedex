import { PokemonColor } from './color';
import { PokemonHabitat } from './habitat';
import { PokemonType } from './pokemon-type';
import { BaseStats } from './base-stats';

export type PokemonSpecie = {
  id: number;
  name: string;
  description: string;
  image: string;
  type: [PokemonType, PokemonType?];
  color: PokemonColor;
  habitat: PokemonHabitat | null;
  weight: number;
  height: number;
  cry: string;
  baseStats: BaseStats;
  sprites: [string, string];
};

export type PokemonMinimalInfo = Pick<
  PokemonSpecie,
  'id' | 'name' | 'image' | 'type'
>;
