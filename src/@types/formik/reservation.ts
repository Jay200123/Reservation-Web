type Service = {
  service: string;
};

type PaymentType = "CASH" | "ONLINE_PAYMENT";

type ReservationFormik = {
  user: string;
  services: Service[];
  timeslot: string;
  payment_type: PaymentType | null;
  reservation_date: string;
};

export type { 
    PaymentType, 
    ReservationFormik
};
