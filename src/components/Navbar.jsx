import React, { useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Navbar = () => {
  const navContainerRef = useRef(null);
  return (
    <div
      ref={navContainerRef}
      className="fixed z-50 h-16 transition-all duration-700 border-none insert-x-0 top-4 sm:inset-x-6"
    >
      <header className="absolute w-full -translate-y-1/2 top-1/2">
        <nav className="flex items-center justify-between p-4 size-full">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
