'use client';

import { useRouter } from 'next/navigation';

import useSignOut from '@/features/auth/hooks/useSignOut';

import Label1 from '@/components/atoms/typography/Label1';

const MemberMenuCard = () => {
  const router = useRouter();

  const { mutate: signOut } = useSignOut({
    onSuccess: () => router.replace('/'),
  });

  return (
    <div className="flex w-32 flex-col items-center gap-6 rounded-2xl border-2 border-gray-100 bg-white p-6">
      <button onClick={() => router.push('/profile/my')}>
        <Label1 text="마이페이지" styles={{ weight: 'font-medium' }} />
      </button>

      <button onClick={() => signOut()}>
        <Label1 text="로그아웃" styles={{ weight: 'font-medium' }} />
      </button>
    </div>
  );
};

export default MemberMenuCard;
