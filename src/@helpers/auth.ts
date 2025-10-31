import { QueryClient } from "@tanstack/react-query";

/**
 * React Query Client & Invalidation Utility
 * -----------------------------------------
 *
 * This module creates a single instance of `QueryClient` from @tanstack/react-query
 * and provides a helper function to invalidate queries associated with user verification.
 *
 * Exports:
 * - `invalidateVerify`: Asynchronously invalidates all queries with the key `["verify"]`.
 *   This triggers React Query to refetch those queries when next accessed.
 *
 * Example usage:
 * ```ts
 * import { invalidateVerify } from "@helpers";
 *
 * const handleUserVerification = async () => {
 *   // Perform verification-related mutation...
 *   await invalidateVerify(); // Force re-fetch of verification-related data
 * };
 * ```
 */

const queryClient = new QueryClient();

const invalidateVerify = async () => {
  return queryClient.invalidateQueries({ queryKey: ["verify"], exact: false });
};

export { invalidateVerify };
