"use client";
import { Routes } from "@/constants/Enums";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import Link from "../Link";
import Navbar from "./Navbar";

const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header className="w-full md:h-[75px]">
      <div
        className={`container m-auto p-2 ${
          showNavbar ? "block" : "flex"
        } sm:flex justify-between items-center`}
      >
        <Link
          href={Routes.ROOT}
          className="text-2xl font-semibold m-1 text-primary"
        >
          🍕 pizza
        </Link>
        <div className={`${showNavbar ? "block" : "hidden"} sm:block`}>
          <Navbar />
        </div>
      </div>
      <div className="fixed top-4 right-4">
        <Menu
          className={`${
            showNavbar ? "hidden" : "block"
          } sm:hidden cursor-pointer`}
          onClick={() => setShowNavbar(!showNavbar)}
        />
      </div>
      <div className="fixed top-4 right-4">
        <XIcon
          className={`${
            showNavbar ? "block" : "hidden"
          } sm:hidden cursor-pointer`}
          onClick={() => setShowNavbar(!showNavbar)}
        />
      </div>
    </header>
  );
};

export default Index;
