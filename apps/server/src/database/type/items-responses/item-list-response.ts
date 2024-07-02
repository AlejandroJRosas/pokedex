export type ItemListResponse = {
  count: number;
  next: null;
  previous: null;
  results: Result[];
};

export type Result = {
  name: string;
  url: string;
};
