import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Phone, MapPin } from "lucide-react"

export default function BookingSummary({
                                           selectedService,
                                           selectedDate,
                                           selectedTime,
                                           customerDetails,
                                           isQuickView = false,
                                       }) {
    if (!selectedService || !selectedDate || !selectedTime) return null

    // Safe date formatting with null checks
    const formatDate = (date) => {
        if (!date || !(date instanceof Date)) return "Invalid Date"
        try {
            return date.toLocaleDateString()
        } catch (error) {
            return "Invalid Date"
        }
    }

    return (
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl text-center">
                    {isQuickView ? "Booking Summary" : "Booking Summary"}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">

                {/* Customer Details Section */}
                {customerDetails && customerDetails.name && (
                    <>
                        <div>
                            <h4 className="font-semibold mb-3 text-base sm:text-lg">Customer Information</h4>
                            <div className="space-y-2 text-sm sm:text-base bg-gray-50 p-3 sm:p-4 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                    <span className="font-medium">{customerDetails.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                    <span className="break-all">{customerDetails.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                    <span>{customerDetails.phone}</span>
                                </div>
                                {customerDetails.location && (
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                        <span>{customerDetails.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Separator />
                    </>
                )}

                {/* Service Details */}
                <div>
                    <h4 className="font-semibold text-base sm:text-lg">{selectedService.name}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{selectedService.description}</p>
                </div>
                <Separator />
                <div className="space-y-2 text-sm sm:text-base">
                    <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium">{formatDate(selectedDate)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{selectedService.duration}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg sm:text-xl font-bold">
                        <span>Total:</span>
                        <span>${selectedService.price}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
