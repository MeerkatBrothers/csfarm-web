import { cn } from '@/shared/utils/cn';

import type { TypographyProps } from '@/components/atoms/typography/props/typography.props';

interface CaptionProps extends TypographyProps {
  scale: 1 | 2;
}

const SIZE: Record<CaptionProps['scale'], string> = {
  1: 'text-caption1',
  2: 'text-caption2',
};

const Caption = ({ text, scale, truncate = false, styles }: CaptionProps) => {
  return (
    <p
      className={cn(
        'leading-snug',
        SIZE[scale],
        truncate && 'truncate',
        styles?.color ?? 'text-black',
        styles?.weight ?? 'font-normal',
      )}
    >
      {text}
    </p>
  );
};

export default Caption;
