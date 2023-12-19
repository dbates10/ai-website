"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
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
                  className="h-20 w-auto sm:h-10 sm:hidden"
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
              <div className="flex flex-col">
                <button
                  onClick={() => setOpenCategories(!openCategories)}
                  className="text-gray-500 hover:text-gray-900"
                >
                  Categories
                </button>
                {openCategories && (
                  <div className="absolute z-10 mt-8 bg-white shadow-lg border border-gray-200 rounded-md py-1">
                    <Link
                      className="text-base font-medium text-gray-500 hover:text-white hover:bg-gradient-to-r from-purp to-green duration-300 block px-4 py-2"
                      href="/category/doc"
                    >
                      <button onClick={() => setOpenCategories(false)}>
                        Doc J&apos;s Laboratory
                      </button>
                    </Link>
                    <Link
                      className="text-base font-medium text-gray-500 hover:text-white hover:bg-gradient-to-r from-purp to-green duration-300 block px-4 py-2"
                      href="/category/moglee"
                    >
                      <button onClick={() => setOpenCategories(false)}>
                        Moglee Cultivated
                      </button>
                    </Link>
                    <Link
                      className="text-base font-medium text-gray-500 hover:text-white hover:bg-gradient-to-r from-purp to-green duration-300 block px-4 py-2"
                      href="/category/waterbear"
                    >
                      <button onClick={() => setOpenCategories(false)}>
                        Waterbear Farms
                      </button>
                    </Link>
                    <Link
                      className="text-base font-medium text-gray-500 hover:text-white hover:bg-gradient-to-r from-purp to-green duration-300 block px-4 py-2"
                      href="/category/gambles"
                    >
                      <button onClick={() => setOpenCategories(false)}>
                        Gamble&apos;s Goods
                      </button>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                href="/services"
              >
                Services
              </Link>
            </div>
          </div>
        </div>

        {/* <!--
        Mobile menu, show/hide based on mobile menu state.
      --> */}
        {openMenu && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div
              className={`absolute w-64 h-screen top-0 right-0 transition-transform transform origin-top-right duration-500 md:hidden ${
                openMenu ? "translateX(0)" : "translateX(100%)"
              }`}
            >
              <div className="bg-gradient-to-br from-green to-purp h-screen divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-end">
                    <div className="">
                      <button
                        type="button"
                        onClick={() => setOpenMenu(false)}
                        className=" rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green"
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
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid font-ibm text-2xl text-white">
                      <button
                        onClick={() => setOpenCategories(!openCategories)}
                        className="ml-3 my-4 text-left text-base font-medium"
                      >
                        <span className="flex flex-row justify-between mr-3 items-center">
                          Categories
                          <IoIosArrowForward
                            className={`${openCategories ? "rotate-90" : ""}`}
                          />
                        </span>
                      </button>
                      {openCategories && (
                        <div className=" ml-2 z-10">
                          <Link
                            className="text-base font-medium text-white hover:text-white hover:bg-gradient-to-r from-purp to-green duration-300 block px-4 py-2"
                            href="/category/doc"
                          >
                            <button onClick={() => setOpenMenu(false)}>
                              Doc J&apos;s Laboratory
                            </button>
                          </Link>
                          <Link
                            className="text-base font-medium text-white hover:text-white hover:bg-gradient-to-r from-purp to-green duration-300 block px-4 py-2"
                            href="/category/moglee"
                          >
                            <button onClick={() => setOpenMenu(false)}>
                              Moglee Cultivated
                            </button>
                          </Link>
                          <Link
                            className="text-base font-medium text-white hover:text-white hover:bg-gradient-to-r from-purp to-green duration-300 block px-4 py-2"
                            href="/category/waterbear"
                          >
                            <button onClick={() => setOpenMenu(false)}>
                              Waterbear Farms
                            </button>
                          </Link>
                          <Link
                            className="text-base font-medium text-white hover:text-white hover:bg-gradient-to-r from-purp to-green duration-300 block px-4 py-2"
                            href="/category/gambles"
                          >
                            <button onClick={() => setOpenMenu(false)}>
                              Gamble&apos;s Goods
                            </button>
                          </Link>
                        </div>
                      )}
                      {/* Repeat for other links */}
                      <Link
                        href="/about"
                        className="-m-3 p-3 my-2 flex items-center rounded-md "
                      >
                        <button onClick={() => setOpenMenu(false)}>
                          <span className="ml-3 my-2 text-base font-medium">
                            About
                          </span>
                        </button>
                      </Link>
                      <Link
                        href="/contact"
                        className="-m-3 p-3 my-2 flex items-center rounded-md "
                      >
                        <button onClick={() => setOpenMenu(false)}>
                          <span className="ml-3 text-base font-medium">
                            Contact
                          </span>
                        </button>
                      </Link>
                      {/* Add additional links as needed */}
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
