import { FC } from "react";

import { AuthStatus } from "@/models/Auth";
import useAuth from "@/app/hooks/useAuth";
import AnimatedOpacityWrapper from "@/app/components/wrappers/AnimatedOpacityWrapper";
import MeasuresChart from "./MeasuresChart";
import Loader from "@/app/components/common/Loader";

const HomePage: FC = () => {
  const { authStatus, userLogOut } = useAuth();

  const isHomePage = authStatus === AuthStatus.AUTHENTICATED;

  return (
    <main>
      {!isHomePage && (
        <div className="bg-white flex min-h-screen flex-col items-center justify-center">
          <div className="bg-white rounded-full shadow-xl">
            <Loader size={178} />
          </div>
        </div>
      )}
      {isHomePage && (
        <AnimatedOpacityWrapper>
          <div className="w-full flex flex-col py-16 px-8 space-y-8 bg-gray-50">
            <div className="w-full flex justify-between relative h-[400px]">
              <div className="w-6/12 shadow-xl bg-white relative h-full">
                Dane
              </div>
              <div className="w-5/12 shadow-xl bg-white relative h-full flex flex-col items-center">
                <MeasuresChart />
              </div>
            </div>
            <div className="w-full bg-white h-[2000px]">Grafik</div>
          </div>
          <button onClick={userLogOut}>xxxx</button>
        </AnimatedOpacityWrapper>
      )}
    </main>
  );
};

export default HomePage;
