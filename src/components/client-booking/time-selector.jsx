"use client"

import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM",
]

export default function TimeSelector({ selectedTime, onTimeSelect }) {
    return (
        <Card className="w-full max-w-lg bg-white/80 backdrop-blur-sm border-0 shadow-xl min-h-[420px]">
        <CardHeader className="p-2 sm:p-2.5">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base font-semibold">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    Select Time
                </CardTitle>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 font-medium">
                    Choose your preferred appointment time
                </p>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 pt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-2 max-h-64 sm:max-h-80 overflow-hidden items-stretch">
                  {timeSlots.map((time) => (
                        <button
                            key={time}
                            onClick={() => onTimeSelect(time)}
                            className={`p-1.5 sm:p-2 h-8 sm:h-9 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                            selectedTime === time
                            ? "bg-blue-600 text-white ring-1 ring-blue-400"

                            : "bg-gray-50 hover:bg-blue-100 text-gray-700 hover:scale-105"
                            }`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
