import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const invalidateUsers = async () => {
  return queryClient.invalidateQueries({ queryKey: ["users"] });
};

const invalidateUser = async () => {
  return queryClient.invalidateQueries({ queryKey: ["user"] });
};

export { invalidateUsers, invalidateUser };
