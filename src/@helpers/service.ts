import { QueryClient } from "@tanstack/react-query";

/**
 * React Query Client & Invalidation Utility
 * -----------------------------------------
 *
 * This module creates a single instance of `QueryClient` from @tanstack/react-query
 * and provides a helper function to invalidate queries associated with services.
 *
 * Exports:
 * - `invalidateUserReservations`: Asynchronously invalidates all queries with the key `["services"] & ["service"]`.
 *   This triggers React Query to refetch those queries when next accessed.
 *
 * Example usage:
 * ```ts
 * import { invalidateServices,  invalidateService } from "@helpers";
 *
 * const handleUserVerification = async () => {
 *   // Perform verification-related mutation...
 *   await invalidateServices(); // Force re-fetch of verification-related data
 * };
 * ```
 */

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
