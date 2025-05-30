import clsx from "clsx";

interface NavLinkerProps {
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavLinker = ({ label, isActive, onClick }: NavLinkerProps) => {
  return (
    <button className={clsx("flex justify-center py-4 text-base font-semibold", isActive && "text-primary")} onClick={onClick}>
      {label}
    </button>
  );
};

export default NavLinker;
