import { FC, PropsWithChildren } from "react";

interface FormSubHeaderProps {
  text: string;
}

const FormHeader: FC<PropsWithChildren<FormSubHeaderProps>> = ({
  children,
  text,
}) => (
  <>
    <h1 className="font-bold text-5xl text-gray-500 text-center">{text}</h1>
    {children}
  </>
);

export default FormHeader;
