import Logo from "@/../public/svgs/logo.svg";
import ProfileImage from "@/components/atoms/ProfileImage";

const Header = () => {
  return (
    <header className="flex justify-center border-b border-service-gray-medium">
      <div className="flex flex-row justify-between items-center max-w-7xl w-full px-4 py-2">
        <Logo width={128} />
        <ProfileImage imageUrl={null} size={40} />
      </div>
    </header>
  );
};

export default Header;
