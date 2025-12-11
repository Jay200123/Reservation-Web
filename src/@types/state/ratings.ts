import type { User } from "./user";
import type { Reservations } from "./reservation";
import type { Image } from "./image";

type Ratings = {
  user: User;
  reservation: Reservations;
  description: string;
  rating: number;
  image: Image[];
  createdAt: Date;
  updatedAt: Date;
};

type RatingsResponse = {
  status: number;
  details: Ratings[];
  message: string;
};

type RatingResponse = {
  status: number;
  details: Ratings;
  message: string;
};

type RatingsAction = {
  getAllRatings: () => Promise<RatingsResponse>;
  getRatingById: (id: string) => Promise<RatingResponse>;
  addRating: (data: FormData) => Promise<RatingResponse>;
  updateRatingById: (id: string, data: FormData) => Promise<RatingResponse>;
  deleteRatingById: (id: string) => Promise<RatingResponse>;
};

type useRatingsApi = RatingsAction;

export type { useRatingsApi, Ratings };
