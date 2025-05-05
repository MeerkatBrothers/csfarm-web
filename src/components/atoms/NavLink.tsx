import Link from "next/link";
import clsx from "clsx";

interface NavLinkProps {
  label: string;
  to: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink = ({ label, to, isActive, onClick }: NavLinkProps) => {
  return (
    <Link
      className={clsx(
        "flex justify-center py-4 text-base font-semibold",
        isActive && "text-primary"
      )}
      href={to}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavLink;
