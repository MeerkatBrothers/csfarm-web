"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { alertError } from "@/lib/utils/ui";

import useKakaoSignIn from "@/domains/auth/hooks/useKakaoSignIn";

const KakaoCallbackPage = () => {
  const searchParams = useSearchParams();

  const router = useRouter();

  const { mutate: kakaoSignIn } = useKakaoSignIn({
    onSuccess: () => router.replace("/"),
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
  }, [searchParams, kakaoSignIn]);

  return <div></div>;
};

export default KakaoCallbackPage;
