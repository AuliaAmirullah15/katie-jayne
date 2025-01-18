import product1 from "@/assets/images/jpg/product1.jpg";
import product2 from "@/assets/images/jpg/product2.jpg";
import product3 from "@/assets/images/jpg/product3.jpg";
import product4 from "@/assets/images/jpg/product4.jpg";
import product5 from "@/assets/images/jpg/product5.jpg";
import { Product } from "@/app/types/product";

export const products: Product[] = [
  {
    id: 1,
    code: "KJ001",
    name: "Katie Crystal Cocktail Glasses",
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
