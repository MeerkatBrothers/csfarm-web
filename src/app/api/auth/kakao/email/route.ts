import { NextRequest } from 'next/server';

import { parseQueryParam } from '@/lib/utils/parser/api';
import { createBffHandler } from '@/lib/bff/handler';
import BadRequestError from '@/lib/errors/http/badRequestError';

import kakaoTokenDatasource from '@/features/auth/datasources/kakaoTokenDatasource';
import kakaoAccountDatasource from '@/features/auth/datasources/kakaoAccountDatasource';

const kakaoEmailHandler = async (request: NextRequest): Promise<string> => {
  const url = new URL(request.url);
  const kakaoCode = parseQueryParam(url, 'code');
  if (!kakaoCode) {
    throw new BadRequestError();
  }

  const kakaoTokenResponse = await kakaoTokenDatasource(kakaoCode);
  const kakaoToken = kakaoTokenResponse.access_token;

  const kakaoAccountResponse = await kakaoAccountDatasource(kakaoToken);
  const kakaoEmail = kakaoAccountResponse.kakao_account.email;

  return kakaoEmail;
};

export const GET = createBffHandler(kakaoEmailHandler);
