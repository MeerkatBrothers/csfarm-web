"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import PROFILE_QUERY_KEYS from "@/domains/profile/constants/queryKey";
import modifyProfile from "@/domains/profile/usecases/modifyProfile";
import { ProfileForm } from "@/domains/profile/models/fragments/profileForm";

interface UseModifyProfileParams {
  onSuccess?: () => void;
  onError?: (error: Error, profileForm: ProfileForm) => void;
}

const useModifyProfile = ({ onSuccess, onError }: UseModifyProfileParams) => {
  const queryClient = useQueryClient();

  const invalidateMyProfileCache = (): void => {
    queryClient.invalidateQueries({ queryKey: PROFILE_QUERY_KEYS.MY });
  };

  return useMutation({
    mutationFn: async (profileForm: ProfileForm) => {
      await modifyProfile(profileForm);
    },
    onSuccess: () => {
      invalidateMyProfileCache();

      onSuccess?.();
    },
    onError: (error, profileForm) => {
      onError?.(error, profileForm);
    },
  });
};

export default useModifyProfile;
