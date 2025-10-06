type UserStatus = "ACTIVE" | "INACTIVE" | "PENDING";

type UserRole = "ADMIN" | "USER";

type User = {
  _id: string;
  username: string;
  status: UserStatus;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type AuthState = {
  status: number;
  details: {
    user: User;
    access_token: string;
    refresh_token: string;
  } | null;
  message: string;
};

// export type AuthWithoutUser = Omit<AuthState, "details"> & {
//   details: Omit<AuthState["details"], "user">;
// };

type AuthActions = {
  register: (data: any) => Promise<void>;
  login: (email: string, password: string) => Promise<AuthState>;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
};

type useAuthApi = AuthState & AuthActions;

export type { useAuthApi };
