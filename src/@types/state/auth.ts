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
    user: User | null;
    access_token: string;
    refresh_token: string;
};

type AuthResponse = {
  status: number;
  details: {
    user: User | null;
    access_token: string;
    refresh_token: string;
  };
  message: string;
};

type AuthActions = {
  register: (data: any) => Promise<void>;
  login: (email: string, password: string) => Promise<AuthResponse>;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
};

  type ApiErrorResponse = {
    status: number,
    message: string
  }


type useAuthApi = AuthState & AuthActions;

export type { useAuthApi, ApiErrorResponse };
