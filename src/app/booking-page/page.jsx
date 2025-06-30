// import LandingPageHome from "@/components/landing-page-ui/landing-page-home";
//
// export default function HomePage() {
//     const [showBooking, setShowBooking] = useState(false)
//
//     const handleBookNow = () => {
//         setShowBooking(true)
//     }
//
//     const handleBackToLanding = () => {
//         setShowBooking(false)
//     }
//
//     if (showBooking) {
//         return <BookingFlow onBackToLanding={handleBackToLanding} />
//     }
//
//     return <LandingPageHome onBookNow={handleBookNow} />
// }


"use client"

import BookingFlow from "@/components/client-booking/booking-flows";

export default function HomePage() {
    return<BookingFlow />
}