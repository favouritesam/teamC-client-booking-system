"use client"

import { ImageIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {services} from "@/lib/services";
import ServiceCard from "@/components/client-booking/service-card";

export default function ServiceSelector({ selectedService, onServiceSelect }) {
    return (
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
                <CardTitle className="flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900 text-center justify-center">
                    <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                    Choose Your Service
                </CardTitle>
                <p className="text-center text-gray-600 text-sm sm:text-base lg:text-lg mt-2">
                    Select from our premium barbershop services
                </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-8 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            isSelected={selectedService?.id === service.id}
                            onSelect={() => onServiceSelect(service)}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
