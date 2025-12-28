'use client';

import { cn } from '@/shared/utils/cn';

import type { ButtonProps } from '@/components/atoms/button/props/button.props';
import Label from '@/components/atoms/typography/Label';

const SecondaryButton = ({ label, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(
        'h-12 w-full rounded-lg bg-gray-200',
        'disabled:bg-gray-100',
        'md:w-auto md:px-4',
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <Label
        text={label}
        scale={1}
        styles={{ weight: 'font-medium', color: disabled ? 'text-gray-400' : 'text-black' }}
      />
    </button>
  );
};

export default SecondaryButton;
