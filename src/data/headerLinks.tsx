import help from "@/assets/images/svg/help.svg";
import bag from "@/assets/images/svg/bag.svg";
import orders from "@/assets/images/svg/orders.svg";
import store from "@/assets/images/svg/store.svg";

export type MenuItem = {
  label: string;
  children: string[];
};

export type Menu = {
  label: string;
  style?: string;
  children: MenuItem[];
};

export const menuItems: Menu[] = [
  {
    label: "Collections",
    style: "font-semibold",
    children: [
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
        children: ["Goblets", "Tumblers"],
      },
    ],
  },
  {
    label: "New Arrivals",
    style: "font-semibold",
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
          "Outdoor Picnic Sets",
          "Seaside Goblets",
          "Sunshine-Themed Glasses",
        ],
      },
      {
        label: "Cosy Autumn",
        children: ["Leafy Glasses", "Mushroom Goblets"],
      },
      {
        label: "Holiday Collection",
        children: [
          "Christmas Mugs",
          "Halloween Goblets",
          "New Year Champagne Flutes",
          "Easter Egg Cups",
          "Valentine’s Heart Glasses",
        ],
      },
    ],
  },
  {
    label: "Luxury Glassware",
    children: [
      {
        label: "Lead-Free Crystal",
        children: ["Elegant Designs", "Handmade", "Eco-Friendly Options"],
      },
      {
        label: "Cut Crystal",
        children: ["Faceted Patterns", "Classic Styles", "Vintage Pieces"],
      },
      {
        label: "Etched Crystal",
        children: ["Floral Etching", "Geometric Designs", "Custom Patterns"],
      },
      {
        label: "Bespoke Crystal",
        children: [
          "Custom Orders",
          "Personalized Etching",
          "Exclusive Collections",
        ],
      },
    ],
  },
  {
    label: "Designer's",
    children: [
      {
        label: "Brand-Name Glasses",
        children: ["Luxury Brands", "Top Designers", "Signature Pieces"],
      },
      {
        label: "Limited-Edition Designs",
        children: [
          "Exclusive Collections",
          "Rare Releases",
          "High-End Designs",
        ],
      },
      {
        label: "Celebrity-Inspired Styles",
        children: [
          "Hollywood Glamour",
          "Red Carpet Looks",
          "Celebrity Favorites",
        ],
      },
      {
        label: "Signature Collections",
        children: [
          "Unique Designs",
          "Custom Glasses",
          "High-Quality Materials",
        ],
      },
    ],
  },
  {
    label: "Sales",
    style: "font-semibold",
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

export const coreLinks = [
  {
    label: "Orders",
    icon: orders,
  },
  { label: "Help", icon: help },
  { label: "Bag", icon: bag },
  { label: "Find a Store", icon: store },
];
