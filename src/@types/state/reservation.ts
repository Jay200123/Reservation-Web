type ReservationActions = {
  getAllReservations: () => Promise<void>;
  getReservationById: () => Promise<void>;
  createReservation: () => Promise<void>;
  rescheduleReservation: () => Promise<void>;
  updateReservationStatus: () => Promise<void>;
};

type useReservationApi = ReservationActions;

export type { useReservationApi };
