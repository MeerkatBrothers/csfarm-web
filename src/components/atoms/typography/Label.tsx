import { cn } from '@/shared/utils/cn';

import type { TypographyProps } from '@/components/atoms/typography/props/typography.props';

interface LabelProps extends TypographyProps {
  scale: 1 | 2;
}

const SIZE: Record<LabelProps['scale'], string> = {
  1: 'text-label1',
  2: 'text-label2',
};

const Label = ({ text, scale, styles }: LabelProps) => {
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

export default Label;
