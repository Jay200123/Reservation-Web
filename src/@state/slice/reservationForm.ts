import type { StateCreator } from "zustand";
import type { Services, useReservationFormSlice } from "../../@types";

export const useReservationSlice: StateCreator<useReservationFormSlice> = (
  set
) => ({
  services: [],
  timeslot: null,
  reservation_date: null,
  payment_type: null,

  addServiceToForm: (service: Services) => {
    set((state) => ({
      services: [...state.services, service],
    }));
  },

  removeServiceFromFrom: (serviceId: string) => {
    set((state) => ({
      services: state.services.filter((service) => service._id !== serviceId),
    }));
  },

  addReservationDate: (date: string) => {
    set({ reservation_date: date });
  },

  addTimeslot: (timeslotId: string) => {
    set({
      timeslot: timeslotId,
    });
  },

  clearForm: () => {
    set({
      services: [],
      timeslot: null,
      reservation_date: null,
      payment_type: null,
    });
  },
});
