export type MenuItem = {
  label: string;
  children: string[];
};

export type Menu = {
  label: string;
  children: MenuItem[];
};

export const menuItems: Menu[] = [
  {
    label: "Collections",
    children: [
      {
        label: "Magic 4K",
        children: [
          "Decanters",
          "Glasses",
          "Squares",
          "Wine Glasses",
          "Champagne Flutes",
          "Carafes",
        ],
      },
      {
        label: "Disney",
        children: ["Alpacas", "Goblets", "Tumblers"],
      },
      {
        label: "Luxury & Posh",
        children: [
          "Gold-Plated",
          "Crystal",
          "Hand-Blown",
          "Engraved",
          "Limited Edition",
          "Diamond Etched",
          "Exclusive Art Pieces",
          "Collector’s Choice",
        ],
      },
      {
        label: "Casual",
        children: [
          "Everyday Glasses",
          "Beer Mugs",
          "Coffee Mugs",
          "Reusable Cups",
          "Stainless Steel Cups",
        ],
      },
      {
        label: "Special Edition",
        children: ["Plastic Tumblers", "Mason Jars"],
      },
    ],
  },
  {
    label: "New Arrivals",
    children: [
      {
        label: "Spring Collection",
        children: [
          "Pastel Mugs",
          "Floral Plates",
          "Elegant Teapots",
          "Vibrant Glasses",
          "Cherry Blossom Bowls",
          "Sunflower Pitchers",
          "Spring-Inspired Tumblers",
        ],
      },
      {
        label: "Summer Specials",
        children: [
          "Iced Tea Glasses",
          "Beach Tumblers",
          "Cocktail Shakers",
          "Sunglasses",
          "Outdoor Picnic Sets",
          "Seaside Goblets",
          "Sunshine-Themed Glasses",
        ],
      },
      {
        label: "Holiday Collection",
        children: [
          "Christmas Mugs",
          "Halloween Goblets",
          "Thanksgiving Platters",
          "New Year Champagne Flutes",
          "Easter Egg Cups",
          "Valentine’s Heart Glasses",
        ],
      },
    ],
  },
  {
    label: "Sales",
    children: [
      {
        label: "Clearance Items",
        children: [
          "Discounted Glasses",
          "Last-Chance Deals",
          "Outlet Specials",
          "Warehouse Clearance",
          "Overstock Sales",
          "Damaged Box Discounts",
        ],
      },
      {
        label: "Buy One Get One",
        children: [
          "Mugs",
          "Wine Glasses",
          "Coasters",
          "Shot Glasses",
          "Limited Edition Sets",
          "Holiday Bundles",
          "Exclusive Pair Deals",
        ],
      },
      {
        label: "Limited Time Offers",
        children: [
          "Holiday Discounts",
          "Exclusive Bundles",
          "Gift Sets",
          "Weekend Specials",
          "Flash Sales",
          "Seasonal Promotions",
        ],
      },
    ],
  },
];
