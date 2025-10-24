import type { StateCreator } from "zustand";
import type { useServiceApi } from "../../@types";
import { authApi, basicApi } from "../api";

export const useServiceStore: StateCreator<useServiceApi> = (_set) => ({
  getAllServices: async () => {
    const result = await basicApi.get("/services");

    return result.data;
  },

  getServiceById: async (id: string) => {
    const result = await basicApi.get(`/service/${id}`);

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
