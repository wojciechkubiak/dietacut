"use client";
import { FC, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ColorRing } from "react-loader-spinner";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { AuthStatus } from "@/models/Auth";
import { changeAuthData } from "@/store/Auth/slice";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const authStatus = useAppSelector((state) => state.data.auth.authStatus);

  useEffect(() => {
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("refreshToken");
    console.log(authStatus);

    const isAuthData = token && refreshToken;
    const isAuthenticated =
      isAuthData && authStatus === AuthStatus.AUTHENTICATED;
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {authStatus === AuthStatus.CHECKING && (
        <div className="bg-white rounded-full shadow-xl">
          <ColorRing
            visible={true}
            height="178"
            width="178"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981"]}
          />
        </div>
      )}
      {authStatus === AuthStatus.AUTHENTICATED && <h1>Im in</h1>}
    </main>
  );
};

export default Home;
