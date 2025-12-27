'use client';

import { ReactNode } from 'react';

import { cn } from '@/shared/utils/cn';

interface LoginButtonProps {
  platformName: string;
  icon: ReactNode;
  backgroundColor: string;
  foregroundColor: string;
  onClick: () => void;
}

const LoginButton = ({
  platformName,
  icon,
  backgroundColor,
  foregroundColor,
  onClick,
}: LoginButtonProps) => {
  return (
    <button
      className={cn(
        'text-body1 flex w-full items-center justify-center gap-2 rounded-lg py-3 font-medium',
        backgroundColor,
        foregroundColor,
      )}
      onClick={onClick}
    >
      {icon}
      {platformName}로 계속하기
    </button>
  );
};

export default LoginButton;
