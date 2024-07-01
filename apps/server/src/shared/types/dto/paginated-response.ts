import { Response } from 'express';

export const numberOfPages = (
  totalItems: number,
  itemsPerPage: number
): number => {
  if (totalItems === 0 || itemsPerPage === 0) return 0;

  return Math.ceil(totalItems / itemsPerPage);
};

export type PaginateSettings = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
};

export const paginatedItemsResponse = <T>(
  res: Response,
  status: number,
  paginate: PaginateSettings,
  items: T[]
): Response => {
  const totalPages = numberOfPages(paginate.totalItems, paginate.itemsPerPage);
  return res.status(status).json({
    paginate: {
      ...paginate,
      totalPages
    },
    items
  });
};

// export interface PaginationData {
//   currentPage: number;
//   itemsPerPage: number;
//   totalItems: number;
//   totalPages: number;
// }

// export interface PaginatedResponse<T> extends PaginationData {
//   items: T[];
// }

// export type PaginationBody = {
//   currentPage?: number;
//   itemsPerPage?: number;
// };
