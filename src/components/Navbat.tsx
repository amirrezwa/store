import Link from "next/link";
import React from "react";

function Navbar() {
  const navLinks = [
    {
      href: "/",
      title: "Home",
    },

    {
      href: "/store",
      title: "Store",
    },
  ];
  return (
    <nav className="shadow p-4">
      {navLinks.map((item) => (
        <Link key={item.href} className="mr-4" href={item.href}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
