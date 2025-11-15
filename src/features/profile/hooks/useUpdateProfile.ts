import { useMutation, useQueryClient } from '@tanstack/react-query';

import PROFILE_QUERY_KEYS from '@/features/profile/constants/queryKey';
import updateProfile from '@/features/profile/usecases/updateProfile';
import { ProfileForm } from '@/features/profile/models/fragments/profileForm';

interface UseModifyProfileParams {
  onSuccess?: () => void;
}

const useUpdateProfile = ({ onSuccess }: UseModifyProfileParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profileForm: ProfileForm) => await updateProfile(profileForm),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROFILE_QUERY_KEYS.MY });

      onSuccess?.();
    },
  });
};

export default useUpdateProfile;
