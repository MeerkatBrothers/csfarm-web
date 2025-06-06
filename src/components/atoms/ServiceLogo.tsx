"use client";

import { useRouter } from "next/navigation";

import Logo from "@/../public/svgs/logo.svg";

const ServiceLogo = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.replace("/")}>
      <Logo width={128} />
    </button>
  );
};

export default ServiceLogo;
