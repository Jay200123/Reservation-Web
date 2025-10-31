import { QueryClient } from "@tanstack/react-query";

/**
 * React Query Client
 * -----------------------------------------
 *
 * This module creates a single instance of `QueryClient` from @tanstack/react-query
 * and provides a helper function to invalidate queries associated with users.
 *
 * Exports:
 * - `invalidateUserReservations`: Asynchronously invalidates all queries with the defined query key ex. ["users"].
 *   This triggers React Query to refetch those queries when next accessed.
 *
 * Example usage:
 * ```ts
 * import { invalidateUsers } from "@helpers";
 *
 * const handleUserVerification = async () => {
 *   // Perform verification-related mutation...
 *   await invalidateUsers(); // Force re-fetch of verification-related data
 * };
 * ```
 */
const queryClient = new QueryClient();

const invalidateUsers = async () => {
  return queryClient.invalidateQueries({ queryKey: ["users"] });
};

const invalidateUser = async () => {
  return queryClient.invalidateQueries({ queryKey: ["user"] });
};

export { invalidateUsers, invalidateUser };
