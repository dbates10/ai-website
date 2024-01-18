"use client";
import { useState, useEffect, useRef } from "react";
import MenuLink from "./MenuLink";
import { usePathname } from "next/navigation";

const MenuFolder = ({ blok, screen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef]);

  if (screen === "desktop") {
    return (
      <div className="relative ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-clone text-gray-500 hover:text-gray-900 whitespace-nowrap"
        >
          {blok.name}
        </button>
        {isOpen && (
          <div
            ref={drawerRef}
            className="absolute z-10 mt-4 bg-white shadow-lg border border-gray-200 rounded-md py-1 flex flex-col w-44"
          >
            {blok.menu_link.map((nestedBlok) => (
              <div
                className="text-base font-clone  text-gray-500  duration-300 block px-4 py-2"
                key={nestedBlok._uid}
              >
                <MenuLink blok={nestedBlok} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-clone text-gray-500"
        >
          {blok.name}
        </button>
        {isOpen && (
          <div className=" z-10 py-1 flex flex-col w-44">
            {blok.menu_link.map((nestedBlok) => (
              <div
                className="text-base font-clone font-medium text-gray-500  duration-300 block px-4 py-2"
                key={nestedBlok._uid}
              >
                <MenuLink blok={nestedBlok} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default MenuFolder;
