import type { StateCreator } from "zustand";
import type { useServiceApi } from "../../@types";
import { authApi } from "../api";

export const useServiceStore: StateCreator<useServiceApi> = (_set) => ({
  getAllServices: async () => {
    const result = await authApi.get("/services");

    return result.data;
  },

  getServiceById: async (id: string) => {
    const result = await authApi.get(`/service/${id}`);

    return result.data;
  },

  addService: async (data: any) => {
    const result = await authApi.post(`/services`, {
      data,
    });

    return result.data;
  },

  updateServiceById: async (id: string, data: any) => {
    const result = await authApi.patch(`/service/edit/${id}`, { data });

    return result.data;
  },
});
