import type { Services } from "./service";

type ReservationPaymentType = "CASH" | "ONLINE_PAYMENT";

type ReservationForm = {
  services: Services[] | [];
  timeslot: String | null;
  reservation_date: String | null;
  payment_type: ReservationPaymentType | null;
};

type ReservationFormActions = {
  addServiceToForm: (service: Services) => void; // adds Reservation Details to ReservationForm State.
  removeServiceFromFrom: (id: string) => void; // remove Service to ReservationFormState.
  clearForm: () => void; // clear ReservationFormState
  addReservationDate: (date: string) => void;
  addTimeslot: (timeslotId: string) => void;
};

type useReservationFormSlice = ReservationForm & ReservationFormActions;

export type { useReservationFormSlice };
