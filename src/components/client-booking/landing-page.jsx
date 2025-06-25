// "use client"
//
// import { useState, useEffect } from "react"
// import {
//     Calendar,
//     Clock,
//     Star,
//     MapPin,
//     Phone,
//     Mail,
//     Scissors,
//     Users,
//     Award,
//     ChevronRight,
//     Menu,
//     X,
//     Instagram,
//     Facebook,
//     Twitter,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
//
//
//
// export const services = [
//     {
//         name: "Classic Haircut",
//         duration: "45 min",
//         price: 35,
//         description: "Professional cut and styling",
//         image: "/images/classicHair.png",
//     },
//     {
//         name: "Beard Trim",
//         duration: "30 min",
//         price: 25,
//         description: "Precision beard shaping and trim",
//         image: "/images/beardTrim.png",
//     },
//     {
//         name: "Hair Wash & Style",
//         duration: "60 min",
//         price: 45,
//         description: "Complete wash, condition and style",
//         image: "/images/hairWash.png",
//     },
//     {
//         name: "Full Service Package",
//         duration: "90 min",
//         price: 75,
//         description: "Haircut, wash, beard trim and styling",
//         image: "/images/full-package.png",
//     },
// ]
//
// const testimonials = [
//     {
//         name: "Michael Johnson",
//         rating: 5,
//         text: "Best barbershop in town! The attention to detail is incredible and the atmosphere is perfect.",
//         avatar: "/images/boyA.png",
//     },
//     {
//         name: "David Smith",
//         rating: 5,
//         text: "I've been coming here for 2 years. Consistent quality and great service every time.",
//         avatar: "/images/boyB.png",
//     },
//     {
//         name: "James Wilson",
//         rating: 5,
//         text: "Professional, clean, and they really know their craft. Highly recommended!",
//         avatar: "/images/boyC.png",
//     },
// ]
//
// export default function LandingPage({ onBookNow }) {
//     const [isMenuOpen, setIsMenuOpen] = useState(false)
//     const [isScrolled, setIsScrolled] = useState(false)
//
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50)
//         }
//         window.addEventListener("scroll", handleScroll)
//         return () => window.removeEventListener("scroll", handleScroll)
//     }, [])
//
//     const scrollToSection = (sectionId) => {
//         const element = document.getElementById(sectionId)
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth" })
//         }
//         setIsMenuOpen(false)
//     }
//
//     return (
//         <div className="min-h-screen bg-white">
//             {/* Navigation */}
//             <nav
//                 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//                     isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
//                 }`}
//             >
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between h-16 sm:h-20">
//
//                         <div className="flex items-center gap-3">
//                             <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
//                                 <AvatarImage src="/placeholder.svg" />
//                                 <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold">
//                                     TBS
//                                 </AvatarFallback>
//                             </Avatar>
//
//                             <div>
//                                 <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold
//                                  text-blue-600 whitespace-nowrap truncate max-w-[160px] sm:max-w-[220px] md:max-w-none">
//                                     Timeless Trims Barbershop
//                                 </h1>
//                                 <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Premium Grooming</p>
//                             </div>
//                         </div>
//
//                         {/* Desktop Navigation */}
//                         <div className="hidden md:flex items-center space-x-8">
//                             <button
//                                 onClick={() => scrollToSection("services")}
//                                 className="text-blue-600 hover:text-blue-600 transition-colors cursor-pointer"
//                             >
//                                 Services
//                             </button>
//                             <button
//                                 onClick={() => scrollToSection("about")}
//                                 className="text-blue-600 hover:text-blue-600 transition-colors cursor-pointer"
//                             >
//                                 About
//                             </button>
//                             <button
//                                 onClick={() => scrollToSection("testimonials")}
//                                 className="text-blue-600 hover:text-blue-600 transition-colors cursor-pointer"
//                             >
//                                 Reviews
//                             </button>
//                             <button
//                                 onClick={() => scrollToSection("contact")}
//                                 className="text-blue-600 hover:text-blue-600 transition-colors cursor-pointer"
//                             >
//                                 Contact
//                             </button>
//                             <Button onClick={onBookNow} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 cursor-pointer">
//                                 Book Now
//                             </Button>
//                         </div>
//
//                         {/* Mobile Menu Button */}
//                         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700 cursor-pointer">
//                             {isMenuOpen ? <X className="w-6 h-6 cursor-pointer" /> : <Menu className="w-6 h-6 cursor-pointer" />}
//                         </button>
//                     </div>
//
//                     {/* Mobile Navigation */}
//                     {isMenuOpen && (
//                         <div className="md:hidden bg-white border-t border-gray-200">
//                             <div className="px-2 pt-2 pb-3 space-y-1">
//                                 <button
//                                     onClick={() => scrollToSection("services")}
//                                     className="block px-3 py-2 text-blue-600 hover:text-blue-600 w-full text-left cursor-pointer"
//                                 >
//                                     Services
//                                 </button>
//                                 <button
//                                     onClick={() => scrollToSection("about")}
//                                     className="block px-3 py-2 text-blue-600 hover:text-blue-600 w-full text-left cursor-pointer"
//                                 >
//                                     About
//                                 </button>
//                                 <button
//                                     onClick={() => scrollToSection("testimonials")}
//                                     className="block px-3 py-2 text-blue-600 hover:text-blue-600 w-full text-left cursor-pointer"
//                                 >
//                                     Reviews
//                                 </button>
//                                 <button
//                                     onClick={() => scrollToSection("contact")}
//                                     className="block px-3 py-2 text-blue-600 hover:text-blue-600 w-full text-left cursor-pointer"
//                                 >
//                                     Contact
//                                 </button>
//                                 <Button onClick={onBookNow} className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
//                                     Book Now
//                                 </Button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </nav>
//
//             {/* Hero Section */}
//             <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0 opacity-10">
//                     <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
//                     <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full blur-3xl"></div>
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400 to-blue-600 rounded-full blur-3xl"></div>
//                 </div>
//
//                 <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <div className="max-w-4xl mx-auto">
//                         <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-indigo-900 mb-6 leading-tight mt-6">
//                             Premium Grooming
//                             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//                                  Redefined
//                             </span>
//                         </h1>
//                         <p className="text-xl sm:text-2xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
//                             Experience the art of traditional barbering with modern techniques. Book your appointment today and
//                             discover the difference.
//                         </p>
//
//                         {/* Stats */}
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
//                             <div className="text-center">
//                                 <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">500+</div>
//                                 <div className="text-gray-500 text-sm sm:text-base">Happy Clients</div>
//                             </div>
//                             <div className="text-center">
//                                 <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">4.9</div>
//                                 <div className="text-gray-500 text-sm sm:text-base">Star Rating</div>
//                             </div>
//                             <div className="text-center">
//                                 <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">5+</div>
//                                 <div className="text-gray-500 text-sm sm:text-base">Years Experience</div>
//                             </div>
//                             <div className="text-center">
//                                 <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">127</div>
//                                 <div className="text-gray-500 text-sm sm:text-base">Reviews</div>
//                             </div>
//                         </div>
//
//                         {/* CTA Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                             <Button
//                                 onClick={onBookNow}
//                                 size="lg"
//                                 className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
//                             >
//                                 <Calendar className="w-5 h-5 mr-2" />
//                                 Book Appointment
//                             </Button>
//                             <Button
//                                 variant="outline"
//                                 size="lg"
//                                 onClick={() => scrollToSection("services")}
//                                 className="cursor-pointer border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
//                             >
//                                 View Services
//                                 <ChevronRight className="w-5 h-5 ml-2" />
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Services Section */}
//             <section id="services" className="py-16 sm:py-24 bg-gray-50">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4">Our Services</h2>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             From classic cuts to modern styles, we offer premium grooming services tailored to your individual needs.
//                         </p>
//                     </div>
//
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {services.map((service, index) => (
//                             <Card key={index}
//                             className="group p-0 overflow-hidden rounded-xl shadow-md bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ">
//
//                                 <div className="aspect-[4/3] relative bg-gray-100">
//                                     <img
//                                         src={service.image || "/placeholder.svg"}
//                                         alt={service.name}
//                                         className="absolute inset-0 w-full h-full object-cover block align-top"
//                                     />
//                                 </div>
//
//                                 <CardContent className="p-4">
//                                     <div className="flex justify-between items-start mb-3">
//                                         <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
//                                         <span className="text-2xl font-bold text-blue-600">${service.price}</span>
//                                     </div>
//                                     <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center text-gray-500 text-sm">
//                                             <Clock className="w-4 h-4 mr-1" />
//                                             {service.duration}
//                                         </div>
//                                         <Button onClick={onBookNow} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
//                                             Book Now
//                                         </Button>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//
//             {/* About Section */}
//             <section id="about" className="py-16 sm:py-24 bg-white">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//                         <div>
//                             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
//                                 Crafting Excellence Since 2019
//                             </h2>
//                             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                                 At Timeless Trim Barbershop, we believe that grooming is an art form. Our skilled barbers combine traditional
//                                 techniques with modern innovation to deliver exceptional results that exceed your expectations.
//                             </p>
//                             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                                 Located in the heart of downtown, we've built our reputation on quality, consistency, and unparalleled
//                                 customer service. Every visit is an experience designed to leave you looking and feeling your absolute
//                                 best.
//                             </p>
//
//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
//                                 <div className="text-center sm:text-left">
//                                     <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
//                                         <Scissors className="w-6 h-6 text-blue-600" />
//                                     </div>
//                                     <h4 className="font-semibold text-gray-900 mb-1">Expert Barbers</h4>
//                                     <p className="text-sm text-gray-600">Skilled professionals with years of experience</p>
//                                 </div>
//                                 <div className="text-center sm:text-left">
//                                     <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
//                                         <Award className="w-6 h-6 text-blue-600" />
//                                     </div>
//                                     <h4 className="font-semibold text-gray-900 mb-1">Premium Quality</h4>
//                                     <p className="text-sm text-gray-600">Only the finest products and techniques</p>
//                                 </div>
//                                 <div className="text-center sm:text-left">
//                                     <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
//                                         <Users className="w-6 h-6 text-blue-600" />
//                                     </div>
//                                     <h4 className="font-semibold text-gray-900 mb-1">Personal Service</h4>
//                                     <p className="text-sm text-gray-600">Tailored experience for every client</p>
//                                 </div>
//                             </div>
//
//                             <Button onClick={onBookNow} size="lg" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
//                                 Experience the Difference
//                             </Button>
//                         </div>
//
//                         <div className="relative">
//                             <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl">
//                                 <img
//                                     src="/images/babHair.png"
//                                     alt="Timeless trim Barbershop Interior"
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//
//                             {/* Floating Stats Card */}
//                             <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0 p-6">
//                                 <div className="flex items-center gap-4">
//                                     <div className="flex -space-x-2">
//                                         {[1, 2, 3].map((i) => (
//                                             <Avatar key={i} className="w-10 h-10 border-2 border-white">
//                                                 <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${i}`} />
//                                                 <AvatarFallback>U{i}</AvatarFallback>
//                                             </Avatar>
//                                         ))}
//                                     </div>
//                                     <div>
//                                         <div className="flex items-center gap-1 mb-1">
//                                             {[1, 2, 3, 4, 5].map((star) => (
//                                                 <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                                             ))}
//                                         </div>
//                                         <p className="text-sm font-medium text-gray-900">500+ Happy Clients</p>
//                                     </div>
//                                 </div>
//                             </Card>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Testimonials Section */}
//             <section id="testimonials" className="py-16 sm:py-24 bg-gray-50">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4">What Our Clients Say</h2>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             Don't just take our word for it. Here's what our satisfied clients have to say about their
//                             experience.
//                         </p>
//                     </div>
//
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {testimonials.map((testimonial, index) => (
//                             <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                                 <CardContent className="p-8">
//                                     <div className="flex items-center gap-1 mb-4">
//                                         {[...Array(testimonial.rating)].map((_, i) => (
//                                             <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                                         ))}
//                                     </div>
//                                     <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
//                                     <div className="flex items-center gap-3">
//                                         <Avatar className="w-12 h-12">
//                                             <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
//                                             <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
//                                                 {testimonial.name
//                                                     .split(" ")
//                                                     .map((n) => n[0])
//                                                     .join("")}
//                                             </AvatarFallback>
//                                         </Avatar>
//                                         <div>
//                                             <p className="font-semibold text-gray-900">{testimonial.name}</p>
//                                             <p className="text-sm text-gray-500">Verified Client</p>
//                                         </div>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* Contact Section */}
//             <section id="contact" className="py-16 sm:py-24 bg-white">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4">Visit Us Today</h2>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             Ready for your next great haircut? We're conveniently located in downtown and ready to serve you.
//                         </p>
//                     </div>
//
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//
//                         {/* Contact Info */}
//                         <div className="space-y-8">
//                             <div>
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
//                                 <div className="space-y-4">
//                                     <div className="flex items-center gap-4">
//                                         <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                                             <MapPin className="w-6 h-6 text-blue-600" />
//                                         </div>
//                                         <div>
//                                             <p className="font-semibold text-gray-900">Address</p>
//                                             <p className="text-gray-600">123 Main Street, Downtown</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center gap-4">
//                                         <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                                             <Phone className="w-6 h-6 text-blue-600" />
//                                         </div>
//                                         <div>
//                                             <p className="font-semibold text-gray-900">Phone</p>
//                                             <p className="text-gray-600">(+234) 123-4567</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center gap-4">
//                                         <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                                             <Mail className="w-6 h-6 text-blue-600" />
//                                         </div>
//                                         <div>
//                                             <p className="font-semibold text-gray-900">Email</p>
//                                             <p className="text-gray-600">info@timelesstrimbarbershop.com</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center gap-4">
//                                         <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                                             <Clock className="w-6 h-6 text-blue-600" />
//                                         </div>
//                                         <div>
//                                             <p className="font-semibold text-gray-900">Hours</p>
//                                             <p className="text-gray-600">Mon-Sat: 9AM-7PM</p>
//                                             <p className="text-gray-600">Sunday: 10AM-5PM</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//                             {/* Social Links */}
//                             <div>
//                                 <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
//                                 <div className="flex gap-4">
//                                     <button className="cursor-pointer w-10 h-10 bg-blue-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors">
//                                         <Instagram className="w-5 h-5 text-blue-600 hover:text-blue-600" />
//                                     </button>
//                                     <button className="cursor-pointer w-10 h-10 bg-blue-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors">
//                                         <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-600" />
//                                     </button>
//                                     <button className="cursor-pointer w-10 h-10 bg-blue-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors">
//                                         <Twitter className="w-5 h-5 text-blue-600 hover:text-blue-600" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* Map Section with Image */}
//                             <div className="aspect-[4/3]">
//                                 <img
//                                     src="/images/map.png"
//                                     alt="Interactive Map"
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//
//                     </div>
//                 </div>
//             </section>
//
//
//             {/* CTA Section */}
//             <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready for Your Best Look Yet?</h2>
//                     <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//                         Don't wait - book your appointment today and experience the Timeless Trim Barbershop difference.
//                     </p>
//                     <Button
//                         onClick={onBookNow}
//                         size="lg"
//                         className="cursor-pointer bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
//                     >
//                         <Calendar className="w-5 h-5 mr-2" />
//                         Book Your Appointment
//                     </Button>
//                 </div>
//             </section>
//
//             {/* Footer */}
//             <footer className="bg-gray-900 text-white py-12">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                         <div className="md:col-span-2">
//                             <div className="flex items-center gap-3 mb-4">
//                                 <Avatar className="w-10 h-10">
//                                     <AvatarImage src="/placeholder.svg" />
//                                     <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold">
//                                         TBS
//                                     </AvatarFallback>
//                                 </Avatar>
//                                 <div>
//                                     <h3 className="text-xl font-bold">Timeless Trim Barbershop</h3>
//                                     <p className="text-gray-400 text-sm">Premium Grooming</p>
//                                 </div>
//                             </div>
//                             <p className="text-gray-400 mb-4 max-w-md">
//                                 Experience the art of traditional barbering with modern techniques. Your satisfaction is our commitment.
//                             </p>
//                             <div className="flex gap-4">
//                                 <button className="cursor-pointer w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
//                                     <Instagram className="w-4 h-4" />
//                                 </button>
//                                 <button className="cursor-pointer w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
//                                     <Facebook className="w-4 h-4" />
//                                 </button>
//                                 <button className="cursor-pointer w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
//                                     <Twitter className="w-4 h-4" />
//                                 </button>
//                             </div>
//                         </div>
//
//                         <div>
//                             <h4 className="font-semibold mb-4">Quick Links</h4>
//                             <div className="space-y-2">
//                                 <button
//                                     onClick={() => scrollToSection("services")}
//                                     className="block text-gray-400 cursor-pointer hover:text-white transition-colors"
//                                 >
//                                     Services
//                                 </button>
//                                 <button
//                                     onClick={() => scrollToSection("about")}
//                                     className="block text-gray-400 cursor-pointer hover:text-white transition-colors"
//                                 >
//                                     About Us
//                                 </button>
//                                 <button
//                                     onClick={() => scrollToSection("testimonials")}
//                                     className="block text-gray-400 cursor-pointer hover:text-white transition-colors"
//                                 >
//                                     Reviews
//                                 </button>
//                                 <button onClick={onBookNow} className=" cursor-pointer block text-gray-400 hover:text-white transition-colors">
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//
//                         <div>
//                             <h4 className="font-semibold mb-4">Contact Info</h4>
//                             <div className="space-y-2 text-gray-400 text-sm">
//                                 <p>123 Main Street</p>
//                                 <p>Downtown</p>
//                                 <p>(+234) 123-4567</p>
//                                 <p>info@timelesstrimbarbershop.com</p>
//                             </div>
//                         </div>
//                     </div>
//
//                     <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
//                         <p>&copy; 2024 Timeless Trim Barbershop. All rights reserved.</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }
