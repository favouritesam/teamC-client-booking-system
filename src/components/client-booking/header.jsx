import { MapPin, Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";

export default function Header() {
    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }

    return (
        <div className="relative w-full px-4 sm:px-6 lg:px-8 mb-6 pt-2 sm:pt-4">
            <div className="absolute left-4 sm:left-6 lg:left-8 top-2 sm:top-4">
                <Avatar onClick={handleGoBack} className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-sm sm:text-base md:text-lg font-bold">
                        TBS
                    </AvatarFallback>
                </Avatar>
            </div>


            <div className="text-center pl-16 sm:pl-20 md:pl-24">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-900 bg-clip-text">
                    Timeless Trim Barbershop
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 mt-1">
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span>Downtown Location</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm font-medium">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>4.9 (127 reviews)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
