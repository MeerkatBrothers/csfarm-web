import { cn } from '@/shared/utils/cn';

import type { TypographyProps } from '@/components/atoms/typography/props/typography.props';

interface HeadlineProps extends TypographyProps {
  scale: 1 | 2;
}

const SIZE: Record<HeadlineProps['scale'], string> = {
  1: 'text-headline1-sm md:text-headline1-md lg:text-headline1-lg',
  2: 'text-headline2-sm md:text-headline2-md lg:text-headline2-lg',
};

const Headline = ({ text, scale, styles }: HeadlineProps) => {
  return (
    <p
      className={cn(
        'leading-normal',
        SIZE[scale],
        styles?.color ?? 'text-black',
        styles?.weight ?? 'font-bold',
      )}
    >
      {text}
    </p>
  );
};

export default Headline;
