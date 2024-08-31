import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Link from "../Link/Link";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      path: "/home",
      name: "Home",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
    },
    {
      id: 3,
      path: "/contact",
      name: "Contact",
    },
    {
      id: 4,
      path: "/profile/:id", // Dynamic route with parameter
      name: "Profile",
    },
    {
      id: 5,
      path: "/settings",
      name: "Settings",
    },
  ];

  return (
    <nav className="bg-yellow-300 p-6 text-black ">
      <div className="lg:hidden text-xl " onClick={() => setOpen(!open)}>
        {open === true ? <IoMdClose /> : <AiOutlineMenuFold />}
      </div>

      <ul
        className={`lg:flex gap-4 absolute 
            bg-yellow-200  mt-3 p-6
        ${open ? "" : "hidden"}`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
