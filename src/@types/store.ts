import type { useAuthApi } from "./state/auth";
import type { useUserApi } from "./state/user";
import type { useServiceApi } from "./state/service";
import type { useTimeslotApi } from "./state/timeslot";
import type { useReservationFormSlice } from "./state/form";

export type Store = useAuthApi &
  useUserApi &
  useServiceApi &
  useTimeslotApi &
  useReservationFormSlice;
