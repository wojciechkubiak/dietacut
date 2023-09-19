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
  const { auth, authStatus } = useAppSelector((state) => state.data);

  const storeAuth = ({ token, refreshToken }: TokenData) => {
    console.log(token, refreshToken);
    Cookies.set("token", token);
    Cookies.set("refreshToken", refreshToken);
  };

  const userLogOut = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    dispatch(logOut());
  };

  useEffect(() => {
    const { token, refreshToken, expirationTime } = auth;

    if (token && refreshToken) {
      storeAuth({ token, refreshToken, expirationTime });
    }
  }, [auth]);

  useEffect(() => {
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("refreshToken");
    const isAuthData = !!token && !!refreshToken;

    const isNonAuthenticated =
      !token && !refreshToken && authStatus === AuthStatus.NOT_AUTHENTICATED;
    const isLoading = authStatus === AuthStatus.CHECKING;

    console.log(token, refreshToken);
    if (isNonAuthenticated) {
      router.push("/login");
    } else if (isLoading) {
      if (isAuthData) {
        dispatch(changeAuthData(AuthStatus.AUTHENTICATED));
      } else {
        dispatch(changeAuthData(AuthStatus.NOT_AUTHENTICATED));
      }
    }
  }, [authStatus, dispatch, router]);

  return { authStatus, userLogOut };
};

export default useAuth;
