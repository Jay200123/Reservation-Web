import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Store } from "../@types/store";
import { useAuthStore } from "./route/auth";
import { useUserStore } from "./route/user";
import { useServiceStore } from "./route/services";
import { useTimeslotStore } from "./route/timeslot";
import { useReservationStore } from "./route/reservation";
import { useReservationSlice } from "./slice/reservationSlice";
import { useServiceSlice } from "./slice/serviceSlice";

export const useStore = create<Store>()(
  persist(
    (...a) => ({
      //slices custom hooks here.
      //ex. ...useGreetSlice(...a)
      ...useReservationSlice(...a),
      ...useServiceSlice(...a),
      //api custom hooks here.
      //ex. ...useUserApi(...a)
      ...useAuthStore(...a),
      ...useUserStore(...a),
      ...useServiceStore(...a),
      ...useTimeslotStore(...a),
      ...useReservationStore(...a),
    }),
    {
      name: "root",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
