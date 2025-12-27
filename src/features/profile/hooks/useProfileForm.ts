import { useEffect } from 'react';
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
        nickname: '',
        profileImageUrl: null,
      },
    });

  const { mutate: uploadProfileImage, isPending: isUploadImagePending } = useUploadImage({
    onSuccess: (profileImageUrl) => setProfileImageUrl(profileImageUrl),
  });

  useEffect(() => {
    reset({
      nickname: initialForm?.nickname ?? '',
      profileImageUrl: initialForm?.profileImageUrl ?? null,
    });
  }, [initialForm?.nickname, initialForm?.profileImageUrl, reset]);

  const profileForm = watch();

  const setProfileImageUrl = (profileImageUrl: string): void => {
    setValue('profileImageUrl', profileImageUrl, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return {
    control,
    formState,
    profileForm,
    isUploadImagePending,
    register,
    uploadProfileImage,
    reset,
    handleSubmit,
  };
};

export default useProfileForm;
