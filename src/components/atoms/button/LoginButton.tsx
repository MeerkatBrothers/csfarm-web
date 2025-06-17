"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface LoginButtonProps {
  platform: string;
  icon: ReactNode;
  backgroundColor: string;
  foregroundColor: string;
  onClick: () => void;
}

const LoginButton = ({ platform, icon, backgroundColor, foregroundColor, onClick }: LoginButtonProps) => {
  return (
    <button
      className={clsx(
        "flex w-full justify-center items-center gap-2 py-3 rounded-lg",
        "text-body1 font-medium",
        backgroundColor,
        foregroundColor,
      )}
      onClick={onClick}
    >
      {icon}
      {platform}로 계속하기
    </button>
  );
};

export default LoginButton;
