type Product = {
  name: string;
  description: string;
  photo: string;
  price: number;
};

type Category = {
  category_name: string;
  menu: Product[];
};

export type MenuPageDataResponse = {
  status: string;
  result: {
    categories: Category[];
  };
};
