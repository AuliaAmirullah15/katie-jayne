import product1 from "@/assets/images/jpg/product1.jpg";
import product2 from "@/assets/images/jpg/product2.jpg";
import product3 from "@/assets/images/jpg/product3.jpg";
import product4 from "@/assets/images/jpg/product4.jpg";
import product5 from "@/assets/images/jpg/product5.jpg";
import { Product } from "@/app/types/product";
import { Currency } from "@/app/types/currency";
import heroMobile from "@/assets/images/jpg/heroMobile.jpg";
import banner1 from "@/assets/images/jpg/banner1.jpg";
import banner2 from "@/assets/images/jpg/banner2.jpg";
import winter from "@/assets/images/jpg/winter.jpg";

export const products: Product[] = [
  {
    id: 1,
    code: "KJ001",
    name: "Katie Crystal Cocktail Glasses",
    subname: "Crsytal Glasses",
    description:
      "Add a touch of class to your drinks cabinet with the Katie Crystal Square Decanter—a charming blend of understated style and practicality that feels right at home in any setting. Made from beautifully clear, high-quality crystal, this decanter is as sturdy as it is elegant, perfect for showing off your favourite tipple, whether it’s whisky, gin, or a splash of sherry.",
    price: 95,
    image: product1,
    currency: "GBP",
    thumbnails: [product1, product2, product3, product4],
    details: [
      {
        title: "Check In-Store Availability",
        description:
          "Looking to see the Katie Jayne Katie Crystal Square Decanter up close before you decide? Use our in-store availability checker to find it at a nearby location. It's always a delight to appreciate its fine craftsmanship in person.",
      },
      {
        title: "Product Details",
        description:
          "Meticulously crafted from premium crystal, this square decanter combines sophistication and practicality. With its sleek, timeless design and substantial weight, it’s an elegant addition to any drinks cabinet—ideal for serving whisky, brandy, or your favourite spirits.",
      },
      {
        title: "Care Instructions",
        description:
          "To ensure your Katie Crystal Square Decanter retains its clarity and brilliance, wash it gently by hand with warm soapy water and dry thoroughly with a soft cloth. Avoid dishwashers or abrasive materials that may dull the surface or compromise its beauty.",
      },
      {
        title: "Delivery & Returns",
        description:
          "We offer reliable delivery straight to your doorstep, securely packaged to arrive in perfect condition. Should you need to make a return, our straightforward process ensures a hassle-free experience. Feel free to reach out to our customer care team for any assistance.",
      },
    ],
  },
  {
    id: 2,
    code: "KJ002",
    name: "Katie Crystal Square Decanter",
    subname: "Crsytal Decanter",
    description:
      "The Katie Crystal Square Decanter is a timeless piece of craftsmanship that elevates your home bar. Featuring a robust and stylish design, it is perfect for showcasing and storing your favorite spirits with a touch of elegance.",
    price: 180,
    currency: "GBP",
    image: product2,
    thumbnails: [product2, product3, product4, product1],
    details: [
      {
        title: "Check In-Store Availability",
        description:
          "Want to see the Katie Crystal Square Decanter in person? Use our in-store availability checker to find the nearest location carrying this exquisite item.",
      },
      {
        title: "Product Details",
        description:
          "Crafted from premium crystal, this decanter features a sturdy square design with a precision-cut stopper, ensuring your spirits remain fresh while looking magnificent.",
      },
      {
        title: "Care Instructions",
        description:
          "Hand wash only with warm soapy water and a soft cloth. Avoid abrasive cleaners to preserve its brilliance.",
      },
      {
        title: "Delivery & Returns",
        description:
          "We ensure secure and reliable delivery of your decanter. If you’re not satisfied, our easy return policy has you covered.",
      },
    ],
  },
  {
    id: 3,
    code: "KJ003",
    name: "Katie Essentials Glass Tumblers",
    subname: "Glass Tumblers",
    description:
      "The Katie Essentials Glass Tumblers are versatile and stylish, perfect for serving anything from water to cocktails. Their minimalist design ensures they blend seamlessly with any table setting.",
    price: 50,
    currency: "GBP",
    image: product3,
    thumbnails: [product3, product4, product1, product2],
    details: [
      {
        title: "Check In-Store Availability",
        description:
          "Visit our store to experience the quality and practicality of the Katie Essentials Glass Tumblers in person.",
      },
      {
        title: "Product Details",
        description:
          "Made with durable, clear glass, these tumblers are lightweight yet sturdy, making them ideal for everyday use or special occasions.",
      },
      {
        title: "Care Instructions",
        description:
          "Dishwasher safe. For long-lasting clarity, avoid harsh detergents and store carefully.",
      },
      {
        title: "Delivery & Returns",
        description:
          "Enjoy swift delivery and a hassle-free return policy. Contact our customer support team for any concerns.",
      },
    ],
  },
  {
    id: 4,
    code: "KJ004",
    name: "Katie Crystal Old Fashioned Tumblers",
    subname: "Crsytal Tumblers",
    description:
      "Elevate your whiskey or cocktails with the Katie Crystal Old Fashioned Tumblers. Their intricate design and sturdy feel make every sip an experience to remember.",
    price: 98,
    currency: "GBP",
    image: product4,
    thumbnails: [product4, product3, product1, product2],
    details: [
      {
        title: "Check In-Store Availability",
        description:
          "Come see the Katie Crystal Old Fashioned Tumblers in person and admire their fine craftsmanship before purchasing.",
      },
      {
        title: "Product Details",
        description:
          "These tumblers are crafted from premium crystal with a weighty base and stunning etched patterns, perfect for enhancing your favorite drinks.",
      },
      {
        title: "Care Instructions",
        description:
          "Hand wash with warm soapy water and a soft cloth to maintain their intricate design and clarity.",
      },
      {
        title: "Delivery & Returns",
        description:
          "We deliver your tumblers with care to ensure they arrive in perfect condition. Our hassle-free return policy is designed for your convenience.",
      },
    ],
  },
  {
    id: 5,
    code: "KJ005",
    name: "Katie Crystal Round Decanter",
    subname: "Crsytal Decanter",
    description:
      "The Katie Crystal Round Decanter offers a classic shape with modern elegance, making it the perfect centerpiece for your drinks collection.",
    price: 140,
    currency: "GBP",
    image: product5,
    thumbnails: [product5, product1, product2, product3],
    details: [
      {
        title: "Check In-Store Availability",
        description:
          "Discover the Katie Crystal Round Decanter at a nearby store. Its timeless appeal is even better in person.",
      },
      {
        title: "Product Details",
        description:
          "This round decanter is expertly crafted from clear, durable crystal with a perfectly fitted stopper to preserve the flavor of your spirits.",
      },
      {
        title: "Care Instructions",
        description:
          "Wash gently by hand with warm water and mild soap. Dry with a soft cloth to avoid water spots.",
      },
      {
        title: "Delivery & Returns",
        description:
          "We provide secure packaging for safe delivery. Our customer-friendly return policy ensures peace of mind with your purchase.",
      },
    ],
  },
];

export const defaultProduct: Product = products[0];

const productImages = [product1, product2, product3, product4, product5];

function getRandomThumbnails() {
  return productImages.sort(() => 0.5 - Math.random()).slice(0, 4);
}

export const productList: Product[] = Array.from({ length: 5 }, (_, i) => [
  {
    id: i * 5 + 1,
    code: `KJ00${i * 5 + 1}`,
    name: `Katie Deluxe Crystal Glasses ${i + 1}`,
    subname: "Luxury Crystal Glasses",
    description: `Experience luxury with the Katie Deluxe Crystal Glasses ${
      i + 1
    }, designed for elegance and sophistication. Perfect for any occasion, these glasses offer clarity and timeless beauty.`,
    price: 100 + i * 10,
    currency: "GBP" as Currency,
    image: productImages[i % productImages.length],
    thumbnails: getRandomThumbnails(),
    details: [
      {
        title: "Check In-Store Availability",
        description: `Find the Katie Deluxe Crystal Glasses ${
          i + 1
        } at a store near you. Experience their premium quality firsthand.`,
      },
      {
        title: "Product Details",
        description: `Crafted from high-grade crystal, these glasses feature intricate designs that enhance your drinking experience.`,
      },
      {
        title: "Care Instructions",
        description:
          "Hand wash only with mild soap and warm water. Dry with a soft cloth to maintain clarity.",
      },
      {
        title: "Delivery & Returns",
        description:
          "Enjoy secure packaging and reliable delivery. Our hassle-free return policy ensures your satisfaction.",
      },
    ],
  },
  {
    id: i * 5 + 2,
    code: `KJ00${i * 5 + 2}`,
    name: `Katie Prestige Square Decanter ${i + 1}`,
    subname: "Prestige Crystal Decanter",
    description: `The Katie Prestige Square Decanter ${
      i + 1
    } is a refined addition to any bar, offering style and sophistication.`,
    price: 185 + i * 5,
    currency: "GBP" as Currency,
    image: productImages[(i + 1) % productImages.length],
    thumbnails: getRandomThumbnails(),
    details: [
      {
        title: "Check In-Store Availability",
        description: `See the Katie Prestige Square Decanter ${
          i + 1
        } in-store and appreciate its craftsmanship.`,
      },
      {
        title: "Product Details",
        description: `Made with premium crystal, this decanter features an airtight stopper to preserve your spirits.`,
      },
      {
        title: "Care Instructions",
        description:
          "Wash by hand with lukewarm water. Avoid harsh detergents.",
      },
      {
        title: "Delivery & Returns",
        description:
          "Secure packaging ensures safe delivery. Easy returns available if needed.",
      },
    ],
  },
  {
    id: i * 5 + 3,
    code: `KJ00${i * 5 + 3}`,
    name: `Katie Modern Glass Tumblers ${i + 1}`,
    subname: "Contemporary Tumblers",
    description: `Enjoy your drinks in style with the Katie Modern Glass Tumblers ${
      i + 1
    }, blending sleek design with durability.`,
    price: 55 + i * 5,
    currency: "GBP" as Currency,
    image: productImages[(i + 2) % productImages.length],
    thumbnails: getRandomThumbnails(),
    details: [
      {
        title: "Check In-Store Availability",
        description: `Visit a nearby store to explore the Katie Modern Glass Tumblers ${
          i + 1
        }.`,
      },
      {
        title: "Product Details",
        description: `These tumblers feature a minimalist aesthetic and durable glass construction for everyday use.`,
      },
      {
        title: "Care Instructions",
        description:
          "Dishwasher safe but hand washing recommended for longevity.",
      },
      {
        title: "Delivery & Returns",
        description:
          "Fast and secure shipping ensures a smooth purchase experience.",
      },
    ],
  },
  {
    id: i * 5 + 4,
    code: `KJ00${i * 5 + 4}`,
    name: `Katie Premium Old Fashioned Tumblers ${i + 1}`,
    subname: "Classic Whiskey Tumblers",
    description: `Savor your whiskey with the Katie Premium Old Fashioned Tumblers ${
      i + 1
    }, featuring an elegant etched design.`,
    price: 105 + i * 5,
    currency: "GBP" as Currency,
    image: productImages[(i + 3) % productImages.length],
    thumbnails: getRandomThumbnails(),
    details: [
      {
        title: "Check In-Store Availability",
        description: `Feel the quality of the Katie Premium Old Fashioned Tumblers ${
          i + 1
        } in person.`,
      },
      {
        title: "Product Details",
        description: `These glasses boast a refined cut pattern for a luxurious drinking experience.`,
      },
      {
        title: "Care Instructions",
        description: "Hand wash only to preserve the etched details.",
      },
      {
        title: "Delivery & Returns",
        description:
          "Delivered with care and protected against damage in transit.",
      },
    ],
  },
  {
    id: i * 5 + 5,
    code: `KJ00${i * 5 + 5}`,
    name: `Katie Artisan Round Decanter ${i + 1}`,
    subname: "Handcrafted Round Decanter",
    description: `A true work of art, the Katie Artisan Round Decanter ${
      i + 1
    } is designed to store and display your finest spirits.`,
    price: 150 + i * 5,
    currency: "GBP" as Currency,
    image: productImages[(i + 4) % productImages.length],
    thumbnails: getRandomThumbnails(),
    details: [
      {
        title: "Check In-Store Availability",
        description: `Admire the elegance of the Katie Artisan Round Decanter ${
          i + 1
        } at select retail locations.`,
      },
      {
        title: "Product Details",
        description: `Hand-blown crystal with a precision-cut stopper ensures a distinguished presentation for your spirits.`,
      },
      {
        title: "Care Instructions",
        description:
          "Gently wash with warm soapy water and dry with a microfiber cloth.",
      },
      {
        title: "Delivery & Returns",
        description:
          "Carefully packaged for safe shipping. Returns accepted within 30 days.",
      },
    ],
  },
]).flat();

export const newArrivals = [
  {
    label: "Vintage Vibes",
    description:
      "Elegant glassware with classic charm and intricate detailing.",
    image: heroMobile,
  },
  {
    label: "Fun Holiday",
    description: "Festive designs perfect for celebrating special moments.",
    image: banner1,
  },
  {
    label: "Fresh New Year",
    description: "Sleek and modern glassware to start the year in style.",
    image: winter,
  },
  {
    label: "Tropical Escape",
    description: "Vibrant and refreshing designs inspired by island getaways.",
    image: banner2,
  },
];
