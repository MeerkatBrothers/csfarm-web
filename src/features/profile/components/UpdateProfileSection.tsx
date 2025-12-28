'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { cn } from '@/shared/utils/cn';

import useWithdraw from '@/features/auth/hooks/useWithdraw';
import useAuthAction from '@/features/auth/hooks/useAuthAction';

import { MAX_NICKNAME_LENGHT } from '@/features/profile/constants/constraint';
import useMyProfile from '@/features/profile/hooks/useMyProfile';
import useProfileForm from '@/features/profile/hooks/useProfileForm';
import useUpdateProfile from '@/features/profile/hooks/useUpdateProfile';
import ProfileImageEditor from '@/features/profile/components/ProfileImageEditor';
import UpdateProfileSectionSkeleton from '@/features/profile/components/skeleton/UpdateProfileSectionSkeleton';

import PrimaryButton from '@/components/atoms/button/PrimaryButton';
import FormInput from '@/components/atoms/input/FormInput';
import DotLoader from '@/components/atoms/DotLoader';
import Caption from '@/components/atoms/typography/Caption';

const UpdateProfileSection = () => {
  const router = useRouter();

  const { data: myProfile, isLoading, isError, error } = useMyProfile();

  const { profileForm, isUploadImagePending, register, uploadProfileImage, handleSubmit } =
    useProfileForm({
      nickname: myProfile?.nickname ?? '',
      profileImageUrl: myProfile?.profileImageUrl ?? null,
    });

  const { mutate: updateProfile, isPending: isUpdateProfilePending } = useUpdateProfile({
    onSuccess: () => {
      toast.success('프로필이 변경되었어요.');

      router.back();
    },
  });

  const { mutate: withdraw } = useWithdraw({
    onSuccess: () => {
      toast.success('탈퇴가 완료되었어요.');

      router.replace('/');
    },
  });

  const handleUpdateProfile = useAuthAction({
    action: handleSubmit((form) => updateProfile(form)),
  });

  const handleWithdraw = useAuthAction({
    action: () => {
      const confirm = window.confirm('회원 탈퇴 시 농장 정보가 사라집니다.\n정말 탈퇴하시겠어요?');
      if (confirm) withdraw();
    },
  });

  if (isLoading) return <UpdateProfileSectionSkeleton />;
  if (isError) throw error;
  if (!myProfile) return null;

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
          maxLength={MAX_NICKNAME_LENGHT}
          placeholder="농부명을 입력해주세요."
          {...register('nickname')}
        />
      </div>

      <div className={cn('flex flex-col gap-6', 'md:w-fit md:self-end')}>
        {isUpdateProfilePending ? (
          <DotLoader />
        ) : (
          <PrimaryButton
            label="변경하기"
            type="submit"
            disabled={profileForm.nickname.length === 0 || isUploadImagePending}
            onClick={handleUpdateProfile}
          />
        )}
        <button onClick={handleWithdraw}>
          <Caption text="회원탈퇴" scale={1} styles={{ color: 'text-gray-400' }} />
        </button>
      </div>
    </div>
  );
};

export default UpdateProfileSection;
