'use client';

import { cn } from '@/shared/utils/cn';

import type { ButtonProps } from '@/components/atoms/button/props/button.props';
import Label from '@/components/atoms/typography/Label';

const PrimaryButton = ({ label, type = 'button', disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-primary-500 h-12 w-full rounded-lg',
        'disabled:bg-gray-100',
        'md:w-auto md:px-4',
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <Label
        text={label}
        scale={1}
        styles={{ weight: 'font-medium', color: disabled ? 'text-gray-400' : 'text-white' }}
      />
    </button>
  );
};

export default PrimaryButton;
