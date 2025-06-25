"use client"
//
// import { useState } from "react"
// import BookingFlow from "@/components/client-booking/booking-flows";
// import LandingPage from "@/components/client-booking/landing-page";
//
//
// export default function HomePage() {
//   const [showBooking, setShowBooking] = useState(false)
//
//   const handleBookNow = () => {
//     setShowBooking(true)
//   }
//
//   const handleBackToLanding = () => {
//     setShowBooking(false)
//   }
//
//   if (showBooking) {
//     return <BookingFlow onBackToLanding={handleBackToLanding} />
//   }
//
//   return <LandingPage onBookNow={handleBookNow} />
// }

import BookingFlow from "@/components/client-booking/booking-flows";

export default function HomePage() {
  return <BookingFlow />
}

