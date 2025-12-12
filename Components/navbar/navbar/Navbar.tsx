import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import ActiveLink from "./active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "about" },
  { path: "/pricing", text: "pricing" },
  { path: "/contact", text: "contact" },
];

export const Nabvar = () => {
  console.log("Navbar creado");

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      {/**margin right */}

      <Link href={"/"} className="flex items-center ">
        <HomeIcon className="mr-2" />
        <span className="mr-2">Home</span>
      </Link>

      <div className=" flex-1"></div>

      {/** ...navitems toma todas las propiedades del navitem y las envia al compontente activeLink como props */}
      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem}></ActiveLink>
      ))}
    </nav>
  );
};
