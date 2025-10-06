import type { StateCreator } from "zustand";
import type { useAuthApi } from "../../@types";
import { basicApi } from "../api";

export const useAuthStore: StateCreator<useAuthApi> = (set) => ({
  status: 0,
  details: null,
  message: "",

  register: async (data: any) => {
    const result = await basicApi.post("/register", data);

    return result.data;
  },

  login: async (email: string, password: string) => {
    const result = await basicApi.post("/login", {
      email,
      password,
    });

    set({
      status: result.data.status,
      details: result.data.details,
      message: result.data.message,
    });

    return result.data;
  },

  /**
   * Needs to change into authApi -> implemented soon.
   * @returns
   */
  refresh: async () => {
    const result = await basicApi.get("/refresh");

    set((state) => ({
      ...state,
      access_token: result.data.details.access_token,
      refresh_token: result.data.details.refresh_token,
    }));
  },

  /**
   * Needs to change into authApi -> implemented soon.
   * @returns
   */
  logout: async () => {},
});
