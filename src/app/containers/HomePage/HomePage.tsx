import { FC, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { CgLogOut } from "react-icons/cg";
import { BsGenderMale } from "react-icons/bs";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { PiNotebookDuotone } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { BsGraphDownArrow } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import { AiOutlineSwap } from "react-icons/ai";

import { AuthStatus } from "@/models/Auth";
import DefaultWrapper from "@/app/components/wrappers/DefaultWrapper";
import useAuth from "@/app/hooks/useAuth";
import AnimatedOpacityWrapper from "@/app/components/wrappers/AnimatedOpacityWrapper";
import AppHeader from "@/app/components/headers/AppHeader";
import MeasuresChart from "./MeasuresChart";

const HomePage: FC = () => {
  const { authStatus, userLogOut } = useAuth();
  const [isBiologicalData, setIsBiologicalData] = useState(false);

  const handleIsBiologicalData = () => setIsBiologicalData(!isBiologicalData);

  const isHomePage = authStatus === AuthStatus.AUTHENTICATED;

  return (
    <main>
      {!isHomePage && (
        <div className="bg-emerald-600 flex min-h-screen flex-col items-center justify-center">
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
