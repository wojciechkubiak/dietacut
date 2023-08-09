import React, { PropsWithChildren, useEffect, useState } from "react";

const AnimatedOpacityWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div
      className={`${
        isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } duration-1000`}
    >
      {children}
    </div>
  );
};

export default AnimatedOpacityWrapper;
