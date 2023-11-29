import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface CheckboxProps {
  onChange: VoidFunction;
  isChecked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, isChecked }) => {
  return (
    <div
      className="w-4 h-4 border rounded-sm border-amber-400 flex justify-center items-center"
      onClick={onChange}
    >
      {isChecked && <AiOutlineCheck className="w-3 h-3 text-amber-400" />}
    </div>
  );
};

export default Checkbox;
