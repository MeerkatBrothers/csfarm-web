import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import useUploadImage from '@/features/image/hooks/useUploadImage';
import { profileFormSchema, type ProfileForm } from '@/features/profile/models/profileForm';

const useProfileForm = (initialProfileForm: ProfileForm) => {
  const { register, handleSubmit, setValue, reset, formState, watch, control } =
    useForm<ProfileForm>({
      resolver: zodResolver(profileFormSchema),
      defaultValues: initialProfileForm,
    });

  useEffect(() => {
    reset(initialProfileForm);
  }, [initialProfileForm, reset]);

  const setNickname = (nickname: string): void => {
    setValue('nickname', nickname, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const { mutate: uploadProfileImage, isPending: isUploadImagePending } = useUploadImage({
    onSuccess: (profileImageUrl: string) => {
      setValue('profileImageUrl', profileImageUrl, {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
  });

  return {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    control,
    formState,
    setNickname,
    uploadProfileImage,
    isUploadImagePending,
  };
};

export default useProfileForm;
