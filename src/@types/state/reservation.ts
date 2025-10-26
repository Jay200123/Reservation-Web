import type { Services } from "./service";
import type { PaymentType } from "../formik/reservation";

type ReservationStatus = "PENDING" | "RESCHEDULED" | "ONGOING" | "FINISHED";

type Reservations = {
  _id: string;
  user: string;
  services: Services[];
  timeslot: string;
  payment_type: PaymentType;
  status: ReservationStatus;
  reservation_date: Date;
  createdAt: Date;
  updatedAt: Date;
};

type Payment = {
  payment: {
    checkoutId?: string;
    redirectUrl?: string;
  };
};

type ReservationsResponse = {
  status: number;
  details: Reservations[];
  message: string;
};

type ReservationResponse = {
  status: number;
  details: Reservations;
  message: string;
};

type CreateReservationResponse = {
  status: number;
  details: Record<number, Reservations> & Payment;
  message: string;
};

type ReservationActions = {
  getAllReservations: () => Promise<ReservationsResponse>;
  getReservationById: (id: string) => Promise<ReservationResponse>;
  createReservation: (data: any) => Promise<CreateReservationResponse>;
  rescheduleReservation: () => Promise<void>;
  updateReservationStatus: () => Promise<void>;
};

type useReservationApi = ReservationActions;

export type { Reservations, useReservationApi };
