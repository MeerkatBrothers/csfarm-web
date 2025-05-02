import NavLinkGroup from "@/components/molecules/NavLinkGroup";
import clsx from "clsx";

const SideNav = () => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between items-center h-full",
        "w-36 lg:w-52"
      )}
    >
      <NavLinkGroup />
    </div>
  );
};

export default SideNav;
