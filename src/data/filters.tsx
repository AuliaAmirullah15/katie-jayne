export type Filter = {
  id: string;
  name: string;
  type?: string;
  count?: number;
  children?: Filter[];
};

export const filters: Filter[] = [
  {
    id: "fi0001",
    name: "Collection",
    type: "multioption",
    children: [
      {
        id: "fi0001001",
        name: "Decanters",
        count: 3,
      },
      {
        id: "fi0001002",
        name: "Crystal Glasses",
        count: 5,
      },
      {
        id: "fi0001003",
        name: "Champagne Flutes",
        count: 4,
      },
      {
        id: "fi0001004",
        name: "Whiskey Tumblers",
        count: 6,
      },
      {
        id: "fi0001005",
        name: "Wine Goblets",
        count: 7,
      },
    ],
  },
  {
    id: "fi0002",
    name: "Colour",
    type: "grid",
    children: [
      {
        id: "fi0002001",
        name: "Beige",
        count: 4,
      },
      {
        id: "fi0002002",
        name: "Rose Gold",
        count: 3,
      },
      {
        id: "fi0002003",
        name: "Deep Burgundy",
        count: 5,
      },
      {
        id: "fi0002004",
        name: "Royal Blue",
        count: 2,
      },
      {
        id: "fi0002005",
        name: "Emerald Green",
        count: 3,
      },
      {
        id: "fi0002006",
        name: "Amethyst Purple",
        count: 2,
      },
    ],
  },
  {
    id: "fi0003",
    name: "Exclusives",
    type: "singleoption",
    children: [
      {
        id: "fi0003001",
        name: "Early Access",
        count: 6,
      },
      {
        id: "fi0003002",
        name: "Only at Katie Jayne",
        count: 9,
      },
      {
        id: "fi0003003",
        name: "Members Exclusives",
        count: 1,
      },
    ],
  },
  {
    id: "fi0004",
    name: "Sustainability",
    type: "singleoption",
    children: [
      {
        id: "fi0004001",
        name: "Recycled Materials",
        count: 6,
      },
      {
        id: "fi0004002",
        name: "Renewable Materials",
        count: 9,
      },
    ],
  },
  //   {
  //     id: "fi0005",
  //     name: "Price",
  //     type: "range",
  //   },
];
