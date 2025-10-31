import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const invalidateUserReservations = async () => {
  return queryClient.invalidateQueries({
    queryKey: ["user_reservations"],
    exact: false,
  });
};

export { invalidateUserReservations };
