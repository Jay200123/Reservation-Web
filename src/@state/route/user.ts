import type { StateCreator } from "zustand";
import type { useUserApi, UserDetails } from "../../@types";
import { authApi } from "../api";

export const useUserStore: StateCreator<useUserApi> = (_set) => ({
  getAllUsers: async () => {
    const result = await authApi.get("/users");

    return result.data;
  },

  getUserById: async (id: string) => {
    const result = await authApi.get(`user/${id}`);

    return result.data;
  },

  updateUserById: async (id: string, data: Partial<UserDetails>) => {
    return await authApi.patch(`/user/edit/${id}`, {
      data,
    });
  },
});
