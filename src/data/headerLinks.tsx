import help from "@/assets/images/svg/help.svg";
import bag from "@/assets/images/svg/bag.svg";
import orders from "@/assets/images/svg/orders.svg";
import store from "@/assets/images/svg/store.svg";
import product1 from "@/assets/images/jpg/product1.jpg";
import product2 from "@/assets/images/jpg/product2.jpg";
import product3 from "@/assets/images/jpg/product3.jpg";
import product4 from "@/assets/images/jpg/product4.jpg";
import banner1 from "@/assets/images/jpg/banner1.jpg";
import heroMobile from "@/assets/images/jpg/heroMobile.jpg";
import diamond from "@/assets/images/png/diamond.png";
import crown from "@/assets/images/png/crown.png";
import classic from "@/assets/images/png/classic.png";
import crystal from "@/assets/images/png/crystal.png";
import spring from "@/assets/images/jpg/spring.jpg";
import summer from "@/assets/images/jpg/summer.jpg";
import autumn from "@/assets/images/jpg/autum.jpg";
import winter from "@/assets/images/jpg/winter.jpg";
import { StaticImageData } from "next/image";

export type Menu = {
  label: string;
  style?: string;
  caption?: string;
  image?: StaticImageData;
  icon?: StaticImageData;
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
        label: "Disney",
        children: [{ label: "Goblets" }, { label: "Tumblers" }],
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
          { label: "Diamond Glasses" },
          { label: "Lush Goblets" },
          { label: "Posh Decanters" },
        ],
      },
      {
        label: "Originals",
        caption: "Iconic designs. Born from a variety, adopted by caluture.",
        image: product1,
        icon: crown,
      },
      {
        label: "Diamond",
        caption: "Improve lifestyle with lush diamond designs.",
        image: product2,
        icon: diamond,
      },
    ],
  },
  {
    label: "New Arrivals",
    style: "font-semibold",
    children: [
      {
        label: "Spring",
        image: spring,
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
        label: "Summer",
        image: summer,
        children: [
          { label: "Iced Tea Glasses" },
          { label: "Beach Tumblers" },
          { label: "Outdoor Picnic Sets" },
          { label: "Seaside Goblets" },
          { label: "Sunshine-Themed Glasses" },
        ],
      },
      {
        label: "Autumn",
        image: autumn,
        children: [
          { label: "Leafy Glasses" },
          { label: "Mushroom Goblets" },
          { label: "Pumpkin Mugs" },
          { label: "Harvest Platters" },
          { label: "Acorn Teacups" },
          { label: "Rustic Wooden Bowls" },
          { label: "Spiced Cider Tumblers" },
        ],
      },
      {
        label: "Winter",
        image: winter,
        children: [
          { label: "Snowflake Glasses" },
          { label: "Frosted Goblets" },
          { label: "Icicle Tumblers" },
          { label: "Peppermint Mugs" },
          { label: "Hot Cocoa Cups" },
          { label: "Evergreen Pitchers" },
          { label: "Winter Wonderland Teapots" },
        ],
      },
      {
        label: "Vintage Vibes",
        children: [
          { label: "Retro Coffee Mugs" },
          { label: "Classic Tea Sets" },
          { label: "Antique Plates" },
        ],
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
      {
        label: "Fresh New Year",
        children: [
          { label: "January Morning Mugs" },
          { label: "Snowy Plates" },
          { label: "Fresh Start Tumblers" },
          { label: "New Year Sparkle Glasses" },
        ],
      },
      {
        label: "Tropical Escape",
        children: [{ label: "Palm Tree Mugs" }, { label: "Beachside Glasses" }],
      },
    ],
  },
  {
    label: "Luxury Glassware",
    children: [
      {
        label: "Premium Artisan Glass",
        children: [
          { label: "Elegant Designs" },
          { label: "Handmade" },
          { label: "Eco-Friendly Options" },
          { label: "Faceted Patterns" },
          { label: "Classic Styles" },
          { label: "Vintage Pieces" },
          { label: "Geometric Designs" },
        ],
      },
      {
        label: "Lead-Free Crystal",
        image: product1,
        children: [{ label: "Shop Now" }],
      },
      {
        label: "Cut Crystal",
        image: product2,
        children: [{ label: "Shop Now" }],
      },
      {
        label: "Etched Crystal",
        image: product3,
        children: [{ label: "Shop Now" }],
      },
      {
        label: "Bespoke Crystal",
        image: product4,
        children: [{ label: "Shop Now" }],
      },
      {
        label: "Exclusive Handcrafted Crystal",
        children: [
          { label: "Custom Orders" },
          { label: "Personalized Etching" },
          { label: "Exclusive Collections" },
          { label: "Geometric Designs" },
          { label: "Custom Patterns" },
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
      {
        label: "Artisan Creations",
        children: [
          { label: "Handcrafted Designs" },
          { label: "One-of-a-Kind Pieces" },
          { label: "Eco-Friendly Materials" },
        ],
      },
      {
        label: "Fashion Forward",
        children: [{ label: "Trendy Glasses" }, { label: "Bold Colors" }],
      },
      {
        label: "High-Fashion Collaborations",
        children: [
          { label: "Designer Partnerships" },
          { label: "Limited-Edition Collaborations" },
          { label: "Runway-Inspired Styles" },
        ],
      },
      {
        label: "Heritage Designs",
        children: [
          { label: "Classic Styles" },
          { label: "Timeless Collections" },
          { label: "Vintage-Inspired Pieces" },
        ],
      },
      {
        label: "Innovative Eyewear",
        children: [
          { label: "Smart Glasses" },
          { label: "High-Tech Features" },
          { label: "Augmented Reality Glasses" },
        ],
      },
      {
        label: "Sustainable Luxury",
        children: [
          { label: "Eco-Friendly Glasses" },
          { label: "Recycled Materials" },
          { label: "Carbon Neutral Designs" },
        ],
      },
      {
        label: "Iconic Shapes",
        children: [
          { label: "Cat-Eye Glasses" },
          { label: "Round Frames" },
          { label: "Geometric Glasses" },
          { label: "Aviator Styles" },
          { label: "Diamond Decanter" },
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
          { label: "Weekend Specials" },
          { label: "Flash Sales" },
          { label: "Seasonal Promotions" },
        ],
      },
      {
        label: "Classics",
        caption: "Timeless glassware, crafted for every occasion.",
        image: banner1,
        icon: classic,
      },
      {
        label: "Crystal",
        caption: "Elegant designs to elevate your everyday moments.",
        image: heroMobile,
        icon: crystal,
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
