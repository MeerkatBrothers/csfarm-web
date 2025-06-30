import AuthButton from "@/domains/auth/components/AuthButton";

import NavLinkerSection from "@/components/organisms/NavLinkerSection";

const NonMobileHeader = () => {
  return (
    <div className="flex items-center gap-10">
      <NavLinkerSection />

      <AuthButton />
    </div>
  );
};

export default NonMobileHeader;
