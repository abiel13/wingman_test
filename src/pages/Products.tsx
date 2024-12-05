import React, { useEffect } from "react";

import { getProduct } from "@/lib/actions/product.actions";
import { StarIcon } from "lucide-react";
import { productStore } from "@/store/product.store";
import { useSearchParams } from "react-router";

const Products: React.FC = () => {
  const { filtered, setFiltered, setProducts, products } = productStore();
  const [search] = useSearchParams();

  useEffect(() => {
    (async function () {
      const product = await getProduct();

      setProducts(product);

      const query = search.get("q") || "";

      if (query.length) {
        console.log(products);
        const seived = products.filter(
          (product) =>
            product.title === query || product.title.includes(query as string)
        ) || []; 


        console.log(seived);
        setFiltered(seived);
      } else {
        setFiltered(product);
      }
    })();
  }, [search]);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-gray-600 font-sans">
        Latest Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 aspect-video ">
        {filtered.map((product, index) => (
          <div
            className="flex flex-col max-w-lg bg-transparent  relative  shadow-md px-3 py-3 gap-y-8 max-h-[400px]"
            key={index}
          >
            <div className="w-[200px]">
              <img
                src={product.image}
                alt="product image"
                className="max-w-[90%] aspect-square "
              />
            </div>

            <div>
              <h3 className="font-bold font-sans text-base text-ellipsis">
                {product.title}
              </h3>
              <p>{product.description.substring(0, 76)}...</p>
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="px-6 py-1 rounded-full font-sans font-medium bg-gray-100 w-fit">
                {product.category}
              </div>

              <div className="flex items-center gap-2">
                <StarIcon color="gold" fill="gold" />
                <p>{product.rating.rate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
