"use client"

import {useState} from "react"
import {User, Mail, Phone, MapPin, Loader2} from "lucide-react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"

import {useRouter} from "next/navigation"
import {useBookingStore} from "@/lib/zustand-store";

export default function CustomerDetailsForm() {
    const {customerDetails, setCustomerDetails, setBookingId} = useBookingStore()
    const [formData, setFormData] = useState(customerDetails)
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        }

        // .trim() removes any leading or trailing spaces from that input.
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|co|edu|gov|io|ng)$/.test(
                formData.email.trim()
            )
        ) {
            newErrors.email = "Please enter a valid email address"
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required"
        } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Please enter a valid phone number"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: "",
            }))
        }
    }

    const handleSaveDetails = async () => {
        if (validateForm()) {
            setIsLoading(true)

            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 1500))

            setCustomerDetails(formData)
            // Generate booking id and route to summary
            // “I am generating the booking id using a combination of the current timestamp and a random number to ensure uniqueness.
            // Date.now()
            // This gives each booking a unique and traceable id without needing a backend.”
            const bookingId = `BK-${Date.now()}`
            setBookingId(bookingId)

            setIsLoading(false)
            router.push("/booking-summary")
        }
    }

    const isFormValid = formData.name.trim() && formData.email.trim() && /\S+@\S+\.\S+/.test(formData.email) && formData.phone.trim() &&
        /^\+?[\d\s\-()]{10,}$/.test(formData.phone.replace(/\s/g, ""));

    return (
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
                <CardTitle
                    className="flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl text-center text-indigo-900 justify-center">
                    <User className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"/>
                    Your Details
                </CardTitle>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2 text-center">
                    Please provide your contact information for the appointment
                </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-8 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

                    {/* Name Field */}
                    <div className="space-y-2">
                        <label className="text-sm sm:text-base font-medium text-gray-700 flex items-center gap-2">
                            <User className="w-4 h-4 sm:w-5 sm:h-5"/>
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Enter your full name"
                            disabled={isLoading}
                            className={`w-full px-4 h-10 sm:px-5 py-3 sm:py-4 rounded-lg border transition-all duration-200 text-sm sm:text-base ${
                                errors.name
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                            } focus:outline-none focus:ring-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs sm:text-sm">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="text-sm sm:text-base font-medium text-gray-700 flex items-center gap-2">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5"/>
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="Enter your email address"
                            disabled={isLoading}
                            className={`w-full h-10 px-4 sm:px-5 py-3 sm:py-4 rounded-lg border transition-all duration-200 text-sm sm:text-base ${
                                errors.email
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                            } focus:outline-none focus:ring-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs sm:text-sm">{errors.email}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                        <label className="text-sm sm:text-base font-medium text-gray-700 flex items-center gap-2">
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5"/>
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="Enter your phone number"
                            disabled={isLoading}
                            className={`w-full h-10 px-4 sm:px-5 py-3 sm:py-4 rounded-lg border transition-all duration-200 text-sm sm:text-base ${
                                errors.phone
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                            } focus:outline-none focus:ring-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs sm:text-sm">{errors.phone}</p>}
                    </div>

                    {/* Location Field (Optional) */}
                    <div className="space-y-2">
                        <label className="text-sm sm:text-base font-medium text-gray-700 flex items-center gap-2">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5"/>
                            Location (Optional)
                        </label>
                        <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => handleInputChange("location", e.target.value)}
                            placeholder="Enter your city or area"
                            disabled={isLoading}
                            className={`w-full h-10 px-4 sm:px-5 py-3 sm:py-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-200 focus:outline-none focus:ring-2 transition-all duration-200 text-sm sm:text-base ${
                                isLoading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        />
                    </div>
                </div>

                {/* Save Button */}
                <div className="mt-6 sm:mt-8 flex justify-center">
                    <Button
                        onClick={handleSaveDetails}
                        disabled={!isFormValid || isLoading}
                        className={`cursor-pointer px-8 sm:px-18 bg-blue-600 hover:bg-blue-700 text-white shadow-lg py-3 sm:py-4 text-sm sm:text-base transition-all duration-200 ${
                            isFormValid && !isLoading ? "hover:scale-105" : "opacity-50 cursor-not-allowed"
                        }`}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin"/>
                                Saving Details...
                            </>
                        ) : (
                            "Save Details"
                        )}
                    </Button>
                </div>

                {/* Form Status */}
                {customerDetails.name && customerDetails.email && customerDetails.phone && !isLoading && (
                    <div
                        className="mt-4 sm:mt-6 flex items-center justify-center gap-2 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span
                            className="text-sm sm:text-base text-green-700 font-medium">Details saved successfully!</span>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
