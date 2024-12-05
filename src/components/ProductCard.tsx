import React from "react";
import { tproduct } from "..";
import { StarIcon } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface Props {
  product: tproduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col max-w-lg bg-transparent  relative  shadow-md px-3 py-3 gap-y-8 max-h-[440px]">
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
        <p className="text-muted-foreground font-light font-sans">{product.description.substring(0, 76)}...</p>
        <div>
          <h2 className="font-bold">{formatPrice(product.price)}</h2>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="px-6 py-1 rounded-full font-sans font-medium  bg-gray-100 w-fit dark:bg-blue-400">
          {product.category}
        </div>

        <div className="flex items-center gap-2">
          <StarIcon color="gold" fill="gold" />
          <p>{product.rating.rate}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
