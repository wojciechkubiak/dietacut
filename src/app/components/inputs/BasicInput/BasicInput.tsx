import React, { ChangeEvent } from "react";

export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
}

interface BasicInputProps {
  name: string;
  value?: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputType?: InputType;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  extraClassNames?: string;
}

const BasicInput: React.FC<BasicInputProps> = ({
  name,
  value,
  label,
  onChange,
  inputType = InputType.TEXT,
  isFullWidth = true,
  isDisabled = false,
  extraClassNames = "",
}) => (
  <>
    {Boolean(label?.length) && (
      <label className="text-lg text-gray-500 pb-2">{label}</label>
    )}
    <input
      title="basic-input"
      type={inputType}
      onChange={onChange}
      value={value}
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

export default BasicInput;
