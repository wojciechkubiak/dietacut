import React, { ChangeEvent } from "react";

export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
}

interface BasicInputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputType: InputType;
  label?: string;
}

const BasicInput: React.FC<BasicInputProps> = ({
  name,
  value,
  onChange,
  inputType,
  label,
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
      className="bg-gray-200 px-5 py-2 text-xl border-b-2 text-gray-800 focus:outline-none focus:border-b-emerald-400"
      autoComplete="on"
      required
    />
  </>
);

export default BasicInput;
