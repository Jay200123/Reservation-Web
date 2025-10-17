import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const invalidateServices = async () => {
  return queryClient.invalidateQueries({
    queryKey: ["services"],
    exact: false,
  });
};

const invalidateService = async () => {
  return queryClient.invalidateQueries({
    queryKey: ["service"],
    exact: false,
  });
};

export {
    invalidateServices,
    invalidateService
}
