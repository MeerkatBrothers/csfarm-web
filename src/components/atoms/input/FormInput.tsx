'use client';

import { forwardRef, InputHTMLAttributes } from 'react';

import { cn } from '@/shared/utils/cn';

import Label from '@/components/atoms/typography/Label';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ label, ...rest }, ref) => {
  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && <Label text={label} scale={1} />}

      <input
        ref={ref}
        {...rest}
        className={cn(
          'text-body1 rounded-lg bg-gray-100 px-3 py-4 font-normal text-black',
          'placeholder:text-gray-400',
        )}
      />
    </div>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
