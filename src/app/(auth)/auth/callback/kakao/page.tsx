"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { alertError } from "@/lib/utils/ui";

import useKakaoSignIn from "@/domains/auth/hooks/useKakaoSignIn";

const KakaoCallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { mutate: kakaoSignIn } = useKakaoSignIn({
    onSuccess: () => {
      router.replace("/");
    },
    onError: (error) => {
      alertError(error);

      router.replace("/");
    },
  });

  useEffect(() => {
    const kakaoCode: string | null = searchParams.get("code");
    if (kakaoCode) {
      kakaoSignIn(kakaoCode);
    }
  }, [searchParams]);

  return <div></div>;
};

export default KakaoCallbackPage;
