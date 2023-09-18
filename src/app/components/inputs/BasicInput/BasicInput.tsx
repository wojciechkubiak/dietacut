import React, { ChangeEvent } from "react";

export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
}

interface BasicInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  inputType: InputType;
  label?: string;
}

const BasicInput: React.FC<BasicInputProps> = ({
  value,
  name,
  onChange,
  label,
  inputType,
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
      required
    />
  </>
);

export default BasicInput;
