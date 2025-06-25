import {CheckCircle, Clock} from "lucide-react";
import {Badge} from "@/components/ui/badge";

const  ServiceCard = ({ service, isSelected, onSelect }) => {
    return (
        <div
            className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
                isSelected
                    ? "ring-2 sm:ring-4 ring-offset-1 sm:ring-offset-2 ring-blue-600 scale-105 shadow-2xl"
                    : "hover:scale-105 hover:shadow-xl"
            }`}
            onClick={onSelect}
        >
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                <img src={service.image}
                     alt={service.name}
                     className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Selection Indicator */}
                {isSelected && (
                    <div className="absolute top-3 right-3 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white">
                    <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">{service.name}</h3>
                    <p className="text-xs sm:text-sm lg:text-base opacity-90 mb-3 line-clamp-2">{service.description}</p>
                    <div className="flex items-center justify-between">
                        <Badge
                            variant="secondary"
                            className="bg-white/20 text-white border-0 text-xs sm:text-sm lg:text-base backdrop-blur-sm"
                        >
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            {service.duration}
                        </Badge>
                        <span className="text-xl sm:text-2xl lg:text-3xl font-bold">${service.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceCard;