'use client';

import { cn } from '@/shared/utils/cn';

import type { ButtonProps } from '@/components/atoms/button/props/button.props';
import type { ButtonStyleOptions } from '@/components/atoms/button/options/button-style.options';
import Body from '@/components/atoms/typography/Body';

interface TertiaryButtonProps extends ButtonProps {
  styles?: ButtonStyleOptions;
}

const TertiaryButton = ({ label, styles, disabled = false, onClick }: TertiaryButtonProps) => {
  return (
    <button
      className={cn('h-12 w-full', 'md:w-auto md:px-4')}
      disabled={disabled}
      onClick={onClick}
    >
      <Body
        text={label}
        scale={1}
        styles={{
          weight: 'font-medium',
          color: disabled ? 'text-gray-400' : (styles?.labelColor ?? 'text-black'),
        }}
      />
    </button>
  );
};

export default TertiaryButton;
