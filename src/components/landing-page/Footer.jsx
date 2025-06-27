import React from 'react';
import {Instagram,Facebook,Twitter,} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold">
                      TBS
                  </AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="text-xl font-bold">Timeless Trim Barbershop</h3>
                    <p className="text-gray-400 text-sm">Premium Grooming</p>
                </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
                Experience the art of traditional barbering with modern techniques. Your satisfaction is our commitment.
            </p>
            <div className="flex gap-4">
              <button className="cursor-pointer w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
              </button>
              <button className="cursor-pointer w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
              </button>
              <button className="cursor-pointer w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
              </button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            <button
                
                className="block text-gray-400 cursor-pointer hover:text-white transition-colors"
            >
                Services
            </button>
            <button
                
                className="block text-gray-400 cursor-pointer hover:text-white transition-colors"
            >
                About Us
            </button>
            <button
                
                className="block text-gray-400 cursor-pointer hover:text-white transition-colors"
            >
                Reviews
            </button>
            <button  className=" cursor-pointer block text-gray-400 hover:text-white transition-colors">
                Book Now
            </button>
          </div>
        </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400 text-sm">
                <p>123 Main Street</p>
                <p>Downtown</p>
                <p>(+234) 123-4567</p>
                <p>info@timelesstrimbarbershop.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8  text-center text-gray-400 text-sm">
            <p>&copy; 2024 Timeless Trim Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
