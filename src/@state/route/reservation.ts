import type { StateCreator } from "zustand";
import type {
  useReservationApi,
  ReschedulePayload,
  ReservationStatus,
} from "../../@types";
import { authApi } from "../api";
import { PATH } from "../../@constants";

export const useReservationStore: StateCreator<useReservationApi> = (_set) => ({
  getAllReservations: async (skip: number, limit: number) => {
    const result = await authApi.get(PATH.RESERVATIONS, {
      params: {
        skip: skip,
        limit: limit,
      },
    });

    return result.data;
  },

  getReservationById: async (id: string) => {
    const result = await authApi.get(PATH.RESERVATION_ID.replace(":id", id));

    return result.data;
  },

  createReservation: async (data: any) => {
    const result = await authApi.post(PATH.RESERVATIONS, data);

    return result.data;
  },

  rescheduleReservation: async (id: string, data: ReschedulePayload) => {
    const result = await authApi.patch(
      PATH.RESERVATION_RESCHEDULE_ID.replace(":id", id),
      data
    );

    return result.data;
  },

  updateReservationStatus: async (id: string, status: ReservationStatus) => {
    return await authApi.patch(
      PATH.EDIT_RESERVATION_STATUS_ID.replace(":id", id),
      status
    );
  },

  getUserReservations: async (user_id: string) => {
    const result = await authApi.get(
      PATH.RESERVATIONS_USER_ID.replace(":user_id", user_id)
    );

    return result.data;
  },
});
