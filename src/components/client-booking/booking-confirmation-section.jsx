"use client"


import {Badge} from "@/components/ui/badge"
import {
    ArrowLeft,
    CheckCircle,
    Calendar,
    Clock,
    User,
    MapPin,
    Download,
    Share2,
    Mail,
    Phone,
} from "lucide-react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {useBookingStore} from "@/lib/zustand-store";
import {useRouter} from "next/navigation";

export default function BookingConfirmationSection() {
    const router = useRouter()
    const {
        selectedService,
        selectedDate,
        selectedTime,
        customerDetails,
        bookingId,
        resetBooking,
    } = useBookingStore()


    // Safe date formatting with null checks
    const formatDate = (date, options = {}) => {
        if (!date || !(date instanceof Date)) return "Invalid Date"
        try {
            return date.toLocaleDateString("en-US", options)
        } catch (error) {
            return "Invalid Date"
        }
    }


    const handleDownloadConfirmation = () => {
        const confirmationText = `
BOOKING CONFIRMATION
Timeless Trim Barbershop

Booking ID: ${bookingId}

Customer Details:
Name: ${customerDetails.name}
Email: ${customerDetails.email}
Phone: ${customerDetails.phone}
${customerDetails.location ? `Location: ${customerDetails.location}` : ""}

Service: ${selectedService.name}
Date: ${formatDate(selectedDate)}
Time: ${selectedTime}
Duration: ${selectedService.duration}
Price: $${selectedService.price}

Location: Downtown Location
Phone: (+234) 123-4567
Email: info@timelesstrimbarbershop.com

Thank you for choosing Timeless Trim Barbershop!
    `

        const blob = new Blob([confirmationText], {type: "text/plain"})
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `booking-confirmation-${bookingId}.txt`
        a.click()
        URL.revokeObjectURL(url)
    }

    // The handleShare function lets the user share their appointment confirmation.
    // It uses the browser's native sharing features, and if those aren't available,
    // it copies the text to the clipboard.

    const handleShare = async () => {
        const shareData = {
            title: "Appointment Confirmation",
            text: `My appointment at Timeless Trim Barbershop is confirmed for ${formatDate(selectedDate)} at ${selectedTime}`,
        }

        if (navigator.share) {
            try {
                await navigator.share(shareData)
            } catch (err) {
                console.log("Error sharing:", err)
            }
        } else {
            navigator.clipboard.writeText(shareData.text)
            alert("Booking details copied to clipboard!")
        }
    }

    const handleBackToBooking = () => {
        resetBooking()
        router.push("/")
    }


    return (
        <div className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-3 sm:space-y-4">
                <div
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 shadow-lg">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white"/>
                </div>
                <p className="text-sm sm:text-base text-indigo-900">Your appointment has been successfully scheduled</p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="text-center p-4 sm:p-6 pb-2 sm:pb-4">
                    <CardTitle className="text-lg sm:text-xl">Timeless Trim Barbershop</CardTitle>
                    <Badge variant="secondary"
                           className="bg-blue-100 text-gray-700 px-3 sm:px-4 py-1 text-xs sm:text-sm">
                        Booking ID: {bookingId}
                    </Badge>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">

                    {/* Service Details */}
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <div className="sm:w-16 sm:h-16 rounded-lg flex items-center justify-center">
                            <img
                                src={selectedService.image}
                                alt={selectedService.name}
                                className="w-full h-full rounded-md mt-6 object-cover"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-base sm:text-lg">{selectedService.name}</h3>
                            <p className="text-gray-600 text-xs sm:text-sm mb-2">{selectedService.description}</p>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <Badge variant="outline"
                                       className="flex items-center gap-1 text-xs sm:text-sm">
                                    <Clock className="w-2 h-2 sm:w-3 sm:h-3"/>
                                    {selectedService.duration}
                                </Badge>
                                <span
                                    className="font-bold text-base sm:text-lg">${selectedService.price}</span>
                            </div>
                        </div>
                    </div>

                    {/* Customer Details */}
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                            <User className="w-3 h-3 sm:w-4 sm:h-4"/>
                            Customer Details
                        </h4>
                        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                            <div className="flex items-center gap-2">
                                <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
                                <span>
                                    <strong>Name:</strong> {customerDetails.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
                                <span className="break-all">
                                    <strong>Email:</strong> {customerDetails.email}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
                                <span>
                                    <strong>Phone:</strong> {customerDetails.phone}
                                </span>
                            </div>
                            {customerDetails.location && (
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
                                    <span>
                                        <strong>Location:</strong> {customerDetails.location}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    <Separator/>

                    {/* Appointment Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"/>
                            <div>
                                <p className="text-xs sm:text-sm text-gray-600">Date</p>
                                <p className="font-semibold text-sm sm:text-base">
                                    {formatDate(selectedDate, {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"/>
                            <div>
                                <p className="text-xs sm:text-sm text-gray-600">Time</p>
                                <p className="font-semibold text-sm sm:text-base">{selectedTime}</p>
                            </div>
                        </div>
                    </div>

                    <Separator/>

                    {/* Contact Information */}
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4"/>
                            Location & Contact
                        </h4>
                        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                            <p>
                                <strong>Address:</strong> 123 Main Street, Downtown
                            </p>
                            <p>
                                <strong>Phone:</strong> (+234) 123-4567
                            </p>
                            <p>
                                <strong>Email:</strong> info@timelesstrimbarbershop.com
                            </p>
                        </div>
                    </div>

                    {/* Important Notes */}
                    <div className="bg-amber-50 p-3 sm:p-4 rounded-lg border border-amber-200">
                        <h4 className="font-semibold mb-2 text-amber-800 text-sm sm:text-base">Important
                            Notes</h4>
                        <ul className="text-xs sm:text-sm text-amber-700 space-y-1">
                            <li>• Please arrive 10 minutes before your appointment</li>
                            <li>• Cancellations must be made 24 hours in advance</li>
                            <li>• Bring a valid ID for your appointment</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                    variant="outline"
                    onClick={handleBackToBooking}
                    className="flex items-center gap-2 text-sm sm:text-base"
                >
                    <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4"/>
                    Book Another Appointment
                </Button>

                <Button
                    variant="outline"
                    onClick={handleDownloadConfirmation}
                    className="flex items-center gap-2 text-sm sm:text-base"
                >
                    <Download className="w-3 h-3 sm:w-4 sm:h-4"/>
                    Download Confirmation
                </Button>

                <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 text-sm sm:text-base"
                    onClick={handleShare}
                >
                    <Share2 className="w-3 h-3 sm:w-4 sm:h-4"/>
                    Share Details
                </Button>
            </div>
        </div>
    )
}
