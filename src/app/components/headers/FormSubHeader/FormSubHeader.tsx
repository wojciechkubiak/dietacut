import { FC, PropsWithChildren } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface FormSubHeaderProps {
  text: string;
}

const FormHeader: FC<PropsWithChildren<FormSubHeaderProps>> = ({
  children,
  text,
}) => (
  <>
    <h1 className="font-bold text-5xl text-gray-700 text-center">{text}</h1>
    {children}
  </>
);

export default FormHeader;
