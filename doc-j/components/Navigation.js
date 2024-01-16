"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import MenuFolder from "./MenuFolder";
import MenuLink from "./MenuLink";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
const Navigation = ({ blok }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        console.log("Mobile: Clicked outside of nav");
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);
  // Main navigation links
  const mainLinks = [
    { href: "/about", label: "About" },
    { href: "/announcements", label: "Announcements" },
    { href: "/contact", label: "Contact" },
  ];

  // Category links
  const categoryLinks = [
    { href: "/category/docj", label: "Doc J's Laboratory" },
    { href: "/category/moglee", label: "Moglee Cultivated" },
    { href: "/category/waterbear", label: "Waterbear Farms" },
    { href: "/category/gambles", label: "Gamble's Goods" },
  ];
  return (
    <>
      <div className="relative bg-gradient-to-r from-gray-100 to-white border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">Doc J&apos;s Lab</span>
                <Image
                  className="h-20 w-auto sm:h-10 hidden sm:block"
                  src="/logo.svg"
                  alt="Storyblok"
                  height={80}
                  width={150}
                />
                <Image
                  className="h-10 w-auto sm:hidden"
                  src="/logo.svg"
                  alt="Storyblok"
                  height={80}
                  width={150}
                />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                onClick={() => setOpenMenu(true)}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                {/* <!-- Heroicon name: outline/menu --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="relative hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10">
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10">
                <nav
                  {...storyblokEditable(blok)}
                  className="flex flex-row gap-12 font-clone font-thin align-baseline"
                >
                  {blok.header_menu.map((nestedBlok) => {
                    if (nestedBlok.component === "menu_link") {
                      return (
                        <MenuLink blok={nestedBlok} key={nestedBlok._uid} />
                      );
                    } else
                      return (
                        <MenuFolder
                          screen={"desktop"}
                          blok={nestedBlok}
                          key={nestedBlok._uid}
                        />
                      );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* <!--
        Mobile menu, show/hide based on mobile menu state.
      --> */}
        {openMenu && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div
              ref={navRef}
              className={`absolute w-2/3 h-screen top-0 right-0 transition-transform transform origin-top-right duration-500 md:hidden ${
                openMenu ? "translateX(0)" : "translateX(100%)"
              }`}
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-screen divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => setOpenMenu(false)}
                      className="rounded-md p-2 inline-flex items-center justify-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>{" "}
                    </button>
                  </div>
                  <div className="mt-6">
                    <nav className="flex flex-col gap-8 font-ibm text-white">
                      {blok.header_menu.map((nestedBlok) => {
                        if (nestedBlok.component === "menu_link") {
                          return (
                            <MenuLink blok={nestedBlok} key={nestedBlok._uid} />
                          );
                        } else if (nestedBlok.component === "menu_folder") {
                          return (
                            <MenuFolder
                              screen={"mobile"}
                              blok={nestedBlok}
                              key={nestedBlok._uid}
                            />
                          );
                        }
                      })}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="h-1 bg-gradient-to-r from-green to-purp"></div>
    </>
  );
};

export default Navigation;
