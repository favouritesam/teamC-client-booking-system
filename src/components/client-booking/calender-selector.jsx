"use client"

import {useState, useEffect} from "react"
import {Calendar, ChevronLeft, ChevronRight} from "lucide-react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"

export default function CalendarSelector({selectedDate, onDateSelect}) {
    const [currentMonth, setCurrentMonth] = useState(() => {
        // Use a stable date for initial render
        const now = new Date()
        return new Date(now.getFullYear(), now.getMonth(), 1)
    })
    const [isClient, setIsClient] = useState(false)
    const [today, setToday] = useState(null)

    useEffect(() => {
        setIsClient(true)
        // Set today only on client side to avoid hydration mismatch
        const now = new Date()
        now.setHours(0, 0, 0, 0)
        setToday(now)
    }, [])

    const getDaysInMonth = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const daysInMonth = lastDay.getDate()
        const startingDayOfWeek = firstDay.getDay()

        const days = []

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null)
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day))
        }

        return days
    }

    const isDateAvailable = (date) => {
        if (!today) return true // During SSR, assume all dates are available
        return date >= today
    }

    const isToday = (date) => {
        if (!today || !isClient) return false // Only check on client side
        return date.toDateString() === today.toDateString()
    }

    const navigateMonth = (direction) => {
        setCurrentMonth((prev) => {
            const newDate = new Date(prev)
            if (direction === "prev") {
                newDate.setMonth(prev.getMonth() - 1)
            } else {
                newDate.setMonth(prev.getMonth() + 1)
            }
            return newDate
        })
    }

    return (
        <Card className="w-full max-w-lg bg-white/80 backdrop-blur-sm border-0 shadow-xl min-h-[420px]">
        <CardHeader className="p-2 sm:p-2.5">

                <CardTitle className="flex items-center justify-between w-full">
                    {/* Left: Icon + Title */}
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"/>
                        <span className="text-sm sm:text-base font-semibold">Select Date</span>
                    </div>

                    {/* Right: Month Navigation */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigateMonth("prev")}
                            className="h-8 w-8 sm:h-10 sm:w-10 p-0"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5"/>
                        </Button>
                        <span className="text-sm sm:text-base font-medium min-w-[80px] text-center">
                               {currentMonth.toLocaleDateString("en-US", {month: "long", year: "numeric"})}
                        </span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigateMonth("next")}
                            className="h-8 w-8 sm:h-10 sm:w-10 p-0"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5"/>
                        </Button>
                    </div>
                </CardTitle>

            </CardHeader>
            <CardContent className="p-3 sm:p-4 pt-0">
                <div className="space-y-4 sm:space-y-6">
                    {/* Calendar Header */}
                    <div
                        className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-sm sm:text-base font-medium text-gray-500">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                            <div key={day} className="p-1 text-[10px] sm:text-xs">
                                <span className="hidden sm:inline">{day}</span>
                                <span className="sm:hidden">{day.slice(0, 1)}</span>
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-[1px] sm:gap-[2px]">

                        {getDaysInMonth(currentMonth).map((date, index) => {
                            if (!date) {
                                return <div key={index} className="p-2 sm:p-3"></div>
                            }

                            // Safe date comparison with null checks
                            const isSelected =
                                selectedDate && selectedDate instanceof Date && date.toDateString() === selectedDate.toDateString()
                            const isAvailable = isDateAvailable(date)
                            const isTodayDate = isToday(date)

                            return (
                                <button
                                    key={index}
                                    onClick={() => isAvailable && onDateSelect(date)}
                                    disabled={!isAvailable}
                                    className={`
                                        p-0.5 sm:p-1 h-6 sm:h-7 lg:h-8 w-full rounded text-[10px] sm:text-xs font-medium transition-all duration-200
                                        ${isSelected ? "bg-blue-600 text-white ring-1 ring-blue-400" : ""}
                                        ${!isSelected && isAvailable ? "bg-gray-50 hover:bg-blue-100 text-gray-700 hover:scale-105" : ""}
                                        ${!isSelected && !isAvailable ? "bg-gray-25 text-gray-300 cursor-not-allowed" : ""}
                                        ${isTodayDate && !isSelected ? "ring-2 ring-blue-300" : ""}
                                      `}
                                >
                                    {date.getDate()}
                                </button>
                            )
                        })}
                    </div>

                    {/* Calendar Legend */}
                    <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 pt-4 border-t">
                        {getDaysInMonth(currentMonth).some((d) => d && today && d.toDateString() === today.toDateString()) && (
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full ring-2 ring-blue-300"></div>
                                <span>Today</span>
                            </div>
                        )}
                        {selectedDate && (
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                <span>Selected</span>
                            </div>
                        )}
                        {getDaysInMonth(currentMonth).some((d) => d && today && d < today) && (
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                <span>Unavailable</span>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

