"use client";

import clsx from "clsx";

import Body1 from "@/components/atoms/typography/Body1";

interface Props {
  platform: string;
  icon: React.ReactNode;
  backgroundColor: string;
  foregroundColor: string;
  onClick: () => void;
}

const LoginButton = ({ platform, icon, backgroundColor, foregroundColor, onClick }: Props) => {
  return (
    <button
      className={clsx(
        "flex w-full justify-center items-center py-3 space-x-2 rounded-lg text-lg font-bold",
        backgroundColor,
        foregroundColor,
      )}
      onClick={onClick}
    >
      {icon}

      <Body1 text={`${platform}로 계속하기`} />
    </button>
  );
};

export default LoginButton;
