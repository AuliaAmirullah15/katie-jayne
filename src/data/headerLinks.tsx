import help from "@/assets/images/svg/help.svg";
import bag from "@/assets/images/svg/bag.svg";
import orders from "@/assets/images/svg/orders.svg";
import store from "@/assets/images/svg/store.svg";

export type Menu = {
  label: string;
  style?: string;
  children?: Menu[];
};

export const menuItems: Menu[] = [
  {
    label: "Collections",
    style: "font-semibold",
    children: [
      {
        label: "Luxury & Posh",
        children: [
          { label: "Gold-Plated" },
          { label: "Crystal" },
          { label: "Hand-Blown" },
          { label: "Engraved" },
          { label: "Limited Edition" },
          { label: "Diamond Etched" },
          { label: "Exclusive Art Pieces" },
          { label: "Collector’s Choice" },
        ],
      },
      {
        label: "Casual",
        children: [
          { label: "Everyday Glasses" },
          { label: "Beer Mugs" },
          { label: "Coffee Mugs" },
          { label: "Reusable Cups" },
          { label: "Stainless Steel Cups" },
        ],
      },
      {
        label: "Special Edition",
        children: [{ label: "Plastic Tumblers" }, { label: "Mason Jars" }],
      },
      {
        label: "Magic 4K",
        children: [
          { label: "Decanters" },
          { label: "Glasses" },
          { label: "Squares" },
          { label: "Wine Glasses" },
          { label: "Champagne Flutes" },
          { label: "Carafes" },
        ],
      },
      {
        label: "Disney",
        children: [{ label: "Goblets" }, { label: "Tumblers" }],
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
          { label: "Pastel Mugs" },
          { label: "Floral Plates" },
          { label: "Elegant Teapots" },
          { label: "Vibrant Glasses" },
          { label: "Cherry Blossom Bowls" },
          { label: "Sunflower Pitchers" },
          { label: "Spring-Inspired Tumblers" },
        ],
      },
      {
        label: "Summer Specials",
        children: [
          { label: "Iced Tea Glasses" },
          { label: "Beach Tumblers" },
          { label: "Outdoor Picnic Sets" },
          { label: "Seaside Goblets" },
          { label: "Sunshine-Themed Glasses" },
        ],
      },
      {
        label: "Cosy Autumn",
        children: [{ label: "Leafy Glasses" }, { label: "Mushroom Goblets" }],
      },
      {
        label: "Holiday Collection",
        children: [
          { label: "Christmas Mugs" },
          { label: "Halloween Goblets" },
          { label: "New Year Champagne Flutes" },
          { label: "Easter Egg Cups" },
          { label: "Valentine’s Heart Glasses" },
        ],
      },
    ],
  },
  {
    label: "Luxury Glassware",
    children: [
      {
        label: "Lead-Free Crystal",
        children: [
          { label: "Elegant Designs" },
          { label: "Handmade" },
          { label: "Eco-Friendly Options" },
        ],
      },
      {
        label: "Cut Crystal",
        children: [
          { label: "Faceted Patterns" },
          { label: "Classic Styles" },
          { label: "Vintage Pieces" },
        ],
      },
      {
        label: "Etched Crystal",
        children: [
          { label: "Floral Etching" },
          { label: "Geometric Designs" },
          { label: "Custom Patterns" },
        ],
      },
      {
        label: "Bespoke Crystal",
        children: [
          { label: "Custom Orders" },
          { label: "Personalized Etching" },
          { label: "Exclusive Collections" },
        ],
      },
    ],
  },
  {
    label: "Designer’s",
    children: [
      {
        label: "Brand-Name Glasses",
        children: [
          { label: "Luxury Brands" },
          { label: "Top Designers" },
          { label: "Signature Pieces" },
        ],
      },
      {
        label: "Limited-Edition Designs",
        children: [
          { label: "Exclusive Collections" },
          { label: "Rare Releases" },
          { label: "High-End Designs" },
        ],
      },
      {
        label: "Celebrity-Inspired Styles",
        children: [
          { label: "Hollywood Glamour" },
          { label: "Red Carpet Looks" },
          { label: "Celebrity Favorites" },
        ],
      },
      {
        label: "Signature Collections",
        children: [
          { label: "Unique Designs" },
          { label: "Custom Glasses" },
          { label: "High-Quality Materials" },
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
          { label: "Discounted Glasses" },
          { label: "Last-Chance Deals" },
          { label: "Outlet Specials" },
          { label: "Warehouse Clearance" },
          { label: "Overstock Sales" },
          { label: "Damaged Box Discounts" },
        ],
      },
      {
        label: "Buy One Get One",
        children: [
          { label: "Mugs" },
          { label: "Wine Glasses" },
          { label: "Coasters" },
          { label: "Shot Glasses" },
          { label: "Limited Edition Sets" },
          { label: "Holiday Bundles" },
          { label: "Exclusive Pair Deals" },
        ],
      },
      {
        label: "Limited Time Offers",
        children: [
          { label: "Holiday Discounts" },
          { label: "Exclusive Bundles" },
          { label: "Gift Sets" },
          { label: "Weekend Specials" },
          { label: "Flash Sales" },
          { label: "Seasonal Promotions" },
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
