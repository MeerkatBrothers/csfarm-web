'use client';

import clsx from 'clsx';

import Kakao from '@/../public/svgs/kakao.svg';

import { KAKAO_AUTH_URL } from '@/features/auth/constants/url';

import Title3 from '@/components/atoms/typography/Title3';
import Body1 from '@/components/atoms/typography/Body1';
import LoginButton from '@/components/atoms/button/LoginButton';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs"
    >
      <div
        className={clsx('flex w-xs flex-col gap-10 rounded-2xl bg-white p-6 shadow-lg', 'md:w-sm')}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-4 text-center">
          <Title3 text="로그인" />

          <Body1
            text="로그인하여 더 많은 기능을 이용해 보세요."
            styles={{ color: 'text-gray-400' }}
          />
        </div>

        <LoginButton
          platform="카카오"
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
