"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Star } from "lucide-react"

export default function BookingHeader({ isConfirmed }) {
    return (
        <div className="text-center mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <Avatar className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-lg sm:text-xl font-bold">
                        TBS
                    </AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900">
                        {isConfirmed ? "Booking Confirmed!" : "Review Your Selection"}
                    </h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 mt-2">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                            <span className="text-sm sm:text-base text-gray-600">Downtown Location</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs sm:text-sm font-medium">4.9 (127 reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
