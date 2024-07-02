import fs from 'fs';
import { Item } from '../../shared/types/items';
import { ItemListResponse } from '../type/items-responses/item-list-response';
import { ItemResponse } from '../type/items-responses/items-response';
import { ItemCategory } from '../../shared/types/items/categories';

export async function getAllItems(): Promise<Item[]> {
  try {
    const items: Item[] = [];

    const itemsListResponse: ItemListResponse = await fetch(
      'https://pokeapi.co/api/v2/item?limit=9999'
    ).then((res) => res.json());

    for (let i = 0; i < itemsListResponse.results.length; i++) {
      const itemData: ItemResponse = await fetch(
        itemsListResponse.results[i].url
      ).then((res) => res.json());

      console.log(i + 1, '/', itemsListResponse.results.length);

      if (itemData.sprites.default) {
        items.push({
          id: itemData.id,
          name:
            itemData.names.find((name) => name.language.name === 'es')?.name ??
            itemData.name,
          description:
            itemData.flavor_text_entries.length > 0
              ? itemData.flavor_text_entries.find(
                  (item) => item.language.name === 'es'
                )?.text ?? itemData.flavor_text_entries[0].text
              : 'Sin descripción',
          cost: itemData.cost,
          image: itemData.sprites.default,
          category: itemData.category.name as ItemCategory
        });
      }
    }

    return items;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function saveItems(items: Item[]) {
  try {
    fs.writeFile('./src/database/items.json', JSON.stringify(items), (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
    console.log('Saved!');
  } catch (err) {
    console.error('Error saving file:', err);
  }
}
