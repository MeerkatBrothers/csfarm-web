import { FiX } from 'react-icons/fi';

import { ICON_SIZE } from '@/shared/constants/ui';

import NavLinkerSection from '@/components/organisms/NavLinkerSection';
import NavAuthSection from '@/components/organisms/NavAuthSection';

interface OverlayNavProps {
  onClose: (isOpen: boolean) => void;
}

const OverlayNav = ({ onClose }: OverlayNavProps) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white p-4">
      <div className="flex justify-end">
        <FiX size={ICON_SIZE} onClick={() => onClose(false)} />
      </div>

      <div className="flex flex-col gap-6">
        <NavLinkerSection onLinkerClick={() => onClose(false)} />

        <hr className="border-gray-200" />

        <NavAuthSection />
      </div>
    </div>
  );
};

export default OverlayNav;
