import clsx from "clsx";

import Logo from "@/../public/svgs/logo.svg";

import { TERMS_OF_SERVICE_URL, PRIVACY_POLICY_URL } from "@/lib/constants/policy";

import Caption1 from "@/components/atoms/typography/Caption1";
import Label1 from "@/components/atoms/typography/Label1";

const Footer = () => {
  return (
    <div className={clsx("flex flex-col justify-between w-full max-w-6xl h-full p-6", "md:flex-row md:items-center")}>
      <div className="flex flex-col gap-6">
        <Logo width={80} />

        <div className="flex flex-col">
          <Caption1 text="Contact meerkatbrothers.team@gmail.com" styles={{ color: "text-gray-500", weight: "font-medium" }} />

          <Caption1
            text="Copyright © 2025 MeerkatBrothers. All rights reserved."
            styles={{ color: "text-gray-500", weight: "font-medium" }}
          />
        </div>
      </div>

      <div className={clsx("flex gap-4", "md:gap-8")}>
        <a href={TERMS_OF_SERVICE_URL}>
          <Label1 text="이용약관" styles={{ color: "text-gray-600" }} />
        </a>

        <a href={PRIVACY_POLICY_URL}>
          <Label1 text="개인정보처리방침" styles={{ color: "text-gray-600" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
