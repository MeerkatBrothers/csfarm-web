import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { parseQueryParam } from '@/shared/utils/parser/url';
import InvalidParamError from '@/shared/errors/client/invalid-param-error';

import fetchKakaoToken from '@/features/auth/api/server/fetch-kakao-token';
import fetchKakaoAccount from '@/features/auth/api/server/fetch-kakao-account';

const kakaoEmailHandler = async (request: NextRequest): Promise<string> => {
  const url = new URL(request.url);
  const kakaoCode = parseQueryParam(url, 'code');
  if (!kakaoCode) throw new InvalidParamError();

  const kakaoToken = await fetchKakaoToken(kakaoCode);
  const kakaoAccessToken = kakaoToken.access_token;

  const kakaoAccount = await fetchKakaoAccount(kakaoAccessToken);

  return kakaoAccount.kakao_account.email;
};

export const GET = createBffHandler(kakaoEmailHandler);
