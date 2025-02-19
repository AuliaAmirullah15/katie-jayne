export type Filter = {
  id: string;
  name: string;
  type?: string;
  count?: number;
  colour?: string;
  textColour?: string;
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
        colour: "bg-yellow-200",
        textColour: "text-black",
      },
      {
        id: "fi0002002",
        name: "Rose Gold",
        count: 3,
        colour: "bg-rose-300",
        textColour: "text-black",
      },
      {
        id: "fi0002003",
        name: "Deep Burgundy",
        count: 5,
        colour: "bg-red-900",
        textColour: "text-white",
      },
      {
        id: "fi0002004",
        name: "Royal Blue",
        count: 2,
        colour: "bg-blue-800",
        textColour: "text-white",
      },
      {
        id: "fi0002005",
        name: "Emerald Green",
        count: 3,
        colour: "bg-green-700",
        textColour: "text-white",
      },
      {
        id: "fi0002006",
        name: "Amethyst Purple",
        count: 2,
        colour: "bg-purple-600",
        textColour: "text-white",
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
  {
    id: "fi0005",
    name: "Limited Time Offers",
    type: "multioption",
    children: [
      {
        id: "fi000501",
        name: "Holiday Discounts",
        count: 5,
      },
      {
        id: "fi000502",
        name: "Exclusive Bundles",
        count: 10,
      },
      {
        id: "fi000503",
        name: "Gift Sets",
        count: 2,
      },
      {
        id: "fi000504",
        name: "Weekend Specials",
        count: 5,
      },
      {
        id: "fi000505",
        name: "Flash Sales",
        count: 6,
      },
      {
        id: "fi000506",
        name: "Seasonal Promotions",
        count: 9,
      },
    ],
  },
  {
    id: "fi0006",
    name: "Price",
    type: "range",
  },
];

export const sorts = [
  {
    id: "price_ascending",
    name: "Price (Low - High)",
  },
  {
    id: "newest",
    name: "Newest",
  },
  {
    id: "top_sellers",
    name: "Top Sellers",
  },
  {
    id: "price_descending",
    name: "Price (High - Low)",
  },
];
