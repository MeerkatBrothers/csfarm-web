import clsx from "clsx";

import ServiceLogo from "@/components/atoms/ServiceLogo";
import NonMobileHeader from "@/components/organisms/layout/NonMobileHeader";
import MobileHeader from "@/components/organisms/layout/MobileHeader";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full max-w-7xl h-14">
      <ServiceLogo />

      <div className={clsx("hidden", "md:block")}>
        <NonMobileHeader />
      </div>

      <div className={clsx("md:hidden")}>
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
