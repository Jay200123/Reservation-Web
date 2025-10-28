import type { StateCreator } from "zustand";
import type {
  useReservationApi,
  ReschedulePayload,
  ReservationStatus,
} from "../../@types";
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
  rescheduleReservation: async (id: string, data: ReschedulePayload) => {
    const result = await authApi.patch(`/reservation/reschedule/${id}`, data);

    return result.data;
  },
  updateReservationStatus: async (id: string, status: ReservationStatus) => {
    return await authApi.patch(`/reservation/edit/status/${id}`, status);
  },

  getUserReservations: async (id: string) => {
    const result = await authApi.get(`/reservations/${id}`);

    return result.data;
  },
});
