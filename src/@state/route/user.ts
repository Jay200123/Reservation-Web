import type { StateCreator } from "zustand";
import type { useUserApi, UserDetails } from "../../@types";
import { authApi } from "../api";
import { PATH } from "../../@constants";

export const useUserStore: StateCreator<useUserApi> = (_set) => ({
  getAllUsers: async () => {
    const result = await authApi.get(PATH.USERS);

    return result.data;
  },

  getUserById: async (id: string) => {
    const result = await authApi.get(PATH.USER_ID.replace(":id", id));

    return result.data;
  },

  updateUserById: async (id: string, data: Partial<UserDetails>) => {
    return await authApi.patch(PATH.EDIT_USER_ID.replace(":id", id), {
      data,
    });
  },
});
