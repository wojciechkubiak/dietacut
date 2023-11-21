import React, { ChangeEvent } from "react";

interface NumberInputProps {
  name: string;
  value?: number;
  min?: number;
  max?: number;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  extraClassNames?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  name,
  value,
  min,
  max,
  label,
  onChange,
  isFullWidth = true,
  isDisabled = false,
  extraClassNames = "",
}) => (
  <>
    {!!label && <label className="text-lg text-gray-500 pb-2">{label}</label>}
    <input
      title="number-input"
      type="number"
      onChange={onChange}
      value={value}
      name={name}
      min={min}
      max={max}
      className={`${extraClassNames} ${
        isFullWidth ? "w-full" : ""
      } bg-gray-200 px-5 py-2 text-xl border-b-2 text-gray-800 focus:outline-none focus:border-b-orange-400`}
      autoComplete="on"
      disabled={isDisabled}
      required
    />
  </>
);

export default NumberInput;
