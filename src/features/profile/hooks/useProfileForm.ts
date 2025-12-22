import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import useUploadImage from '@/features/image/hooks/useUploadImage';
import { profileFormSchema, type ProfileForm } from '@/features/profile/models/profile.form';

const useProfileForm = (initialForm?: ProfileForm) => {
  const { control, formState, register, setValue, handleSubmit, reset, watch } =
    useForm<ProfileForm>({
      resolver: zodResolver(profileFormSchema),
      mode: 'onChange',
      reValidateMode: 'onChange',
      defaultValues: {
        nickname: initialForm?.nickname ?? '',
        profileImageUrl: initialForm?.profileImageUrl ?? null,
      },
    });

  const { mutate: uploadProfileImage, isPending: isUploadImagePending } = useUploadImage({
    onSuccess: (profileImageUrl) => setProfileImageUrl(profileImageUrl),
  });

  const setNickname = (nickname: string): void => {
    setValue('nickname', nickname, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const setProfileImageUrl = (profileImageUrl: string): void => {
    setValue('profileImageUrl', profileImageUrl, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return {
    control,
    formState,
    register,
    setValue,
    handleSubmit,
    reset,
    watch,
    setNickname,
    uploadProfileImage,
    isUploadImagePending,
  };
};

export default useProfileForm;
