import clsx from "clsx";

import NonMobileHeaderActionGroup from "@/components/molecules/NonMobileHeaderActionGroup";
import MobileHeaderActionGroup from "@/components/molecules/MobileHeaderActionGroup";

const HeaderActionGroup = () => {
  return (
    <>
      <div className={clsx("hidden", "md:block")}>
        <NonMobileHeaderActionGroup />
      </div>

      <div className={clsx("md:hidden")}>
        <MobileHeaderActionGroup />
      </div>
    </>
  );
};

export default HeaderActionGroup;
