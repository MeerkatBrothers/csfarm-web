import clsx from "clsx";

import NavLinkSection from "@/components/organisms/NavLinkSection";

const SideNav = () => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between items-center h-full",
        "w-36 lg:w-52"
      )}
    >
      <NavLinkSection />
    </div>
  );
};

export default SideNav;
