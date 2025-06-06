"use client";

import clsx from "clsx";

interface NavLinkerProps {
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavLinker = ({ label, isActive, onClick }: NavLinkerProps) => {
  return (
    <button
      className={clsx("text-body1 font-medium", "hover:text-black", "md:text-label1", isActive ? "text-black" : "text-gray-400")}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default NavLinker;
