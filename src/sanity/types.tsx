export type Homepage = {
  url: string;
  title: string;
  image_url: string;
  headlineTitle: boolean;
  headlineSubtitle: boolean;
};

export type Product = {
  title: string;
  image_url: string;
  _id?: string;
  url?: string;
  position?: number;
};

export interface Collection {
  title: string;
  _id: string;
  slug: {
    current: string;
  };
  image_url: string;
  collections?: Collection[];
  products: Product[];
}

export type Calendar = {
  _id: string;
  image_url: string;
  title: string;
  slug: {
    current: string;
  };
  archived: boolean;
};

export interface Navigation {
  _id: string;
  title: string;
  navId: string;
  items: [
    {
      _key: string;
      text: string;
      navigationItemUrl: {
        collectionLink?: {
          _id: string;
          title: string;
          slug: { current: string };
        }[];
        internalUrl?: string;
        externalUrl?: string;
      };
    },
  ];
}

export type Project = {
  title: string;
  image_url: string;
  index?: number;
};
