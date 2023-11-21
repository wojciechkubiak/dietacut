import { Activity, Gender } from "@/models/User";
import { PropsWithChildren } from "react";
import { FaFemale, FaMale } from "react-icons/fa";

interface GenderTypeProps {
  onChange: (value: Gender) => void;
  currentValue: Gender;
}

const GenderType: React.FC<PropsWithChildren<GenderTypeProps>> = ({
  onChange,
  currentValue,
}) => {
  return (
    <div className="flex justify-evenly mx-20 my-8">
      <FaFemale
        className={`w-16 h-16 p-2 ${
          currentValue === Gender.FEMALE
            ? "text-orange-300 rounded-lg shadow-lg"
            : "text-gray-500"
        } hover:cursor-pointer`}
        onClick={() => onChange(Gender.FEMALE)}
      />
      <FaMale
        className={`w-16 h-16 p-2 ${
          currentValue === Gender.MALE
            ? "text-orange-300 rounded-lg shadow-lg"
            : "text-gray-500"
        } hover:cursor-pointer`}
        onClick={() => onChange(Gender.MALE)}
      />
    </div>
  );
};

export default GenderType;
