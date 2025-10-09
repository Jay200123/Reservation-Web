import type { useAuthApi } from "./state/auth";
import type { useUserApi } from "./state/user";

export type Store = useAuthApi & useUserApi;
