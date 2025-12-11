import type { useRatingsApi } from "../../@types";
import type { StateCreator } from "zustand";
import { basicApi, authApi } from "../api";
import { PATH } from "../../@constants";

export const useRatingsStore: StateCreator<useRatingsApi> = (_set) => ({
  getAllRatings: async () => {
    const result = await basicApi.get(PATH.RATINGS);

    return result?.data;
  },

  getRatingById: async (id: string) => {
    const result = await basicApi.get(PATH.RATING_ID.replace(":id", id));

    return result?.data;
  },

  addRating: async (data: FormData) => {
    const result = await authApi.post(PATH.RATINGS, data);

    return result?.data;
  },

  updateRatingById: async (id: string, data: FormData) => {
    const result = await authApi.patch(
      PATH.EDIT_RATING_ID.replace(":id", id),
      data
    );

    return result?.data;
  },

  deleteRatingById: async (id: string) => {
    const result = await authApi.delete(PATH.RATING_ID.replace(":id", id));

    return result?.data;
  },
});
