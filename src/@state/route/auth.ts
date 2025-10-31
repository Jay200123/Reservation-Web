import type { StateCreator } from "zustand";
import type { useAuthApi } from "../../@types";
import { basicApi, authApi, refreshApi } from "../api";
import { PATH } from "../../@constants";

export const useAuthStore: StateCreator<useAuthApi> = (set) => ({
  user: null,
  access_token: "",
  refresh_token: "",
  isRefreshFailed: false,
  register: async (data: any) => {
    const result = await basicApi.post(PATH.REGISTER, data);

    return result.data;
  },

  login: async (username: string, password: string) => {
    const result = await basicApi.post(PATH.LOGIN, {
      username,
      password,
    });

    set({
      user: result.data.details.user,
      access_token: result.data.details.access_token,
      refresh_token: result.data.details.refresh_token,
    });

    return result.data;
  },

  /**
   * Needs to change into authApi -> implemented soon.
   * @returns
   */
  refresh: async () => {
    const result = await refreshApi.get(PATH.REFRESH);

    // If the API responds with 401 it means the user has invalid credentials and will clear the access & refresh token state.
    if (result.data.status == 401) {
      set({
        access_token: "",
        refresh_token: "",
        isRefreshFailed: true,
      });
    }

    set({
      access_token: result.data.details.access_token,
      refresh_token: result.data.details.refresh_token,
    });

    return result.data;
  },

  /**
   * Needs to change into authApi -> implemented soon.
   * @returns
   */
  logout: async () => {
    await authApi.post(PATH.LOGOUT);
    set({
      user: null,
      access_token: "",
      refresh_token: "",
    });
  },
});
