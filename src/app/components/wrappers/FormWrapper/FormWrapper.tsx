import { FC, PropsWithChildren } from "react";

interface FormWrapperProps {
  externalClassName?: string;
}

const FormWrapper: FC<PropsWithChildren<FormWrapperProps>> = ({
  children,
  externalClassName,
}) => (
  <div
    className={`relative w-1/2 left-1/2 -translate-x-1/2 min-w-[500px] bg-white shadow-2xl rounded-xl mt-12 ${externalClassName}`}
  >
    {children}
  </div>
);

export default FormWrapper;
