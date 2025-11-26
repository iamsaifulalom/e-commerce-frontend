// types.ts
export type OrderProduct = {
  name: string;
  image: string;
};

export type Order = {
  id: string;
  products: OrderProduct[];
  date: string;
  customer: string;
  sale: number;
  status: string;
};
