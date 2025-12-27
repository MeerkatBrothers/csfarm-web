'use client';

import { useRouter } from 'next/navigation';

import useLoginStatus from '@/features/auth/hooks/useLoginStatus';
import useLoginModal from '@/features/auth/hooks/useLoginModal';
import useSignOut from '@/features/auth/hooks/useSignOut';

import NavLinker from '@/components/atoms/NavLinker';

const NavAuthSection = () => {
  const router = useRouter();

  const { isLogin, isLoading } = useLoginStatus();

  const { open } = useLoginModal();

  const { mutate: signOut } = useSignOut({
    onSuccess: () => router.replace('/'),
  });

  if (isLoading) return null;

  return (
    <>
      {isLogin ? (
        <NavLinker label="로그아웃" isActive={false} onClick={signOut} />
      ) : (
        <NavLinker label="로그인" isActive={false} onClick={open} />
      )}
    </>
  );
};

export default NavAuthSection;
