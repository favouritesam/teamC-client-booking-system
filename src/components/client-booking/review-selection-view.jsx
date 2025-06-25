import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ArrowLeft, Calendar, CheckCircle, Clock, CreditCard, Mail, MapPin, Phone, User} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {useBookingStore} from "@/lib/zustand-store";

export default function ReviewSelectionView(){
    const {
        selectedService,
        selectedDate,
        selectedTime,
        customerDetails,
        bookingId,
        getTotalPrice,
        setIsConfirmed,
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


    const handleConfirmBooking = async () => {
        setIsConfirmed(true);

        const formData = {
            name: customerDetails.name,
            email: customerDetails.email,
            phone: customerDetails.phone,
            location: customerDetails.location || "N/A",
            service: selectedService.name,
            date: formatDate(selectedDate),
            time: selectedTime,
            price: `$${selectedService.price}`,
            bookingId: bookingId,
            message: `Booking Confirmation from Timeless Trim Barbershop.`,
        };

        try {
            const response = await fetch("https://formspree.io/f/myzjbjkj", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.ok) {
                alert("Booking confirmation sent!");
            } else {
                alert("Booking confirmed, but email failed to send.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email.");
        }
    };

    return(
        <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

                {/* Selection Summary */}
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                    <CardHeader className="p-4 sm:p-6">
                        <CardTitle className="text-xl sm:text-2xl text-indigo-900">Your Selection</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">

                        {/* Selected Service */}
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="font-semibold text-base sm:text-lg">Selected Service</h3>
                            <div
                                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                                <img
                                    src={selectedService.image || "/placeholder.svg"}
                                    alt={selectedService.name}
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                                />
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-sm sm:text-base">{selectedService.name}</h4>
                                    <p className="text-gray-600 text-xs sm:text-sm mb-2">{selectedService.description}</p>
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <Badge variant="outline"
                                               className="flex items-center gap-1 text-xs sm:text-sm">
                                            <Clock className="w-2 h-2 sm:w-3 sm:h-3"/>
                                            {selectedService.duration}
                                        </Badge>
                                        <span
                                            className="font-bold text-sm sm:text-base">${selectedService.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Separator/>

                        {/* Customer Details */}
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="font-semibold text-base sm:text-lg text-indigo-900">Customer Details</h3>
                            <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                                    <div className="flex items-center gap-2">
                                        <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
                                        <span className="text-xs sm:text-sm">
                                            <strong>Name:</strong> {customerDetails.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
                                        <span className="text-xs sm:text-sm break-all">
                                            <strong>Email:</strong> {customerDetails.email}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
                                        <span className="text-xs sm:text-sm">
                                            <strong>Phone:</strong> {customerDetails.phone}
                                        </span>
                                    </div>

                                    {customerDetails.location && (
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
                                            <span className="text-xs sm:text-sm">
                                                <strong>Location:</strong> {customerDetails.location}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Separator/>

                        {/* Selected Date & Time */}
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="font-semibold text-base sm:text-lg text-indigo-900">Appointment Details</h3>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <div
                                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"/>
                                    <div>
                                        <p className="text-xs text-gray-600">Date</p>
                                        <p className="font-semibold text-xs sm:text-sm">
                                            {formatDate(selectedDate, {
                                                weekday: "short",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"/>
                                    <div>
                                        <p className="text-xs text-gray-600">Time</p>
                                        <p className="font-semibold text-xs sm:text-sm">{selectedTime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Separator/>

                        {/* Total */}
                        <div className="flex justify-between items-center text-lg sm:text-xl font-bold">
                            <span>Total:</span>
                            <span>${getTotalPrice()}</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Booking Actions */}
                <div className="space-y-4 sm:space-y-6">
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                        <CardHeader className="p-4 sm:p-6">
                            <CardTitle className="text-lg sm:text-xl text-indigo-900">Complete Your Booking</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                            <p className="text-xs sm:text-sm text-gray-600">
                                Review your selection and confirm your appointment. You'll receive a
                                confirmation email with all
                                the details.
                            </p>

                            <div className="space-y-2 sm:space-y-3">
                                <Button
                                    onClick={handleConfirmBooking}
                                    className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg text-base sm:text-lg py-4 sm:py-6"
                                >
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2"/>
                                    Confirm Booking
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={() => router.push("/")}
                                    className="w-full text-sm sm:text-base cursor-pointer"
                                >
                                    <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2"/>
                                    Back to Selection
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                        <CardContent className="p-4 sm:p-6">
                            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-green-600"/>
                                <h4 className="font-semibold text-sm sm:text-base text-indigo-900">Payment Information</h4>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                Payment will be collected at the time of service. We accept cash, credit
                                cards, and digital payments.
                            </p>
                            <div className="text-xs text-gray-500">
                                <p>• No booking fees</p>
                                <p>• Free cancellation up to 24 hours</p>
                                <p>• Secure booking system</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}