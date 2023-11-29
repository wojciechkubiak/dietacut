import { Activity } from "@/models/User";
import {
  TbAntennaBars1,
  TbAntennaBars2,
  TbAntennaBars3,
  TbAntennaBars4,
  TbAntennaBars5,
} from "react-icons/tb";
import FormRecord from "../FormRecord/FormRecord";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeRegisterData } from "@/store/Auth/slice";

interface ActivityLevelProps {
  onChange: (value: Activity) => void;
  currentValue: Activity;
}

const ActivityLevel: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register: { activityLevel },
    isLoading,
  } = useAppSelector((state) => state.data);

  const onChangeActivityLevel = (value: Activity) => {
    dispatch(changeRegisterData({ activityLevel: value }));
  };

  const onChangeReducedKcal = (value: number) => {
    dispatch(changeRegisterData({ reducedKcal: value }));
  };

  return (
    <FormRecord
      header="Poziom aktywności"
      description="Dodamy/odejmiemy kalorie na podstawie Twej aktywności."
    >
      <div className="flex justify-evenly mx-20 my-8">
        <TbAntennaBars1
          className={`w-16 h-16 ${
            activityLevel === Activity.LOW
              ? "text-amber-300 rounded-lg shadow-lg"
              : "text-gray-500"
          } hover:cursor-pointer`}
          onClick={() => onChangeActivityLevel(Activity.LOW)}
        />
        <TbAntennaBars2
          className={`w-16 h-16 ${
            activityLevel === Activity.MEDIUM
              ? "text-amber-300 rounded-lg shadow-lg"
              : "text-gray-500"
          } hover:cursor-pointer`}
          onClick={() => onChangeActivityLevel(Activity.MEDIUM)}
        />
        <TbAntennaBars3
          className={`w-16 h-16 ${
            activityLevel === Activity.HIGH
              ? "text-amber-300 rounded-lg shadow-lg"
              : "text-gray-500"
          } hover:cursor-pointer`}
          onClick={() => onChangeActivityLevel(Activity.HIGH)}
        />
        <TbAntennaBars4
          className={`w-16 h-16 ${
            activityLevel === Activity.ADVANCED
              ? "text-amber-300 rounded-lg shadow-lg"
              : "text-gray-500"
          } hover:cursor-pointer`}
          onClick={() => onChangeActivityLevel(Activity.ADVANCED)}
        />
        <TbAntennaBars5
          className={`w-16 h-16 ${
            activityLevel === Activity.PROFESSIONAL
              ? "text-amber-300 rounded-lg shadow-lg"
              : "text-gray-500"
          } hover:cursor-pointer`}
          onClick={() => onChangeActivityLevel(Activity.PROFESSIONAL)}
        />
      </div>
    </FormRecord>
  );
};

export default ActivityLevel;
