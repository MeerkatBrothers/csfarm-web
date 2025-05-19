"use client";

import { useRouter } from "next/navigation";

import { alertError } from "@/lib/utils/ui";

import useKakaoAuth from "@/domains/auth/hooks/useKakaoAuth";

const KakaoCallbackPage = () => {
  const router = useRouter();

  useKakaoAuth({
    onSuccess: () => {
      router.replace("/");
    },
    onError: (error) => {
      alertError(error);

      router.replace("/");
    },
  });

  return <div></div>;
};

export default KakaoCallbackPage;
