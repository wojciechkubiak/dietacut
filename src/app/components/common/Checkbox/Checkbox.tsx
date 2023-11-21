import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface CheckboxProps {
  onChange: VoidFunction;
  isChecked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, isChecked }) => {
  return (
    <div
      className="w-4 h-4 border-2 border-orange-300 flex justify-center items-center"
      onClick={onChange}
    >
      {isChecked && <AiOutlineCheck className="w-3 h-3 text-orange-500" />}
    </div>
  );
};

export default Checkbox;
