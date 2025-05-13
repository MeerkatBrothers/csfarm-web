import { cookies } from "next/headers";

const key: string = "accessToken";

export const setAccessTokenToCookie = async (token: string): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: key,
    value: token,
    path: "/",
    maxAge: 1800,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};

export const getAccessTokenFromCookie = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(key);

  return token?.value ?? null;
};

export const deleteAccessTokenFromCookie = async (): Promise<void> => {
  const cookieStore = await cookies();

  cookieStore.delete(key);
};
