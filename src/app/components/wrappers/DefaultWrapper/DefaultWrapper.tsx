import { FC, PropsWithChildren } from "react";

interface DefaultWrapperProps {
  externalClassName?: string;
}

const DefaultWrapper: FC<PropsWithChildren<DefaultWrapperProps>> = ({
  children,
  externalClassName,
}) => (
  <div className={`relative shadow-2xl select-none ${externalClassName}`}>
    {children}
  </div>
);

export default DefaultWrapper;
