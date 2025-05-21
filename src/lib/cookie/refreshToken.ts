import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const key: string = "csfarm:refresh-token";

export const getRefreshTokenFromCookie = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(key);

  return token?.value ?? null;
};

export const setRefreshTokenToCookie = (response: NextResponse, token: string): void => {
  response.cookies.set({
    name: key,
    value: token,
    path: "/",
    maxAge: 604800,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};

export const deleteRefreshTokenFromCookie = (response: NextResponse): void => {
  response.cookies.delete(key);
};
