type Timeslots = {
  _id: string;
  start_time: string;
  end_time: string;
  date_created: Date;
  date_modified: Date;
};

type TimeslotsResponse = {
  status: number;
  details: Timeslots[];
  message: string;
};

type TimeslotResponse = {
  status: number;
  details: Timeslots;
  message: string;
};

type TimeslotActions = {
  getAllTimeslots: () => Promise<TimeslotsResponse>;
  getTimeslotById: (id: string) => Promise<TimeslotResponse>;
  createTimeslot: (data: FormData) => Promise<void>;
  updateTimeslotById: (id: string, data: FormData) => Promise<void>;
  deleteTimeslotById: (id: string) => Promise<void>;
};

type useTimeslotApi = TimeslotActions;

export type { 
  Timeslots, 
  useTimeslotApi 
};
