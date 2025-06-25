"use client"

import {useEffect, useState} from "react"
import {useRouter} from "next/navigation"
import {Button} from "@/components/ui/button"
import {useBookingStore} from "@/lib/zustand-store";
import BookingHeader from "@/components/client-booking/booking-header";
import BookingConfirmationSection from "@/components/client-booking/booking-confirmation-section";
import ReviewSelectionView from "@/components/client-booking/review-selection-view";

export default function BookingSummaryPage() {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)
    const {
        selectedService,
        selectedDate,
        isConfirmed,
        isSelectionComplete,
    } = useBookingStore()


    // set true after client has mounted
    useEffect(() => {
        setIsClient(true)
    }, [])

    // Client Check and Redirect Logic
    useEffect(() => {
        // Redirect if no selection is made
        if (isClient && !isSelectionComplete()) {
            console.log("Redirecting to home - incomplete selection")
            router.push("/")
        }
    }, [isSelectionComplete, router, isClient])

    if (!isClient) {
        return (
            <div
                className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="animate-pulse text-gray-500">Loading...</div>
            </div>
        )
    }

    if (!isSelectionComplete() || !selectedService || !selectedDate) {
        return (
            <div
                className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-500 mb-4">No booking data found</p>
                    <Button onClick={() => router.push("/")} className="bg-blue-600 hover:bg-blue-700 text-white">
                        Start New Booking
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400 to-blue-600 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
                <div className="max-w-6xl mx-auto">
                    <BookingHeader/>

                    {isConfirmed ? (
                        /* Confirmation View */
                        <BookingConfirmationSection/>
                    ) : (
                        /* Review Selection View */
                        <ReviewSelectionView/>
                    )}
                </div>
            </div>
        </div>
    )
}
