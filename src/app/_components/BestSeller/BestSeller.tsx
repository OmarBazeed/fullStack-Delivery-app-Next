"use client";
import CommonHead from "@/components/CommonHead/CommonHead";
import Image from "next/image";
import { FormatCurrency } from "../../../lib/Formatting";
import { AddToCartBtn } from "../Dialog/Dialog";
import itemImg from "../../../../public/assets/pizza.png";

const BestSeller = () => {
  const BestSellers = [
    {
      itemImageUrl: itemImg,
      itemHead: "runch pizza",
      itemPrice: 200,
      id: 1,
    },
    {
      itemImageUrl: itemImg,
      itemHead: "new spicy pizza",
      itemPrice: 300,
      id: 2,
    },
    {
      itemImageUrl: itemImg,
      itemHead: "nagtes pizza",
      itemPrice: 400,
      id: 3,
    },
  ];
  console.log(BestSellers);
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
              <h2 className="font-semibold text-2xl capitalize">
                {BestSeller.itemHead}
              </h2>
              <FormatCurrency
                value={BestSeller.itemPrice}
                currency="USD"
                locale="en-US"
              />
            </div>
            <div className="flex items-center m-auto my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </div>

            {/* Button */}
            <div className="text-center mt-4">
              <AddToCartBtn product={BestSeller} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
