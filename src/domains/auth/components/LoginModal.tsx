"use client";

import Kakao from "@/../public/svgs/kakao.svg";

import { KAKAO_AUTH_URL } from "@/domains/auth/constants/url";

import LoginButton from "@/components/atoms/button/LoginButton";
import Heading1 from "@/components/atoms/typography/Heading1";
import Body1 from "@/components/atoms/typography/Body1";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="flex items-center justify-center fixed z-50 inset-0 backdrop-blur-xs bg-service-black/30">
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm px-8 py-6 space-y-10 rounded-2xl shadow-lg bg-white">
        <div className="text-center space-y-4">
          <Heading1 text="로그인" />

          <Body1 text="로그인하여 더 많은 기능을 이용해 보세요." styles={{ textColor: "text-service-gray" }} />
        </div>

        <LoginButton
          platform="카카오"
          icon={<Kakao width={20} />}
          backgroundColor="bg-kakao-primary"
          foregroundColor="text-black"
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        />
      </div>
    </div>
  );
};

export default LoginModal;
