import type { useAuthApi } from "./state/auth";
import type { useUserApi } from "./state/user";
import type { useServiceApi } from "./state/service";

export type Store = useAuthApi & useUserApi & useServiceApi;
