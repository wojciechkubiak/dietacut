import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { AuthStatus, TokenData } from "@/models/Auth";
import Cookies from "js-cookie";
import { changeAuthData } from "@/store/Auth/slice";

const useAuth = (): AuthStatus => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const authStatus = useAppSelector((state) => state.data.auth.authStatus);

  useEffect(() => {
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("refreshToken");
    const isAuthData = token && refreshToken;

    const isNonAuthenticated =
      !token && !refreshToken && authStatus === AuthStatus.NOT_AUTHENTICATED;
    const isLoading = authStatus === AuthStatus.CHECKING;

    if (isNonAuthenticated) {
      router.push("/login");
    } else if (isLoading) {
      if (isAuthData) {
        dispatch(changeAuthData({ authStatus: AuthStatus.AUTHENTICATED }));
      } else {
        dispatch(changeAuthData({ authStatus: AuthStatus.NOT_AUTHENTICATED }));
      }
    }
  }, [authStatus]);

  return authStatus;
};

export default useAuth;
