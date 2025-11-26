import type { StateCreator } from "zustand";
import type { useServiceApi } from "../../@types";
import { authApi, basicApi } from "../api";
import { PATH } from "../../@constants";

export const useServiceStore: StateCreator<useServiceApi> = (_set) => ({
  getAllServices: async (skip: number, limit: number) => {
    const result = await basicApi.get(PATH.SERVICES, {
      params: {
        skip: skip,
        limit: limit,
      },
    });

    return result.data;
  },

  getServiceById: async (id: string) => {
    const result = await basicApi.get(PATH.SERVICE_ID.replace(":id", id));

    return result.data;
  },

  addService: async (data: FormData) => {
    const result = await authApi.post(PATH.SERVICES, data);

    return result.data;
  },

  updateServiceById: async (id: string, data: FormData) => {
    const result = await authApi.patch(
      PATH.EDIT_SERVICE_ID.replace(":id", id),
      data
    );

    return result.data;
  },

  getUserServices: async (
    service_name: string,
    service_price: number,
    skip: number,
    limit: number
  ) => {
    const result = await basicApi.get("/customer/services", {
      params: {
        service_name: service_name,
        service_price: service_price,
        skip: skip,
        limit: limit,
      },
    });

    return result.data;
  },
});
