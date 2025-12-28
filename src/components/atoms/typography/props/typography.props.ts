import type { TypographyStyleOptions } from '@/components/atoms/typography/options/typography-style.options';

export interface TypographyProps {
  text: string;
  truncate?: boolean;
  styles?: TypographyStyleOptions;
}
