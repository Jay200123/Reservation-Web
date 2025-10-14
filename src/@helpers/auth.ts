import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const invalidateVerify = async () => {
  return queryClient.invalidateQueries({ queryKey: ["verify"], exact: false });
};

export { invalidateVerify };
