import Logo from "@/../public/svgs/logo.svg";

import HeaderActionGroup from "@/components/molecules/HeaderActionGroup";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center max-w-7xl w-full h-14">
      <Logo width={128} />

      <HeaderActionGroup />
    </div>
  );
};

export default Header;
