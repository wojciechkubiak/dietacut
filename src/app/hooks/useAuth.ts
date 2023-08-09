import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { AuthStatus } from "@/models/Auth";

const useAuth = () => {
  const router = useRouter();
  const authStatus = useAppSelector((state) => state.data.auth.authStatus);

  useEffect(() => {
    if (authStatus === AuthStatus.AUTHENTICATED) {
      router.push("/");
    }
  }, [authStatus]);
};

export default useAuth;
