import { FC, PropsWithChildren } from "react";
import imagePath from "@/assets/bg/2640624.jpg";

interface BackgroundWrapperProps {
  externalClassName?: string;
  isBackground?: boolean;
}

console.log(imagePath.src);

const BackgroundWrapper: FC<PropsWithChildren<BackgroundWrapperProps>> = ({
  children,
  isBackground,
  externalClassName = "",
}) => (
  <div
    style={{ backgroundImage: isBackground ? `url(${imagePath.src})` : "" }}
    className={`${externalClassName} bg-no-repeat bg-center bg-cover bg-fixed min-w-screen min-h-screen m-0 p-0`}
  >
    {children}
    {isBackground ? (
      <p className="fixed text-xs text-amber-400 right-2 bottom-2">
        Image by{" "}
        <a href="http://www.freepik.com">Designed by pikisuperstar / Freepik</a>
      </p>
    ) : null}
  </div>
);

export default BackgroundWrapper;
