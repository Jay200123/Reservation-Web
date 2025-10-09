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
};

type UserActions = {
  getAllUsers: () => Promise<UserDetails[]>;
  getUserById: (id: string) => Promise<UserDetails>;
  updateUserById: (id: string, data: Partial<UserDetails>) => Promise<void>;
};

type useUserApi = UserActions;

export type { useUserApi, UserDetails };
