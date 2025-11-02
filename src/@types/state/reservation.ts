import type { Services } from "./service";
import type { Timeslots } from "./timeslot";
import type { PaymentType } from "../formik/reservation";

type ReservationStatus = "PENDING" | "RESCHEDULED" | "ONGOING" | "FINISHED";

type ReservationServices = {
  service: Services;
};

type Reservations = {
  _id: string;
  user: string;
  services: ReservationServices[];
  timeslot: Timeslots;
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

type ReschedulePayload = {
  timeslot: string;
  reservation_date: string;
  reason: string;
};

type ReservationActions = {
  getAllReservations: () => Promise<ReservationsResponse>;
  getReservationById: (id: string) => Promise<ReservationResponse>;
  createReservation: (data: any) => Promise<CreateReservationResponse>;
  rescheduleReservation: (id: string, data: ReschedulePayload) => Promise<void>;
  updateReservationStatus: (
    id: string,
    status: ReservationStatus
  ) => Promise<void>;
  getUserReservations: (id: string) => Promise<ReservationsResponse>;
};

type useReservationApi = ReservationActions;

export type {
  Reservations,
  ReschedulePayload,
  ReservationStatus,
  useReservationApi,
};
