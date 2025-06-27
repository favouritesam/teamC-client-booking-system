import React from 'react';
import {Star,} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Michael Johnson",
    rating: 5,
    text: "Best barbershop in town! The attention to detail is incredible and the atmosphere is perfect.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Smith",
    rating: 5,
    text: "I've been coming here for 2 years. Consistent quality and great service every time.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "James Wilson",
    rating: 5,
    text: "Professional, clean, and they really know their craft. Highly recommended!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];



const Reviews = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about their
                experience.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                          {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                      </AvatarFallback>
                  </Avatar>
                  <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">Verified Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reviews;





