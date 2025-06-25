"use client"

import { useRouter } from "next/navigation"
import { useBookingStore } from "@/lib/zustand-store";
import Header from "@/components/client-booking/header";
import ServiceSelector from "@/components/client-booking/service-selector";
import CalendarSelector from "@/components/client-booking/calender-selector";
import TimeSelector from "@/components/client-booking/time-selector";
import CustomerDetailsForm from "@/components/client-booking/customer-details-form";

export default function BookingFlow() {
    const router = useRouter()
    const {
        selectedService,
        selectedDate,
        selectedTime,
        customerDetails,
        setSelectedService,
        setSelectedDate,
        setSelectedTime,
    } = useBookingStore()

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400 to-blue-600 rounded-full blur-3xl"></div>
            </div>


            <div className="sticky top-0 z-40 bg-white/80 h-[100px] backdrop-blur-md shadow-md">
                <Header />
            </div>


            <div className="relative z-10 mx-auto px-3 sm:px-4 lg:px-14 py-4 sm:py-6 lg:py-8">
                <div className="mb-8 sm:mb-12">
                    <ServiceSelector selectedService={selectedService} onServiceSelect={setSelectedService} />
                </div>

                {/* Date & Time Selection - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    <CalendarSelector selectedDate={selectedDate} onDateSelect={setSelectedDate} />
                    <TimeSelector selectedTime={selectedTime} onTimeSelect={setSelectedTime} />
                </div>

                {/* Customer Details - Full Width */}
                <div className="mb-8 sm:mb-12">
                    <CustomerDetailsForm customerDetails={customerDetails} />
                </div>
            </div>
        </div>
    )
}
