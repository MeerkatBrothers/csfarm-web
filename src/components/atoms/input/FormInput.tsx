"use client";

import clsx from "clsx";

import Label1 from "@/components/atoms/typography/Label1";

interface FormInputProps {
  label?: string;
  value?: string;
  maxLength?: number;
  placeholder?: string;
  onChange: (value: string) => void;
}

const FormInput = ({ label, value, maxLength, placeholder, onChange }: FormInputProps) => {
  return (
    <div className="flex flex-col w-full gap-1.5">
      {label && <Label1 text={label} />}

      <input
        className={clsx("rounded-lg px-3 py-4 bg-gray-100", "text-body1 font-normal text-black placeholder:text-gray-400")}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
