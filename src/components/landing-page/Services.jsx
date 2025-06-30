import React from 'react';
import {Clock} from "lucide-react";
  import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card.jsx";

const services = [
  {
    name: "Classic Haircut",
    price: "$35",
    duration: "45 min",
    description: "Professional cut and styling with consultation",
    image: "/images/classicHair.png?height=300&width=400",
  },
  {
    name: "Beard Trim",
    price: "$25",
    duration: "30 min",
    description: "Precision beard shaping and hot towel treatment",
    image: "/images/beardTrim.png?height=300&width=400",
  },
  {
    name: "Hair Wash & Style",
    price: "$45",
    duration: "60 min",
    description: "Complete wash, condition and premium styling",
    image: "/images/hairWash.png?height=300&width=400",
  },
  {
    name: "Full Service Package",
    price: "$75",
    duration: "90 min",
    description: "Haircut, wash, beard trim and styling - the works!",
    image: "/images/full-package.png?height=300&width=400",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From classic cuts to modern styles, we offer premium grooming
            services tailored to your individual needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl bg-white border-0 transition-transform transform hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-full object-cover  "
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.name}
                  </h3>
                  <span className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <a href='/booking-page'>Book Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
