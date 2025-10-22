import type { StateCreator } from "zustand";
import type { useTimeslotApi } from "../../@types/state/timeslot";
import { basicApi, authApi } from "../api";

const useTimeslotStore: StateCreator<useTimeslotApi> = (_set) => ({
  getAllTimeslots: async () => {
    const result = await basicApi.get("/timeslots");

    return result.data;
  },
  getTimeslotById: async (id: string) => {
    const result = await basicApi.get(`/timeslot/${id}`);

    return result.data;
  },
  createTimeslot: async (data: FormData) => {
    return await authApi.post("/timeslots", { data });
  },
  updateTimeslotById: async (id: string, data: FormData) => {
    return await authApi.post(`/timeslot/edit/${id}`, { data });
  },
  deleteTimeslotById: async (id: String) => {
    return await authApi.delete(`/timeslot/${id}`);
  },
});

export { useTimeslotStore };
