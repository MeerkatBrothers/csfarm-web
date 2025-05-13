import { cookies } from "next/headers";

const key: string = "refreshToken";

export const setRefreshTokenToCookie = async (token: string): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: key,
    value: token,
    path: "/",
    maxAge: 604800,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};

export const getRefreshTokenFromCookie = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(key);

  return token?.value ?? null;
};

export const deleteRefreshTokenFromCookie = async (): Promise<void> => {
  const cookieStore = await cookies();

  cookieStore.delete(key);
};
