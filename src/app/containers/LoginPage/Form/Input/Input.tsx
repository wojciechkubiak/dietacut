import { ChangeEvent } from "react";

import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";

interface InputProps {
  value: string;
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputType: InputType;
}

const Input: React.FC<InputProps> = ({
  value,
  label,
  name,
  onChange,
  inputType,
}) => {
  return (
    <div className="flex flex-col justify-center w-full px-16">
      <BasicInput
        value={value}
        onChange={onChange}
        inputType={inputType}
        label={label}
        name={name}
      />
    </div>
  );
};

export default Input;
