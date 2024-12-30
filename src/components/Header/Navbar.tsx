import React from "react";
import Link from "../Link";
import { Routes, Pages } from "@/constants/Enums";

const Navbar = () => {
  const Links = [
    {
      label: "Home",
      href: Routes.ROOT,
      id: crypto.randomUUID(),
    },
    {
      label: "About",
      href: Routes.ABOUT,
      id: crypto.randomUUID(),
    },
    {
      label: "Contact",
      href: Routes.CONTACT,
      id: crypto.randomUUID(),
    },
    {
      label: "Login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
      id: crypto.randomUUID(),
    },
  ];
  return (
    <nav>
      <ul className="block space-x-0 space-y-2 sm:space-y-0 sm:flex sm:space-x-4 text-center">
        {Links.map((link) => (
          <li
            key={link.id}
            className={`${
              link.label === "Login"
                ? "bg-secondary hover:bg-primary p-3"
                : "hover:bg-slate-900  p-3"
            } duration-700 transition-all rounded-xl hover:text-white`}
          >
            <Link href={link.href} key={link.id} className="w-full h-screen">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
