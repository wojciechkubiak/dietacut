import React, { PropsWithChildren, useEffect, useState } from "react";

interface AnimatedOpacityWrapperProps {
  duration?: number;
}

const AnimatedOpacityWrapper: React.FC<
  PropsWithChildren<AnimatedOpacityWrapperProps>
> = ({ children, duration = 1000 }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div
      className={`${
        isAnimated ? "opacity-100" : "opacity-0"
      } duration-${duration}`}
    >
      {children}
    </div>
  );
};

export default AnimatedOpacityWrapper;
