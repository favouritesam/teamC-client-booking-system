import React from 'react';
import {Scissors, Award, Users} from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
              Crafting Excellence Since 2019
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Timeless Trim Barbershop, we believe that grooming is an art
              form. Our skilled barbers combine traditional techniques with
              modern innovation to deliver exceptional results that exceed your
              expectations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Located in the heart of downtown, we've built our reputation on
              quality, consistency, and unparalleled customer service. Every
              visit is an experience designed to leave you looking and feeling
              your absolute best.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                  <Scissors className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Expert Barbers
                </h4>
                <p className="text-sm text-gray-600">
                  Skilled professionals with years of experience
                </p>
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Premium Quality
                </h4>
                <p className="text-sm text-gray-600">
                  Only the finest products and techniques
                </p>
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Personal Service
                </h4>
                <p className="text-sm text-gray-600">
                  Tailored experience for every client
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              <a href='/booking-page'>Experience the Difference</a>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/babHair.png"
                alt="Timeless trim Barbershop Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
