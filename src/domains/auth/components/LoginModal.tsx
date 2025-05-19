"use client";

import Heading1 from "@/components/atoms/typography/Heading1";
import Label1 from "@/components/atoms/typography/Label1";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={onClose} className="flex items-center justify-center fixed z-50 inset-0 backdrop-blur-xs bg-service-black/30">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-center items-center w-full max-w-sm px-8 py-6 space-y-4 rounded-2xl shadow-lg bg-white"
      >
        <Heading1 text="로그인" />

        <Label1 text="로그인하여 더 많은 기능을 이용해 보세요." styles={{ textColor: "text-service-gray" }} />

        {/* 로그인 버튼 컴포넌트 추가 */}
      </div>
    </div>
  );
};

export default LoginModal;
