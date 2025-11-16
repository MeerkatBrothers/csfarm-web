import { useMutation, useQueryClient } from '@tanstack/react-query';

import PROFILE_QUERY_KEYS from '@/features/profile/constants/queryKey';
import updateProfile from '@/features/profile/usecases/updateProfile';
import { type ProfileForm } from '@/features/profile/models/profileForm';

interface UseModifyProfileParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useUpdateProfile = ({ onSuccess, onError }: UseModifyProfileParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profileForm: ProfileForm) => await updateProfile(profileForm),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROFILE_QUERY_KEYS.MY });

      onSuccess?.();
    },
    onError,
  });
};

export default useUpdateProfile;
