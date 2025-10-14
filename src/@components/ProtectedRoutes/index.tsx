import type { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "../../@state/store";
import { Navigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { useEffect } from "react";
import { invalidateVerify } from "../../@helpers";


type ProtectedRouteProp = {
  children: ReactNode;
};


export default function ProtectedRoutes({ children }: ProtectedRouteProp) {

  const {
    user,
    access_token,
    refresh_token,
    isRefreshFailed,
    getUserById,
    refresh
  } = useStore();


  /**
 * Verifies the user's authorization status by fetching user details using TanStack Query.
 * The `useQuery` hook calls the Get User By ID API and uses its built-in
 * `isLoading` and `isError` states to determine whether the user session is valid.
 */
  const { isLoading, isError } = useQuery({
    queryKey: ["verify"],
    queryFn: () => getUserById(user?._id!),
    enabled: !!user?._id,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });

  /**
 * Handles token renewal by invoking the `refresh` action from `useAuthStore`.
 * The `refresh` action calls the Refresh API to obtain new `access_token` and `refresh_token`,
 * then updates the authentication state with the new tokens.
 */

  useEffect(() => {

    if (!isError) {
      return;
    }

    const handleRefresh = async () => {
      await refresh();
      await invalidateVerify();
    };

    handleRefresh();

    return () => {

    }
  }, [isError]);

  /** 
   * Checks if the access_token & refresh_token are stored in the localStorage.
   */
  if (!access_token || !refresh_token) {
    return <Navigate to="/signin" replace />
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

  if (isRefreshFailed) {
    return <Navigate to="signin" replace />
  }

  return (
    <>
      {children}
    </>
  )
}
