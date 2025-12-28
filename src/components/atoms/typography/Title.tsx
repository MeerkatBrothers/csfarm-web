import { cn } from '@/shared/utils/cn';

import type { TypographyProps } from '@/components/atoms/typography/props/typography.props';

interface TitleProps extends TypographyProps {
  scale: 1 | 2 | 3;
}

const SIZE: Record<TitleProps['scale'], string> = {
  1: 'text-title1-sm md:text-title1-md lg:text-title1-lg',
  2: 'text-title2-sm md:text-title2-md lg:text-title2-lg',
  3: 'text-title3-sm md:text-title3-md lg:text-title3-lg',
};

const Title = ({ text, scale, truncate = false, styles }: TitleProps) => {
  return (
    <p
      className={cn(
        'leading-tight',
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

export default Title;
