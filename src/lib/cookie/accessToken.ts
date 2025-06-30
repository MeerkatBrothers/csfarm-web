import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const key: string = "csfarm:access-token";

export const getAccessTokenFromCookie = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(key);

  return token?.value ?? null;
};

export const setAccessTokenToCookie = (response: NextResponse, token: string): void => {
  response.cookies.set({
    name: key,
    value: token,
    path: "/api",
    maxAge: 1800,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};

export const deleteAccessTokenFromCookie = (response: NextResponse): void => {
  response.cookies.set({
    name: key,
    value: "",
    path: "/api",
    maxAge: 0,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};
