import { FC, PropsWithChildren } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface FormHeaderProps {
  headerText: string;
  onBackButtonClick?: () => void;
}
const FormHeader: FC<PropsWithChildren<FormHeaderProps>> = ({
  children,
  headerText,
  onBackButtonClick,
}) => (
  <>
    {!!onBackButtonClick && (
      <button type="button" onClick={onBackButtonClick}>
        <AiOutlineArrowLeft className="text-3xl text-emerald-700" />
      </button>
    )}
    <h1 className="font-bold text-7xl text-gray-700 text-center">
      {headerText}
    </h1>
    {children}
  </>
);

export default FormHeader;
