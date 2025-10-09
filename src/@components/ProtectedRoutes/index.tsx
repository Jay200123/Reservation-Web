import type { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "../../@state/store";
import { Navigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import type { AxiosError } from "axios";
import type { ApiErrorResponse } from "../../@types";
type ProtectedRouteProp = {
  children: ReactNode;
};


export default function ProtectedRoutes({ children }: ProtectedRouteProp) {
  const {
    user,
    access_token,
    refresh_token,
    getUserById,
    refresh
  } = useStore();

  /**
 * Verifies the user's authorization status by fetching user details using TanStack Query.
 * The `useQuery` hook calls the Get User By ID API and uses its built-in
 * `isLoading` and `isError` states to determine whether the user session is valid.
 */
  const { isLoading, isError, error } = useQuery({
    queryKey: ["verify"],
    queryFn: () => getUserById(user?._id!),
    enabled: !!user?._id,
    retry: false,

  });

  /**
 * Handles token renewal by invoking the `refresh` action from `useAuthStore`.
 * The `refresh` action calls the Refresh API to obtain new `access_token` and `refresh_token`,
 * then updates the authentication state with the new tokens.
 */
  const handleRefresh = async () => {
    await refresh();
  }
  /** 
   * Checks if the access_token & refresh_token are stored in the localStorage.
   */
  if (!access_token || !refresh_token) {
    return <Navigate to="/signin" replace />
  }

  /** 
   * If `isError` is true, it means the `useQuery` request for Get User By ID failed.
   * Create an `err` variable referencing the `error` object from `useQuery` and cast it as an AxiosError for type safety.
  */
  if (isError) {
    const err = error as AxiosError<ApiErrorResponse>;

    /**
     * Check if the response status code is `401`, which indicates the access token has expired or is unauthorized.
     * If so, call the `handleRefresh` function to invoke the `refresh` action,
     * which triggers the Refresh Token API to generate and store new authentication tokens.
    */
    if (err.response?.data.status === 401) {
      handleRefresh();
    }
  }

  /**
   * If `isLoading` is true, it means the `useQuery` request is still in progress. 
   * While waiting for the Get User By ID API response, display a centered loading spinner (FadeLoader)
   * to indicate that authentication validation is ongoing.
  */
  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <FadeLoader />
      </div>
    )
  }

  return (
    <>
      {children}
    </>
  )
}
