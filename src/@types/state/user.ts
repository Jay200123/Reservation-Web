import type { Image } from "./image";

type UserStatus = "ACTIVE" | "INACTIVE" | "PENDING";
type UserRole = "USER" | "ADMIN";

type User = {
  _id: string;
  username: string;
  password: string;
  status: UserStatus;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
};

type UserDetails = {
  _id: string;
  user: User;
  fullname: string;
  email: string;
  contact_number: string;
  address: string;
  city: string;
  image: Image[];
};

type UserApiResponse = {
  status: number;
  details: UserDetails;
  message: string;
};

type UserActions = {
  getAllUsers: () => Promise<UserDetails[]>;
  getUserById: (id: string) => Promise<UserApiResponse>;
  updateUserById: (id: string, data: Partial<FormData>) => Promise<void>;
};

type useUserApi = UserActions;

export type { useUserApi, UserDetails };
