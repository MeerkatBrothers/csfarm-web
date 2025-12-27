'use client';

import { cn } from '@/shared/utils/cn';

import Label from '@/components/atoms/typography/Label';

interface ToggleChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const ToggleChip = ({ label, isActive, onClick }: ToggleChipProps) => {
  return (
    <button
      className={cn('rounded-full px-4 py-2', isActive ? 'bg-primary-100' : 'bg-gray-100')}
      onClick={onClick}
    >
      <Label
        text={label}
        scale={2}
        styles={{ color: isActive ? 'text-primary-500' : 'text-gray-500' }}
      />
    </button>
  );
};

export default ToggleChip;
