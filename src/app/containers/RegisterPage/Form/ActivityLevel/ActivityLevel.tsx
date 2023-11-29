import { Activity } from "@/models/User";
import { PropsWithChildren } from "react";
import {
  TbAntennaBars1,
  TbAntennaBars2,
  TbAntennaBars3,
  TbAntennaBars4,
  TbAntennaBars5,
} from "react-icons/tb";

interface ActivityLevelProps {
  onChange: (value: Activity) => void;
  currentValue: Activity;
}

const ActivityLevel: React.FC<PropsWithChildren<ActivityLevelProps>> = ({
  onChange,
  currentValue,
}) => {
  return (
    <div className="flex justify-evenly mx-20 my-8">
      <TbAntennaBars1
        className={`w-16 h-16 ${
          currentValue === Activity.LOW
            ? "text-amber-300 rounded-lg shadow-lg"
            : "text-gray-500"
        } hover:cursor-pointer`}
        onClick={() => onChange(Activity.LOW)}
      />
      <TbAntennaBars2
        className={`w-16 h-16 ${
          currentValue === Activity.MEDIUM
            ? "text-amber-300 rounded-lg shadow-lg"
            : "text-gray-500"
        } hover:cursor-pointer`}
        onClick={() => onChange(Activity.MEDIUM)}
      />
      <TbAntennaBars3
        className={`w-16 h-16 ${
          currentValue === Activity.HIGH
            ? "text-amber-300 rounded-lg shadow-lg"
            : "text-gray-500"
        } hover:cursor-pointer`}
        onClick={() => onChange(Activity.HIGH)}
      />
      <TbAntennaBars4
        className={`w-16 h-16 ${
          currentValue === Activity.ADVANCED
            ? "text-amber-300 rounded-lg shadow-lg"
            : "text-gray-500"
        } hover:cursor-pointer`}
        onClick={() => onChange(Activity.ADVANCED)}
      />
      <TbAntennaBars5
        className={`w-16 h-16 ${
          currentValue === Activity.PROFESSIONAL
            ? "text-amber-300 rounded-lg shadow-lg"
            : "text-gray-500"
        } hover:cursor-pointer`}
        onClick={() => onChange(Activity.PROFESSIONAL)}
      />
    </div>
  );
};

export default ActivityLevel;
