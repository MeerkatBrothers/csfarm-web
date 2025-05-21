import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { parseQueryParam } from "@/lib/utils/parser/api";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import kakaoEmailRepo from "@/domains/auth/repositories/kakaoEmailRepo";
import kakaoTokenRepo from "@/domains/auth/repositories/kakaoTokenRepo";

export const GET = async (request: Request): Promise<NextResponse<Result<string>>> => {
  try {
    const url: URL = new URL(request.url);
    const kakaoCode: string | null = parseQueryParam(url, "code");
    if (!kakaoCode) {
      throw new UnauthorizedError();
    }

    const kakaoToken: string = await kakaoTokenRepo(kakaoCode);

    const kakaoEmail: string = await kakaoEmailRepo(kakaoToken);

    return NextResponse.json(success(kakaoEmail));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
