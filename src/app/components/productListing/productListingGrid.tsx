import { useRouter } from "next/navigation";
import { productList } from "@/data/products";

const ProductListingGrid = () => {
  const router = useRouter();

  return (
    <div className="mx-0 md:mx-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6">
      {productList.map((product, key) => (
        <div
          key={key}
          className="relative flex flex-col h-96 sm:h-50 group cursor-pointer"
          onClick={() => router.push(`/product/${product.code}`)}
        >
          <div
            className="h-full relative bg-cover bg-center"
            style={{ backgroundImage: `url(${product.image.src})` }}
          >
            <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-y-0 translate-y-6">
              <div className="bg-white text-black text-sm py-4 px-4">
                <span>Buy Now</span>
              </div>
            </div>
            <div className="absolute bottom-0 group-hover:rotate-[135deg] group-hover:pt-3 right-4 p-4 text-black opacity-100 transition-all transform group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-xl">+</span>
            </div>
          </div>
          <div className="p-4 text-gray-700">
            <h3 className="text-sm">{product.name}</h3>
            <p className="text-sm">£{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingGrid;
