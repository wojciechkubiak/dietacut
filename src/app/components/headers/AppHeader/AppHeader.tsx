import { FC } from "react";

const AppHeader: FC = () => (
  <>
    <h1 className="text-ephesis font-bold text-6xl text-amber-300 pt-2 text-start">
      DietaCut
    </h1>
    <p className="text-start text-sm text-amber-200 mt-1">
      Stworzona z FatSecret Platform API
    </p>
  </>
);

export default AppHeader;
