import CommonHead from "@/components/CommonHead/CommonHead";
import React from "react";
import { FormatCurrency } from "../../../lib/Formatting";
import Image from "next/image";
import pizzaImage from "../../../../public/assets/pizza.png";

const BestSeller = () => {
  const BestSellers = [
    { itemImageUrl: pizzaImage, itemHead: "pizza", itemPrice: 100, id: 1 },
    { itemImageUrl: pizzaImage, itemHead: "pizza", itemPrice: 100, id: 2 },
    { itemImageUrl: pizzaImage, itemHead: "pizza", itemPrice: 100, id: 3 },
  ];
  return (
    <div>
      <CommonHead title="delivery" head="Online Order" />
      <div className="grid grid-cols-12 gap-3">
        {BestSellers.map((BestSeller) => {
          return (
            <div
              key={BestSeller.id}
              className="col-span-12 md:col-span-4 gap-2 p-3"
            >
              <Image
                src={BestSeller.itemImageUrl}
                alt={BestSeller.itemHead}
                priority
                height={200}
                width={200}
                loading="eager"
                className="rounded-lg m-auto"
              />
              <div className="flex justify-between w-3/4 m-auto">
                <h2>{BestSeller.itemHead}</h2>
                <FormatCurrency
                  value={BestSeller.itemPrice}
                  currency="USD"
                  locale="en-US"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
