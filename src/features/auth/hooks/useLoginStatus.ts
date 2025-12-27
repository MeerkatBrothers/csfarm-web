import { useMemo } from 'react';

import useMyProfile from '@/features/profile/hooks/useMyProfile';

const useLoginStatus = () => {
  const { data: myProfile, isLoading } = useMyProfile();

  const isLogin = useMemo(() => !!myProfile, [myProfile]);

  return { isLogin, isLoading };
};

export default useLoginStatus;
