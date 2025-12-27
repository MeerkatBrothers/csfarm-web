'use client';

import Kakao from '@/assets/svgs/kakao.svg';

import { cn } from '@/shared/utils/cn';

import { KAKAO_AUTH_URL } from '@/features/auth/constants/url';

import LoginButton from '@/components/atoms/button/LoginButton';
import Title from '@/components/atoms/typography/Title';
import Body from '@/components/atoms/typography/Body';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs"
    >
      <div
        className={cn('flex w-xs flex-col gap-10 rounded-2xl bg-white p-6 shadow-lg', 'md:w-sm')}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-4 text-center">
          <Title text="로그인" scale={3} />

          <Body
            text="로그인하여 더 많은 기능을 이용해 보세요."
            scale={1}
            styles={{ color: 'text-gray-400' }}
          />
        </div>

        <LoginButton
          platformName="카카오"
          icon={<Kakao width={20} />}
          backgroundColor="bg-kakao-primary"
          foregroundColor="text-black"
          onClick={() => (window.location.href = KAKAO_AUTH_URL)}
        />
      </div>
    </div>
  );
};

export default LoginModal;
