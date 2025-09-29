import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create()(
  persist(
    (...a) => ({
      //slices custom hooks here.
      //ex. ...useGreetSlice(...a)
      //api custom hooks here.
      //ex. ...useUserApi(...a)
    }),
    {
      name: "root",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
