import { Request, Response } from 'express';
import ItemDB from '../../../database/items.json';
import { HTTP_CODE } from '../../../shared/utils/http-code';
import {
  PaginateSettings,
  paginatedItemsResponse
} from '../../../shared/types/dto/paginated-response';
import { Item } from '../../../shared/types/items';

export function getItems(req: Request, res: Response) {
  const { currentPage = 1, itemsPerPage = 5, category } = req.query;

  let offset = (Number(currentPage) - 1) * Number(itemsPerPage);

  if (Number(currentPage) < 1) {
    offset = 0;
  }

  let db = ItemDB as Item[];

  if (category) {
    db = db.filter((item) => {
      if (category) {
        return item.category === category;
      }
      return true;
    });
  }

  const itemsInPage = db.slice(offset, offset + Number(itemsPerPage));

  const pagination: PaginateSettings = {
    currentPage: Number(currentPage),
    itemsPerPage: Number(itemsPerPage),
    totalItems: db.length
  };

  return paginatedItemsResponse(res, HTTP_CODE.OK, pagination, itemsInPage);
}
