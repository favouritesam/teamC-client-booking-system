"use client"
import React, {useState} from "react";

import {Menu,} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  

  return (
    <header className="sticky top-0 z-50  bg-white  ">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold">
                TBS
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-blue-800 tracking-tight font-bold">
                Timeless Trim Babershop
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Premium Grooming
              </p>
            </div>
          </div>
          <div>
            <button
              className="group relative  "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-8 w-8 md:hidden " />
            </button>
            {isMenuOpen && (
              <div className="absolute top-full right-0 rounded-lg p-3 flex flex-col gap-6 items-center  group-focus:scale-y-100 origin-top  w-[200px] h-[200px] bg-blue-500 text-white">
                <a href="#services " className="hover:text-black">
                  Services
                </a>
                <a href="#about" className="hover:text-black">
                  About
                </a>
                <a href="#reviews" className="hover:text-black">
                  Reviews
                </a>
                <a href="#contact" className="hover:text-black">
                  Contact
                </a>
              </div>
            )}
          </div>

          <nav className="hidden md:flex gap-6 items-center text-blue-600">
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#reviews">
              Reviews
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
            <a
              href="/booking-page"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight cursor-pointer"
            >
              Book Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
