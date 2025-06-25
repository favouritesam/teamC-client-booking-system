import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useBookingStore = create(
    persist(
        (set, get) => ({
            // Initial state
            selectedService: null,
            selectedDate: null,
            selectedTime: "",
            bookingId: null,
            isConfirmed: false,
            customerDetails: {
                name: "",
                email: "",
                phone: "",
                location: "",
            },

            // Actions
            setSelectedService: (service) => set({ selectedService: service }),
            setSelectedDate: (date) => set({ selectedDate: date }),
            setSelectedTime: (time) => set({ selectedTime: time }),
            setBookingId: (id) => set({ bookingId: id }),
            setIsConfirmed: (confirmed) => set({ isConfirmed: confirmed }),
            setCustomerDetails: (details) => set({ customerDetails: details }),

            // Computed getters
            isSelectionComplete: () => {
                const state = get()
                return !!(
                    state.selectedService &&
                    state.selectedDate &&
                    state.selectedTime &&
                    state.customerDetails.name &&
                    state.customerDetails.email &&
                    state.customerDetails.phone
                )
            },

            getTotalPrice: () => {
                const state = get()
                return state.selectedService?.price || 0
            },

            // Reset functions
            resetSelection: () =>
                set({
                    selectedService: null,
                    selectedDate: null,
                    selectedTime: "",
                    customerDetails: {
                        name: "",
                        email: "",
                        phone: "",
                        location: "",
                    },
                }),

            resetBooking: () =>
                set({
                    selectedService: null,
                    selectedDate: null,
                    selectedTime: "",
                    customerDetails: {
                        name: "",
                        email: "",
                        phone: "",
                        location: "",
                    },
                    bookingId: null,
                    isConfirmed: false,
                }),
        }),
        {
            name: "booking-storage",
            // Custom serialization to handle Date objects
            serialize: (state) => {
                try {
                    const serializedState = {
                        ...state,
                        state: {
                            ...state.state,
                            selectedDate: state.state.selectedDate instanceof Date ? state.state.selectedDate.toISOString() : null,
                        },
                    }
                    return JSON.stringify(serializedState)
                } catch (error) {
                    console.warn("Failed to serialize state:", error)
                    return JSON.stringify({ ...state, state: { ...state.state, selectedDate: null } })
                }
            },
            deserialize: (str) => {
                try {
                    const parsed = JSON.parse(str)
                    return {
                        ...parsed,
                        state: {
                            ...parsed.state,
                            selectedDate: parsed.state.selectedDate ? new Date(parsed.state.selectedDate) : null,
                        },
                    }
                } catch (error) {
                    console.warn("Failed to deserialize state:", error)
                    return { state: { selectedDate: null } }
                }
            },
            // Only persist certain fields
            partialize: (state) => ({
                selectedService: state.selectedService,
                selectedDate: state.selectedDate,
                selectedTime: state.selectedTime,
                customerDetails: state.customerDetails,
                bookingId: state.bookingId,
                isConfirmed: state.isConfirmed,
            }),
        },
    ),
)
