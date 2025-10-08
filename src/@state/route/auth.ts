import type { StateCreator } from "zustand";
import type { useAuthApi } from "../../@types";
import { basicApi } from "../api";

export const useAuthStore: StateCreator<useAuthApi> = (set) => ({
  details: {
    user: null,
    access_token: "",
    refresh_token: "",
  },

  register: async (data: any) => {
    const result = await basicApi.post("/register", data);

    return result.data;
  },

  login: async (username: string, password: string) => {
    const result = await basicApi.post("/login", {
      username,
      password,
    });

    set({
      details: {
        user: result.data.details.user,
        access_token: result.data.details.access_token,
        refresh_token: result.data.details.refresh_token,
      },
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
