"use client"; // this is a client component 👈🏽
import React, { useState } from "react";
import navitems from "./navitems";
import Link from "next/link";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <nav class=" text-white px-5 py-4 mx-auto border-b">
        <div class="lg:flex lg:flex-wrap lg:items-center">
          <div class="flex  items-center justify-between">
            <Link href="/">
              <div class="flex ml-20 items-center">
                <img
                  src="https://lirp.cdn-website.com/3a2c1857/dms3rep/multi/opt/High_def_logo_sm-153w.png"
                  alt="kdusyared logo"
                  class="h-16"
                />
              </div>
            </Link>

            {toggle && (
              <button
                class=" md:hidden text-4xl cursor-pointer "
                onClick={() => setToggle(!toggle)}
              >
                <VscMenu class=" md:hidden text-4xl cursor-pointer " />
              </button>
            )}
            {!toggle && (
              <button
                class=" md:hidden text-4xl cursor-pointer "
                onClick={() => setToggle(!toggle)}
              >
                <VscClose class=" md:hidden text-4xl cursor-pointer " />
              </button>
            )}
          </div>

          <div class=" flex md:items-center  gap-6 flex-col mt-3 lg:flex lg:flex-row lg:ml-auto lg:mt-0">
            {navitems.map(({ name, href }, i) => (
              <Link
                key={i}
                href={href}
                class="p-2 text-sm font-semibold uppercase transition-colors duration-300 lg:px-3 md:mx-2 hover:text-primary-green"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
