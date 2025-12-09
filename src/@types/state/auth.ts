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
  isRefreshFailed: boolean;
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

type RefreshResponse = {
  status: number;
  details: {
    access_token: string;
    refresh_token: string;
  };
  message: string;
};

type AuthActions = {
  register: (data: FormData) => Promise<void>;
  login: (email: string, password: string) => Promise<AuthResponse>;
  refresh: () => Promise<RefreshResponse>;
  resetRefresh: () => void;
  logout: () => Promise<void>;
};

type ApiErrorResponse = {
  status: number;
  message: string;
};

type useAuthApi = AuthState & AuthActions;

export type { useAuthApi, ApiErrorResponse };
