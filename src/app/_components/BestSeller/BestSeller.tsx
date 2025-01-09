import CommonHead from "@/components/CommonHead/CommonHead";
import React from "react";
import { FormatCurrency } from "../../../lib/Formatting";
import Image from "next/image";
import pizzaImage from "../../../../public/assets/pizza.png";
import { Button } from "@/components/ui/button";

const BestSeller = () => {
  const BestSellers = [
    { itemImageUrl: pizzaImage, itemHead: "pizza", itemPrice: 100, id: 1 },
    { itemImageUrl: pizzaImage, itemHead: "pizza", itemPrice: 100, id: 2 },
    { itemImageUrl: pizzaImage, itemHead: "pizza", itemPrice: 100, id: 3 },
  ];
  return (
    <div className="container mx-auto p-4">
      <CommonHead title="delivery" head="Online Order" />
      <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-16">
        {BestSellers.map((BestSeller) => (
          <div
            key={BestSeller.id}
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-4 shadow-xl border rounded-lg"
          >
            {/* Image */}
            <Image
              src={BestSeller.itemImageUrl}
              alt={BestSeller.itemHead}
              priority
              height={200}
              width={200}
              loading="eager"
              className="rounded-lg mx-auto"
            />

            {/* Item Details */}
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-lg font-semibold">{BestSeller.itemHead}</h2>
              <FormatCurrency
                value={BestSeller.itemPrice}
                currency="USD"
                locale="en-US"
              />
            </div>

            {/* Button */}
            <div className="text-center mt-4">
              <Button className="px-6 py-2 rounded-md shadow-md hover:bg-transparent hover:text-black transition-all">
                Add Product
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
