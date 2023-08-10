"use client";
import { FC, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { AuthStatus } from "@/models/Auth";
import FormWrapper from "@/app/components/wrappers/FormWrapper";
import useAuth from "@/app/hooks/useAuth";
import { BsGenderFemale } from "react-icons/bs";
import { PiNotebookDuotone } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { BsGraphDownArrow } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import { AiOutlineSwap } from "react-icons/ai";
import AnimatedOpacityWrapper from "@/app/components/wrappers/AnimatedOpacityWrapper";

const Home: FC = () => {
  const { authStatus, userLogOut } = useAuth();
  const [isBiologicalData, setIsBiologicalData] = useState(false);

  const handleIsBiologicalData = () => setIsBiologicalData(!isBiologicalData);

  const isHomePage = authStatus === AuthStatus.AUTHENTICATED;

  return (
    <main>
      {!isHomePage && (
        <div className="flex min-h-screen flex-col items-center justify-center">
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
          <FormWrapper>
            <div className="flex space-x-12 bg-emerald-400 items-center rounded-md">
              <div className="w-1/5">
                <PiNotebookDuotone className="ml-8 w-32 h-32 text-white" />
              </div>
              <div className="bg-white pl-8 flex flex-col justify-between w-full py-8">
                <div>
                  <div className="flex justify-start items-center">
                    <h1 className="text-4xl text-gray-700">Joanna Kowalska,</h1>
                    <h1 className="text-2xl text-gray-700 pt-2 ml-2">24</h1>
                    <BsGenderFemale className="text-gray-600 h-6 w-6 mt-2" />
                  </div>

                  <div className="flex flex-wrap space-x-2 mt-6">
                    <AiOutlineSwap
                      className="w-12 h-8 cursor-pointer text-gray-600 hover:text-emerald-500"
                      onClick={handleIsBiologicalData}
                    />
                    {isBiologicalData ? (
                      <>
                        <p className="bg-emerald-400 shadow-2xl text-lg text-white px-4 py-1 rounded-2xl custom-sm">
                          Wzrost: 175cm
                        </p>
                        <p className="bg-emerald-400 shadow-2xl text-lg text-white px-4 py-1 rounded-2xl custom-sm">
                          Waga: 123kg
                        </p>
                        <p className="bg-emerald-400 shadow-2xl text-lg text-white px-4 py-1 rounded-2xl custom-sm">
                          Cel: 84.9kg
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="bg-emerald-400 shadow-2xl text-lg text-white px-4 py-1 rounded-2xl custom-sm">
                          Węglowodany: 175g
                        </p>
                        <p className="bg-emerald-400 shadow-2xl text-lg text-white px-4 py-1 rounded-2xl custom-sm">
                          Białko: 123g
                        </p>
                        <p className="bg-emerald-400 shadow-2xl text-lg text-white px-4 py-1 rounded-2xl custom-sm">
                          Tłuszcz: 24g
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div className="w-full flex justify-between items-center pr-8 mt-16 ">
                  <div className="flex space-x-4">
                    <SlNote className="w-10 h-10 text-emerald-500" />
                    <BsGraphDownArrow className="w-10 h-10 text-gray-400 hover:text-emerald-300" />
                    <FiSettings className="w-10 h-10 text-gray-400 hover:text-emerald-300" />
                  </div>
                  <h1 className="ml-1 shadow-2xl text-2xl font-bold bg-emerald-600 text-white px-8 py-4 rounded-full">
                    2345kcal
                  </h1>
                </div>
              </div>
            </div>
          </FormWrapper>
        </AnimatedOpacityWrapper>
      )}
      <button onClick={userLogOut}>xxxx</button>
    </main>
  );
};

export default Home;
