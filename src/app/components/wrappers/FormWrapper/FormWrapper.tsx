import { FC, PropsWithChildren } from "react";

const FormWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="relative w-1/2 left-1/2 -translate-x-1/2 min-w-[500px] bg-white shadow-2xl rounded-xl pt-12 px-12 pb-6 mt-12">
    {children}
  </div>
);

export default FormWrapper;
