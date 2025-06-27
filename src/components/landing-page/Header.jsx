import React from "react";
import {Menu,} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-white via-blue-200 to-white backdrop-blur-sm  ">
      <div className="py-5 px-5">
        <div className="flex items-center         justify-between">
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
          <Menu className="h-8 w-8 md:hidden " />
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
