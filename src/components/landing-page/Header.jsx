import React from "react";
import {
  Calendar,
  Clock,
  Star,
  MapPin,
  Phone,
  Mail,
  Scissors,
  Users,
  Award,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 backdrop-blur-sm ">
      <div className="py-5 px-5">
        <div className="flex items-center         justify-between">
          <div className="flex gap-2">
            <h1 className="bg-white text-blue-800 py-2 px-2 rounded-2xl">
              TBS
            </h1>
            <div>
              <h1 className="text-white tracking-tight font-bold">
                Timeless Trim Babershop
              </h1>
              <p className="text-gray-400 text-sm sm:text-base">
                Premium Grooming
              </p>
            </div>
          </div>
            <Menu className="h-8 w-8 md:hidden " />
          <nav className="hidden md:flex gap-6 items-center text-white">
            <a className="hover:text-blue-600" href="#">
              Services
            </a>
            <a className="hover:text-blue-600" href="#">
              About
            </a>
            <a className="hover:text-blue-600" href="#">
              Reviews
            </a>
            <a className="hover:text-blue-600" href="#">
              Contact
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">
              Book Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
