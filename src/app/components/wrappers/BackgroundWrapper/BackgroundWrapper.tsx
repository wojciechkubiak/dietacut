import { FC, PropsWithChildren } from "react";

interface BackgroundWrapperProps {
  externalClassName?: string;
}

const BackgroundWrapper: FC<PropsWithChildren<BackgroundWrapperProps>> = ({
  children,
  externalClassName,
}) => (
  <div className={`${externalClassName} min-w-screen min-h-screen m-0 p-0`}>
    {children}
  </div>
);

export default BackgroundWrapper;
