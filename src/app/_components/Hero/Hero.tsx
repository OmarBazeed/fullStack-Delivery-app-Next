import React from "react";
import NewImage from "../../../../public/assets/pizza.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "@/components/Link";
import { Routes } from "@/constants/Enums";
import { ArrowBigRightIcon } from "lucide-react";
const Hero = () => {
  return (
    <section className="secition-Gap">
      <div className="flex items-center justify-center h-[80vh] ">
        <main className="grid grid-cols-12 items-center justify-items-center gap-4">
          <div className="col-span-12 sm:col-span-5 sm:col-start-2 p-4">
            <h1 className="font-semibold text-primary text-lg">
              Slice Into Happiness
            </h1>
            <p className="text-accent mt-4">
              carving pizza? we&apos;ve got you covered with fresh ingredients,
              endless flavor, and the fastest delivery. your perfect slice is a
              tap away 📱
            </p>
            <div className="mt-4 flex gap-4 items-center justify-start flex-wrap">
              <Button className="font-semibold bg-primary rounded-2xl hover:bg-transparent hover:text-primary transition-all duration-500">
                <Link href={`/${Routes.MENU}`} className="flex items-center">
                  order now <ArrowBigRightIcon />
                </Link>
              </Button>
              <Button className="font-semibold bg-primary rounded-2xl hover:bg-transparent hover:text-primary transition-all duration-500">
                <Link href={`/${Routes.MENU}`} className="flex items-center">
                  order now <ArrowBigRightIcon />
                </Link>
              </Button>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-5 flex items-center justify-center">
            <Image
              src={NewImage}
              alt="Pizza"
              height={350}
              width={350}
              priority
              loading="eager"
            />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
