import type { StateCreator } from "zustand";
import type { useReservationApi } from "../../@types";
import { authApi } from "../api";

export const useReservationStore: StateCreator<useReservationApi> = (_set) => ({
  getAllReservations: async () => {
    const result = await authApi.get("/reservations");

    return result.data;
  },
  getReservationById: async (id: string) => {
    const result = await authApi.get(`/reservation/${id}`);

    return result.data;
  },
  createReservation: async (data: any) => {
    const result = await authApi.post("/reservations", data);

    return result.data;
  },
  rescheduleReservation: async () => {},
  updateReservationStatus: async () => {},
});
