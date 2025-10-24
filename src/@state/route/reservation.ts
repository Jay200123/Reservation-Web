import type { StateCreator } from "zustand";
import type { useReservationApi } from "../../@types";

export const useReservationStore: StateCreator<useReservationApi> = (_set) => ({
  getAllReservations: async () => {},
  getReservationById: async () => {},
  createReservation: async () => {},
  rescheduleReservation: async () => {},
  updateReservationStatus: async () => {},
});
