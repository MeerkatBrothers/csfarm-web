import { cn } from '@/shared/utils/cn';

import type { TypographyProps } from '@/components/atoms/typography/props/typography.props';

interface HeadingProps extends TypographyProps {
  scale: 1 | 2;
}

const SIZE: Record<HeadingProps['scale'], string> = {
  1: 'text-heading1-sm md:text-heading1-md lg:text-heading1-lg',
  2: 'text-heading2-sm md:text-heading2-md lg:text-heading2-lg',
};

const Heading = ({ text, scale, truncate = false, styles }: HeadingProps) => {
  return (
    <p
      className={cn(
        'leading-snug',
        SIZE[scale],
        truncate && 'truncate',
        styles?.color ?? 'text-black',
        styles?.weight ?? 'font-bold',
      )}
    >
      {text}
    </p>
  );
};

export default Heading;
