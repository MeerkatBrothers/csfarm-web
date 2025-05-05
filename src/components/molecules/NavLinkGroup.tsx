"use client";

import { usePathname } from "next/navigation";

import NavLink from "@/components/atoms/NavLink";

const links: { label: string; to: string }[] = [
  { label: "오늘의 수확", to: "/insight/today" },
  { label: "오늘의 타작", to: "/question/today" },
  { label: "수확물 창고", to: "/insight/storage" },
];

interface NavLinkGroupProps {
  onLinkClick?: () => void;
}

const NavLinkGroup = ({ onLinkClick }: NavLinkGroupProps) => {
  const pathname: string = usePathname();

  return (
    <div className="flex flex-col w-full">
      {links.map(({ label, to }, index) => (
        <NavLink
          key={index}
          label={label}
          to={to}
          isActive={pathname === to}
          onClick={onLinkClick}
        />
      ))}
    </div>
  );
};

export default NavLinkGroup;
