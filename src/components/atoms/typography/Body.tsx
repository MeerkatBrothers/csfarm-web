import { cn } from '@/shared/utils/cn';

import type { TypographyProps } from '@/components/atoms/typography/props/typography.props';

interface BodyProps extends TypographyProps {
  scale: 1 | 2;
  preLine?: boolean;
}

const SIZE: Record<BodyProps['scale'], string> = {
  1: 'text-body1',
  2: 'text-body2',
};

const Body = ({ text, scale, truncate = false, preLine = false, styles }: BodyProps) => {
  return (
    <p
      className={cn(
        'leading-relaxed',
        SIZE[scale],
        truncate && 'truncate',
        preLine && 'whitespace-pre-line',
        styles?.color ?? 'text-black',
        styles?.weight ?? 'font-normal',
      )}
    >
      {text}
    </p>
  );
};

export default Body;
