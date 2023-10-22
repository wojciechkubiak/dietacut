import React, { ChangeEvent } from "react";
import { v4 as uuid } from "uuid";

interface RadioProps {
  name: string;
  value: string;
  options: string[];
  label?: string;
  onChange?: (value: any) => void;
  isDisabled?: boolean;
  extraClassNames?: string;
}

const Radio: React.FC<RadioProps> = ({
  name,
  value,
  options,
  label,
  onChange,
  isDisabled = false,
}) => (
  <>
    {Boolean(label?.length) && (
      <label className="text-lg text-gray-500 pb-2">{label}</label>
    )}
    <div className="flex w-full">
      {options.map((option) => (
        <div
          key={uuid()}
          className={`flex-1 border border-white cursor-pointer text-center py-4  ${
            option === value ? "bg-emerald-500" : "bg-zinc-200"
          }`}
          onClick={() => {
            if (onChange) onChange(option);
          }}
        >
          <h1
            className={`text-md ${
              option === value ? "text-white" : "text-zinc-800"
            }`}
          >
            {option}
          </h1>
        </div>
      ))}
    </div>
  </>
);

export default Radio;
