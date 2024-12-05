import React, { useEffect } from "react";

import { getProduct } from "@/lib/actions/product.actions";
import { productStore } from "@/store/product.store";
import { useSearchParams } from "react-router";
import ProductCard from "@/components/ProductCard";

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
        const seived =
        products.filter(
          (product) =>
            product.title.toLowerCase() === query.toLowerCase() ||
            product.title.toLowerCase().includes(query.toLowerCase())
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
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 aspect-video ">
          {filtered.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="font-bold">No Result found for Query</h1>
        </div>
      )}
    </div>
  );
};

export default Products;
