import { useMemo } from "react";

import useMyProfile from "@/domains/profile/hooks/useMyProfile";

const useIsLogin = () => {
  const { data: myProfile, isLoading } = useMyProfile();

  const isLogin: boolean = useMemo(() => !!myProfile, [myProfile]);

  return { isLogin, isLoading };
};

export default useIsLogin;
