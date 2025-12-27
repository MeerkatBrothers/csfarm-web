import { cn } from '@/shared/utils/cn';

import type { TypographyProps } from '@/components/atoms/typography/props/typography.props';

interface DisplayProps extends TypographyProps {
  scale: 1 | 2;
}

const SIZE: Record<DisplayProps['scale'], string> = {
  1: 'text-display1-sm md:text-display1-md lg:text-display1-lg',
  2: 'text-display2-sm md:text-display2-md lg:text-display2-lg',
};

const Display = ({ text, scale, styles }: DisplayProps) => {
  return (
    <p
      className={cn(
        'leading-tight',
        SIZE[scale],
        styles?.color ?? 'text-black',
        styles?.weight ?? 'font-bold',
      )}
    >
      {text}
    </p>
  );
};

export default Display;
