'use client';

import { cn } from '@/shared/utils/cn';

interface NavLinkerProps {
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavLinker = ({ label, isActive, onClick }: NavLinkerProps) => {
  return (
    <button
      className={cn(
        'text-body1 font-medium',
        'hover:text-black',
        'md:text-label1',
        isActive ? 'text-black' : 'text-gray-400',
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default NavLinker;
