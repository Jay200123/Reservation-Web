import type { StateCreator } from "zustand";
import type { useServiceFilterSlice } from "../../@types";

export const useServiceSlice: StateCreator<useServiceFilterSlice> = (set) => ({
  service_name: "",
  service_price: 0,
  service_rating: 0,
  serviceNameFilter: (service_name: string) => {
    set({
      service_name: service_name,
    });
  },

  servicePriceFilter: (service_price: number) => {
    set({
      service_price: service_price,
    });
  },

  serviceRating: (rating: number) => {
    set({
      service_rating: rating,
    });
  },
});
