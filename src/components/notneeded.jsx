// "use client"
//
// import {useEffect, useState} from "react"
// import {useRouter} from "next/navigation"
// import {
//     ArrowLeft,
//     CheckCircle,
//     Calendar,
//     Clock,
//     User,
//     MapPin,
//     Star,
//     Download,
//     Share2,
//     CreditCard,
//     Mail,
//     Phone,
// } from "lucide-react"
// import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
// import {Button} from "@/components/ui/button"
// import {Badge} from "@/components/ui/badge"
// import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
// import {Separator} from "@/components/ui/separator"
// import {useBookingStore} from "@/lib/zustand-store";
//
// export default function BookingSummaryPage() {
//     const router = useRouter()
//     const [isClient, setIsClient] = useState(false)
//     const {
//         selectedService,
//         selectedDate,
//         selectedTime,
//         customerDetails,
//         bookingId,
//         isConfirmed,
//         isSelectionComplete,
//         getTotalPrice,
//         setIsConfirmed,
//         resetBooking,
//     } = useBookingStore()
//
//
//     // set true after client has mounted
//     useEffect(() => {
//         setIsClient(true)
//     }, [])
//
//     // Client Check and Redirect Logic
//     useEffect(() => {
//         // Redirect if no selection is made
//         if (isClient && !isSelectionComplete()) {
//             console.log("Redirecting to home - incomplete selection")
//             router.push("/")
//         }
//     }, [isSelectionComplete, router, isClient])
//
//     // // Safe date formatting with null checks
//     const formatDate = (date, options = {}) => {
//         if (!date || !(date instanceof Date)) return "Invalid Date"
//         try {
//             return date.toLocaleDateString("en-US", options)
//         } catch (error) {
//             return "Invalid Date"
//         }
//     }
//
//
//     console.log("BookingSummaryPage render:", {
//         isClient,
//         selectedService,
//         selectedDate,
//         selectedTime,
//         customerDetails,
//         bookingId,
//         isSelectionComplete: isSelectionComplete(),
//     })
//
//     if (!isClient) {
//         return (
//             <div
//                 className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
//                 <div className="animate-pulse text-gray-500">Loading...</div>
//             </div>
//         )
//     }
//
//     if (!isSelectionComplete() || !selectedService || !selectedDate) {
//         return (
//             <div
//                 className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
//                 <div className="text-center">
//                     <p className="text-gray-500 mb-4">No booking data found</p>
//                     <Button onClick={() => router.push("/")} className="bg-blue-600 hover:bg-blue-700 text-white">
//                         Start New Booking
//                     </Button>
//                 </div>
//             </div>
//         )
//     }
//
//     const handleConfirmBooking = async () => {
//         setIsConfirmed(true);
//
//         const formData = {
//             name: customerDetails.name,
//             email: customerDetails.email,
//             phone: customerDetails.phone,
//             location: customerDetails.location || "N/A",
//             service: selectedService.name,
//             date: formatDate(selectedDate),
//             time: selectedTime,
//             price: `$${selectedService.price}`,
//             bookingId: bookingId,
//             message: `Booking Confirmation from Timeless Trim Barbershop.`,
//         };
//
//         try {
//             const response = await fetch("https://formspree.io/f/myzjbjkj", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });
//
//             const result = await response.json();
//
//             if (result.ok) {
//                 alert("Booking confirmation sent!");
//             } else {
//                 alert("Booking confirmed, but email failed to send.");
//             }
//         } catch (error) {
//             console.error("Error sending email:", error);
//             alert("Failed to send email.");
//         }
//     };
//
//
//     const handleDownloadConfirmation = () => {
//         const confirmationText = `
// BOOKING CONFIRMATION
// Timeless Trim Barbershop
//
// Booking ID: ${bookingId}
//
// Customer Details:
// Name: ${customerDetails.name}
// Email: ${customerDetails.email}
// Phone: ${customerDetails.phone}
// ${customerDetails.location ? `Location: ${customerDetails.location}` : ""}
//
// Service: ${selectedService.name}
// Date: ${formatDate(selectedDate)}
// Time: ${selectedTime}
// Duration: ${selectedService.duration}
// Price: $${selectedService.price}
//
// Location: Downtown Location
// Phone: (+234) 123-4567
// Email: info@timelesstrimbarbershop.com
//
// Thank you for choosing Timeless Trim Barbershop!
//     `
//
//         const blob = new Blob([confirmationText], {type: "text/plain"})
//         const url = URL.createObjectURL(blob)
//         const a = document.createElement("a")
//         a.href = url
//         a.download = `booking-confirmation-${bookingId}.txt`
//         a.click()
//         URL.revokeObjectURL(url)
//     }
//
//     // The handleShare function lets the user share their appointment confirmation.
//     // It uses the browser's native sharing features, and if those aren't available,
//     // it copies the text to the clipboard.
//
//     const handleShare = async () => {
//         const shareData = {
//             title: "Appointment Confirmation",
//             text: `My appointment at Timeless Trim Barbershop is confirmed for ${formatDate(selectedDate)} at ${selectedTime}`,
//         }
//
//         if (navigator.share) {
//             try {
//                 await navigator.share(shareData)
//             } catch (err) {
//                 console.log("Error sharing:", err)
//             }
//         } else {
//              navigator.clipboard.writeText(shareData.text)
//             alert("Booking details copied to clipboard!")
//         }
//     }
//
//     const handleBackToBooking = () => {
//         resetBooking()
//         router.push("/")
//     }
//
//     return (
//         <div
//             className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
//
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//                 <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full blur-3xl"></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400 to-blue-600 rounded-full blur-3xl"></div>
//             </div>
//
//             <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
//                 <div className="max-w-6xl mx-auto">
//
//                     {/* Header */}
//                     <div className="text-center mb-6 sm:mb-8">
//                         <div
//                             className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
//                             <Avatar className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
//                                 <AvatarImage src="/placeholder.svg"/>
//                                 <AvatarFallback
//                                     className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-lg sm:text-xl font-bold">
//                                     TBS
//                                 </AvatarFallback>
//                             </Avatar>
//                             <div className="text-center sm:text-left">
//                                 <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900">
//                                     {isConfirmed ? "Booking Confirmed!" : "Review Your Selection"}
//                                 </h1>
//                                 <div
//                                     className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 mt-2">
//                                     <div className="flex items-center gap-2">
//                                         <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
//                                         <span className="text-sm sm:text-base text-gray-600">Downtown Location</span>
//                                     </div>
//                                     <div className="flex items-center gap-1">
//                                         <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"/>
//                                         <span className="text-xs sm:text-sm font-medium">4.9 (127 reviews)</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                     {isConfirmed ? (
//                         /* Confirmation View */
//                         <div className="space-y-6 sm:space-y-8">
//                             <div className="text-center space-y-3 sm:space-y-4">
//                                 <div
//                                     className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 shadow-lg">
//                                     <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white"/>
//                                 </div>
//                                 <p className="text-sm sm:text-base text-gray-600">Your appointment has been successfully
//                                     scheduled</p>
//                             </div>
//
//                             <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
//                                 <CardHeader className="text-center p-4 sm:p-6 pb-2 sm:pb-4">
//                                     <CardTitle className="text-lg sm:text-xl">Timeless Trim Barbershop</CardTitle>
//                                     <Badge variant="secondary"
//                                            className="bg-blue-100 text-gray-700 px-3 sm:px-4 py-1 text-xs sm:text-sm">
//                                         Booking ID: {bookingId}
//                                     </Badge>
//                                 </CardHeader>
//
//                                 <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
//
//                                     {/* Service Details */}
//                                     <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
//                                         <div className="sm:w-16 sm:h-16 rounded-lg flex items-center justify-center">
//                                             <img
//                                                 src={selectedService.image}
//                                                 alt={selectedService.name}
//                                                 className="w-full h-full rounded-md mt-6 object-cover"
//                                             />
//                                         </div>
//
//                                         <div className="flex-1 min-w-0">
//                                             <h3 className="font-semibold text-base sm:text-lg">{selectedService.name}</h3>
//                                             <p className="text-gray-600 text-xs sm:text-sm mb-2">{selectedService.description}</p>
//                                             <div className="flex items-center gap-3 sm:gap-4">
//                                                 <Badge variant="outline"
//                                                        className="flex items-center gap-1 text-xs sm:text-sm">
//                                                     <Clock className="w-2 h-2 sm:w-3 sm:h-3"/>
//                                                     {selectedService.duration}
//                                                 </Badge>
//                                                 <span
//                                                     className="font-bold text-base sm:text-lg">${selectedService.price}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//
//                                     {/* Customer Details */}
//                                     <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
//                                         <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
//                                             <User className="w-3 h-3 sm:w-4 sm:h-4"/>
//                                             Customer Details
//                                         </h4>
//                                         <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
//                                             <div className="flex items-center gap-2">
//                                                 <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
//                                                 <span>
//                                                     <strong>Name:</strong> {customerDetails.name}
//                                                 </span>
//                                             </div>
//                                             <div className="flex items-center gap-2">
//                                                 <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
//                                                 <span className="break-all">
//                                                       <strong>Email:</strong> {customerDetails.email}
//                                                 </span>
//                                             </div>
//                                             <div className="flex items-center gap-2">
//                                                 <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
//                                                 <span>
//                                                     <strong>Phone:</strong> {customerDetails.phone}
//                                                 </span>
//                                             </div>
//                                             {customerDetails.location && (
//                                                 <div className="flex items-center gap-2">
//                                                     <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
//                                                     <span>
//                                                     <strong>Location:</strong> {customerDetails.location}
//                                                 </span>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//
//                                     <Separator/>
//
//                                     {/* Appointment Details */}
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                                         <div className="flex items-center gap-3">
//                                             <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"/>
//                                             <div>
//                                                 <p className="text-xs sm:text-sm text-gray-600">Date</p>
//                                                 <p className="font-semibold text-sm sm:text-base">
//                                                     {formatDate(selectedDate, {
//                                                         weekday: "long",
//                                                         year: "numeric",
//                                                         month: "long",
//                                                         day: "numeric",
//                                                     })}
//                                                 </p>
//                                             </div>
//                                         </div>
//
//                                         <div className="flex items-center gap-3">
//                                             <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"/>
//                                             <div>
//                                                 <p className="text-xs sm:text-sm text-gray-600">Time</p>
//                                                 <p className="font-semibold text-sm sm:text-base">{selectedTime}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//
//                                     <Separator/>
//
//                                     {/* Contact Information */}
//                                     <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
//                                         <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
//                                             <MapPin className="w-3 h-3 sm:w-4 sm:h-4"/>
//                                             Location & Contact
//                                         </h4>
//                                         <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
//                                             <p>
//                                                 <strong>Address:</strong> 123 Main Street, Downtown
//                                             </p>
//                                             <p>
//                                                 <strong>Phone:</strong> (+234) 123-4567
//                                             </p>
//                                             <p>
//                                                 <strong>Email:</strong> info@timelesstrimbarbershop.com
//                                             </p>
//                                         </div>
//                                     </div>
//
//                                     {/* Important Notes */}
//                                     <div className="bg-amber-50 p-3 sm:p-4 rounded-lg border border-amber-200">
//                                         <h4 className="font-semibold mb-2 text-amber-800 text-sm sm:text-base">Important
//                                             Notes</h4>
//                                         <ul className="text-xs sm:text-sm text-amber-700 space-y-1">
//                                             <li>• Please arrive 10 minutes before your appointment</li>
//                                             <li>• Cancellations must be made 24 hours in advance</li>
//                                             <li>• Bring a valid ID for your appointment</li>
//                                         </ul>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//
//                             {/* Action Buttons */}
//                             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                                 <Button
//                                     variant="outline"
//                                     onClick={handleBackToBooking}
//                                     className="flex items-center gap-2 text-sm sm:text-base"
//                                 >
//                                     <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4"/>
//                                     Book Another Appointment
//                                 </Button>
//
//                                 <Button
//                                     variant="outline"
//                                     onClick={handleDownloadConfirmation}
//                                     className="flex items-center gap-2 text-sm sm:text-base"
//                                 >
//                                     <Download className="w-3 h-3 sm:w-4 sm:h-4"/>
//                                     Download Confirmation
//                                 </Button>
//
//                                 <Button
//                                     className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 text-sm sm:text-base"
//                                     onClick={handleShare}
//                                 >
//                                     <Share2 className="w-3 h-3 sm:w-4 sm:h-4"/>
//                                     Share Details
//                                 </Button>
//                             </div>
//                         </div>
//                     ) : (
//
//                         /* Review Selection View */
//                         <div className="space-y-6 sm:space-y-8">
//                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//
//                                 {/* Selection Summary */}
//                                 <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
//                                     <CardHeader className="p-4 sm:p-6">
//                                         <CardTitle className="text-xl sm:text-2xl text-indigo-900">Your Selection</CardTitle>
//                                     </CardHeader>
//                                     <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
//                                         {/* Selected Service */}
//                                         <div className="space-y-3 sm:space-y-4">
//                                             <h3 className="font-semibold text-base sm:text-lg">Selected Service</h3>
//                                             <div
//                                                 className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
//                                                 <img
//                                                     src={selectedService.image || "/placeholder.svg"}
//                                                     alt={selectedService.name}
//                                                     className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
//                                                 />
//                                                 <div className="flex-1 min-w-0">
//                                                     <h4 className="font-semibold text-sm sm:text-base">{selectedService.name}</h4>
//                                                     <p className="text-gray-600 text-xs sm:text-sm mb-2">{selectedService.description}</p>
//                                                     <div className="flex items-center gap-3 sm:gap-4">
//                                                         <Badge variant="outline"
//                                                                className="flex items-center gap-1 text-xs sm:text-sm">
//                                                             <Clock className="w-2 h-2 sm:w-3 sm:h-3"/>
//                                                             {selectedService.duration}
//                                                         </Badge>
//                                                         <span
//                                                             className="font-bold text-sm sm:text-base">${selectedService.price}</span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//
//                                         <Separator/>
//
//                                         {/* Customer Details */}
//                                         <div className="space-y-3 sm:space-y-4">
//                                             <h3 className="font-semibold text-base sm:text-lg text-indigo-900">Customer Details</h3>
//                                             <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
//                                                 <div className="grid grid-cols-1 gap-2 sm:gap-3">
//                                                     <div className="flex items-center gap-2">
//                                                         <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
//                                                         <span className="text-xs sm:text-sm">
//                                                           <strong>Name:</strong> {customerDetails.name}
//                                                         </span>
//                                                     </div>
//                                                     <div className="flex items-center gap-2">
//                                                         <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
//                                                         <span className="text-xs sm:text-sm break-all">
//                                                       <strong>Email:</strong> {customerDetails.email}
//                                                       </span>
//                                                     </div>
//                                                     <div className="flex items-center gap-2">
//                                                         <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
//                                                         <span className="text-xs sm:text-sm">
//                                                          <strong>Phone:</strong> {customerDetails.phone}
//                                                         </span>
//                                                     </div>
//                                                     {customerDetails.location && (
//                                                         <div className="flex items-center gap-2">
//                                                             <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"/>
//                                                             <span className="text-xs sm:text-sm">
//                                                            <strong>Location:</strong> {customerDetails.location}
//                                                            </span>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             </div>
//                                         </div>
//
//                                         <Separator/>
//
//                                         {/* Selected Date & Time */}
//                                         <div className="space-y-3 sm:space-y-4">
//                                             <h3 className="font-semibold text-base sm:text-lg text-indigo-900">Appointment Details</h3>
//                                             <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                                                 <div
//                                                     className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
//                                                     <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"/>
//                                                     <div>
//                                                         <p className="text-xs text-gray-600">Date</p>
//                                                         <p className="font-semibold text-xs sm:text-sm">
//                                                             {formatDate(selectedDate, {
//                                                                 weekday: "short",
//                                                                 month: "short",
//                                                                 day: "numeric",
//                                                             })}
//                                                         </p>
//                                                     </div>
//                                                 </div>
//
//                                                 <div
//                                                     className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
//                                                     <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"/>
//                                                     <div>
//                                                         <p className="text-xs text-gray-600">Time</p>
//                                                         <p className="font-semibold text-xs sm:text-sm">{selectedTime}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//
//                                         <Separator/>
//
//                                         {/* Total */}
//                                         <div className="flex justify-between items-center text-lg sm:text-xl font-bold">
//                                             <span>Total:</span>
//                                             <span>${getTotalPrice()}</span>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//
//                                 {/* Booking Actions */}
//                                 <div className="space-y-4 sm:space-y-6">
//                                     <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
//                                         <CardHeader className="p-4 sm:p-6">
//                                             <CardTitle className="text-lg sm:text-xl text-indigo-900">Complete Your Booking</CardTitle>
//                                         </CardHeader>
//                                         <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
//                                             <p className="text-xs sm:text-sm text-gray-600">
//                                                 Review your selection and confirm your appointment. You'll receive a
//                                                 confirmation email with all
//                                                 the details.
//                                             </p>
//
//                                             <div className="space-y-2 sm:space-y-3">
//                                                 <Button
//                                                     onClick={handleConfirmBooking}
//                                                     className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg text-base sm:text-lg py-4 sm:py-6"
//                                                 >
//                                                     <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2"/>
//                                                     Confirm Booking
//                                                 </Button>
//
//                                                 <Button
//                                                     variant="outline"
//                                                     onClick={() => router.push("/")}
//                                                     className="w-full text-sm sm:text-base cursor-pointer"
//                                                 >
//                                                     <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2"/>
//                                                     Back to Selection
//                                                 </Button>
//                                             </div>
//                                         </CardContent>
//                                     </Card>
//
//                                     <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
//                                         <CardContent className="p-4 sm:p-6">
//                                             <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//                                                 <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-green-600"/>
//                                                 <h4 className="font-semibold text-sm sm:text-base text-indigo-900">Payment Information</h4>
//                                             </div>
//                                             <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
//                                                 Payment will be collected at the time of service. We accept cash, credit
//                                                 cards, and digital
//                                                 payments.
//                                             </p>
//                                             <div className="text-xs text-gray-500">
//                                                 <p>• No booking fees</p>
//                                                 <p>• Free cancellation up to 24 hours</p>
//                                                 <p>• Secure booking system</p>
//                                             </div>
//                                         </CardContent>
//                                     </Card>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }
