import { QueryClient } from "@tanstack/react-query";

/**
 * React Query Client & Invalidation Utility
 * -----------------------------------------
 *
 * This module creates a single instance of `QueryClient` from @tanstack/react-query
 * and provides a helper function to invalidate queries associated with reservations.
 *
 * Exports:
 * - `invalidateUserReservations`: Asynchronously invalidates all queries with the key `["user_reservations"]`.
 *   This triggers React Query to refetch those queries when next accessed.
 *
 * Example usage:
 * ```ts
 * import { invalidateUserReservations } from "@helpers";
 *
 * const handleUserVerification = async () => {
 *   // Perform verification-related mutation...
 *   await invalidateUserReservations(); // Force re-fetch of verification-related data
 * };
 * ```
 */

const queryClient = new QueryClient();

const invalidateUserReservations = async () => {
  return queryClient.invalidateQueries({
    queryKey: ["user_reservations"],
    exact: false,
  });
};

export { invalidateUserReservations };
