"use client"

import { Palette } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThemeSelector({ themes, currentTheme, onThemeChange }) {
    return (
        <Card className="max-w-xs sm:max-w-md mx-auto mb-6 sm:mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
                    Choose Your Theme
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-2 sm:gap-3 justify-center">
                    {themes.map((theme) => (
                        <button
                            key={theme.name}
                            // onClick={() => onThemeChange(theme)}
                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${theme.primary} border-2 ${
                                currentTheme.name === theme.name ? "border-gray-800 scale-110" : "border-gray-300"
                            } transition-all duration-200 hover:scale-105`}
                            title={theme.name}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
