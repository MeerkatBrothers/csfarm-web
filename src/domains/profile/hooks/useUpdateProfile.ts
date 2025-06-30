import { useMutation, useQueryClient } from "@tanstack/react-query";

import PROFILE_QUERY_KEYS from "@/domains/profile/constants/queryKey";
import updateProfile from "@/domains/profile/usecases/updateProfile";
import { ProfileForm } from "@/domains/profile/models/fragments/profileForm";

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
