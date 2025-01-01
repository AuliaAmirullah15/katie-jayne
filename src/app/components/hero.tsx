import Image from "next/image";
import heroUrl from "@/assets/images/jpg/hero.jpg";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-start h-[700px] bg-cover bg-center">
      <Image
        src={heroUrl}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
        className="-z-10"
      />
      <div className="hidden md:flex flex-col mx-12 max-w-lg text-white">
        <div className="max-w-md">
          <h1 className="text-6xl mb-4 font-cardo">
            Masterfully crafted glassware
          </h1>
        </div>
        <p className="text-lg mb-6">
          Discover the beauty of handcrafted glassware, where each piece is
          shaped by skilled artisans using traditional techniques. Every glass
          is a unique work of art, crafted to bring a touch of timeless beauty
          and expert craftsmanship to your table.
        </p>
        <div>
          <button className="px-6 py-3 bg-white text-main_blue rounded-full hover:bg-main_blue hover:text-white transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
