import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { AuthStatus, TokenData } from "@/models/Auth";
import Cookies from "js-cookie";
import { changeAuthData, logOut } from "@/store/Auth/slice";

interface UseAuth {
  authStatus: AuthStatus;
  userLogOut: () => void;
}

const useAuth = (): UseAuth => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const authStatus = useAppSelector((state) => state.data.authStatus);

  const userLogOut = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    dispatch(logOut());
  };

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
        dispatch(changeAuthData(AuthStatus.AUTHENTICATED));
      } else {
        dispatch(changeAuthData(AuthStatus.NOT_AUTHENTICATED));
      }
    }
  }, [authStatus]);

  return { authStatus, userLogOut };
};

export default useAuth;
