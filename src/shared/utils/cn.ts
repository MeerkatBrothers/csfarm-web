import clsx, { type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'display1-sm',
            'display1-md',
            'display1-lg',
            'display2-sm',
            'display2-md',
            'display2-lg',

            'title1-sm',
            'title1-md',
            'title1-lg',
            'title2-sm',
            'title2-md',
            'title2-lg',
            'title3-sm',
            'title3-md',
            'title3-lg',

            'heading1-sm',
            'heading1-md',
            'heading1-lg',
            'heading2-sm',
            'heading2-md',
            'heading2-lg',

            'headline1-sm',
            'headline1-md',
            'headline1-lg',
            'headline2-sm',
            'headline2-md',
            'headline2-lg',

            'body1',
            'body2',
            'label1',
            'label2',
            'caption1',
            'caption2',
          ],
        },
      ],
    },
  },
});

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
