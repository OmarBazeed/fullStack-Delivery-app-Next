"use client";
import CommonHead from "@/components/CommonHead/CommonHead";
import Image from "next/image";
import pizzaImage from "../../../../public/assets/pizza.png";
import { FormatCurrency } from "../../../lib/Formatting";
import { DialogDemo } from "../Dialog/Dialog";
// import { DialogDemo } from "../Dialog/Dialog";
// import { useState } from "react";

const BestSeller = () => {
  // const [openDialog, setOpenDialog] = useState(false);
  const BestSellers = [
    { itemImageUrl: pizzaImage, itemHead: "pizza", itemPrice: 100, id: 1 },
    { itemImageUrl: pizzaImage, itemHead: "pizza", itemPrice: 100, id: 2 },
    { itemImageUrl: pizzaImage, itemHead: "pizza", itemPrice: 100, id: 3 },
  ];
  return (
    <div className="container mx-auto p-4">
      <CommonHead title="delivery" head="Online Order" />
      <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-16 secition-Gap">
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
            <div className="flex items-center m-auto my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              nemo magnam voluptatem nostrum libero unde tempora consequatur
              neque optio iure
            </div>

            {/* Button */}
            <div className="text-center mt-4">
              <DialogDemo productId={BestSeller.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
