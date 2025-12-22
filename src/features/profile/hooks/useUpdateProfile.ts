import { useMutation, useQueryClient } from '@tanstack/react-query';

import { validateOrThrow } from '@/shared/utils/zod';
import ResultError from '@/shared/errors/client/result-error';

import PROFILE_QUERY_KEYS from '@/features/profile/constants/query-key';
import updateProfile from '@/features/profile/apis/bff/update-profile';
import { profileFormSchema, type ProfileForm } from '@/features/profile/models/profile.form';

interface UseModifyProfileParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useUpdateProfile = ({ onSuccess, onError }: UseModifyProfileParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profileForm: ProfileForm) => {
      const validatedForm = validateOrThrow(profileFormSchema, profileForm);

      const result = await updateProfile(validatedForm);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROFILE_QUERY_KEYS.MY });

      onSuccess?.();
    },
    onError,
  });
};

export default useUpdateProfile;
