import type { useAuthApi } from "./state/auth";
import type { useUserApi } from "./state/user";
import type { useServiceApi } from "./state/service";
import type { useTimeslotApi } from "./state/timeslot";
import type { useReservationApi } from "./state/reservation";
import type { useRatingsApi } from "./state/ratings";
import type { useReservationFormSlice } from "./state/form";
import type { useServiceFilterSlice } from "./slice/service";

export type Store = useAuthApi &
  useUserApi &
  useServiceApi &
  useTimeslotApi &
  useReservationApi &
  useRatingsApi &
  useReservationFormSlice &
  useServiceFilterSlice;
