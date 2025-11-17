import type { StateCreator } from "zustand";
import type { useTimeslotApi } from "../../@types/state/timeslot";
import { basicApi, authApi } from "../api";
import { PATH } from "../../@constants";

const useTimeslotStore: StateCreator<useTimeslotApi> = (_set) => ({
  getAllTimeslots: async () => {
    const result = await basicApi.get(PATH.TIMESLOTS);

    return result.data;
  },

  getTimeslotById: async (id: string) => {
    const result = await basicApi.get(PATH.TIMESLOT_ID.replace(":id", id));

    return result.data;
  },

  createTimeslot: async (data: FormData) => {
    const result = await authApi.post(PATH.TIMESLOTS, data);

    return result?.data;
  },

  updateTimeslotById: async (id: string, data: FormData) => {
    const result = await authApi.patch(
      PATH.EDIT_TIMESLOT_ID.replace(":id", id),
      data
    );

    return result?.data;
  },

  deleteTimeslotById: async (id: string) => {
    return await authApi.delete(PATH.TIMESLOT_ID.replace(":id", id));
  },
});

export { useTimeslotStore };
