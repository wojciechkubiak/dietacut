import React, { ChangeEvent } from "react";

interface DateInputProps {
  name: string;
  value: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  extraClassNames?: string;
}

const DateInput: React.FC<DateInputProps> = ({
  name,
  label,
  onChange,
  value,
  isFullWidth = true,
  isDisabled = false,
  extraClassNames = "",
}) => (
  <>
    {Boolean(label?.length) && (
      <label className="text-lg text-gray-500 pb-2">{label}</label>
    )}
    <input
      value={value}
      title="date-input"
      type="date"
      onChange={onChange}
      name={name}
      className={`${extraClassNames} ${
        isFullWidth ? "w-full" : ""
      } bg-gray-200 px-5 py-2 text-xl border-b-2 text-gray-800 focus:outline-none focus:border-b-amber-500`}
      autoComplete="on"
      disabled={isDisabled}
      required
    />
  </>
);

export default DateInput;
