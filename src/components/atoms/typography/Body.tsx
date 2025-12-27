import { cn } from '@/shared/utils/cn';

import type { TypographyProps } from '@/components/atoms/typography/props/typography.props';

interface BodyProps extends TypographyProps {
  scale: 1 | 2;
}

const SIZE: Record<BodyProps['scale'], string> = {
  1: 'text-body1',
  2: 'text-body2',
};

const Body = ({ text, scale, styles }: BodyProps) => {
  return (
    <p
      className={cn(
        'leading-relaxed',
        SIZE[scale],
        styles?.color ?? 'text-black',
        styles?.weight ?? 'font-normal',
      )}
    >
      {text}
    </p>
  );
};

export default Body;
