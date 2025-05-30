import { FiX } from "react-icons/fi";

import { SVG_SIZE } from "@/lib/constants/ui";

import NavLinkerSection from "@/components/organisms/NavLinkerSection";

interface OverlayNavProps {
  onClose: (isOpen: boolean) => void;
}

const OverlayNav = ({ onClose }: OverlayNavProps) => {
  return (
    <div className="flex flex-col fixed p-4 z-50 inset-0 bg-white">
      <div className="flex justify-end">
        <FiX size={SVG_SIZE} onClick={() => onClose(false)} />
      </div>

      <NavLinkerSection onLinkerClick={() => onClose(false)} />
    </div>
  );
};

export default OverlayNav;
