import type { StateCreator } from "zustand";
import type { useServiceApi } from "../../@types";
import { authApi, basicApi } from "../api";
import { PATH } from "../../@constants";
import type { Services } from "../../@types";

export const useServiceStore: StateCreator<useServiceApi> = (_set) => ({
  getAllServices: async () => {
    const result = await basicApi.get(PATH.SERVICES);

    return result.data;
  },

  getServiceById: async (id: string) => {
    const result = await basicApi.get(PATH.SERVICE_ID.replace(":id", id));

    return result.data;
  },

  addService: async (data: Services) => {
    const result = await authApi.post(PATH.SERVICES, {
      data,
    });

    return result.data;
  },

  updateServiceById: async (id: string, data: Partial<Services>) => {
    const result = await authApi.patch(
      PATH.EDIT_SERVICE_ID.replace(":id", id),
      data
    );

    return result.data;
  },
});
