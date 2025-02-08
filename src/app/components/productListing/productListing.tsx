import ProductFilters from "@/app/components/productListing/productFilters";
import FilterButton from "@/app/components/productListing/filterButton";
import { productList } from "@/data/products";

const ProductListing = () => {
  return (
    <div className="my-6 mx-6 md:mx-14 flex flex-col space-y-3">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl">Shop</h2>
        <div className="lg:hidden flex flex-row">
          <FilterButton />
        </div>
      </div>
      <div className="flex items-stretch justify-between border-gray-200 border-b-2">
        <div className="flex flex-row overflow-x-auto whitespace-nowrap md:overflow-visible scrollbar-hide">
          <ProductFilters />
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center">
          <FilterButton />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6">
        {productList.map((product, key) => (
          <div
            key={key}
            className="relative flex flex-col h-96 sm:h-50 group cursor-pointer"
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
    </div>
  );
};

export default ProductListing;
