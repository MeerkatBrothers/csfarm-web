'use client';

import { useRouter } from 'next/navigation';
import clsx from 'clsx';

import useWithdraw from '@/features/auth/hooks/useWithdraw';
import useAuthAction from '@/features/auth/hooks/useAuthAction';

import { MAX_NICKNAME_LENGHT } from '@/features/profile/constants/constraint';
import useMyProfile from '@/features/profile/hooks/useMyProfile';
import useProfileForm from '@/features/profile/hooks/useProfileForm';
import UpdateProfileButton from '@/features/profile/components/UpdateProfileButton';
import ProfileImageEditor from '@/features/profile/components/ProfileImageEditor';
import UpdateProfileSectionSkeleton from '@/features/profile/components/skeleton/UpdateProfileSectionSkeleton';

import Caption1 from '@/components/atoms/typography/Caption1';
import FormInput from '@/components/atoms/input/FormInput';
import DotLoader from '@/components/atoms/DotLoader';

const UpdateProfileSection = () => {
  const router = useRouter();

  const { data: myProfile, isLoading, isError, error } = useMyProfile();

  const { profileForm, isUploadImagePending, setNickname, uploadProfileImage } = useProfileForm({
    nickname: myProfile?.profile.nickname ?? '',
    profileImageUrl: myProfile?.profile.profileImageUrl ?? null,
  });

  const { mutate: withdraw } = useWithdraw({
    onSuccess: () => router.replace('/'),
  });

  const handleWithdraw = useAuthAction({
    action: () => {
      const confirm: boolean = window.confirm(
        '회원 탈퇴 시 농장 정보가 사라집니다.\n정말 탈퇴하시겠어요?',
      );
      if (confirm) {
        withdraw();
      }
    },
  });

  if (isLoading) {
    return <UpdateProfileSectionSkeleton />;
  }

  if (isError) {
    throw error;
  }

  if (!myProfile) {
    return null;
  }

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col items-center gap-2">
        {isUploadImagePending ? (
          <DotLoader />
        ) : (
          <ProfileImageEditor
            initialProfileImageUrl={profileForm.profileImageUrl}
            onSelect={uploadProfileImage}
          />
        )}

        <FormInput
          label="농부명"
          value={profileForm.nickname}
          maxLength={MAX_NICKNAME_LENGHT}
          placeholder="농부명을 입력해주세요."
          onChange={setNickname}
        />
      </div>

      <div className={clsx('flex flex-col gap-6', 'md:w-fit md:self-end')}>
        <UpdateProfileButton profileForm={profileForm} />

        <button onClick={handleWithdraw}>
          <Caption1 text="회원탈퇴" styles={{ color: 'text-gray-400' }} />
        </button>
      </div>
    </div>
  );
};

export default UpdateProfileSection;
