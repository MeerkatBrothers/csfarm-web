'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import useKakaoSignIn from '@/features/auth/hooks/useKakaoSignIn';

const KakaoCallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { mutate: kakaoSignIn } = useKakaoSignIn({
    onSuccess: () => router.replace('/'),
    onError: () => router.replace('/'),
  });

  useEffect(() => {
    const kakaoCode = searchParams.get('code');
    if (kakaoCode) kakaoSignIn(kakaoCode);
  }, [searchParams, kakaoSignIn]);

  return <div></div>;
};

export default KakaoCallbackPage;
