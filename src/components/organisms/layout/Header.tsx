import Logo from "@/../public/svgs/logo.svg";

import HeaderActionGroup from "@/components/molecules/HeaderActionGroup";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full max-w-7xl h-14">
      <Logo width={128} />

      <HeaderActionGroup />
    </div>
  );
};

export default Header;
