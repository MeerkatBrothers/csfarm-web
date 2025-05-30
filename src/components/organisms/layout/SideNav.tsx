import clsx from "clsx";

import NavLinkerSection from "@/components/organisms/NavLinkerSection";

const SideNav = () => {
  return (
    <div className={clsx("flex flex-col justify-between items-center w-36 h-full", "lg:w-52")}>
      <NavLinkerSection />
    </div>
  );
};

export default SideNav;
