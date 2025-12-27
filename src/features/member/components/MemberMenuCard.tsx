'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import useSignOut from '@/features/auth/hooks/useSignOut';

import Label from '@/components/atoms/typography/Label';

const MemberMenuCard = () => {
  const router = useRouter();

  const { mutate: signOut } = useSignOut({
    onSuccess: () => {
      toast.success('로그아웃 되었어요.');

      router.replace('/');
    },
  });

  return (
    <div className="flex w-32 flex-col items-center gap-6 rounded-2xl border-2 border-gray-100 bg-white p-6">
      <button onClick={() => router.push('/profile/my')}>
        <Label text="마이페이지" scale={1} styles={{ weight: 'font-medium' }} />
      </button>

      <button onClick={() => signOut()}>
        <Label text="로그아웃" scale={1} styles={{ weight: 'font-medium' }} />
      </button>
    </div>
  );
};

export default MemberMenuCard;
