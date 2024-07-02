import { ItemCategory } from './categories';

export type Item = {
  id: number;
  name: string;
  description: string;
  cost: number;
  image: string;
  category: ItemCategory;
};
