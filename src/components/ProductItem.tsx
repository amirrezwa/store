import React from "react";

interface IProductItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

function ProductItem({ image, title, price }: IProductItemProps) {
  return (
    <div>
      <div className="shadow-md">
        <img src={image} alt="" />

        <div className="p-2">
          <h3 className="font-bold">{title}</h3>
          <p>
            Price <span>{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
